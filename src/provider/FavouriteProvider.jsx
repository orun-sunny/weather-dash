import { FavouritContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const AddToFavourites = (latitute, longitude, location) => {
    setFavourites([
      ...favourites,
      {
        latitute: latitute,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFromFavourites = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setFavourites(restFavourites);
  };
  return (
    <FavouritContext.Provider
      value={{ AddToFavourites, removeFromFavourites, favourites }}
    >
      {children}
    </FavouritContext.Provider>
  );
};
export default FavouriteProvider;
