import React from "react";
import Restaurant from "../components/Restaurant";
import { useGetAllRestaurants } from "../queries/Restaurant";

const Resto: React.FC = () => {
  const { loading, data, error } = useGetAllRestaurants();

  if (loading || !data || error) return <div className="App"></div>;
  return (
    <>
      {data.restaurants?.map((restaurant) => {
        if (!restaurant) return null;
        return (
          <Restaurant
            name={restaurant.name}
            description={restaurant.description || ""}
          ></Restaurant>
        );
      })}
    </>
  );
};

export default Resto;
