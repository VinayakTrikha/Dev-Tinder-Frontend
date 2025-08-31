import axios from "axios";
import { baseUrl } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Connections = () => {
  const [connectionsArr, setConnectionArr] = useState([]);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(`${baseUrl}/user/connections`, {
        withCredentials: true,
      });
      const fetchedData = res.data.data;
      setConnectionArr(fetchedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className="flex flex-col my-10">
      <h1 className="font-bold text-3xl mb-6 text-center">Connections</h1>

      {connectionsArr.length < 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connectionsArr.map((connection) => {
            const {
              age,
              firstName,
              gender,
              lastName,
              photoUrl,
              about,
              skills,
            } = connection;

            return (
              <div
                key={connection._id}
                className="flex flex-col items-center p-6 rounded-2xl shadow-lg bg-base-200 hover:shadow-xl transition"
              >
                <img
                  src={photoUrl}
                  alt={`${firstName} ${lastName}`}
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                />

                <div className="mt-4 text-center">
                  <h2 className="font-bold text-xl">
                    {firstName} {lastName}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {age} years old • {gender}
                  </p>

                  <p className="mt-3 text-gray-700">{about}</p>

                  {skills?.length > 0 && (
                    <div className="mt-4">
                      <h3 className="font-semibold text-sm text-gray-600 mb-2">
                        Skills
                      </h3>
                      <div className="flex flex-wrap justify-center gap-2">
                        {skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm rounded-full bg-primary text-white"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center my-36">
          No connections. Click &nbsp;
          <Link to={"/requests"} className=" underline">
            Request
          </Link>
          &nbsp; to make some connections
        </div>
      )}
    </div>
  );
};

export default Connections;
