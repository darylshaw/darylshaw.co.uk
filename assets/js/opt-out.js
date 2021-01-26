// simple button click event handler
function btnHandler(selector, callback) {
  var btn = document.querySelector(selector);
  if(!btn) { return; }
  btn.addEventListener('click', function(event) {
    event.preventDefault();
    callback();
  }, false);
}

// Set a cookie to opt out of ga
btnHandler('#btn-opt-out', function(){
  document.cookie = "nf_ab=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  window.location.reload();
});
