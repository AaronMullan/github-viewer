// lib/apollo-provider.js
"use client";

import { HttpLink } from "@apollo/client";
import { ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context"; // Import setContext

import {
  NextSSRApolloClient,
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

const GITHUB_API_BASE_URL = "https://api.github.com/graphql";
const GITHUB_ACCESS_TOKEN = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

function makeClient() {
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
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            link,
          ])
        : link,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
