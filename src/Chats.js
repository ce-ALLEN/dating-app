import React from "react";
import "./Chats.css"
import Chat from "./Chat"

function Chats() {
    return (
        <div className={"chats"}>
            <Chat   // add a bunch more?
                name={"Lily"}
                message={"Happy Birthday!"}
                timestamp={"3 hours ago"}
                profilePic={"..."}
            />
        </div>
    );
}

export default Chats;