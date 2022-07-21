import React, {useState, useEffect} from "react";
import "./LandingPage.css";
import grayVector from "../../Assests/grayVector.svg";

import  { dataSet, projectData } from "../../DataFile";
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
// import Button from "react-bootstrap/Button";


const LandingPage = () => {
  const [facts, setFacts] = useState([]);

  
  useEffect(() => {
      fetch("https://catfact.ninja/fact")
      .then((result)=>{
        result.json().then((resp)=>{
          setFacts(resp.fact)
        })
      })


  }, []);
// console.log("###",  facts.fact)

const projectData = [
    {
      projectIcon: `${GroupGreen}`,
      projectYear: "2021 SMC Platform",
      projectButton: "View",
      statusText: "live",

      projectDate: "Last Updated on: 02/01/2022",
      projectSucces: "",
      projectSuceesText: "100% Completed",
      completion: 100,
      projectProgress: "success",
    },
    {
      projectIcon: `${GroupBlue}`,
      projectYear: "2022 SMC Platform",
      projectButton: "Resume",
      projectDate: "Last Updated on: 02/01/2022",
      projectSucces: "",
      projectSuceesText: "80% Completed",
      completion: 80,
      projectProgress: "primary",
    },
  ];
  

  

  const getColor = (data) => {
    console.log("##", data);

    switch (data) {
      case 100:
        return "#1EA706";

      case 80:
        return "#e9ecef";
      default:
        return "yellow";
    }
  };


  
  
 




  return (
    <>
      <div className="landingSection">
        <div className="mainDiv">
          <p className="benchmarkPara">
            BenchmarkEngine <span className="text-warning">/ </span>
            <span className="fw-bold">Mydata</span>
          </p>
          <div className="dashbord">
            <div>
              <img src={grayVector} alt="" />
            </div>
            <div>
              <p className="mainHead mb-0">DashBoard</p>
              <p className="mainHeadText ml-0">
                Welcome to your BenchmarkEngine™
              </p>
            </div>
          </div>
        </div>
        <div className="mainContainer">
          <div className="Left_part1">
            <div>
              <div className="contentHead">
                <div className="recentService">
                  <div className="mt-3">
                    <p className="surveyPara">MY RECENT SURVEYS</p>
                  </div>
                  <div className="recentServiceRight">
                    <div style={{ width: "18%" }}>
                      <p className="surveyPara">legend :</p>
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
                    <div className="triangleCopy">
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
                        <div className="projectIcons">
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
                        <div className="actionChildDiv">
                          <div>
                            {console.log("####", getColor(data.completion))}
                            <ProgressBar
                              style={{
                                backgroundColor: getColor(data.completion),
                              }}
                              className="progress"
                              variant={data.completion === 100 && "success"}
                              now={data.completion}
                            />

                            <span className="live">{data.statusText}</span>
                          </div>

                          <div>
                            <p className="surveyStatus">
                              {data.projectSuceesText}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="actionHeadDiv">
                        <div>
                          <button className="  btn-secoundry buttonAction">
                            {data.projectButton}
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          {dataSet.map((item) => {
            return (
              <div className="Right_part">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={Rectangle4} className="img_CArd" alt="..." />
                      <div className="carousel-caption d-block d-md-block text-start">
                        <button className="buttonSlider">
                          {" "}
                          {item.newsBtn}{" "}
                        </button>

                        <h5 className="newEvt">{item.newEvent}</h5>
                        <p className="eventPara ">{facts}</p>
                        <p className="vBtn">
                          {" "}
                          {item.viewBtn} <img src={ArrowRight} alt="" />{" "}
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={Rectangle4} className="img_CArd" alt="..." />
                      <div className="carousel-caption d-block d-md-block text-start">
                        <button className="buttonSlider">
                          {" "}
                          {item.newsBtn}{" "}
                        </button>

                        <h5 className="newEvt">{facts}</h5>
                        <p className="eventPara ">{item.eventPara}</p>
                        <p className="vBtn">
                          {" "}
                          {item.viewBtn} <img src={ArrowRight} alt="" />{" "}
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={Rectangle4} className="img_CArd" alt="..." />
                      <div className="carousel-caption d-block d-md-block text-start">
                        <button className="buttonSlider">
                          
                          {item.newsBtn}
                        </button>

                        <h5 className="newEvt">{facts}</h5>
                        <p className="eventPara ">{item.eventPara}</p>
                        <p className="vBtn">
                          
                          {item.viewBtn} <img src={ArrowRight} alt="" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="button-Div">
          <div className="buttons-child">
            <div className="d-flex">
              <p className="buttonBench">My Benchmarks</p>
              <div className="selectbtn">
                <select className="form-select" aria-label="Default select example">
                  <option selected>Saved Dashboards</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="buttons-group">
              <button className="buttonUser">
               
                <img src={FolderD2} alt="" /> Save Dashboard
              </button>
              <button className="buttonUser">
              
                <img src={VectorSetting} alt="" /> Manage Dashboard
              </button>
              <button className="buttonUser">
                
                <img src={VectorAdd} alt="" /> Add Benchmark
              </button>
              <button className="buttonUser2">
                
                <img src={MenuIcon} alt="" />
              </button>
              <button className="buttonUser2">
                
                <img src={Menu2} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
