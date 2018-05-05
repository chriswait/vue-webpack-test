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

          <div class="day">1</div>
          <div class="day">2</div>
          <div class="day">3</div>
          <div class="day">4</div>
          <div class="day">5</div>
          <div class="day">6</div>
          <div class="day">7</div>

          <div class="day">8</div>
          <div class="day">9</div>
          <div class="day">10</div>
          <div class="day">11</div>
          <div class="day">12</div>
          <div class="day">13</div>
          <div class="day">14</div>

          <div class="day">15</div>
          <div class="day">16</div>
          <div class="day">17</div>
          <div class="day">18</div>
          <div class="day">19</div>
          <div class="day">20</div>
          <div class="day">21</div>

          <div class="day">22</div>
          <div class="day">23</div>
          <div class="day">24</div>
          <div class="day">25</div>
          <div class="day">26</div>
          <div class="day">27</div>
          <div class="day">28</div>

          <div class="day">29</div>
          <div class="day">30</div>
          <div class="day">1</div>
          <div class="day">2</div>
          <div class="day">3</div>
          <div class="day">4</div>
          <div class="day">5</div>

          <div class="day">6</div>
          <div class="day">7</div>
          <div class="day">8</div>
          <div class="day">9</div>
          <div class="day">10</div>
          <div class="day">11</div>
          <div class="day">12</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  --header-gradient-top: #f4f2f4;
  --header-gradient-bottom: #ccc9cc;
  --header-border-bottom: #a6a5a6;
  --stroke-light: #e2e1e2;
  --stroke-dark: #e2e1e2;
  --sidebar-background: #f4f4f4;
  --day-weekend-background: #f3f3f3;
  --day-border: 1px solid var(--stroke-light);
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
  padding-right: var(--block-small);
}

.day {
  border: var(--day-border);
  padding-top: 6px;
  padding-right: var(--block-small);
  text-align: right;
}

</style>
