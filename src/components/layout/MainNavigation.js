import {Link} from 'react-router-dom';
import { useContext } from "react";
import classes from './MainNavigation.module.css';
import FavoritesContext from "../../store/favorites-context";

function MainNavigation(){
    const favoriteCtx = useContext(FavoritesContext);
    return(
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul >
                    <li >
                        <Link to='/'>AllMeetUps</Link>
                    </li>
                    <li >
                        <Link to='/f'>
                            Favorites
                            <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
                        </Link>
                    </li>
                    <li >
                        <Link to='/n'>new Meetups</Link>
                    </li>
                </ul>
            </nav> 
            
        </header>
    );
}
export default MainNavigation;