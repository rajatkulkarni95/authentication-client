import axios from "axios";
import { useStore } from "../store";

const BACKEND_URL = process.env.REACT_APP_BACKEND;
console.log(BACKEND_URL);

export const login = async (data) => {
  await axios
    .post(`${BACKEND_URL}/login`, {
      data,
    })
    .then(async ({ data }) => await useStore.setState({ user: data }))
    .catch(
      async ({
        response: {
          data: { error },
        },
      }) => await useStore.setState({ error: error })
    );
};

export const signup = async (data) => {
  await axios
    .post(`${BACKEND_URL}/users`, {
      data,
    })
    .then(
      async ({ data: { message } }) =>
        await useStore.setState({ newUser: message })
    )
    .catch(
      async ({
        response: {
          data: { error },
        },
      }) => await useStore.setState({ error: error })
    );
};
