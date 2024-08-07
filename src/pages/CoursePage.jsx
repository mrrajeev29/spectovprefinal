import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "../styles/coursePage.css";
import { Navbar } from "../components";
import { useLocation, useNavigate } from "react-router-dom";

const Content = ({ content }) => {
  return <h1>{content}</h1>;
};

export default function Example() {
  const [content, setContent] = useState("Course Content");
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [videoLink, setVideoLink] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const fetchCourses = async () => {
    try {
      const response = await axios.get('https://admin-spectov-backend.onrender.com/api/all');
      setCourses(response.data);
    } catch (err) {
      setError(err.message);
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const days = 65; // Set how many days you want

  const handleAccordionClick = (title) => {
    setContent(title);
  };

  const handleResourceClick = (id) => {
    window.open(courses[data?.id]?.materialLink[id - 1]);
    setVideoLink(""); // Clear the video link if you want to hide the video when resources are clicked
  };

  const handleVideoClick = (link) => {
    setContent("");
    //const id = link.substring(link.indexOf('=') + 1); //for you tube
    //const l = 'https://www.youtube.com/embed/' + id + '?si=MycJSAZTYJQ8AOs5'; // for youtube video
   const l=link; //for drive link
    setVideoLink(l);
  };

  const generateAccordionItems = () => {
    const items = [];
    for (let i = 1; i <= days; i++) {
      const video = courses[data?.id]?.videoLink[i - 1];
      if (video !== "#") {
        items.push(
          <AccordionItem key={i}>
            <AccordionItemHeading>
              <AccordionItemButton onClick={() => handleAccordionClick(`Day ${i}`)}>
                Day {i}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div onClick={() => handleResourceClick(i)}>Resources</div><br />
              <div onClick={() => handleVideoClick(video)}>
                Video
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        );
      } else {
        console.log("Data not updated or video link is not available");
      }
    }
    return items;
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h1 className="mb-2 pb-0 pt-20 text-lg font-bold text-black md:text-2xl">
          {data?.title}
        </h1>
        <div className="mt-20 flex flex-col-reverse p-20 pt-10 md:mt-0 md:flex-row">
          <h1 className="mb-2 text-lg font-bold text-white md:text-2xl">
            Shivang
          </h1>
          <div className="contain mt-20 w-1/5 md:mt-0">
            <Accordion>{generateAccordionItems()}</Accordion>
          </div>
          <div className="relative h-[40rem] w-[80rem] bg-slate-400">
            {videoLink ? (
              <div className="absolute inset-0">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={videoLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <Content content={content} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
