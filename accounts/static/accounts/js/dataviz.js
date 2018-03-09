var fixed = document.getElementById('fixed');

fixed.addEventListener('touchmove', function(e) {

        e.preventDefault();

}, false);


$.ajax({
  url: "/timeline/", 
  type: 'get',
  success: function(response) {
      console.log(response)
var container = document.getElementById('chart');
  
  // Create a DataSet (allows two way data-binding)
  var items = new vis.DataSet(response.timer);

  // Configuration for the Timeline
  var options = {
          start:'2018-01-01',
          
          zoomMin: 300000,
          zoomMax: 63113852000,
          height: '500px',
          clickToUse: true,
          showCurrentTime: false
        };

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, options);
  }
})

// data format for timeline: 
// var items = new vis.DataSet([
//   {id: 1, content: 'item 1', start: '2013-04-20'},
//   {id: 2, content: 'item 2', start: '2013-04-14'},
//   {id: 3, content: 'item 3', start: '2013-04-18'},
//   {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
//   {id: 5, content: 'item 5', start: '2013-04-25'},
//   {id: 6, content: 'item 6', start: '2013-04-27'}
// ]);