function openPop() {
  let x = localStorage.getItem('x');
  let y = localStorage.getItem('y');
  var newWin = window.open(
    'popup-result.html',
    '',
    `width=400, height=400, left=${x}, top=${y}`
  );

  if (newWin == null) {
    alert('팝업이 차단되어 있습니다. 팝업 차단을 해제하고 새로고침해 주세요.');
  }
}

window.onload = openPop;