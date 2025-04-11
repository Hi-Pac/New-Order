
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      localStorage.setItem("userEmail", email);
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      Swal.fire("خطأ", "فشل تسجيل الدخول. تأكد من البيانات.", "error");
    });
});
