const ids = ["submit-btn", "paypal-redirect", "crypto"];

function onTurnstileSuccess(token) {
  console.log("Turnstile success:", token);
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.disabled = false;
  });
}
function onTurnstileError(errorCode) {
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.disabled = true;
  });
}
function onTurnstileExpired() {
  console.warn("Turnstile token expired");
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.disabled = true;
  });
}
