import React from 'react';

const Announcement = (props) => {
    return (
        <>
        <h2>Hello from the Announcement component I've created!</h2>
        <p>Whatever you type in the box below will be printed:</p>
        <p>{props.message}</p>
        </>
    );
}

export default Announcement;