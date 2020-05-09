import React from "react";

const chatWindow = ({activeUserId}) => {
    return (
        <div className="ChatWindow">Conversation for user id: {activeUserId} </div>
    );
};

export default chatWindow;