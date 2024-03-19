import React from "react";
import "../../../assets/css/team.css";
import "../../../assets/css/funfacts.css";
import { Container, Row, Col } from "react-bootstrap";
import Team_box from "./Team_box";
import team1 from "../../../assets/Image/team-1.jpg";
import team2 from "../../../assets/Image/team-2.jpg";
import team3 from "../../../assets/Image/team-3.jpg";
import team4 from "../../../assets/Image/team-4.jpg";
import { Facebook, Google, Twitter } from "react-bootstrap-icons";
import {
  AccountCircleOutlined,
  AvTimer,
  CardGiftcard,
  LayersOutlined,
  SupervisedUserCircleOutlined,
} from "@mui/icons-material";

const profile = [
  {
    profile_img: team1,
    profile_name: "#Charles Hudson",
    profile_gmail: "CharlesH@gmail.com",
    profile_work: "CEO/Founder",
    fb_icon: <Facebook />,
    google_icon: <Google />,
    Twiter_icon: <Twitter />,
  },
  {
    profile_img: team2,
    profile_name: "#RICHARD VILLA",
    profile_gmail: "Villa@gmail.com",
    profile_work: "UI/UX Designer",
    fb_icon: <Facebook />,
    google_icon: <Google />,
    Twiter_icon: <Twitter />,
  },
  {
    profile_img: team3,
    profile_name: "#THEODORE DICKSON",
    profile_gmail: "TheodoreD@gmail.com",
    profile_work: "PHP Devloper",
    fb_icon: <Facebook />,
    google_icon: <Google />,
    Twiter_icon: <Twitter />,
  },
  {
    profile_img: team4,
    profile_name: "#WILLIAM PHILLIPS",
    profile_gmail: "WilliamP@gmail.com",
    profile_work: "WP Devloper",
    fb_icon: <Facebook />,
    google_icon: <Google />,
    Twiter_icon: <Twitter />,
  },
];

const count = [
  {
    icon: <AvTimer sx={{ fontSize: 50 }} />,
    count: 654,
    name: "Working Hours",
    start: 4,
  },
  {
    icon: <CardGiftcard sx={{ fontSize: 50 }} />,
    count: 6400,
    name: "Completed Projects",
    start: 10,
  },
  {
    icon: <AccountCircleOutlined sx={{ fontSize: 50 }} />,
    count: 2389,
    name: "No. of Clients",
    start: 201,
  },
  {
    icon: <SupervisedUserCircleOutlined sx={{ fontSize: 50 }} />,
    count: 653,
    name: "Team Member",
    start: 2,
  },
];
function Team() {
  return (
    <>
      {/* START TEAM  */}
      <section className="section bg-light" id="team">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <div className="text-center mx-auto lan_sec-title">
                <h2 className="fw-bold">Our Team</h2>
                <div className="bus_lan_titbor">
                  <i className="mdi mdi-vector-combine">
                    <LayersOutlined />
                  </i>
                </div>
                <p className="text-muted bus_subtitle mx-auto mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-4 pt-4">
            <Team_box profileBox={profile} />
          </Row>
        </Container>
      </section>
      {/* START TEAM  */}

      {/* FUNFACT START  */}
      <section className="section bg-dark">
        <Container>
          <Row>
            <Team_box count={count} />
          </Row>
        </Container>
      </section>
      {/* FUNFACT END  */}
    </>
  );
}

export default Team;
