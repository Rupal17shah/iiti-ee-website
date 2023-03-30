import React from "react";
import { useNavigate } from "react-router-dom";
import "./Staff_card.css"

export default function Staff_Cards(props) {
  const navigate = useNavigate();
  return (
    <a href={props.action}>
      <div className="rounded-2xl border-2 flex flex-col lg:flex-row lg:justify-around justify-start items-center lg:items-start py-8">
        <div>
          <img
            className="w-48 h-48 lg:ml-8 object-cover"
            src={props.photo}
          ></img>
        </div>
        <div className="flex flex-col px-4 lg:px-0 lg:mx-4">
          <h1 className="text-2xl font-bold text-[#9D0455] capitalize text-center lg:text-left">
            {props.name}
          </h1>
          <h1 className="text-md mt-2 capitalize text-center lg:text-left">
            {props.specialisation}
          </h1>
          <h1 className="text-lg font-bold mt-6 text-center lg:text-left">
            Research Interest
          </h1>
          <h1 className="text-xl lg:ml-4 text-sm text-center lg:text-left">
            {props.research1}
          </h1>
        </div>
        <div className="flex flex-col text-sm mt-3 lg:mt-0 lg:mr-4">
          <h1 className="text-gray-400">Email: {props.email}</h1>
          <h1 className="text-gray-400">{props.ph}</h1>
          <h1 className="text-gray-400">{props.address}</h1>
        </div>
      </div>
    </a>
  );
}
