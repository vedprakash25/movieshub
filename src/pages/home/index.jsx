import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Homepage() {
  const [upcoming, setUpcoming] = useState();
  const fetchALL = async () => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
      headers: {
        "X-RapidAPI-Key": "0295cfd031mshd696258793d88acp13d6f7jsn714fa357ba6c",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.results);
      setUpcoming(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchALL();
  }, []);
  return (
    <div className="px-10">
      <h1>Upcoming Movies</h1>
      <div className="flex border-2">
        {upcoming
          ? upcoming.map((item, ind) => {
              const {
                originalTitleText,
                primaryImage,
                releaseDate,
                releaseYear,
                titleText,
                titleType,
              } = item;
              return (
                <div className="w-24 bg-gray-600" key={ind}>
                  <h3>{originalTitleText.text}</h3>
                  <h4>
                    {releaseDate.day} / {releaseDate.month} / {releaseDate.year}
                  </h4>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
