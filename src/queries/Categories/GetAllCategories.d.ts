/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllCategories
// ====================================================

export interface GetAllCategories_categories {
  __typename: "Category";
  id: string;
  name: string;
}

export interface GetAllCategories {
  categories: (GetAllCategories_categories | null)[] | null;
}
