import { mount, createLocalVue } from '@vue/test-utils'
import App from './App'

test('App has .test-class', () => {
  const vue = createLocalVue()
  const app = mount(App, { vue })
  expect(app.classes()).toContain('test-class')
})

test('App has greeting data', () => {
  const vue = createLocalVue()
  const app = mount(App, { vue })
  expect(app.vm.greeting).toEqual('Hello, World!')
})