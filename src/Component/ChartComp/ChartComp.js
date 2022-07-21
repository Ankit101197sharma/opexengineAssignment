import React from "react";
import "./ChartComp.css";

import ReactApexChart from "react-apexcharts";
import graphData from "../../ChartData";

const ChartComp = () => {
  return (
    <>
      <div className="mainDiv11 ">
        
        {
           graphData.map((item)=>{
            return(
              <>
              <div className="imgGrid">
                <div className="imgContainer">
                  <div className="acard">
                    <ReactApexChart
                      options={item.options}
                      series={item.series}
                      type="bar"
                      width="90%"
                      height="180%"
                    />
                  </div>
                </div>
              </div>
              
              </>
            )
           })
        }
        
        
      </div>
    </>
  );
};

export default ChartComp;