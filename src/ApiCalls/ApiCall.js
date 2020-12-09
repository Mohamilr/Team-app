import axios from "axios";

// create an instance of axios
const ApiCall = axios.create({
  baseURL: "https://team-work-api.herokuapp.com/api/v1/",
});


export default ApiCall;