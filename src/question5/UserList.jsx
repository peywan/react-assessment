import React from "react";
import useFetchData from "./useFetchData";

function UserList() {
    const { data, isLoading } = useFetchData("https://jsonplaceholder.typicode.com/users");

    if (isLoading) return <div>Laddar...</div>;

    return (
        <ul>
            {data.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default UserList;
