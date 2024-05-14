"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import CardTeams from "./CardTeam";

interface DataProps {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export const Teams = () => {
  const [data, setData] = useState<DataProps[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=6");
      setData(response.data.results);
      console.log(response.data);
    } catch (error) {
      console.error("Error, error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">OUR TEAMS</h1>
      <div className="flex flex-col py-10 md:grid grid-cols-3 grid-rows-2 max-w-[1000px] gap-16">
        {data.map((user, index) => (
          <CardTeams key={index}>
            <div className="text-[6rem] bg-slate-500 w-[10rem] rounded-full">
              <img
                src={user.picture.large}
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="text-[1rem] py-[2rem] rounded-b-2xl text-black text-center font-semibold relative">
              {user.name.first} {user.name.last}
            </div>
          </CardTeams>
        ))}
      </div>
    </div>
  );
};

export default Teams;
