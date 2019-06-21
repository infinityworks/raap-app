import { withAppSyncData } from "next-apollo-appsync";
import config from "./aws-exports";

export default withAppSyncData({
  url: config.graphqlEndpoint,
  region: config.region,
  auth: {
    type: config.authenticationType,
    key: config.apiKey
  }
});
