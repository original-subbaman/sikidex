import React from "react";
import image from "../assets/rainforest.jpg";
import { BsCalendarDate } from "react-icons/bs";
import { IoTimeOutline, IoLocationSharp } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import Button from "../components/Button";
function PostDetail(props) {
  return (
    <div className="md:container mx-auto  rounded-md md:my-4 md:px-10 h-screen  md:h-full">
      <img
        src={image}
        alt="image"
        className="bg-white max-h-[200px] md:max-h-[300px] lg:max-h-[350px] object-cover w-full md:rounded-t-lg"
      />
      <div className=" text-white rounded-b-lg bg-[#171d1c] p-2 h-full">
        <div className="flex justify-between">
          <h1 className="text-5xl font-bold mb-2">title</h1>
          <div className="flex gap-4">
            <Button>
              <CiBookmark />
            </Button>
            <Button>Join</Button>
          </div>
        </div>
        <p className="tracking-wide text-lg font-semibold flex items-center gap-2">
          <BsCalendarDate /> 22-01-2024 || <IoTimeOutline /> 10:00 PM
        </p>
        <p className="tracking-wide text-lg font-semibold flex items-center my-4">
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
