import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 3490c0426360b3b95bd01b5b22947657d416e7e51ccd7625328d950b922a7a6e"
  }
});
