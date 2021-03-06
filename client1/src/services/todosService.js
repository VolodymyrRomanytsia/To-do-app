import http from "./httpService";
import { apiUrl } from "../config.json";
import auth from "./authService"


const apiEndpoint = apiUrl + "/todos";

export function getTodos() {
  http.setJwt(auth.getJwt());
  return http.get(`${apiEndpoint}/${auth.getId()}`)
}

export function createTodo(text) {
  return http.post(`${apiEndpoint}/${auth.getId()}`, text)
}

export function deleteTodo(_id) {
  return http.post(`${apiEndpoint}/delete/${auth.getId()}`, _id)
}

export function resolveTodo(_id, resolved) {
  return http.post(`${apiEndpoint}/resolve/${auth.getId()}`, {_id, resolved})
}

export function createMainGoal(text) {
  return http.post(`${apiEndpoint}/maingoal/${auth.getId()}`, text)
}

export default {
  getTodos,
  createTodo,
  deleteTodo,
  resolveTodo,
  createMainGoal
};

