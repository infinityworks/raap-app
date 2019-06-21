import { withAppSyncData } from 'next-apollo-appsync';

const config = {
  url: "https://onq4ydh7anf7teujf56cv6b3b4.appsync-api.us-east-2.amazonaws.com/graphql",
  region: "us-east-2",
  auth: {
    type: "API_KEY",
    apiKey: "da2-cowazpzhendcfhzrvazz3nfqxy"
  },
}

export default withAppSyncData(config)