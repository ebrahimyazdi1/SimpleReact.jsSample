import classes from "./MeetUpItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MeetUpItem(props) {
  const favoriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
        favoriteCtx.removeFavorite(props.id);
    } else {
        favoriteCtx.addFavorite({
            id:props.id,
            image:props.image,
            address:props.address,
            description:props.description,
            title:props.title
        });
        console.log(favoriteCtx.favorites);
        console.log(favoriteCtx.totalFavorites);
        
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'remove From Favorites' : 'To Favorites'}</button>
          
        </div>
      </Card>
    </li>
  );
}
export default MeetUpItem;
