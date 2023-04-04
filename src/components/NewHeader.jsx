import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Components Css/Header.css";
const NewHeader = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <div className="navdiv">
        <nav className="naviiii">
          <div className="logo-text">
            <img
              src="/Images/white-logo.png"
              alt="logo_png"
              width="100px"
            ></img>
            <div>
              <Typography variant="h5" color={"white"} padding={5}>
                Indian Institute Of Technology Indore
                <br /> Department Of Electrical Engineering
              </Typography>
            </div>
          </div>

          <div className="menu-wrapper">
            <ul className="nav-links">
              <li className="menu">
                <Link to="/">Home</Link>
              </li>
              <li className="menu">
                <Link to="/">About</Link>
                <ul className="ani-menu">
                  <li>
                    <div className="link-button">
                      <Link to="/about">Department</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/admministration">Administration</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/contact">Contact Us</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/gallery">Gallery</Link>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="menu">
                <Link to="">People</Link>
                <ul className="ani-menu">
                  <li>
                    <div className="link-button">
                      <Link to="/people/faculty">Faculty</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/people/Staff">Staff</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/people/PhD">PhD Student</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/people/Mtech">MTech Student</Link>
                    </div>
                  </li>
                  <Divider />
                  <li className="aniani-menu-trigger">
                    <div className="link-button">
                      <Link to="/people/Btech">BTech Student </Link>
                      <ul className="aniani-menu">
                        <li>
                          <div className="link-button">
                            <Link to="/people/btech/2020">2020</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/btech/2021">2021</Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <Divider />
                  <li className="aniani-menu-trigger">
                    <div className="link-button">
                      <Link to="/people/Btech">BTech Student </Link>
                      <ul className="aniani-menu">
                        <li>
                          <div className="link-button">
                            <Link to="/people/faculty">3020</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/Staff">3021</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/PhD">3022</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/PhD">3022</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/PhD">3022</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/PhD">3022</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/PhD">3022</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/PhD">3022</Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/people/Alumni">Alumni</Link>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="menu">
                <Link to="">Research</Link>
                <ul className="ani-menu">
                  <li>
                    <div className="link-button">
                      <Link to="/research">Research Areas</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/labs">Laboratories</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="#">Recent Publications</Link>
                    </div>
                  </li>
                  <Divider />

                  <li>
                    <div className="link-button">
                      <Link to="#">Projects</Link>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="menu">
                <Link to="">Academics</Link>
                <ul className="ani-menu">
                  <li>
                    <div className="link-button">
                      <Link to="#">Programs</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="">Courses</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="">Scholarships Publications</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="">Awards and Recognitions</Link>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="menu">
                <Link to="">Achievements</Link>
                <ul className="ani-menu">
                  <li>
                    <div className="link-button">
                      <Link to="/people/faculty">Faculty</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/people/Staff">Staff</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/people/PhD">PhD Student</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/people/Mtech">MTech Student</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/people/Btech">BTech Student</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/people/Alumni">Alumni</Link>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="menu">
                <Link to="">Open Positions</Link>
                <ul className="ani-menu">
                  <li>
                    <div className="link-button">
                      <Link to="">Faculty Positions</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="">PhD Positions</Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="">Project Positions</Link>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Box>
  );
};

export default NewHeader;
