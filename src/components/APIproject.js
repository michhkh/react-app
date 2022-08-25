import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const APIproject = () => {
  const [data, setData] = useState();
  const [apiError, setApiError] = useState();

  const fetchData = () => {
    axios
      .get("https://catfact.ninja/facts")
      .then((response) => {
        setData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        setApiError(error);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data) {
    return (
      <div>
        <h1>Cat facts</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/counter">Counter</Link>
        </nav>
        <div>
          {data.map((item, index) => {
            return <p key={index}>{item.fact}</p>;
          })}
        </div>
      </div>
    );
  } else if (apiError) {
    return (
      <div>
        <h1>Cat facts</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/counter">Counter</Link>
        </nav>
        <div>
          <p>An error occurred. Can't load requested page. Please try again.</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Cat facts</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/counter">Counter</Link>
        </nav>
        <div>
          <p>Attempting to load the request</p>
        </div>
      </div>
    );
  }
};
