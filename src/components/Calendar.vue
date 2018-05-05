<template>
  <div class="app-container">
    <div class="app-header">
      <div class="header-left">
        <button>&plus;</button>
      </div>
      <div class="header-center">
        <button>Day</button>
        <button>Week</button>
        <button>Month</button>
        <button>Year</button>
      </div>
      <div class="header-right">
        <input placeholder="&#x1F50D; search">
      </div>
    </div>
    <div class="calendar-container">
      <div class="sidebar">
        <ul class="sidebar-calendars">
          <ul class="account">
            <li class="account-name">iCloud</li>
            <li class="calendar-name">Home</li>
            <li class="calendar-name">Work</li>
          </ul>
          <ul class="account">
            <li class="account-name">Google</li>
            <li class="calendar-name">Home</li>
            <li class="calendar-name">Work</li>
          </ul>
        </ul>
        <div class="sidebar-months">
          months
        </div>
      </div>
      <div class="month-container">
        <div class="days-header">
          <div class="days-header-left">
            <span class="days-header-month">April</span>
            <span class="days-header-Year">2018</span>
          </div>
          <div class="days-header-left">
            <button>&lt;</button>
            <button>Today</button>
            <button>&gt;</button>
          </div>
        </div>
        <div class="days-container">
          <div class="day-name">Sun</div>
          <div class="day-name">Mon</div>
          <div class="day-name">Tue</div>
          <div class="day-name">Wed</div>
          <div class="day-name">Thu</div>
          <div class="day-name">Fri</div>
          <div class="day-name">Sat</div>

          <calendar-day
            v-for="(day, index) in days"
            v-bind="day"
            :key="index"
            class="day"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarDay from './CalendarDay.vue'
import moment from 'moment'

const NUM_WEEKS = 6

export default {
  components: {
    'calendar-day': CalendarDay
  },
  data () {
    return {
      startDateMoment: moment('2018-04-01')
    }
  },
  computed: {
    days: function () {
      let calDays = []
      for (let i = 0; i < 7 * NUM_WEEKS; i++) {
        calDays.push({
          moment: this.startDateMoment.clone().add(i, 'day'),
          events: [{name: 'test'}, {name: 'test'}]
        })
      }
      return calDays
    }
  }
}
</script>

<style scoped>
.app-container {
  --header-gradient-top: #f4f2f4;
  --header-gradient-bottom: #ccc9cc;
  --header-border-bottom: #a6a5a6;
  --stroke-light: #e2e1e2;
  --stroke-dark: #e2e1e2;
  --sidebar-background: #f4f4f4;
  --day-weekend-background: #f3f3f3;
  --small: 13px;
  --large: 24px;
  --block-small: 12px;

  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;

  height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(var(--header-gradient-top), var(--header-gradient-bottom));
  border-bottom: 1px solid var(--header-border-bottom);
  height: 38px;
  padding: 0px var(--block-small);
}

.calendar-container {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
}

.sidebar {
  width: 200px;
  background-color: var(--sidebar-background);
  display: flex;
  flex-direction: column;
}
.sidebar-calendars {
  flex-grow: 1;
  overflow-y: scroll;
  padding: 8px 6px;
}
.account {
  padding-bottom: 8px;
}
.account-name {
  font-size: var(--small);
}
.calendar-name {
  padding-left: 11px;
}
.sidebar-months {
  border-top: 1px solid var(--stroke-light);
  height: 164px;
}

.month-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.days-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  font-size: var(--large);
  padding: 0px var(--block-small);
}
.days-header-month {
  font-weight: 600;
}
.days-header-year {
  font-weight: 100;
}

.days-container {
  flex-grow: 1;
  height: 1px; /* seems required in fr inside flex-column */
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 24px repeat(6, 1fr);
}

.day-name {
  text-align: right;
  border-bottom: 1px solid var(--stroke-dark);
  padding-right: 5%;
}
</style>
