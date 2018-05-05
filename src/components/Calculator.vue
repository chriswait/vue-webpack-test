<template>
  <div>
    <div class="calculator-container">
      <div class="screen">{{ displayValue }}</div>

      <button
        class="calculator-button top-row"
        @click="handlePress('AC')">AC</button>
      <button
        class="calculator-button top-row"
        @click="handlePress('&PlusMinus;')">&PlusMinus;</button>
      <button
        class="calculator-button top-row"
        @click="handlePress('&percnt;')">&percnt;</button>
      <button
        class="calculator-button operator"
        @click="handlePress('&divide;')">&divide;</button>
      <button
        class="calculator-button"
        @click="handlePress(7)">7</button>
      <button
        class="calculator-button"
        @click="handlePress(8)">8</button>
      <button
        class="calculator-button"
        @click="handlePress(9)">9</button>
      <button
        class="calculator-button operator"
        @click="handlePress('&times;')">&times;</button>
      <button
        class="calculator-button"
        @click="handlePress(4)">4</button>
      <button
        class="calculator-button"
        @click="handlePress(5)">5</button>
      <button
        class="calculator-button"
        @click="handlePress(6)">6</button>
      <button
        class="calculator-button operator"
        @click="handlePress('&minus;')">&minus;</button>
      <button
        class="calculator-button"
        @click="handlePress(1)">1</button>
      <button
        class="calculator-button"
        @click="handlePress(2)">2</button>
      <button
        class="calculator-button"
        @click="handlePress(3)">3</button>
      <button
        class="calculator-button operator"
        @click="handlePress('&plus;')">&plus;</button>
      <button
        class="calculator-button zero"
        @click="handlePress(0)">0</button>
      <button
        class="calculator-button"
        @click="handlePress('.')">.</button>
      <button
        class="calculator-button operator"
        @click="handlePress('&equals;')">&equals;</button>
    </div>
  </div>
</template>

<script>
export class CalculatorThing {
  constructor () {
    this.allCancel()
  }
  appendNumber (number) {
    if (this.current === '0') {
      this.current = number.toString()
    } else {
      this.current += number.toString()
    }
    return this.current
  }
  doOp (operator) {
    if (this.currentOperator === operator) {
    } else {
    }
    this.currentOperator = operator
    this.left = this.current
    this.current = '0'
    return this.current
  }
  equals () {
    let result
    if (!this.currentOperator) {
      result = parseFloat(this.current)
    } else if (this.currentOperator === '+') {
      result = parseFloat(this.left) + parseFloat(this.current)
    } else if (this.currentOperator === '-') {
      result = parseFloat(this.left) - parseFloat(this.current)
    } else if (this.currentOperator === '*') {
      result = parseFloat(this.left) * parseFloat(this.current)
    } else if (this.currentOperator === '/') {
      result = parseFloat(this.left) / parseFloat(this.current)
    }
    if (typeof (result) !== 'undefined') {
      this.current = result.toString()
    }
    return this.current
  }
  allCancel () {
    this.left = ''
    this.cancel()
    this.currentOperator = ''
  }
  cancel () {
    this.current = '0'
  }
}
const entityToOp = {
  '&plus;': '+',
  '&minus;': '-',
  '&times;': '*',
  '&divide;': '/',
  '&equals;': '='
}
export default {
  data: function () {
    return {
      displayValue: this.calculator.current
    }
  },
  beforeCreate: function () {
    this.calculator = new CalculatorThing()
  },
  methods: {
    handlePress: function (pressed) {
      if (typeof (pressed) === 'number' || pressed === '.') {
        this.displayValue = this.calculator.appendNumber(pressed)
      } else if (entityToOp[pressed] === '=') {
        this.displayValue = this.calculator.equals()
      } else {
        this.displayValue = this.calculator.doOp(entityToOp[pressed])
      }
    }
  }
}
</script>

<style scoped>
button {
  font-size: inherit;
  font-family: inherit;
  padding: 0;
  outline: inherit;
  border: 0;
}
.calculator-container {
  --button-width: 57px;
  --button-height: 48px;
  --orange: #f5923e;
  --orange-pressed: #bd6821;
  --grey-dark: #8f8e8e;
  --grey-mid: #d6d6d6;
  --grey-mid-pressed: #a9a9a9;
  --grey-light: #e0e0e0;
  --grey-light-pressed: #a09fa0;
  --text-dark: black;
  --text-light: white;
  --stroke: #8e8e8e;
  --border: 1px solid var(--stroke);
  --radius: 3px;

  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;
  font-size: 20px;

  display: grid;
  width: calc(var(--button-width) * 4);
  grid-template-columns: repeat(4, var(--button-width));
  grid-template-rows: 80px repeat(5, var(--button-height));
  border-top: var(--border);
  border-left: var(--border);
  border-radius: var(--radius);
}
.screen {
  grid-column-start: 1;
  grid-column-end: 5;
  border-bottom: var(--border);
  border-right: var(--border);
  background-color: var(--grey-dark);
  color: white;
  line-height: 100px;
  font-size: 40px;
  text-align: right;
  padding-right: 16px;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
}

.calculator-button {
  border-bottom: var(--border);
  border-right: var(--border);
  background-color: var(--grey-light);
  line-height: var(--button-height);
  text-align: center;
  cursor: pointer;
}
.calculator-button:active {
  background-color: var(--grey-light-pressed);
}
.calculator-button:last-child {
  border-bottom-right-radius: var(--radius);
}
.zero {
  grid-column-start: 1;
  grid-column-end: 3;
  text-align: left;
  padding-left: 22px;
  border-bottom-left-radius: var(--radius);
}
.operator {
  color: white;
  background-color: var(--orange);
}
.operator:active {
  color: var(--grey-light-pressed);
  background-color: var(--orange-pressed);
}

.top-row {
  background-color: var(--grey-mid);
}
.top-row:active {
  background-color: var(--grey-mid-pressed);
}
</style>
