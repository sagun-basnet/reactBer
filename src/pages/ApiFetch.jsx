import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";

const ApiFetch = () => {
  const [data, setData] = useState([]);
  console.log(data, " :DATA");

  const myApi = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
  ];
  const token = Cookie.get("accessToken");

  const headers = {
    Authorization: `Bearer ${token}`
  }

  const fetchData = async () => {
    // try {
    //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    //   //   console.log(res.data, " :RES"); 
    //   setData(res.data);
    // } catch (err) {
    //   console.log(err);
    // }

    await axios
      .get("https://jsonplaceholder.typicode.com/posts", {headers})
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        log(error, " :ERROR");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-5">
        {data.map((item, index) => {
          return (
            <div
              className="border-2 flex flex-col justify-center items-center p-4 m-2"
              key={index}
            >
              <h1 className="font-bold">{item.title}</h1>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ApiFetch;
