import React from "react";

const FormBook = () => {
    return (
        <div>
            <h2>Add New Book</h2>
            <form>
                <input type="text" placeholder="enter book name"/>
                <input type="text" placeholder="enter book author"/>
                <input type="text" placeholder="enter book percentage"/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default FormBook;