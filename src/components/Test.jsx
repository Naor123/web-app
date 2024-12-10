import { useState } from "react";

function Test() {
  const [unreadMessages, setUnreadMessages] = useState(["a", "b"]);

  return (
    <div>
    {unreadMessages.length > 0 && <h1>you have _ unread messages!</h1>}
    </div>
)
}
export default Test;
