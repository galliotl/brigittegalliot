import { useQuery } from "@apollo/client";
import { GetAllRestaurants } from "./GetAllRestaurants";
import { GET_ALL_RESTAURANTS } from "./query.gen";

export const useGetAllRestaurants = () =>
  useQuery<GetAllRestaurants>(GET_ALL_RESTAURANTS);
