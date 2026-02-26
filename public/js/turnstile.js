const ids = ["submit-btn", "paypal-redirect", "crypto"];

function toggleButton(status) {
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.disabled = !status;
  });
}

function onTurnstileSuccess(token) {
  console.log("Turnstile success:", token);
  toggleButton(true);
}
function onTurnstileError(errorCode) {
  toggleButton(false);
}

function onTurnstileExpired() {
  console.warn("Turnstile token expired");
  toggleButton(false);
}
