import axios from "../api/axios";

export const postUrlList = async (
  name,
  url,
  operator,
  period,
  description,
  skill,
  motive,
  opportunity,
  population,
  discovery,
  exploit,
  awareness,
  intrusion,
  confidentality,
  integrity,
  availability,
  accountability,
  financial,
  reputation,
  compliance,
  privacy
) => {
  try {
    const response = await axios.post(
      "/start",
      JSON.stringify({
        name,
        url,
        operator,
        period,
        description,
        skill,
        motive,
        opportunity,
        population,
        discovery,
        exploit,
        awareness,
        intrusion,
        confidentality,
        integrity,
        availability,
        accountability,
        financial,
        reputation,
        compliance,
        privacy,
      })
    );
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getUrlData = async () => {
  try {
    const response = await axios.get("/getUrl");
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
