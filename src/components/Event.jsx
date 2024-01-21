import React from "react";
import img from "../assets/rainforest.jpg";
import { Link } from "react-router-dom";
function Event({ event }) {
  return (
    <article className="bg-[#171d1c]  text-white p-2 rounded-md">
      <img src={img} />
      <div className="flex flex-col">
        <div>
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p>
            {event.date} @ {event.startTime}
          </p>
          <p>Location: {event.location}</p>
        </div>
        <Link to={`post-detail/${event.id}`}>
          <button className=" px-2 rounded-md bg-blue-500 text-white ml-auto mt-4 text-2xl font-light drop-shadow-md">
            View Details
          </button>
        </Link>
      </div>
    </article>
  );
}

export default Event;
