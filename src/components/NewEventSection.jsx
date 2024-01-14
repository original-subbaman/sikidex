import React from "react";
import { ExampleEvents } from "../utils/example_data";
import Event from "./Event";
function NewEventSection(props) {
  return (
    <div className="flex flex-col p-4 rounded-md w-10/12">
      <h1 className="text-white text-start font-bold text-2xl">
        New Event Section
      </h1>
      <div className="bg-white p-4 rounded-md drop-shadow-md overflow-x-auto overflow-y-hidden">
        <ul className="flex gap-2">
          {ExampleEvents.map((event) => (
            <li key={event.id}>
              <Event event={event} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NewEventSection;
