
function logout() {
  firebase.auth().signOut().then(() => {
    localStorage.clear();
    window.location.href = "index.html";
  });
}

function openOrderModal() {
  document.getElementById("order-modal").classList.remove("hidden");
}

function closeOrderModal() {
  document.getElementById("order-modal").classList.add("hidden");
}

setTimeout(() => {
  logout();
}, 15 * 60 * 1000); // تسجيل خروج بعد 15 دقيقة سكون
