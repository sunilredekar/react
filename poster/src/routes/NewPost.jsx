import { useState } from "react";
import classes from "./NewPost.module.css";
import { Modal } from "../components/Modal";
import { Form, Link, redirect, useNavigate } from "react-router-dom";

function NewPost() {

    return (
        <Modal>
            <Form method="post" className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} name="body" />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" required name="author" />
                </p>
                <p className={classes.actions}>
                    <Link to="..">
                        Cancel
                    </Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;


export async function action({request}){
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    const response = await fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        },
    })

    console.log(response);

    return redirect('/')
}