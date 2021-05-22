import gql from "graphql-tag";

export const GET_ALL_RESTAURANTS = gql`
  query GetAllRestaurants {
    restaurants {
      id
      name
      description
    }
  }
`;
