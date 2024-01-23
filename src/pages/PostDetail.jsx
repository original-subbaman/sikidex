import React from "react";
import image from "../assets/rainforest.jpg";
import { BsCalendarDate } from "react-icons/bs";
import { IoTimeOutline, IoLocationSharp } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
function PostDetail(props) {
  return (
    <div className="container mx-auto rounded-md my-4">
      <img
        src={image}
        alt="image"
        className="bg-white md:max-h-[400px] lg:max-h-[300px] object-cover w-full rounded-t-lg"
      />
      <div className="text-white mt-4">
        <div className="flex justify-between">
          <h1 className="text-5xl font-bold">title</h1>
          <div className="flex gap-4">
            <button className="border border-white rounded px-2 max-h-10">
              <CiBookmark />
            </button>
            <button className="border border-white rounded px-2 max-h-10">
              Join
            </button>
          </div>
        </div>
        <p className="tracking-wide text-lg font-semibold flex items-center gap-2">
          <BsCalendarDate /> 22-01-2024 || <IoTimeOutline /> 10:00 PM
        </p>
        <p className="tracking-wide text-lg font-semibold flex items-center">
          <IoLocationSharp />
          Deorali Govt CollegeS
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
          voluptates commodi dicta nobis quidem, tenetur repellat! Asperiores,
          magnam sapiente accusantium molestias debitis quae laboriosam velit
          libero perspiciatis illum aliquam saepe?
        </p>
      </div>
    </div>
  );
}

export default PostDetail;
