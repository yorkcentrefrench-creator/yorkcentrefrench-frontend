export const loadRazorpay = async (amount, planName, navigate) => {
  const res = await fetch("http://localhost:5000/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });

  const order = await res.json();

  const options = {
    key: "rzp_test_xxxxx", // Razorpay PUBLIC key
    amount: order.amount,
    currency: "INR",
    name: "York Centre French",
    description: planName,
    order_id: order.id,

    handler: async function (response) {
      const verify = await fetch(
        "http://localhost:5000/verify-payment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        }
      );

      const result = await verify.json();

      if (result.success) {
        navigate("/payment-success");
      } else {
        alert("Payment verification failed");
      }
    },

    modal: {
      ondismiss: function () {
        console.log("Payment popup closed");
      },
    },

    theme: {
      color: "#ef4444",
    },
  };

  const razorpay = new window.Razorpay(options);
  razorpay.open(); // 👈 OPENS PAYMENT PAGE
};
