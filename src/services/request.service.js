import axios from "axios";
import { baseUrl } from "../utils/constants";

export const sendRequest = ({ status, requestId }) => {
  return axios.post(`${baseUrl}/request/send/${status}/${requestId}`, {}, {withCredentials: true});
};
export const reviewRequest = ({ status, requestId }) => {
  return axios.post(`${baseUrl}/request/review/${status}/${requestId}`, {}, {withCredentials: true});
};
