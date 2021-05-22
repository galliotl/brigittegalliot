/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllRestaurants
// ====================================================

export interface GetAllRestaurants_restaurants {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string | null;
}

export interface GetAllRestaurants {
  restaurants: (GetAllRestaurants_restaurants | null)[] | null;
}
