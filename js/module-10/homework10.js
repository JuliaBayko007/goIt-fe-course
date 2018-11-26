"use strict";
//https://test-users-api.herokuapp.com/users/

function getAllUsers() {



fetch('https://test-users-api.herokuapp.com/users/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
}
/*function get(url) {
    return new Promise(function(succeed, fail) {
      var request = new XMLHttpRequest();
      request.open("GET", url, true);
      request.addEventListener("load", function() {
        if (request.status < 400)
          succeed(request.response);
        else
          fail(new Error("Request failed: " + request.statusText));
      });
      request.addEventListener("error", function() {
        fail(new Error("Network error"));
      });
      request.send();
    });*/