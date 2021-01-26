// simple button click event handler
function btnHandler(selector, callback) {
  var btn = document.querySelector(selector);
  if(!btn) { return; }
  btn.addEventListener('click', function(event) {
    event.preventDefault();
    callback();
  }, false);
}


// Set a cookie to opt in to ga
btnHandler('#btn-opt-in', function(){
  var now = new Date();
  var expires = now.getTime() + 1000 * 3600 * 24 * 365;
  now.setTime(expires);
  document.cookie = 'nf_ab=ga; expires=${ now.toUTCString() }';
  window.location.reload();
});
