document.getElementById("crypto")?.addEventListener("click", async (e) => {
  e.preventDefault();

  const btn = document.getElementById("crypto");

  try {
    const res = await fetch("/checkout/coinbase/create", {
      method: "POST",
    });

    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    if (!res.ok) {
      console.error("coinbase create failed", res.status, data);
      throw new Error("Coinbase create failed");
    }

    if (!data.hostedUrl) {
      console.error("Coinbase response missing hostedUrl", data);
      throw new Error("Missing hostedUrl");
    }

    window.location.href = data.hostedUrl;
  } catch (err) {
    btn.disabled = false;
    btn.innerText = "Check out with Cryptocurrency";
  }
});
