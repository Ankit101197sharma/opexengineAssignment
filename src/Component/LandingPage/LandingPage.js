import React, { useState } from "react";
import "./LandingPage.css";

import icon1 from "../../Assests/icon1.svg";
import tableData, { dataSet, projectData } from "../../DataFile";
import Slider from "react-slick";
import FolderD2 from "../../Assests/FolderD2.svg";
import VectorSetting from "../../Assests/VectorSetting.svg";
import VectorAdd from "../../Assests/VectorAdd.svg";
import Rectangle4 from "../../Assests/Rectangle4.svg";
import ArrowRight from "../../Assests/ArrowRight.svg";
import TriangleCopy from "../../Assests/TriangleCopy.svg";
import Triangle from "../../Assests/Triangle.svg";
import GroupGreen from "../../Assests/GroupGreen.svg";
import GroupBlue from "../../Assests/GroupBlue.svg";
import MenuIcon from "../../Assests/MenuIcon.svg";
import Menu2 from "../../Assests/Menu2.svg";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { GiHamburgerMenu } from "react-icons/gi";

const LandingPage = () => {
  const projectData = [
    {
      projectIcon: `${GroupGreen}`,
      projectYear: "2021 SMC Platform",
      projectButton: "View",
      status: "live",
      
      projectDate: "Last Updated on: 02/01/2022",
      projectSucces: 100,
      projectProgress: "success",
    },
    {
      projectIcon: `${GroupBlue}`,
      projectYear: "2022 SMC Platform",
      projectButton: "Resume",
      projectDate: "Last Updated on: 02/01/2022",
      projectSucces: 80,
      projectProgress: "primary",
    },
  ];
  const [bgColor, setBgColor] = useState({
    success: "#1EA706",
    danger: "#0d6efd",
    info: "#dc3545",
    primary: "#0866C6",
  });

  const settings = {
    dots: true,
    
  };


  const getColor=(data)=>{
    console.log(data===100,"dddddddddd")

    switch(data){

  case (100):
    return "#1EA706";
  
    case (80):
      return "#0866C6";
      default:
        return "yellow"
}
  }
  return (
    <>
      <div className="landingSection">
        <div className="mainDiv">
          <p className="benchmarkPara">
            BenchmarkEngine <span className="text-warning" >/ </span>
            <span className="fw-bold" >Mydata</span>
          </p>
          <div className="dashbord">
            <div>
              <img src={icon1} alt="" />
            </div>
            <div>
              <p className="mainHead">DashBoard</p>
              <p className="mainHeadText">Welcome to your BenchmarkEngine™</p>
            </div>
          </div>
        </div>
        <div className="mainContainer">
          <div className="mainContainerLeft">
            <div>
              <div className="contentHead">
                <div className="recentService">
                  <div className="mt-3" >
                    <p className="surveyPara">MY RECENT SURVEYS</p>
                  </div>
                  <div className="recentServiceRight">
                    <div style={{width:'18%'}} >
                      <p className="surveyPara">legend :</p>{" "}
                    </div>

                    <div className="legendItem">
                      <div className="checkbox "></div>
                      <p className="surveyPara">NOT STARTED</p>
                      <div className="checkbox1"></div>
                      <p className="surveyPara">in progress</p>
                      <div className="checkbox3"></div>
                      <p className="surveyPara">complete</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="actionHead">
                <div className="actionHeadDiv">
                  <p className="surveyPara">Survey </p>
                </div>
                <div className="actionHeadDiv">
                  <p className="surveyPara">Progress</p>
                  <div className="triangleDiv">
                    <div>
                      <img src={Triangle} alt="" />
                    </div>
                    <div className="triangleCopy" >
                      <img src={TriangleCopy} alt="" />
                    </div>
                  </div>
                </div>
                <div className="actionHeadDiv">
                  <p className="surveyPara">Action</p>
                </div>
              </div>

              {projectData.map((data) => {
                return (
                  <>
                    <div className="actionHead">
                      <div className="actionHeadDiv">
                        <div>
                          {" "}
                          <img src={data.projectIcon} alt="" />{" "}
                        </div>
                        <div
                        className="projectIcons"
                         
                        >
                          <span className="surveyPara1">
                            {" "}
                            {data.projectYear}{" "}
                          </span>
                          <span className="surveyPara2">
                            {data.projectDate}{" "}
                          </span>
                        </div>
                      </div>
                      <div className="actionHeadDiv">
                        <div
                        className="actionChildDiv"
                          
                        >
                          <div >
                            <ProgressBar 
                            style={{
                              backgroundColor: getColor(data.projectSucces)
                            }}
                            className="progress"
                              // variant={data.projectSucces}
                              now={data.projectSucces}
                            />
                            
                            <span className="live">{data.status}</span>
                          </div>
                          
                          <div>
                            <p className="surveyStatus">{data.projectSucces}</p>
                          </div>
                        </div>
                      </div>
                      <div className="actionHeadDiv">
                        <div>
                          <Button className="buttons">
                            {data.projectButton}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="mainContainerRight">
            {dataSet.map((item) => {
              return (
                <>
                  <div >
                  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button style={{width:"8px", height:'8px',backgroundColor:"white",   borderRadius: "50%"}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active " aria-current="true" aria-label="Slide 1"></button>
    <button style={{width:"6px", height:'6px',backgroundColor:"white",   borderRadius: "50%"}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" ></button>
    <button style={{width:"6px", height:'6px',backgroundColor:"white",   borderRadius: "50%"}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item  active" data-bs-interval="1000">
      <img src={Rectangle4} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-block d-md-block">
        <button className=" btn btn-secondary"> {item.newsBtn} </button>
      
        <h5 className="newEvt" >{item.newEvent}</h5>
        <p className="eventPara"  >{item.eventPara}</p>
        <p className="vBtn">view update <img src={ArrowRight} alt="" /></p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="500">
      <img src="https://images.unsplash.com/photo-1657664068979-024361c37572?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-block d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Rectangle4} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-block d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  
</div>
                  
                   
                    {/* <div
                      id="carouselExampleCaptions"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators w-0">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="0"
                          class="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                      </div>
                      <div class="carousel-inner">
                        <div class="carousel-item ">
                           
                          <img
                          
                          style={{width:'100%', height:'248px'}}
                            src={Rectangle4}
                           
                            alt="..."
                          />
                         
                          
                          <div className="carousel-caption d-block d-md-block mb-1">
                            <button className="btn btn-secondary">
                              {item.newsBtn}
                            </button>
                            <h5 className="newEvt">{item.newEvent}</h5>
                            <p className="eventPara">{item.eventPara}</p>
                            <p className="vBtn">
                              {item.viewBtn} <img src={ArrowRight} alt="" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div
        className="button-Div"
          
        >
          <div
          className="buttons-child"
           
          >
            <div className="d-flex" >
              <p className="buttonBench">My Benchmarks</p>
              <div className="selectbtn">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Saved Dashboards</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div
            className="buttons-group"
              
            >
              <button className="buttonUser">
                {" "}
                <img src={FolderD2} alt="" /> Save Dashboard
              </button>
              <button className="buttonUser">
                {" "}
                <img src={VectorSetting} alt="" /> Manage Dashboard{" "}
              </button>
              <button className="buttonUser">
                {" "}
                <img src={VectorAdd} alt="" /> Add Benchmark{" "}
              </button>
              <button className="buttonUser2">
                {" "}
                <img src={MenuIcon} alt="" />{" "}
              </button>
              <button className="buttonUser2">
                {" "}
                <img src={Menu2} alt="" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
