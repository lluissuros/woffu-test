import axios from "axios";

const BASE_URL = "https://app-dev.woffu.com/api/v1";
const GET_USERS_URL = `${BASE_URL}/users`;

export async function getUsers(onSuccessCb, onErrorCb) {
  console.log("getUsers...");
  try {
    const response = await axios.get(GET_USERS_URL);
    onSuccessCb(response);
  } catch (e) {
    onErrorCb(e);
  }
}

export default getUsers;
