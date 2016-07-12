//eventsManipulation.js
//=====================

module.exports = {
  organise: function(current, index, array){
    var currentTime = new Date()
    if (array[index-1]) {
      var previousEntry = array[index-1]
      current.begin = new Date(previousEntry.end)
      current.end = new Date(previousEntry.end.getTime() + current.duration*60000)//helperMethods.addMinutes(previousEntry.end, current.duration)
    } else {
      current.begin = new Date(currentTime)
      current.end = new Date(currentTime.getTime() + current.duration*60000)//helperMethods.addMinutes(currentTime, current.duration)
    }
    //if beginning/end time is after 5pm or beginning/end time is before 8am
    if ((current.begin.getHours() >= 17 || current.end.getHours() >= 17)
          || (current.begin.getHours() <= 8 || current.begin.getHours() <= 8)) {
      var newTime = new Date(current.begin.getDate() + 1).setHours(9)
      current.begin = new Date(newTime)
      current.end = new Date(current.begin.getTime() + current.duration*60000)
    }

    return current
  },
  eventStream: function(inputEvents){
    return inputEvents.filter(
      function (current){
        return current.active === true
    })
    .sort(
      function (previous, current){
        return current.duration - previous.duration
    })
    .sort(
      function (previous, current){
        return current.priority - previous.priority
    })
    .map(this.organise,[])
  }
};

//module.exports.stream
