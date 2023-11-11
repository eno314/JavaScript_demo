export function receiveIframeEvent(event) {
  if (event.data.action === "iframeClickButton") {
    console.log(event.data.message);
  }
}

addEventListener("message", receiveIframeEvent);
