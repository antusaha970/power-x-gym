import axios from "axios";

export const client = axios.create({
  baseURL: "https://power-x-gym-server.cyclic.app",
});
