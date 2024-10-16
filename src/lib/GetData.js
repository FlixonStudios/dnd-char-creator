import axios from "axios";
import { BASE } from "./Api";

export async function getListData(url, key = "") {
  try {
    let res = await axios.get(url);
    //console.log(res)
    if (key === "") {
      let data = res.data;
      return data;
    } else {
      let data = res.data[key];
      return data;
    }
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getStringData(url, key = "") {
  try {
    let res = await axios.get(url);
    if (key === "") {
      let data = res.data;
      //console.log(data)
      return data;
    } else {
      let data = res.data[key];
      //console.log(data)
      return data;
    }
  } catch (err) {
    console.log(err);
    return "";
  }
}

export async function healthcheck() {
  try {
    await axios.get(BASE);
    return true;
  } catch (error) {
    return false;
  }
}
