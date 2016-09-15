// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html
var inputValue = document.getElementById('input');
$("#request").on('click', function() {
  if (inputValue.value) {
    $.getJSON("http://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=" + inputValue.value + "&srlimit=10&srprop=snippet%7Csectiontitle", function(json) {
      var result = document.getElementById('result');
      result.innerHTML = '';
      for (var x = 0;x < json.query.search.length;x++) {
        var a = Object.keys(json.query.search)[x];
        var titleLi = document.createElement('li');
        titleLi.innerHTML = '<a href="https://en.wikipedia.org/wiki/' + json.query.search[a].title + '" target="_blank">' + json.query.search[a].title + '</a>' + '<p>"' + json.query.search[a].snippet + '..."</p>';
        result.appendChild(titleLi);
      }
      
      console.log(json);
    });
  } else {
    document.getElementById('result').innerHTML = "<h2>Please type something in the search input or click on 'Random Article'!</h2>";
  }
});