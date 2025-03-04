import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
              
                <div className="search__box"><input type="search" placeholder="Find a Doctor" autofocus required style={{width:'600px', height:'40px', padding:'10px', borderRadius:'12px', background:'rgb(248 248 248 / 59%)', outline:'none'}} />
               </div>
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
