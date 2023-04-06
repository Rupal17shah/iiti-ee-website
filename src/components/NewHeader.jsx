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
            <img src="/Images/white-logo.png" alt="logo_png" width="100px"></img>
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
                      <Link to="/administration">Administration</Link>
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
                      <Link to="/people/Faculty">Faculty</Link>
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
                      <Link to="#">PhD Student</Link>
                    </div>
                  </li>
                  <Divider />
                  <li className="aniani-menu-trigger">
                    <div className="link-button">
                      <Link to="#">MTech Student</Link>
                      <ul className="aniani-menu">
                        <li>
                          <div className="link-button">
                            <Link to="/people/MTech/2018">2018</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/MTech/2019">2019</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/MTech/2020">2020</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/MTech/2021">2021</Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <Divider />
                  <li className="aniani-menu-trigger">
                    <div className="link-button">
                      <Link to="#">BTech Student</Link>
                      <ul className="aniani-menu">
                        <li>
                          <div className="link-button">
                            <Link to="/people/BTech/2018">2018</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/BTech/2019">2019</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/BTech/2020">2020</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/BTech/2021">2021</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/BTech/2022">2022</Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <Divider />

                  <li className="aniani-menu-trigger">
                    <div className="link-button">
                      <Link to="#">Alumni</Link>
                      <ul className="aniani-menu">
                        <li>
                          <div className="link-button">
                            <Link to="/people/Alumni/2014">2014</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/Alumni/2015">2015</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/Alumni/2016">2016</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/Alumni/2017">2017</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/people/Alumni/2018">2018</Link>
                          </div>
                        </li>
                      </ul>
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
                  <li className="aniani-menu-trigger">
                    <div className="link-button">
                      <Link to="#">Recent Publications</Link>
                      <ul className="aniani-menu">
                        <li>
                          <div className="link-button">
                            <Link to="https://drive.google.com/file/d/11-FnA1ob4pFqLmf6Oxnm5am7EiBfcgBB/view?usp=sharing">
                              2014
                            </Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="https://drive.google.com/file/d/1petTxLWlLA6UUyrPzigtUqQkTEEyiAo3/view?usp=share_link">
                              2015
                            </Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="https://drive.google.com/file/d/1v0943WJchHuHnRz165YcrYiCUMuzDJSI/view?usp=share_link">
                              2016
                            </Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="https://drive.google.com/file/d/1Hk5HSjU-3dX8PJwqs0eJzomGTRtEtOqO/view?usp=share_link ">
                              2017
                            </Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="https://drive.google.com/file/d/1DOTYJUGoaRlMVdumamsFBWBoeA5PHOX7/view?usp=sharing">
                              2018
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="link-button">
                            <Link to="https://drive.google.com/file/d/1kvh7ALhO19oXuUyz4G1SvPHc9BcO968z/view?usp=share_link">
                              2019
                            </Link>
                          </div>
                        </li>
                      </ul>
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
                      <Link to="/research/programs">Programs</Link>
                    </div>
                  </li>
                  <Divider />
                  <li className="aniani-menu-trigger">
                    <div className="link-button">
                      <Link to="#">Courses</Link>
                      <ul className="aniani-menu">
                        <li>
                          <div className="link-button">
                            <Link to="/courses/BTech">BTech</Link>
                          </div>
                        </li>
                        <Divider />
                        <li>
                          <div className="link-button">
                            <Link to="/courses/MTech">MTech</Link>
                          </div>
                        </li>
                      </ul>
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
                      <Link to="/achievements/books">Books Published</Link>
                    </div>
                  </li>
                  <Divider />
                  {/* <li>
                    <div className="link-button">
                      <Link to="/achievements/paper">Paper Published</Link>
                    </div>
                  </li> */}
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/achievements/scholarship">
                        Scholarship publication
                      </Link>
                    </div>
                  </li>
                  <Divider />
                  <li>
                    <div className="link-button">
                      <Link to="/achievements/awards">
                        Awards & Recognition
                      </Link>
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