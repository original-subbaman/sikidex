import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/rainforest.jpg";
function Event({ event }) {
  return (
    <article className="bg-[#171d1c] w-[300px] text-white p-2 rounded-md">
      <img src={img} />
      <div className="flex flex-col">
        <div>
          <h2 className="text-lg font-semibold">{event.name}</h2>
          <p>
            {event.date} @ {event.startTime}
          </p>
          <p>Location: {event.location}</p>
        </div>
        <button className="w-32 px-2 rounded-md bg-blue-500 text-white ml-auto mt-4">
          <Link to={""}>View Details</Link>
        </button>
      </div>
    </article>
  );
}

export default Event;
