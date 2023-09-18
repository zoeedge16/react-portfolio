import { React } from 'react';

function Contact({ setCurrentPage, currentPage }) {
    const handleSubmit = (e, page) => {
        e.preventDefault();
        setCurrentPage(page);
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
                </fieldset>
            </form>
        </div>
    )
}

export default Contact;