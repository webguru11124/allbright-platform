import * as constants from "../constants/Storage";
import * as asyncStorage from "../lib/asyncStorage";

export async function setToken(token: string) {
  return await asyncStorage.setItem(constants.ACCESS_TOKEN, token);
}

export async function getToken() {
  return await asyncStorage.getItem(constants.ACCESS_TOKEN);
}
