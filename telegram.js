
function sendTelegram(order) {
  const token = "8132622542:AAF0nG25doWftQA1-RThLKKEb_HeAATVbOA";
  const chatId = "-4618423800";
  const message = `طلب جديد:\nاسم العميل: ${order.clientName}\nالمقاس: ${order.size}\nاللون: ${order.color}\nالعدد: ${order.quantity}\nتاريخ التسليم: ${order.deliveryDate}`;
  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  }).then(() => Swal.fire("تم إرسال الطلب بنجاح!", "", "success"));
}
