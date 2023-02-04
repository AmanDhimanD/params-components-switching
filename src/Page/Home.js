import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Component/Loading";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [check, setCheck] = useState(true);
  const url = "/coins/";
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setCheck(false);
        //console.log(data[0].title);
      });
  }, []);

  return (
    <>
      {/* Add this API data here with link tags*/}

      <center>
        <h4>API Data</h4>
        {check ? (
          <Loading />
        ) : (
          <div>
            {coins.map((index, count) => {
              const url = index.id;
              return (
                <>
                  {/* <p key={index}>{index.name}</p>{" "} */}
                  {/* <Coin name={index.name} /> */}
                  <b>{count + 1}. </b>
                  <Link to={"/coin/" + url}>{index.name}</Link> <br />
                </>
              );
            })}
          </div>
        )}
      </center>
    </>
  );
};

export default Home;
