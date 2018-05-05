import { mount, createLocalVue } from '@vue/test-utils'
import {CalculatorThing} from './Calculator.vue'

let calculator
beforeEach(() => {
  calculator = new CalculatorThing()
})

test('Calculator starts with 0', () => {
  calculator.appendNumber(1)
  calculator.equals()
  expect(calculator.current).toEqual('1')
})

test('Calculator can append numbers', () => {
  calculator.appendNumber(1)
  calculator.appendNumber(2)
  calculator.appendNumber(3)
  expect(calculator.current).toEqual('123')
})

test('Calculator can clear', () => {
  calculator.appendNumber(1)
  calculator.cancel()
  expect(calculator.current).toEqual('0')
})

test('Pressing equals does nothing without an op', () => {
  calculator.appendNumber(1)
  calculator.equals()
  expect(calculator.current).toEqual('1')
})

test('Calculator can add numbers', () => {
  calculator.appendNumber(1)
  calculator.doOp('+')
  calculator.appendNumber(9)
  calculator.equals()
  expect(calculator.current).toEqual('10')
})

test('Calculator can subtract numbers', () => {
  calculator.appendNumber(5)
  calculator.doOp('-')
  calculator.appendNumber(3)
  calculator.equals()
  expect(calculator.current).toEqual('2')
})

test('Calculator can multiply numbers', () => {
  calculator.appendNumber(1)
  calculator.appendNumber(2)
  calculator.doOp('*')
  calculator.appendNumber(2)
  calculator.equals()
  expect(calculator.current).toEqual('24')
})

test('Calculator can divide numbers', () => {
  calculator.appendNumber(6)
  calculator.doOp('/')
  calculator.appendNumber(2)
  calculator.equals()
  expect(calculator.current).toEqual('3')
})

test('Calculator can add numbers after equals', () => {
  calculator.appendNumber(1)
  calculator.doOp('+')
  calculator.appendNumber(4)
  calculator.equals()
  calculator.doOp('+')
  calculator.appendNumber(5)
  calculator.equals()
  expect(calculator.current).toEqual('10')
})

test('Calculator can enter decimals', () => {
  calculator.appendNumber(1)
  calculator.appendNumber('.')
  calculator.appendNumber(1)
  expect(calculator.current).toEqual('1.1')
})

test('Calculator lets 1. = 1', () => {
  calculator.appendNumber(1)
  calculator.appendNumber('.')
  calculator.equals()
  expect(calculator.current).toEqual('1')
})

// test('Calculator can add decimals', () => {
//   calculator.appendNumber(1)
//   calculator.appendNumber('.')
//   calculator.appendNumber(1)
//   calculator.doOp('+')
//   calculator.appendNumber(2)
//   calculator.appendNumber('.')
//   calculator.appendNumber(2)
//   calculator.equals()
//   expect(calculator.current).toEqual('3.3')
// })
