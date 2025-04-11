
document.getElementById("order-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const order = {
    clientName: document.getElementById("clientName").value,
    size: document.getElementById("size").value,
    color: document.getElementById("color").value,
    print: document.getElementById("print").value,
    handle: document.getElementById("handle").value,
    quantity: document.getElementById("quantity").value,
    paymentTerms: document.getElementById("paymentTerms").value,
    deliveryDate: document.getElementById("deliveryDate").value,
    status: "معلق",
    createdAt: new Date().toISOString(),
    email: localStorage.getItem("userEmail"),
  };
  sendTelegram(order);
});
