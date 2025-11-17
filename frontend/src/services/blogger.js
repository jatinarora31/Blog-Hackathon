import axios from "axios";
import { base_url } from "../utils/config";
import { toast } from "react-toastify";

export async function registerBlogger(full_name, phone_no, email, password) {
  try {
    const userBody = { full_name, phone_no, email, password };
    const url = base_url.url + "/user/signup";
    const response = await axios.post(url, userBody);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function loginBlogger(email, password) {
  try {
    const userBody = { email, password };
    const url = base_url.url + "/user/signin";
    const response = await axios.post(url, userBody);
    return response.data;
  } catch (error) {
    toast.error(error);
  }
}
