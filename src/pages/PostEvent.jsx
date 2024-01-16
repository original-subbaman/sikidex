import React, { useRef, useState } from "react";
import Input from "../components/Input";
function PostEvent(props) {
  const imgRef = useRef();
  const [image, setImage] = useState();
  function handleOnImageChange(event) {
    const file = event.target.files[0];
    setImage(file);
  }
  return (
    <div className="flex flex-col items-center pt-8">
      <h1 className="text-4xl font-bold text-white text-start mb-4">
        Post New Event
      </h1>
      <form className="flex flex-col p-4 w-1/2 bg-white rounded-md gap-2">
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="selected user image"
            className="object-contain h-[400px]"
          />
        )}
        <Input
          label={"Cover Image"}
          type="file"
          name={"coverImage"}
          placeholder="Select a cover image"
          ref={imgRef}
          onChange={handleOnImageChange}
        />
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
        <label htmlFor="description" className="font-semibold text-lg">
          Description
        </label>
        <textarea
          name="description"
          rows="5"
          cols="50"
          className="rounded-md outline-none border border-gray-500 p-2"
          defaultValue={"Add a description for your event"}
        ></textarea>
        <div className="flex justify-end gap-2 items-center">
          <button
            className="font-semibold text-xl text-gray-500 hover:text-gray-800"
            type="button"
            onClick={() => {}}
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
    </div>
  );
}

export default PostEvent;
