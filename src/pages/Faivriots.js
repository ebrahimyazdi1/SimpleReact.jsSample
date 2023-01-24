import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
function FaivriotsPage() {
  const favoriteCtx = useContext(FavoritesContext);
  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p> Favorite list is Empty Do you want to add some Favorites?</p>;
  } else {
    content =<MeetupList meetups={favoriteCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      <ul>
        {content}
      </ul>
      
    </section>
  );
}
export default FaivriotsPage;
