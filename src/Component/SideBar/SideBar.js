import React from 'react';
import "./SideBar.css"
import Form from "react-bootstrap/Form";
import upload from "../../Assests/upload.svg";
import FormControl from "react-bootstrap/FormControl";
import icon1 from "../../Assests/icon1.svg";
import searchIcon from "../../Assests/searchIcon.svg";
import rightArrow from "../../Assests/rightArrow.svg";
import meterCircle from "../../Assests/meterCircle.svg";
import squircleStroke from "../../Assests/squircleStroke.svg";
import Analytics1 from "../../Assests/Analytics1.svg";
import Graph from "../../Assests/Graph.svg";
import Scanning1 from "../../Assests/Scanning1.svg";
import Football from "../../Assests/Football.svg";
import Folder2 from "../../Assests/Folder2.svg";
import MessageLeft from "../../Assests/MessageLeft.svg";
import Task from "../../Assests/Tasks.svg";
import UserAdded from "../../Assests/UserAdded.svg";
import ShapeCross from "../../Assests/ShapeCross.svg";
import meterVector from "../../Assests/meterVector.svg"
import { dataButtion } from '../../DataFile';

const SideBar = () => {
    const dataButtion=[
        {
            imgSrc: `${meterCircle}`,
          },
          {
            imgSrc: `${squircleStroke}`,
          },
          {
            imgSrc: `${Analytics1}`,
          },
          {
            imgSrc: `${Graph}`,
          },
          {
            imgSrc: `${Scanning1}`,
          },
          {
            imgSrc: `${Football}`,
          },
          {
            imgSrc: `${Folder2}`,
          },
          {
            imgSrc: `${MessageLeft}`,
          },
          {
            imgSrc: `${Task}`,
          },
          {
            imgSrc: `${UserAdded}`,
          },
    ]
  return (
    <div>
        <div className="leftBar">
        <div className="arrowDiv">
          <img src={rightArrow} alt="" />
        </div>
        <div className="iconDiv">
          {dataButtion.map((item) => {
            return <img src={item.imgSrc} alt="" />;
          })}
        </div>
      </div>
     
    </div>
  )
}

export default SideBar;