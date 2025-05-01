import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Table = () => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(0);
  const fatchData = async () => {
    await axios
      .get("http://localhost:5055/api/getUser")
      .then((res) => {
        console.log(res, "get data from db");
        setData(res.data);
      })
      .catch((err) => {
        console.log(err, "ERROR");
      });
  };

  useEffect(() => {
    fatchData();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .post(`http://localhost:5055/api/delete-user/${id}`)
      .then((res) => {
        //   console.log(res, "delete user");
        toast.success("User has been deleted");
        fatchData();
        setFlag(flag + 1);
      })
      .catch((err) => {
        console.log(err, "ERROR");
      });
  };
  return (
    <>
      <div className="flex w-full justify-evenly mt-6">
        <h1 className="text-center text-4xl">User Table</h1>
        <Link to="/register">
          <button className="p-2 px-4 rounded-md bg-blue-400 font-bold">
            Add user
          </button>
        </Link>
      </div>

      <div className="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.N.
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.address}</td>
                  <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    {item.email}
                  </td>
                  <td className="px-6 py-4">{item.password}</td>
                  <td className="flex gap-4 px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <button className="p-2 px-4 bg-blue-500 rounded-md">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 px-4 bg-red-500 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
