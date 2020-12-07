import Amplify, { Auth } from "aws-amplify";
import config from "./src/aws-exports";

export const onClientEntry = () => {
  Amplify.configure({
    ...config,
    graphql_headers: async () => {
      try {
        const token = (await Auth.currentSession()).idToken.jwtToken;
        return { Authorization: token };
      } catch (e) {
        console.error(e);
        return {};
      }
    },
  });
};
