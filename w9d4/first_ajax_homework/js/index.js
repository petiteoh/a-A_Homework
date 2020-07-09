console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
    type: 'GET',
    url: "http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b",
    success(data) {
        console.log("We have your weather")
        console.log(data);
    },
    error() {
        console.error("An error occured.")
    },
});


// Add another console log here, outside your AJAX request
console.log("Testing")

// When does the request get sent ?
// When the server sends the GET request via the URL.

// When does the response come back ?
// When the success status is evaluated and returns the JSON.

// What's the current weather in New York?
// By running http requests in the background using JSON.

// Did the page refresh ?
// No.

// How could we use different HTTP methods in our request ?
// By changing the dataType.