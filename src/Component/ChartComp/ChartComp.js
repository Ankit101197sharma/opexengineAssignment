import React, { useState } from "react";
import "./ChartComp.css";
import Chart from "react-apexcharts";
import FolderD2 from "../../Assests/FolderD2.svg";

import ReactApexChart from "react-apexcharts";

const ChartComp = () => {
  //   const data = {
  //       series: [
  //         {
  //           name:"series",
  //           data: [35, 28, 42, 11],
  //         },
  //       ],
  //       options: {
  //         chart: {
  //           type: "bar",
  //           height: 240,
  //           toolbar: {
  //             show: true,
  //             tools: {
  //               download: false,
  //             },

  //           },

  //         },
  //         fill: {
  //           colors: ['#F44336', '#E91E63', '#9C27B0',"#9C27B0"]
  //         },
  //         title: {
  //           text: "Recognized Revenue Growth Rate",
  //           style: {
  //             fontFamily: "Fira Sans",

  //             fontWeight: 500,
  //             fontSize: 14,

  //           },

  //         },

  //         plotOptions: {
  //           bar: {
  //             borderRadius: 4,
  //            horizontal: true,

  //             dataLabels: {
  //               position: 'top', // top, center, bottom
  //             },

  //           },

  //         },
  //         dataLabels: {
  //           enabled: true,
  //           formatter: function (data) {
  //             return data + "%";
  //           },
  //           offsetX: 40,
  //           style: {
  //             fontSize: '12px',
  //             colors: ["#304758"]
  //           }
  //         },

  //         xaxis: {
  //           categories: [
  //             "My Company",
  //             "SaaS » By Ownership » Private » Revenue : All",
  //             "SaaS » By Capital Investment » >$100M",
  //             "SaaS » By EBITDA » >$0 » Revenue : $1M-$10M",
  //           ],

  //         },
  //       },

  // };
  const insightChart = [
    {
      series: [
        {
          data: [35, 28, 42, 11],
          name: "Companies",
        },
      ],
      options: {
        chart: {
          type: "bar",
          toolbar: {
            show: true,
            tools: {
              download: false,
            },
          },
        },
        title: {
          text: "Recognized Revenue Growth Rate",
          style: {
            fontFamily: "Fira Sans",

            fontWeight: 500,
            fontSize: 14,
          },
        },

        fill: {
          colors: ["#EF8903", "#041A72", "#041A72", "#041A72"],
        },
        legend: {
          show: false,
        },

        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            distributed: true,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
        },
        dataLabels: {
          enabled: true,
          formatter: function (data) {
            return data + "%";
          },
          offsetX: 22,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },
        // yaxis: {
        //   title: {
        //     text: "Years",
        //     offsetX: 0,
        //     offsetY: 0,
        //     style: {
        //       fontSize: "13px",
        //       fontWeight: 600,
        //       textAlign: "right",
        //       cssClass: "apexcharts-xaxis-title",
        //     },
        //   },
        //   labels: {
        //     show: true,
        //   },
        // },
        xaxis: {
          // title: {
          //   text: "Partnered companies",
          //   offsetX: 0,
          //   offsetY: 0,
          //   style: {
          //     fontSize: "13px",
          //     fontWeight: 600,
          //     textAlign: "center",
          //     cssClass: "apexcharts-xaxis-title",
          //   },
          // },
          labels: {
            show: true,
          },
          categories: [
            "My Company",
            "SaaS » By Ownership » Private » Revenue : All",
            "SaaS » By Ownership » Private » Revenue : All",
            "SaaS » By EBITDA » >$0 » Revenue : $1M-$10M",
          ],
        },
      },
    },
    {
      series: [
        {
          data: [35, 20, 42, 11],
          name: "Companies",
        },
      ],
      options: {
        chart: {
          type: "bar",
          toolbar: {
            show: true,
            tools: {
              download: false,
            },
          },
        },
        title: {
          text: "Recognized Revenue",
          style: {
            fontFamily: "Fira Sans",

            fontWeight: 500,
            fontSize: 14,
          },
        },

        fill: {
          colors: ["#EF8903", "#041A72", "#041A72", "#041A72"],
        },
        legend: {
          show: false,
        },

        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            distributed: true,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
        },
        dataLabels: {
          enabled: true,
          formatter: function (data) {
            return data + "%";
          },
          offsetX: 22,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },
        yaxis: {
          // title: {
          //   text: "Years",
          //   offsetX: 0,
          //   offsetY: 0,
          //   style: {
          //     fontSize: "13px",
          //     fontWeight: 600,
          //     textAlign: "center",
          //     cssClass: "apexcharts-xaxis-title",
          //   },
          // },
          labels: {
            show: true,
          },
        },
        xaxis: {
          // title: {
          //   text: "Partnered companies",
          //   offsetX: 0,
          //   offsetY: 0,
          //   style: {
          //     fontSize: "13px",
          //     fontWeight: 600,
          //     textAlign: "center",
          //     cssClass: "apexcharts-xaxis-title",
          //   },
          // },
          labels: {
            show: true,
          },
          categories: [
            "My Company",
            "SaaS » By Ownership » Private » Revenue : All",
            "SaaS » By Ownership » Private » Revenue : All",
            "SaaS » By EBITDA » >$0 » Revenue : $1M-$10M",
          ],
        },
      },
    },
    {
      series: [
        {
          data: [35, 20, 42, 11],
          name: "Companies",
        },
      ],
      options: {
        chart: {
          type: "bar",
          toolbar: {
            show: true,
            tools: {
              download: false,
            },
          },
        },
        title: {
          text: "Annual Recurring Revenue",
          style: {
            fontFamily: "Fira Sans",

            fontWeight: 500,
            fontSize: 14,
          },
        },
        fill: {
          colors: ["#EF8903", "#041A72", "#041A72", "#041A72"],
        },
        legend: {
          show: false,
        },

        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            distributed: true,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
        },
        dataLabels: {
          enabled: true,
          formatter: function (data) {
            return data + "%";
          },
          offsetX: 22,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },
        yaxis: {
          // title: {
          //   text: "Years",
          //   offsetX: 0,
          //   offsetY: 0,
          //   style: {
          //     fontSize: "13px",
          //     fontWeight: 600,
          //     textAlign: "center",
          //     cssClass: "apexcharts-xaxis-title",
          //   },
          // },
          labels: {
            show: true,
          },
        },
        xaxis: {
          // title: {
          //   text: "Partnered companies",
          //   offsetX: 0,
          //   offsetY: 0,
          //   style: {
          //     fontSize: "13px",
          //     fontWeight: 600,
          //     textAlign: "center",
          //     cssClass: "apexcharts-xaxis-title",
          //   },
          // },
          labels: {
            show: true,
          },
          categories: [
            "My Company",
            "SaaS » By Ownership » Private » Revenue : All",
            "SaaS » By Ownership » Private » Revenue : All",
            "SaaS » By EBITDA » >$0 » Revenue : $1M-$10M",
          ],
        },
      },
    },
    {
      series: [
        {
          data: [35, 20, 42, 11],
          name: "Companies",
        },
      ],
      options: {
        chart: {
          type: "bar",
          toolbar: {
            show: true,
            tools: {
              download: false,
            },
          },
        },
        title: {
          text: "YoY Growth in ARR",
          style: {
            fontFamily: "Fira Sans",

            fontWeight: 500,
            fontSize: 14,
          },
        },
        fill: {
          colors: ["#EF8903", "#041A72", "#041A72", "#041A72"],
        },
        legend: {
          show: false,
        },

        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            distributed: true,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
        },
        dataLabels: {
          enabled: true,
          formatter: function (data) {
            return data + "%";
          },
          offsetX: 22,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },
        yaxis: {
          // title: {
          //   text: "Years",
          //   offsetX: 0,
          //   offsetY: 0,
          //   style: {
          //     fontSize: "13px",
          //     fontWeight: 600,
          //     textAlign: "center",
          //     cssClass: "apexcharts-xaxis-title",
          //   },
          // },
          labels: {
            show: true,
          },
        },
        xaxis: {
          // title: {
          //   text: "Partnered companies",
          //   offsetX: 0,
          //   offsetY: 0,
          //   style: {
          //     fontSize: "13px",
          //     fontWeight: 600,
          //     textAlign: "center",
          //     cssClass: "apexcharts-xaxis-title",
          //   },
          // },
          labels: {
            show: true,
          },
          categories: [
            "My Company",
            "SaaS » By Ownership » Private » Revenue : All",
            "SaaS » By Ownership » Private » Revenue : All",
            "SaaS » By EBITDA » >$0 » Revenue : $1M-$10M",
          ],
        },
      },
    },
    {
      series: [
        {
          data: [35, 20, 42, 11],
          name: "Companies",
        },
      ],
      options: {
        chart: {
          type: "bar",
          toolbar: {
            show: true,
            tools: {
              download: false,
            },
          },
        },
        title: {
          text: "Net Dollar Retention Rate",
          style: {
            fontFamily: "Fira Sans",

            fontWeight: 500,
            fontSize: 14,
          },
        },
        fill: {
          colors: ["#EF8903", "#041A72", "#041A72", "#041A72"],
        },
        legend: {
          show: false,
        },

        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            distributed: true,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (data) {
            return data + "%";
          },
          offsetX: 22,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },
        yaxis: {
          // title: {
          //   text: "Years",
          //   offsetX: 0,
          //   offsetY: 0,
          //   style: {
          //     fontSize: "13px",
          //     fontWeight: 600,
          //     textAlign: "center",
          //     cssClass: "apexcharts-xaxis-title",
          //   },
          // },
          labels: {
            show: true,
          },
        },
        xaxis: {
          // title: {
          //   text: "Partnered companies",
          //   offsetX: 0,
          //   offsetY: 0,
          //   style: {
          //     fontSize: "13px",
          //     fontWeight: 600,
          //     textAlign: "center",
          //     cssClass: "apexcharts-xaxis-title",
          //   },
          // },
          labels: {
            show: true,
          },
          categories: [
            "My Company",
            "SaaS » By Ownership » Private » Revenue : All",
            "SaaS » By Ownership » Private » Revenue : All",
            "SaaS » By EBITDA » >$0 » Revenue : $1M-$10M",
          ],
        },
      },
    },
    {
      series: [
        {
          data: [35, 20, 42, 11],
          name: "Companies",
        },
      ],
      options: {
        chart: {
          type: "bar",
          toolbar: {
            show: true,
            tools: {
              download: false,
            },
          },
        },
        title: {
          text: "Magic Number of Sales & Marketing Efficiency  ",
          style: {
            fontFamily: "Fira Sans",

            fontWeight: 500,
            fontSize: 14,
            padding:100,
          },
        },
        fill: {
          colors: ["#EF8903", "#041A72", "#041A72", "#041A72"],
        },
        legend: {
          show: false,
        },

        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            distributed: true,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (data) {
            return data + "%";
          },
          offsetX: 22,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },
        yaxis: {
          // title: {
          //   text: "Years",
          //   offsetX: 0,
          //   offsetY: 0,
          //   style: {
          //     fontSize: "13px",
          //     fontWeight: 600,
          //     textAlign: "center",
          //     cssClass: "apexcharts-xaxis-title",
          //   },
          // },
          labels: {
            show: true,
          },
        },
        xaxis: {
          // title: {
          //   text: "Partnered companies",
          //   offsetX: 0,
          //   offsetY: 0,
          //   style: {
          //     fontSize: "13px",
          //     fontWeight: 600,
          //     textAlign: "center",
          //     cssClass: "apexcharts-xaxis-title",
          //   },
          // },
          dataLabels: {
            enabled: true,
            formatter: function (data) {
              return data + "%";
            },
            offsetX: 22,
            style: {
              fontSize: "12px",
              colors: ["#304758"],
            },
          },
          categories: [
            "My Company",
            "SaaS » By Ownership » Private » Revenue : All",
            "SaaS » By Ownership » Private » Revenue : All",
            "SaaS » By EBITDA » >$0 » Revenue : $1M-$10M",
          ],
        },
      },
    },
  ];

  return (
    <>
      <div className="mainDiv11 ">
        {insightChart.map((insightChart) => {
          return (
            <>
              <div className="imgGrid">
                <div className="imgContainer">
                  <div className="acard">
                    <ReactApexChart
                      options={insightChart.options}
                      series={insightChart.series}
                      type="bar"
                      width="95%"
                      height="180%"
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ChartComp;
