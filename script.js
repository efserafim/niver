function open_card() {
  document.getElementById('outside').classList.add('open-card');
  document.getElementById('outside-button').classList.add('button-animation');
}

function close_card() {
  document.getElementById('outside').classList.remove('open-card');
  document.getElementById('outside-button').classList.add('button-animation');
}
