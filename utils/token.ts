import * as constants from "@/constants/Storage";
import * as asyncStorage from "@/lib/asyncStorage";

import { parseJwt } from ".";

export async function setToken(token: string) {
  return await asyncStorage.setItem(constants.ACCESS_TOKEN, token);
}

export async function getToken() {
  return await asyncStorage.getItem(constants.ACCESS_TOKEN);
}

export async function getUserId() {
  const jsonPayload = parseJwt(await getToken());
  return await jsonPayload?.uid;
}
