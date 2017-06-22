chrome.runtime.onMessage.addListener(receiveMessage)

function receiveMessage(request, sender, sendResponse) {
  var form = new FormData();
  form.append("history[title]", request["title"])
  form.append("history[url]", request["url"])
  form.append("history[raw_user_agent]", navigator.userAgent)
  fetch("http://localhost:4000/histories", {
    method: "POST",
    body: form
  }).then((response) => {
    console.log(response)
  })
}
