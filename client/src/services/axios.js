import axios from "axios";

const api = axios.create({
  baseURL: "https://hotel-new-bp32.onrender.com/api",
});

export default api;