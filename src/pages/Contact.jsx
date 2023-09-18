import { React } from 'react';

function Contact() {
    const handleSubmit = (e, page) => {
        e.preventDefault();
    };

    return (
        <div>
            <h2> Contact </h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label>Name:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Input:</label>
                        <input type="text" />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Contact;