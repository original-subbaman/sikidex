import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import * as Yup from "yup";
import Error from "../components/Error";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = Yup.object({
  coverImage: Yup.mixed().required("Cover image is required"),
  title: Yup.string().required("Event title is required"),
  startingDate: Yup.date().required("Starting date is required"),
  startTime: Yup.string().required("Start time is required"),
  location: Yup.string().required("Add a location for your event"),
  description: Yup.string().required("Add a description for your event"),
});
function PostEvent(props) {
  const imgRef = useRef();
  const [image, setImage] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  function handleOnImageChange(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  const onSubmit = (data) => {
    console.log("data " + data);
  };

  return (
    <div className="flex flex-col items-center pt-8">
      <h1 className="text-4xl font-bold text-white text-start mb-4">
        Add New Event
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-4 w-1/2 bg-white rounded-md gap-2"
      >
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="selected user image"
            className="object-contain h-[400px]"
          />
        )}
        <Input
          type="file"
          placeholder="Select a cover image"
          {...register("coverImage")}
          onChange={handleOnImageChange}
        />
        {errors.coverImage && <Error message={errors.coverImage.message} />}
        <Input
          label={"Title"}
          name={"title"}
          type={"text"}
          {...register("title")}
          placeholder={"Name of your event"}
        />
        {errors.title && <Error message={errors.title.message} />}
        <Input
          label={"Starting Date"}
          name={"startingDate"}
          type={"date"}
          {...register("startingDate")}
        />
        {errors.startingDate && <Error message={errors.startingDate.message} />}
        <Input
          label={"Start Time"}
          name={"startTime"}
          type={"time"}
          {...register("startTime")}
        />
        {errors.startTime && <Error message={errors.startTime.message} />}
        <Input
          label={"Location"}
          name={"location"}
          type={"text"}
          {...register("location")}
          placeholder={"Location"}
        />
        {errors.location && <Error message={errors.location.message} />}
        <label htmlFor="description" className="font-semibold text-lg">
          Description
        </label>
        <textarea
          name="description"
          rows="5"
          cols="50"
          {...register("description")}
          className="rounded-md outline-none border border-gray-500 p-2"
        ></textarea>
        {errors.description && <Error message={errors.description.message} />}
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
