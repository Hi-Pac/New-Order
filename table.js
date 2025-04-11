
function printTable() {
  window.print();
}

function exportToPDF() {
  Swal.fire("تنبيه", "سيتم دعم التصدير PDF لاحقًا", "info");
}

function exportToExcel() {
  Swal.fire("تنبيه", "سيتم دعم التصدير Excel لاحقًا", "info");
}

function filterOrders(type) {
  Swal.fire("تنبيه", `تم تصفية: ${type}`, "info");
}
