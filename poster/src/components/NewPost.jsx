import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({ onCancel, onAddPost}) {
    const [enteredBody, setEnteredBody] = useState("Something....");
    const [namseEntered, setNameEntered] = useState("Something....");
  
    function BodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }
  
    function NameChangeHandler(event) {
        setNameEntered(event.target.value);
    }
    function onSubmitHandler(event) {
        event.preventDefault();
        const postData = {
            content: enteredBody,
            title: namseEntered
        };
        console.log(postData);
        onAddPost(postData);
        onCancel();
    }
    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} onChange={BodyChangeHandler }/>
        </p>
        <p>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required onChange={NameChangeHandler}/>
        </p>
        <p className={classes.actions}>
            <button type='button' onClick={onCancel}>Cancel</button>
            <button>Submit</button>
        </p>
        </form>
    );
}

export default NewPost;