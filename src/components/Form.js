import React from "react";

function form() {
    return (
        <div>
            <form>
                <input type="text" placeholder="enter book name"/>
                <input type="text" placeholder="enter book author"/>
                <input type="text" placeholder="enter book percentage"/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default form;