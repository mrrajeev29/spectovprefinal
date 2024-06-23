import CareerCard from "../components/CareerCard";
import { Navbar } from "../components/";
import ctestimg from "../assets/careerCardTestImage.png";
import { Link } from "react-router-dom";

// import webimage from "../assets/careerCardTestImage.png";
// import mlimage from "../assets/careerCardTestImage.png";
// import dsaimage from "../assets/careerCardTestImage.png"
// import dsaml from "../assets/careerCardTestImage.png";
// import dsaweb from "../assets/careerCardTestImage.png";
// import special from "../assets/careerCardTestImage.png";
// import arvr from "../assets/careerCardTestImage.png";

let careers = [
  {
    id: 0,
    title: "Full Stack Development",
    subtitle: "Learn Full Stack Development",
    content: "Learn Full Stack Development content",
    img: ctestimg,
  },
  {
    id: 1,
    title: "Artificial Intelligence and Machine Learning",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 2,
    title: "AR VR",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 3,
    title: "Logic Building and DSA",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 4,
    title: "DSA And Web ",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 5,
    title: "DSA And ML",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 6,
    title: "SpectoV Special",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 7,
    title: "AR VR",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
];

export default function CareerPage() {
  return (
    <> 
      <Navbar />
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <h1 className="ml-5 mt-32 text-4xl font-bold text-black md:ml-24">
        Careers At SpectoV
      </h1>      
      <Link to="/login" className="ml-5 mt-32" >
              <button style={{backgroundColor:"pink",color:"white",height:"2.5rem",borderRadius:"10px"}}>&emsp;login/Signup&emsp;</button>
            </Link>
      </div>
      <div className="w-100 m-10 ml-5 flex flex-wrap md:ml-20">
        {careers.map((career) => (
          <CareerCard
            key={career.id}
            item={career.id}
            title={career.title}
            subtitle={career.subtitle}
            content={career.content}
            img={career.img}
          />
        ))}
      </div>
    </>
  );
}
