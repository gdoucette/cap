var fixed = document.getElementById('fixed');

fixed.addEventListener('touchmove', function(e) {

        e.preventDefault();

}, false);



document.querySelector('#datavizbttn').addEventListener('click', function(){
    event.preventDefault();
    dataviz();
});


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
          zoomMax: 157784630000,
          height: '500px',
          clickToUse: true
        };

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, options);
  }
})






// var container = document.getElementById('chart');

//   // Create a DataSet (allows two way data-binding)
//   var items = new vis.DataSet([
//     {id: 1, content: 'item 1', start: '2018-01-20'},
//     {id: 2, content: 'item 2', start: '2018-02-14'},
//     {id: 3, content: 'item 3', start: '2018-01-18'},
//     {id: 4, content: 'item 4', start: '2018-02-16', end: '2018-02-19'},
//     {id: 5, content: 'item 5', start: '2018-02-25'},
    
//   ]);

//   // Configuration for the Timeline
//   var options = {
//           start:'2018-01-01',
          
//           zoomMin: 3600000,
//           zoomMax: 157784630000,
//           height: '300px',
//           clickToUse: true
//         };

//   // Create a Timeline
//   var timeline = new vis.Timeline(container, items, options);
  
  function dataviz() {
    console.log('datavizbttn');
    console.log(container);
    console.log(timeline);
    console.log(items)
    
}