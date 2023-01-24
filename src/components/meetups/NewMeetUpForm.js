import { useRef ,useState} from "react";
import Card from "../ui/Card";
import Modal from '../ui/Modal'
import Backdrop from '../ui/Backdrop'
import classes from "./NewMeetUpForm.module.css";
function NewMeetUpForm(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function SubmitHandler(event) {
    event.preventDefault();
    setModalIsOpen(true);
  }
  function ConfirmModalHandler() {    
    const enteredTite = titleInputRef.current.value;
    const enteredimage = imageInputRef.current.value;
    const enteredaddress = addressInputRef.current.value;
    const entereddescription = descriptionInputRef.current.value;
    const meetupData = {
      title: enteredTite,
      image: enteredimage,
      address: enteredaddress,
      description: entereddescription,
    };
    console.log(meetupData);
    props.onAddNewMeetup(meetupData);
    setModalIsOpen(false);
  }
  function closeModalHandler(){
      setModalIsOpen(false);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
        {modalIsOpen && (
          <Modal onCancel={closeModalHandler} onConfirm={ConfirmModalHandler} />
        )}
        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      </form>
    </Card>
  );
}
export default NewMeetUpForm;
