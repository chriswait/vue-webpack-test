<template>
  <div class="day">
    {{ number }}
  </div>
</template>

<script>
export default {
  name: 'CalendarDay',
  props: {
    id: {
      type: Number,
      default: 0
    },
    number: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.day {
  border: var(--day-border);
  padding-top: 6px;
  padding-right: var(--block-small);
  text-align: right;
}
</style>
