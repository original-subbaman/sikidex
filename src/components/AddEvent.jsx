import React from "react";
import Input from "./Input";
function AddEventModal({ onCancel }) {
  {
    /**
  1. title
  2. date
  3. time
  4. location
  5. description
  6. image


*/
  }
  return (
    <form className="flex flex-col p-4 w-[600px] h-[800px] rounded-md gap-2">
      <h1 className="text-2xl font-bold">Post New Event</h1>
      <Input
        label={"Title"}
        name={"title"}
        type={"text"}
        placeholder={"Name of your event"}
      />
      <Input label={"Starting Date"} name={"startingDate"} type={"date"} />
      <Input label={"Ending Date"} name={"endingDate"} type={"date"} />

      <Input label={"Start Time"} name={"startTime"} type={"time"} />
      <Input label={"End Time"} name={"endTime"} type={"time"} />
      <Input
        label={"Location"}
        name={"location"}
        type={"text"}
        placeholder={"Location"}
      />
      <label htmlFor="description" className="font-semibold">
        Description
      </label>
      <textarea
        name="description"
        rows="5"
        cols="50"
        className="rounded-md outline-none border border-gray-500 p-2"
        defaultValue={"Add a description for your event"}
      ></textarea>
      <Input label={"Cover Image"} type={"image"} name={"coverImage"} />
      <div className="flex justify-end gap-2 items-center">
        <button
          className="font-semibold text-xl text-gray-500 hover:text-gray-800"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 rounded-md w-[100px] py-2 text-xl font-semibold text-white"
        >
          Post
        </button>
      </div>
    </form>
  );
}

export default AddEventModal;
