export const usersQuery = `
  {
    search(query: "type:user", type: USER, first: 10) {
      edges {
        node {
          ... on User {
            id
            login
            name
            avatarUrl
          }
        }
      }
    }
  }
`;

export const userQuery = `query GetUserByLogin($login: String!) {
    user(login: $login) {
      login
      name
      bio
      avatarUrl
      followers(first: 5) {
        totalCount
        nodes {
          id
          login
          name
          avatarUrl
          url
        }
      }
      organizations(first: 10) {
        totalCount
        nodes {
          id
          name
          avatarUrl
          url
          login
        }
      }
      repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
        totalCount
        nodes {
          id
          name
          description
          updatedAt
          createdAt
          url
        }
      }
    }
  }`;
