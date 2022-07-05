import axios from "../api/axios";

export const getGroup = async () => {
  try {
    const response = await axios.get("/get/group");
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
