import React from "react";
import { useEffect, useState, useRef } from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBirthdayCake, FaDiscord } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-parallax";
const Home2 = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isNavbarShrunk, setIsNavbarShrunk] = useState(false);
  const [marginOffset, setMarginOffset] = useState(0);
  const [marbor, setMarbor] = useState(false);
  const navscroller = () => {
    const marginFactor = 0.1;
    const scrollTop = window.scrollY;
    const padding = scrollTop / 10; // Adjust the division factor as needed
    // const navbarHeight = maxNavbarHeight - (scrollTop / 2);
    if (inputElement.current.offsetWidth > 600) {
      if (scrollTop > 20 && scrollTop < 1000) {
        setIsScrollingDown(true);
        setIsNavbarShrunk(true);
        setMarginOffset(scrollTop * marginFactor);
        inputElement2.current.style.marginLeft = `${scrollTop * marginFactor}px`;

        // inputElement.current.style.height = `${Math.max(minNavbarHeight, navbarHeight)}px`;
      } else if (scrollTop >= 1000) {
        setIsScrollingDown(true);
        setIsNavbarShrunk(true);
        // setMarginOffset(marginOffset);
        setMarbor(true);
      } else {
        setIsScrollingDown(false);
        setIsNavbarShrunk(false);
        setMarginOffset(0);
        setMarbor(false);
        inputElement2.current.style.marginLeft = `38%`;
      }
    } else if (inputElement.current.offsetWidth < 600) {
      if (scrollTop > 20 && scrollTop < 800) {
        setIsScrollingDown(true);
        setIsNavbarShrunk(true);
        setMarginOffset(scrollTop * marginFactor);

        // inputElement.current.style.height = `${Math.max(minNavbarHeight, navbarHeight)}px`;
      } else if (scrollTop >= 800) {
        setIsScrollingDown(true);
        setIsNavbarShrunk(true);
        // setMarginOffset(marginOffset);
        setMarbor(true);
      } else {
        setIsScrollingDown(false);
        setIsNavbarShrunk(false);
        setMarginOffset(0);
        setMarbor(false);
      }
    }
  };

  const inputElement = useRef();
  const inputElement2 = useRef();


  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", navscroller);
    return () => {
      window.removeEventListener("scroll", navscroller);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg sticky-top   holesection navbar-hole ${
          isNavbarShrunk ? "shrunk " : ""
        }`}
        ref={inputElement} 
        style={{
          marginLeft: isScrollingDown ? `${marginOffset}px` : "0",
          marginRight: isScrollingDown ? `${marginOffset}px` : "0",
          marginTop: isScrollingDown ? `${marginOffset}px` : "0",
          borderRadius: `${marginOffset}px`,
          border: marbor ? "4px solid white" : "none",
        }}
      >
        <div className="container">
          <div className="navbar-brand ">
            <img
              src="/images/3MetaD.png"
              alt="logo"
              height="70px"
              width="70px"
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <img src="/images/bar.png" width="50px" alt="bars" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  heading1"  ref={inputElement2} >
              <li className="nav-item item">
                <a className="nav-link text-light fw-bold" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item item">
                <a className="nav-link text-light fw-bold" href="#collections">
                  Collections
                </a>
              </li>
              <li className="nav-item item">
                <a className="nav-link text-light fw-bold" href="#roadmap">
                  RoadMap
                </a>
              </li>
              <li className="nav-item item">
                <a className="nav-link text-light fw-bold" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item item">
                <a className="nav-link text-light fw-bold" href="#connect">
                  Connect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="welcome  " id="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3"></div>
            <div className="col">
              <div className="welcometitle ">GEORGE</div>
              <div className="welcomehover text-transition">
                {/* <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide"
                  data-mdb-ride="carousel"
                > */}
                <div class="carousel-inner">
                  <Typewriter
                    options={{
                      strings: [
                        "Games and Art.",
                        "NFTs.",
                        "Collectible Items.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />

                  {/* </div> */}
                </div>
              </div>
              <div className="welcometext">
                George is here to clean the crypto world from ugly Pepe, the
                world most powerful meme is here to take over the crypto world,
                Let’s join the GeorgeArmy and take it to next level.
              </div>
              <button className="rounded-5 border-0 butsm">
                Browse Collection
              </button>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
      <div className="collections" id="collections">
        <div className="container">
          <div className="collection-title text-center pt-5 pb-5">
            Collections
          </div>
          <div className="row smscreen">
            <div className="col-lg imager">
              <img
                src="/images/1.jpg"
                className="w-100 h-100 rounded imager"
                alt="panda"
              />
            </div>
            <div className="col-lg imager">
              <img
                src="/images/2.jpg"
                className="w-100 h-100 rounded "
                alt="panda2"
              />
            </div>
            <div className="col-lg imager">
              <img
                src="/images/3.jpg"
                className="w-100 h-100 rounded "
                alt="panda"
              />
            </div>
            <div className="col-lg imager">
              <img
                src="/images/4.jpg"
                className="w-100 h-100 rounded imager"
                alt="panda"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="roadmaptitle text-left ps-5 pt-5">RoadMap</div>
      {/* <div className="roadmap" id="roadmap">
        <div class="vr ruler-width ruler"></div>
        <div className="inner">
          <span data-aos="zoom-in" data-aos-delay="500" className=" circle1  ">
            <FaBirthdayCake size={30} />
          </span>

          <div data-aos="fade-right" className="carder rounded-2">
            <div className="carder-arr">
              <IoMdArrowDropright size={30} />
            </div>

            <h3 className=" carder-title">Website Launch</h3>

            <h4>🎉🎉🎉</h4>

            <p className="mt-1 carder-text">Assembling of team members.</p>

            <p className="carder-date">2022 - Q1</p>
          </div>
        </div>
        <div className="inner">
          <span data-aos="zoom-in" data-aos-delay="500" className=" circle2  ">
            <FaBirthdayCake size={30} />
          </span>
          <div data-aos="fade-left" className="carder-2 rounded-2">
            <div className="carder-arr">
              <IoMdArrowDropleft size={30} />
            </div>

            <h3 className=" carder-title2">Website Launch</h3>

            <h4>🎉🎉🎉</h4>

            <p className="mt-1 carder-text2">Assembling of team members.</p>

            <p className="carder-date2">2022 - Q1</p>
          </div>
        </div>
        <div className="inner">
          <span data-aos="zoom-in" data-aos-delay="500" className=" circle3  ">
            <FaBirthdayCake size={30} />
          </span>
          <div data-aos="fade-right" className="carder-3 rounded-2">
            <div className="carder-arr">
              <IoMdArrowDropright size={30} />
            </div>

            <h3 className=" carder-title3">Website Launch</h3>

            <h4>🎉🎉🎉</h4>

            <p className="mt-1 carder-text3">Assembling of team members.</p>

            <p className="carder-date3">2022 - Q1</p>
          </div>
        </div>
        <div className="inner">
          <span data-aos="zoom-in" data-aos-delay="500" className=" circle4  ">
            <FaBirthdayCake size={30} />
          </span>
          <div data-aos="fade-left" className="carder-4 rounded-2">
            <div className="carder-arr">
              <IoMdArrowDropleft size={30} />
            </div>

            <h3 className=" carder-title4">Website Launch</h3>

            <h4>🎉🎉🎉</h4>

            <p className="mt-1 carder-text4">Assembling of team members.</p>

            <p className="carder-date4">2022 - Q1</p>
          </div>
        </div>
        <div className="inner">
          <span data-aos="zoom-in" data-aos-delay="500" className=" circle5  ">
            the
            <br />
            end
          </span>
        </div>
      </div> */}
      <div className="roadmap" id="roadmap">
        <div className="vr ruler"></div>
        <div className="inner">
          <span className=" circle1  ">
            <FaBirthdayCake size={30} />
          </span>
          <div className="carder">
            <h3 className=" carder-title">Website Launch</h3>

            <h4>🎉🎉🎉</h4>

            <p className="mt-1 carder-text">Assembling of team members.</p>
            <div className="carder-arr">
              <IoMdArrowDropright size={30} />
            </div>
            <p className="carder-date">2022 - Q1</p>
          </div>
        </div>
        <div className="inner2">
          <span className=" circle2  ">
            <FaBirthdayCake size={30} />
          </span>
          <div className="carder-2">
            <h3 className=" carder-title">Website Launch</h3>

            <h4>🎉🎉🎉</h4>

            <p className="mt-1 carder-text">Assembling of team members.</p>
            <div className="carder-arr">
              <IoMdArrowDropleft size={30} />
            </div>
            <p className="carder-date2">2022 - Q1</p>
          </div>
        </div>
        <div className="inner3">
          <span className=" circle3  ">
            <FaBirthdayCake size={30} />
          </span>
          <div className="carder-3">
            <h3 className=" carder-title">Website Launch</h3>

            <h4>🎉🎉🎉</h4>

            <p className="mt-1 carder-text">Assembling of team members.</p>
            <div className="carder-arr">
              <IoMdArrowDropright size={30} />
            </div>
            <p className="carder-date3">2022 - Q1</p>
          </div>
        </div>
        <div className="inner4">
          <span className=" circle4  ">
            <FaBirthdayCake size={30} />
          </span>
          <div className="carder-4">
            <h3 className=" carder-title">Website Launch</h3>

            <h4>🎉🎉🎉</h4>

            <p className="mt-1 carder-text">Assembling of team members.</p>
            <div className="carder-arr">
              <IoMdArrowDropleft size={30} />
            </div>
            <p className="carder-date4">2022 - Q1</p>
          </div>
        </div>
        {/* <div className="inner">
          <div className="carder"></div>
          <div className="carder-arr"></div>
        </div> */}
      </div>
      <div>
        <Parallax bgImage="/images/metachar.jpg" strength={500}>
          {/* Main content inside the parallax */}

          {/* Nested Parallax for the image */}
          <Parallax
            renderLayer={(percentage) => (
              <div
                style={{
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  left: "50%",
                  top: "72%",
                  width: percentage * 800,
                  height: percentage * 800,
                }}
              >
                <img src="/images/3MetaD.png" alt="logo" />
              </div>
            )}
          >
            <div className="scroller"></div>
          </Parallax>
        </Parallax>
        <div className="sea">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0a0b10"
              fillOpacity="1"
              d="M0,96L40,101.3C80,107,160,117,240,122.7C320,128,400,128,480,144C560,160,640,192,720,202.7C800,213,880,203,960,170.7C1040,139,1120,85,1200,74.7C1280,64,1360,96,1400,112L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="footer" id="team">
        <div className="footer-title text-center">Team</div>
        <div className=" d-flex flex-column justify-content-center align-items-center">
          <div className="avatar1">
            <img
              src="/images/avatar.jpg"
              className="rounded-circle avatar mt-5"
              alt="avatar"
            />
            <div data-aos="fade-right" className="icons">
              <BsTwitter className="icon" />
              <BsLinkedin className="icon" />
            </div>
          </div>
          <div className="pic-descript mt-5">
            <p>Colombia Orc</p>
            <p className="descript2">Owner & Artist</p>
          </div>
          <div className="footer-title mt-5 text-center" id="connect">
            <p>Connect!</p>
          </div>
        </div>
        <div className="container">
          <div className="mt-5 d-flex justify-content-center iconss">
            <a href="#" className=" insta rounded-4">
              <BsInstagram className="iicon " />
            </a>
            <a href="#" className=" insta rounded-4">
              <BsTwitter className="iicon " />
            </a>
            <a href="#" className=" insta1 rounded-4">
              <FaDiscord className="iicon " />
            </a>
          </div>
        </div>
        <div className="pic-descript mt-5 text-center">© 2023 GEORGE</div>
      </div>
    </>
  );
};

export default Home2;
