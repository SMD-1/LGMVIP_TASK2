import "./App.css";
import { useState, useEffect } from "react";
import User from "./Components/User";

const API = "https://reqres.in/api/users?page=1";
function App() {
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line
  useEffect(async () => {
    await fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      });
  }, []);
  return (
    <div className="App">
      {users.length > 0 &&
        users.map((user) => {
          return <User key={user.id} {...user} />;
        })}
    </div>
  );
}

export default App;
