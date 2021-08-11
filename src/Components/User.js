import React from "react";

const User = ({ email, first_name, last_name, avatar, about }) => {
  return (
    <div>
      <img src={avatar} alt={first_name} />
      <h4> Name : {`${first_name} ${last_name}`} </h4>
      <h4>{email}</h4>
      <p>{about}</p>
    </div>
  );
};

export default User;
