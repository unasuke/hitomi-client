import Option from './option';

const option = new Option();

function receiveMessage(request) {
  const form = new FormData();
  form.append('history[title]', request.title);
  form.append('history[url]', request.url);
  form.append('history[raw_user_agent]', navigator.userAgent);
  fetch('http://localhost:4000/histories', {
    method: 'POST',
    body: form,
  }).then(() => {});
}

chrome.runtime.onMessage.addListener(receiveMessage);
