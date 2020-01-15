import axios from "axios";

const BASE_URL = "https://app-dev.woffu.com/api/v1";
const GET_USERS_URL = `${BASE_URL}/users`;

const DANGEROUSLY_HARDCODED_USERNAME =
  "hhkgBYNxYd0HIaLwhpzucEkmLr%2fHbDOZ6HkmDvFvjGFG1nnMgmnAcw%3d%3d";
const DANGEROUSLY_HARDCODED_PASSWORD = "";

export async function getUsers(onSuccessCb, onErrorCb) {
  try {
    const response = await axios.get(GET_USERS_URL, {
      auth: {
        username: DANGEROUSLY_HARDCODED_USERNAME,
        password: DANGEROUSLY_HARDCODED_PASSWORD
      }
    });
    onSuccessCb(response.data);
  } catch (e) {
    onErrorCb(e);
  }
}

export default getUsers;
