import axios from "../api/axios";

export const getScan = async () => {
  try {
    const response = await axios.get("/api/scan");
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getDescById = async (id, pluginid) => {
  try {
    const response = await axios.get(
      `/api/scan/desc?id=${id}&pluginid=${pluginid}`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const startScan = async (name, url, operator, period, description) => {
  try {
    const response = await axios.post(
      "/start",
      JSON.stringify({ name, url, operator, period, description })
    );
  } catch (err) {
    console.log(err);
  }
};
