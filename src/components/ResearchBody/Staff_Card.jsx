import React from "react";
import { Card, CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonBase } from "@mui/material";
import { CardActionArea } from "@mui/material";

export default function Staff_Cards(props) {
    const navigate = useNavigate();
    return (
        <a href={props.action}>
            <div className="rounded-2xl border-2 flex flex-row justify-around py-16">
                <div><img className="w-64 h-64 object-cover" src={props.photo}></img></div>
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold text-[#9D0455] capitalize">{props.name}</h1>
                    <h1 className="text-xl mt-2 capitalize">{props.specialisation}</h1>
                    <h1 className="text-2xl font-bold mt-6">Research Interest</h1>
                    <h1 className="text-xl ml-4"><span className="font-bold">⋅</span>{props.research1}</h1>
                    <h1 className="text-xl ml-4"><span className="font-bold">⋅</span>{props.research2}</h1>
                    <h1 className="text-xl ml-4"><span className="font-bold">⋅</span>{props.research3}</h1>
                    <h1 className="text-xl ml-4"><span className="font-bold">⋅</span>{props.research4}</h1>
                </div>
                <div className="flex flex-col">
                    <h1>Email: {props.email}</h1>
                    <h1>{props.ph}</h1>
                    <h1>{props.address}</h1>

                </div>
            </div>
        </a>
    );
}