<template>
  <div class="day">
    <div class="date">
      {{ number }}
    </div>
    <div class="events">
      <div
        v-for="(event, index) of events"
        :key="index"
        class="event">
        {{ event.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarDay',
  props: {
    moment: {
      type: Object,
      default: null
    },
    events: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    number: function () {
      return this.moment.date()
    }
  }
}
</script>

<style scoped>
.day {
  --day-border: 1px solid var(--stroke-light);
  border: var(--day-border);
  padding: 5%;
}
.date {
  text-align: right;
}
</style>
