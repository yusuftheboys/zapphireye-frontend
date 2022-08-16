import axios from "axios";

export default axios.create({
  baseURL: `${process.env.REACT_APP_IP_ADDRESS}`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
