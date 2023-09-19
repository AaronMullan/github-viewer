import { HttpLink } from '@apollo/client';
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { setContext } from '@apollo/client/link/context'; // Import setContext

const GITHUB_API_BASE_URL = 'https://api.github.com/graphql';
const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

export const { getClient } = registerApolloClient(() => {
  // Create a function to set the headers with the access token
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const httpLink = new HttpLink({
    uri: GITHUB_API_BASE_URL,
  });

  const link = authLink.concat(httpLink); // Combine the authLink and httpLink

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: link, // Use the combined link with authentication
  });
});
