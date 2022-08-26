import { useState, useEffect } from "react";
import axios from "axios";

export const APIproject = () => {
  const [data, setData] = useState();
  const [apiError, setApiError] = useState();

  const fetchData = () => {
    axios
      .get("https://catfact.ninja/facts")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        setApiError(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data) {
    return (
      <div>
        <h1>Facts about cats</h1>
        <div>
          {data.map((item, index) => {
            return (
              <div>
                <p key={index}>{item.fact}</p>
                <p key={item.length}>
                  - Total symbols in sentence: {item.length}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (apiError) {
    return (
      <div>
        <h1>Facts about cats</h1>
        <div>
          <p>An error occurred. Can't load requested page. Please try again.</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Facts about cats</h1>
        <div>
          <p>Attempting to load the request</p>
        </div>
      </div>
    );
  }
};
