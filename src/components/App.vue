<template>
  <div>
    <h1>{{greeting}}</h1>
    <h2>{{test.foo}}</h2>
  </div>
</template>

<script>
class Test {
  constructor() {
    this.foo = 'bar'
  }
}
export default {
  data() {
    return {
      greeting: 'Hello, World!',
      test: function() {
        let test = new Test()
        return test;
      }()
    }
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>