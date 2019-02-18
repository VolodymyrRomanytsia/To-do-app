import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth/login";
const tokenKey = "token";
const id = "id"
const user = "username"

export async function login(username, password) {
  const { data: {jwt, _id, name} } = await http.post(apiEndpoint, { username, password });
  localStorage.setItem(tokenKey, jwt);
  localStorage.setItem(id, _id)
  localStorage.setItem(user, name)
}

export function logout() {
  localStorage.clear()
}

export function getCurrentUser()  {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
 

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function getId() {
   return localStorage.getItem(id);
}

export function getUserName() {
  return localStorage.getItem(user);
}

export default {
  login,
  logout,
  getCurrentUser,
  getId,
  getJwt,
  getUserName
};
