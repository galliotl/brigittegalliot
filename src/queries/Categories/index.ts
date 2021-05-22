import { useQuery } from "@apollo/client";
import { GetAllCategories } from "./GetAllCategories";
import { GET_ALL_CATEGORIES } from "./query.gen";

export const useGetAllCategories = () =>
  useQuery<GetAllCategories>(GET_ALL_CATEGORIES);
