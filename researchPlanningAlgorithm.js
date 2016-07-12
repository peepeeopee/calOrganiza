//researchPlanningAlgorithm.js
//============================

var events = require('./eventsManipulation')

var test = {
  testEvents: [
    {id:1, priority:6, duration:120, active: true},
    {id:2, priority:3, duration:60, active: true},
    {id:3, priority:7, duration:30, active: true},
    {id:4, priority:2, duration:60, active: true},
    {id:5, priority:10, duration:15, active: true},
    {id:6, priority:4, duration:90, active: true},
    {id:7, priority:5, duration:120, active: true},
    {id:8, priority:5, duration:30, active: true}
  ]
}

var calendar = events.eventStream(test.testEvents)

console.log(calendar)
