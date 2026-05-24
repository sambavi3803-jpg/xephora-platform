import axios from "axios";

/* ===================================== */
/* ===== PLACE ORDER ===== */
/* ===================================== */

export const placeOrderApi =
async(orderData)=>{

  const res =
  await axios.post(

    "http://localhost:5000/api/orders/place",

    orderData
  );

  return res.data;
};

/* ===================================== */
/* ===== GET ORDERS ===== */
/* ===================================== */

export const getOrdersApi =
async(userId)=>{

  const res =
  await axios.get(

    `http://localhost:5000/api/orders/${userId}`
  );

  return res.data;
};