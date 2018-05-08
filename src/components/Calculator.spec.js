import { mount, createLocalVue } from '@vue/test-utils'
import Calculator, {CalculatorThing} from './Calculator.vue'

test('Calculator has .calculator-container', () => {
  const vue = createLocalVue()
  const component = mount(Calculator, { vue })
  expect(component.classes()).toContain('calculator-container')
})

describe('Calculator can handlePress', () => {
  let vue
  let component
  beforeEach(() => {
    vue = createLocalVue()
    component = mount(Calculator, { vue })
  })
  test('shows 0', () => {
    expect(component.vm.displayValue).toEqual('0')
  })
  describe('decimal entry', () => {
    test('.', () => {
      component.vm.handlePress('.')
      expect(component.vm.displayValue).toEqual('0.')
    })
    test('. .', () => {
      component.vm.handlePress('.')
      component.vm.handlePress('.')
      expect(component.vm.displayValue).toEqual('0.')
    })
    test('1.', () => {
      component.vm.handlePress(1)
      component.vm.handlePress('.')
      expect(component.vm.displayValue).toEqual('1.')
    })
    test('1.1', () => {
      component.vm.handlePress(1)
      component.vm.handlePress('.')
      component.vm.handlePress(1)
      expect(component.vm.displayValue).toEqual('1.1')
    })
    test('1.1.', () => {
      component.vm.handlePress(1)
      component.vm.handlePress('.')
      component.vm.handlePress(1)
      component.vm.handlePress('.')
      expect(component.vm.displayValue).toEqual('1.1')
    })
  })
  describe('number entry', () => {
    test('1', () => {
      component.vm.handlePress(1)
      expect(component.vm.displayValue).toEqual('1')
    })
    test('1 5', () => {
      component.vm.handlePress(1)
      component.vm.handlePress(5)
      expect(component.vm.displayValue).toEqual('15')
    })
  })
  describe('clearing', () => {
    test('1, AC', () => {
      component.vm.handlePress(1)
      component.vm.handlePress('AC')
      expect(component.vm.displayValue).toEqual('0')
    })
  })
  describe('basic sums', () => {
    test('1 + 1 = 2', () => {
      component.vm.handlePress(1)
      component.vm.handlePress('+')
      component.vm.handlePress(1)
      component.vm.handlePress('=')
      expect(component.vm.displayValue).toEqual('2')
    })
    test('1 + 1.5 = 2.5', () => {
      component.vm.handlePress(1)
      component.vm.handlePress('+')
      component.vm.handlePress(1)
      component.vm.handlePress('.')
      component.vm.handlePress(5)
      component.vm.handlePress('=')
      expect(component.vm.displayValue).toEqual('2.5')
    })
    test('2 * 5 = 10', () => {
      component.vm.handlePress(2)
      component.vm.handlePress('*')
      component.vm.handlePress(5)
      component.vm.handlePress('=')
      expect(component.vm.displayValue).toEqual('10')
    })
    test('10 / 4 = 2.5', () => {
      component.vm.handlePress(1)
      component.vm.handlePress(0)
      component.vm.handlePress('/')
      component.vm.handlePress(4)
      component.vm.handlePress('=')
      expect(component.vm.displayValue).toEqual('2.5')
    })
  })
  describe('state transitions', () => {
    test('+ 4 =', () => {
      component.vm.handlePress('+')
      component.vm.handlePress(4)
      component.vm.handlePress('=')
      expect(component.vm.displayValue).toEqual('4')
    })
    test('0 + 4 =', () => {
      component.vm.handlePress(0)
      component.vm.handlePress('+')
      component.vm.handlePress(4)
      component.vm.handlePress('=')
      expect(component.vm.displayValue).toEqual('4')
    })
    test('+ 4 = =', () => {
      component.vm.handlePress('+')
      component.vm.handlePress(4)
      component.vm.handlePress('=')
      expect(component.vm.displayValue).toEqual('4')
      component.vm.handlePress('=')
      expect(component.vm.displayValue).toEqual('8')
    })
    test('2 * 5 + 4 = 14', () => {
      component.vm.handlePress(2)
      component.vm.handlePress('*')
      component.vm.handlePress(5)
      component.vm.handlePress('+')
      component.vm.handlePress(4)
      component.vm.handlePress('=')
      expect(component.vm.displayValue).toEqual('14')
    })
    test('2 * 4 = , 2', () => {
      component.vm.handlePress(2)
      component.vm.handlePress('*')
      component.vm.handlePress(4)
      component.vm.handlePress('=')
      component.vm.handlePress(2)
      expect(component.vm.displayValue).toEqual('2')
    })
    test('1 * 4 = 4, 2 + 5 = 7', () => {
      component.vm.handlePress(1)
      component.vm.handlePress('*')
      component.vm.handlePress(4)
      component.vm.handlePress('=')
      expect(component.vm.displayValue).toEqual('4')
      component.vm.handlePress(2)
      expect(component.vm.displayValue).toEqual('2')
      component.vm.handlePress('+')
      expect(component.vm.displayValue).toEqual('2')
      component.vm.handlePress(5)
      expect(component.vm.displayValue).toEqual('5')
      component.vm.handlePress('=')
      expect(component.vm.displayValue).toEqual('7')
    })
  })
})

