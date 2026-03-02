document.getElementById("crypto")?.addEventListener("click", async () => {
  const btn = document.getElementById("crypto");
  btn.disabled = true;
  btn.innerText = "reDirecting...";

  try {
    const res = await fetch("/checkout/coinbase/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!res.ok || data.hostedUrl) {
      throw new Error(data.error || "Failed to create crypto checkout");
    }
    window.location.href = data.hostedUrl;
  } catch (err) {
    alert("Crypto checkout failed");
    btn.disabled = false;
    btn.innerText = "Check out with Cryptocurrency";
  }
});
