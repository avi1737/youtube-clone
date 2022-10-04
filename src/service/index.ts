import axios from "axios";

const client = axios.create({
  baseURL: "https://youtube-v31.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "2ad7fcb8cdmsh6fc1e8fb9510c75p1ba1cbjsnca0f93a10d7f",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
});

const API = async (URL: string, params?: any) => {
  try {
    const { data } = await client.get(URL, params);
    console.log("api ....", data);
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export default API;
