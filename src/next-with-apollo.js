import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost/lib/index";

export default withApollo(
  ({ headers }) =>
    new ApolloClient({
      uri: "https://localhost:4000",
      request: operation => {
        operation.setContext({
          fetchOptions: {
            credentials: "include"
          },
          headers
        });
      }
    })
);
