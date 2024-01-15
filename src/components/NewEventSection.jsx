import React from "react";
import { ExampleEvents } from "../utils/example_data";
import Event from "./Event";
function NewEventSection(props) {
  return (
    <div className="flex flex-col p-4 rounded-md w-10/12 md:min-h-[500px]">
      <h1 className="text-white text-start font-bold text-3xl">
        New Event Section
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-md drop-shadow-md ">
        {ExampleEvents.map((event) => (
          <Event event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}

export default NewEventSection;
