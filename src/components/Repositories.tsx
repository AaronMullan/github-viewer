import React from 'react';

interface Repository {
  id: string;
  url: string;
  name: string;
}

interface RepositoriesProps {
  repositories: {
    nodes: Repository[];
  };
}

const Repositories: React.FC<RepositoriesProps> = ({ repositories }) => {
  return (
    <section className="mt-4 md:px-8">
      <h3 className="text-bold text-3xl">Repositories</h3>
      <ul>
        {repositories.nodes.map((repo) => (
          <li
            key={repo?.id}
            className="flex h-16 items-center border-b-2 border-gray-500"
          >
            <a
              href={repo.url}
              className="figtree.className ml-4 text-xl text-a11yBlue"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{repo.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Repositories;
