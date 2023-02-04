import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const { id } = params;
  //console.warn(typeof(id));
  //console.warn(id);
  return <h2>My main user is {id}</h2>;
};

export default User;
