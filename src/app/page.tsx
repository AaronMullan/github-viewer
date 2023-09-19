import React from 'react';
import { getClient } from '../lib/getClient';
import { gql } from '@apollo/client';
import { usersQuery } from '../query/index';

import UserCard from '../components/UserCard';

const query = gql`
  ${usersQuery}
`;

interface User {
  id: string;
  name: string;
  login: string;
  avatarUrl: string;
}

export default async function Page() {
  const client = getClient();
  const { data } = await client.query({
    query,
  });

  const users = data.search.edges;

  return (
    <div className="my-8 py-8 shadow-custom">
      <div className="flex w-full items-center">
        <h1 className="mb-4 ml-4 text-4xl">Some Users</h1>
      </div>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map(({ node: { id, login, avatarUrl } }: { node: User }) => (
          <UserCard key={id} id={id} login={login} avatarUrl={avatarUrl} />
        ))}
      </ul>
    </div>
  );
}
