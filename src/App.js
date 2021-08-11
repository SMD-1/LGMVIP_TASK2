import "./App.css";
import { useState, useEffect } from "react";
import User from "./Components/User";

const API = "https://reqres.in/api/users?page=1";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await fetch(API)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.data);
          setUsers(res.data);
        });
    };
    getData();
  }, []);
  return (
    <div className="App">
      {users.length > 0 &&
        users.map((user) => {
          return (
            <User
              key={user.id}
              {...user}
              about={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque amet, commodi aut ipsa rem debitis neque"
              }
            />
          );
        })}
    </div>
  );
}

export default App;
