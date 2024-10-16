import axios from "axios";
import { BASE } from "./Api";
import { Mocks } from "../mock/data";

function pathToObject(path, obj, toIgnore = BASE) {
  if (!path || !obj) return obj;
  const pathWithoutBase = path.replace(toIgnore, "");
  let keys = pathWithoutBase.split("/");
  const key = keys.splice(0, 1)[0];
  return pathToObject(keys.join("/"), obj[key]);
}

export async function getListData(url, key = "", isMock = false) {
  try {
    let res = isMock
      ? { data: pathToObject(url, Mocks) }
      : await axios.get(url);

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

export async function getStringData(url, key = "", isMock = false) {
  try {
    let res = isMock
      ? { data: pathToObject(url, Mocks) }
      : await axios.get(url);
    if (key === "") {
      let data = res.data;
      return data;
    } else {
      let data = res.data[key];
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
    return false;
  } catch (error) {
    return true;
  }
}
