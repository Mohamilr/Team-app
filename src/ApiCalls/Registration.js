import axios from "axios";

// create an instance of axios
const instance = axios.create({
  baseURL: "https://team-work-api.herokuapp.com/api/v1/auth/",
});

// set default content type
instance.defaults.headers.post["Content-Type"] = "application/json";

const Registration = async (method, data, url) => {
  const option = {
    method: method,
    data: JSON.stringify(data),
    url: url
  };

  try {
    const response = await instance(option);
    console.log(response.data);
  } catch (e) {
    if (e.response) {
      console.log(e.response.data);
    }
  }
};

export default Registration;
