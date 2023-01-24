import { createContext,  useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite:(favoriteMeetup)=>{},
    removeFavorite:(meetupId)=>{},
    itemIsFavorite:(meetupId)=>{}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((p) => {
      return p.concat(favoriteMeetup);
    });
    console.log(userFavorites);
  }
  function removeFavoriteHandler(meetupId){
    console.log(userFavorites);
    setUserFavorites(p => {
        return p.filter(m => m.id!==meetupId);
        
    });
    
  }
  function itemIsFavoriteHandler(meetupId){
    return userFavorites.some(m => m.id ===meetupId)
  }
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite:addFavoriteHandler,
    removeFavorite:removeFavoriteHandler,
    itemIsFavorite:itemIsFavoriteHandler
  };
  
  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>;
}
export default FavoritesContext;