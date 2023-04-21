const sendEventButton = document.getElementById("sendEventButton");

sendEventButton.addEventListener("click", () => {
  const message = {
    action: "iframeClickButton",
    message: "sendEventButton",
  };
  window.parent.postMessage(message, window.location.origin);
});
