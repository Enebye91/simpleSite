function setCookie(name, value, days) {
  const expires = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000
  ).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

function acceptCookies() {
  console.log("Bruger klikkede på Accepter");
  setCookie("cookies_accepted", "true", 90);
  enableTracking();
  showTrustpilotSection();
  document.getElementById("cookie-banner").style.display = "none";
}

function enableTracking() {
  console.log("Tracking enabled ");
}

function showTrustpilotSection() {
  const section = document.getElementById("trustpilot-section");
  if (section) section.style.display = "block";
}

window.addEventListener("DOMContentLoaded", () => {
  if (getCookie("cookies_accepted") === "true") {
    enableTracking();
    showTrustpilotSection();
    document.getElementById("cookie-banner").style.display = "none";
  }
});
