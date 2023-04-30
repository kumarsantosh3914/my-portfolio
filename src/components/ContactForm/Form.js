import "./Form.css";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_drmc1tb',
                'template_sfkp0sa',
                // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Santosh Kumar",
                    from_email: form.email,
                    to_email: "santoshkumar15novmth@gmail.com",
                    message: form.message,
                },
                'diEZ6h21fsoPHUGxm'
                // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div className="form">
            <form
                ref={formRef}
                onSubmit={handleSubmit}>
                <label>You Name</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name..."></input>
                <label>You Email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email..."></input>
                <label>Message </label>
                <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."></textarea>
                <button
                    type="submit"
                    className="btn"
                >{loading ? "Sending..." : "Send"}</button>
            </form>
        </div>
    )
}

export default Form;