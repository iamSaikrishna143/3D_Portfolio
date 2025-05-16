import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

let tempData = [
  {
    id: 1,
    title: "Hospital Management System",
    description:
      "A web-based application for managing hospital operations, including patient records, appointment scheduling and billing.",
    image: "/src/assets/hms.jpg",
    tools: ["MERN Stack", "Node.js", "Express.js", "MongoDB", "React.js"],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "An online shopping platform that allows users to browse products, add them to a cart, and make purchases.",
    image: "/src/assets/ecommerce.png",
    tools: ["MERN Stack", "Node.js", "Express.js", "MongoDB", "React.js"],
  },
  {
    id: 3,
    title: "Blog Platform",
    description:
      "A platform for users to create, share, and comment on blog posts.",
    image: "/src/assets/blog.png",
    tools: ["MERN Stack", "Node.js", "Express.js", "MongoDB", "React.js"],
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {tempData.map((_value, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{_value.id}</h3>

                  <div>
                    <h4>{_value.title}</h4>
                    <p>{_value.description}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{_value.tools.join(', ')}</p>
              </div>
              <WorkImage image={_value.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
