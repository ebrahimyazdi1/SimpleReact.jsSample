import MeetUpItem from './MeetUpItem';

import classes from './MeetupList.module.css';
function MeetupList(props)
{
    return(
        <ul  className={classes.list}>
            {props.meetups.map(( d) =>
                {
                    return (
                    <MeetUpItem
                        key={d.id}
                        id={d.id}
                        image={d.image}
                        title={d.title}
                        address={d.address}
                        description={d.description}    
                        meetup={d}             
                    />
            )}
            )}

        </ul>
    );
}
export default MeetupList;