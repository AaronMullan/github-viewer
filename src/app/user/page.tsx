"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";
import { userQuery } from "../../query/index";
import UserDetail from "../../components/UserDetail";
import Repositories from "../../components/Repositories";
import SidebarElement from "../../components/SidebarElement";

interface User {
  avatarUrl: string;
  followers: {
    nodes: Array<{
      id: string;
      url: string;
      avatarUrl: string;
      login: string;
    }>;
  };
  repositories: {
    nodes: Array<any>;
  };
  organizations: {
    nodes: Array<{
      id: string;
      avatarUrl: string;
      login: string;
      url: string;
    }>;
  };
}

const query = gql`
  ${userQuery}
`;

export default function UserPage() {
  const searchParams = useSearchParams();
  const login = searchParams.get("login");
  const { data } = useSuspenseQuery<{ user: User }>(query, {
    variables: { login },
  });
  const user = data?.user;

  if (!user) {
    return <div>Loading...</div>;
  }

  const { avatarUrl, followers, repositories, organizations } = user;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mt-8 flex w-full flex-col text-center shadow-custom sm:mb-8">
        <div className="grid grid-cols-1 md:grid-cols-user">
          <div className="flex flex-col items-center bg-lightBlue py-4">
            <UserDetail avatarUrl={avatarUrl} login={login} />

            <section className="w-full bg-lightBlue">
              <div className="m-4 bg-white">
                <h3 className="text-bold border-b border-gray-500 py-4 text-2xl">
                  Organizations
                </h3>
                <ul>
                  {organizations.nodes?.map(({ id, avatarUrl, login, url }) => (
                    <SidebarElement
                      key={id}
                      id={id}
                      url={url}
                      avatarUrl={avatarUrl}
                      login={login}
                    />
                  ))}
                </ul>
              </div>
            </section>

            <section className="w-full bg-lightBlue">
              <div className="m-4 bg-white">
                <h3 className="text-bold border-b border-gray-500 py-4 text-2xl">
                  Followers
                </h3>
                <ul>
                  {followers.nodes?.map(({ id, url, avatarUrl, login }) => (
                    <SidebarElement
                      key={id}
                      id={id}
                      url={url}
                      avatarUrl={avatarUrl}
                      login={login}
                    />
                  ))}
                </ul>
              </div>
            </section>
          </div>
          <Repositories repositories={repositories} />
        </div>
      </div>
    </Suspense>
  );
}
