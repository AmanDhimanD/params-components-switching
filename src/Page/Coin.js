import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Component/Loading";

const Coin = () => {
  const paramsData = useParams();
  const { d } = paramsData;
  const [u, sUser] = useState([]);
  const [check, setCheck] = useState(true);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${d}`)
      .then((res) => res.json())
      .then((data) => {
        sUser(data);
        //console.log(data);
        setCheck(false);
      });
  }, []);
  return (
    <>
      {/* Use params here to  navigate the Coin pages */}

      {/* <p>{props.name}</p> */}
      {/* <Link to="/coins">{props.name}</Link> <br /> */}

      {/* <p>This is use by {d.name}</p> */}
      <center>
        {check ? (
          <Loading />
        ) : (
          <>
            <p>
              <b>Name:</b> {u.name}
            </p>
            <p>
              <b>User Name:</b> {u.username}
            </p>
            <p>
              <b>Email: </b>
              {u.email}
            </p>
            <p>
              <b>Website:</b> {u.website}
            </p>
            <Link to="/">Go the Home</Link>
          </>
        )}
      </center>
    </>
  );
};

export default Coin;
