import React from "react";
import "./ChartComp.css";

import ReactApexChart from "react-apexcharts";
import { graphData } from "../../ChartData";

const ChartComp = () => {

const demo = JSON.parse(JSON.stringify(graphData))

console.log(demo )

  return (
    <>
      <div className="mainDiv11 ">
        
        {
           demo.map((item)=>{
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
