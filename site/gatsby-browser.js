import Amplify from "aws-amplify";
import config from "./src/aws-exports";

export const onClientEntry = () => {
  Amplify.configure(config);
};
