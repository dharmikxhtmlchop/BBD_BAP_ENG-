import React from "react";
import { Col } from "react-bootstrap";
import CountUp from "react-countup";

function Team_box(props) {
  return (
    <>
      {/* Start TEAMBOX  */}
      {props.profileBox &&
        props.profileBox.map((ele,index) => {
          return (
            <Col lg={3} className="mt-3" key={index}>
              <div className="team-box bg-white rounded p-4">
                <div className="team-img">
                  <img
                    src={ele.profile_img}
                    alt=""
                    className="mx-auto img-thumbnail img-fluid d-block rounded-circle"
                  />
                </div>
                <div className="team-desc text-center mt-4">
                  <h6 className="bus_team_name fw-bold text-uppercase text-custom mb-0">
                    {ele.profile_name}
                  </h6>
                  <p className="text-muted bus_team_email">
                    {ele.profile_gmail}
                  </p>
                </div>
                <div className="text-center mt-4 mb-4">
                  <h5 className="mb-0 team_work_dec text-muted">
                    <span>{ele.profile_work}</span>
                  </h5>
                </div>
                <ul className="list-inline bus_team_social mt-4 mb-0 text-center">
                  <li className="list-inline-item me-3">
                    <a href="/#">
                      <i>{ele.fb_icon}</i>
                    </a>
                  </li>
                  <li className="list-inline-item me-3">
                    <a href="/#">
                      <i>{ele.google_icon}</i>
                    </a>
                  </li>
                  <li className="list-inline-item me-3">
                    <a href="/#">
                      <i>{ele.Twiter_icon}</i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          );
        })}
      {/* END TEAMBOX  */}
      {/* Funfact Start  */}
      {props.count &&
        props.count.map((ele,index) => {
          return (
            <Col lg={3} key={index}>
              <div className="text-center lan_funfact p-4 mt-3 rounded text-white">
                <div className="lan_fun_icon mb-3">{ele.icon}</div>
                <h1 className="lan_fun_value mb-1" >
                  <CountUp
                    start={ele.start}
                    end={ele.count}
                    delay={1}
                    // enableScrollSpy={true}
                  />
                </h1>
                <p className="lan_fun_name mb-0 text-secondary">{ele.name}</p>
              </div>
            </Col>
          );
        })}
      {/* Funfact End  */}
    </>
  );
}

export default Team_box;
