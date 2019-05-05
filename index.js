
let url = 'backend.php';
let timestamp = 0;
let showMsgArea = document.getElementById('content');
let msgValue = document.getElementById('word');
let form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function (event) {
  event.preventDefault();
  doRequest(msgValue.value);
  msgValue.value = '';
  return false;
});

function handleResponse(response) {
  showMsgArea.innerHTML += '<div>' + response['msg'] + '</div>';
};

function doRequest(request) {
  let requestMsg = new XMLHttpRequest();
  requestMsg.open('GET', `${url}?msg=${request}`, true);
  requestMsg.send();
}

function longPolling() {
  let comet = new XMLHttpRequest();
  comet.onreadystatechange = function () {
    if (this.readyState ==4  && this.status == 200) {
      let res = JSON.parse(this.responseText);
      timestamp = res['timestamp'];
      handleResponse(res);
      longPolling();
    }
  }
  comet.open('GET', `${url}?timestamp=${timestamp}`, true);
  comet.send();
}

longPolling();