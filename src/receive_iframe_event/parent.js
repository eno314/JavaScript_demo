export function receiveIframeEvent(event) {
  if (event.data.action === "iframeClickButton") {
    console.log(event.data.message);
  }
}

window.addEventListener("message", receiveIframeEvent);
