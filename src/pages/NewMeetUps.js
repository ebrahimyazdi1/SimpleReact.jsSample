import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetUpsPage()
{
    function newMeetupHandler(meetupData)
    {
        fetch(
            'http://url.com',
            {
                method:'POST',
                body:JSON.stringify(meetupData),
                headers:
                {
                    'Content-Type':'Application/Json'
                }
            }

        );
    }
    return <section> 
            <h1>NewMeetUps </h1>
            <NewMeetUpForm onAddNewMeetup={newMeetupHandler}/>
        </section>;
}
export default NewMeetUpsPage;