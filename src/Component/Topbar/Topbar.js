import React from "react";
import "./Topbar.css";
import logoOpex from "../../Assests/logoOpex.svg";
import dropdown from "../../Assests/dropdown.svg";
import bell from "../../Assests/bell.svg";
import personCircle from "../../Assests/personCircle.svg";

const Topbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white ">
        <div className="container-fluid opex_engine ">
          
          <div >
          <a className="navbar-brand" href="#">
            <img src={logoOpex} alt="" />
          </a>
          </div>
          
          <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon d-block">
              
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-space-between">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Servey 2021 <img src={dropdown} alt="" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      TechSmart <img src={dropdown} alt="" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <img className="nav-link " src={bell} alt="" />
                  </li>
                  <li className="nav-item">
                    <img className="nav-link " src={personCircle} alt="" />
                  </li>
                </ul>
              
            </span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarTogglerDemo02"
          ></div>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-space-between">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Servey 2021 <img src={dropdown} alt="" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  TechSmart <img src={dropdown} alt="" />
                </a>
              </li>
              <li className="nav-item">
                <img className="nav-link " src={bell} alt="" />
              </li>
              <li className="nav-item">
                <img className="nav-link " src={personCircle} alt="" />
              </li>
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