describe('Calculator functionality', () => {
  let calculator
  beforeEach(() => {
    calculator = new CalculatorThing()
  })

  test('Calculator starts with 0', () => {
    calculator.addInput(1)
    calculator.equals()
    expect(calculator.displayValue).toEqual('1')
  })

  test('Calculator can append numbers', () => {
    calculator.addInput(1)
    calculator.addInput(2)
    calculator.addInput(3)
    expect(calculator.displayValue).toEqual('123')
  })

  test('Calculator can clear', () => {
    calculator.addInput(1)
    calculator.cancel()
    expect(calculator.displayValue).toEqual('0')
  })

  test('Pressing equals does nothing without an op', () => {
    calculator.addInput(1)
    calculator.equals()
    expect(calculator.displayValue).toEqual('1')
  })

  test('Calculator can add numbers', () => {
    calculator.addInput(1)
    calculator.addOp('+')
    calculator.addInput(9)
    calculator.equals()
    expect(calculator.displayValue).toEqual('10')
  })

  test('Calculator can subtract numbers', () => {
    calculator.addInput(5)
    calculator.addOp('-')
    calculator.addInput(3)
    calculator.equals()
    expect(calculator.displayValue).toEqual('2')
  })

  test('Calculator can multiply numbers', () => {
    calculator.addInput(1)
    calculator.addInput(2)
    calculator.addOp('*')
    calculator.addInput(2)
    calculator.equals()
    expect(calculator.displayValue).toEqual('24')
  })

  test('Calculator can divide numbers', () => {
    calculator.addInput(6)
    calculator.addOp('/')
    calculator.addInput(2)
    calculator.equals()
    expect(calculator.displayValue).toEqual('3')
  })

  test('Calculator can add numbers after equals', () => {
    calculator.addInput(1)
    calculator.addOp('+')
    calculator.addInput(4)
    calculator.addOp('+')
    calculator.addInput(5)
    calculator.equals()
    expect(calculator.displayValue).toEqual('10')
  })

  test('Calculator can enter decimals', () => {
    calculator.addInput(1)
    calculator.addInput('.')
    calculator.addInput(1)
    expect(calculator.displayValue).toEqual('1.1')
  })

  test('Calculator lets 1. = 1', () => {
    calculator.addInput(1)
    calculator.addInput('.')
    calculator.equals()
    expect(calculator.displayValue).toEqual('1')
  })

  // test('Calculator can add easy decimals', () => {
  //   calculator.addInput(0)
  //   calculator.addInput('.')
  //   calculator.addInput(2)
  //   calculator.addInput(5)
  //   calculator.addOp('+')
  //   calculator.addInput(0)
  //   calculator.addInput('.')
  //   calculator.addInput(5)
  //   calculator.equals()
  //   expect(calculator.displayValue).toEqual('0.75')
  // })

  // test('Calculator can add harder decimals', () => {
  //   calculator.addInput(0)
  //   calculator.addInput('.')
  //   calculator.addInput(2)
  //   calculator.addOp('+')
  //   calculator.addInput(0)
  //   calculator.addInput('.')
  //   calculator.addInput(1)
  //   calculator.equals()
  //   expect(calculator.displayValue).toEqual('0.3')
  // })
})
