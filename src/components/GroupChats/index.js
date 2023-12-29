const GroupChats = () => {
    const username = localStorage.getItem("username")
    return (
        <div className="GroupChats">
            <h1><span style={{ color: "purple" }}>Cometchat-</span><u>{username}</u></h1>
        </div>
    )
}

export default GroupChats;