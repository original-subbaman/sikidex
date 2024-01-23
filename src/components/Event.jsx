import React from "react";
import img from "../assets/rainforest.jpg";
import { Link } from "react-router-dom";
import Button from "./Button";
function Event({ event }) {
  return (
    <article className="bg-[#171d1c]  text-white p-2 rounded-md relative">
      <img src={img} />
      <div className="flex flex-col mb-10">
        <h2 className="text-2xl font-semibold">{event.name}</h2>
        <p>
          {event.date} @ {event.startTime}
        </p>
        <p>Location: {event.location}</p>
      </div>
      <Link
        to={`post-detail/${event.id}`}
        className="absolute bottom-2 right-2"
      >
        <Button>View Details</Button>
      </Link>
    </article>
  );
}

export default Event;
