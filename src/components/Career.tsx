import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Sulopa Technology Pvt. Ltd.</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Worked with technologies like Angular, React, TypeScript, Redux,
              Developing and Maintaining REST API's,Experience working with
              database technologies like MYSQL and MongoDB. ,Developed and
              Maintained Store Procedure to support database operations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Adglob InfoSystem Pvt. Ltd.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Acquired a deep Understanding of React, React Native, JavaScript,
              redux, Hanson on React hooks, state hooks, effect hooks, and so
              on. To use state and life cycle methods inside functional
              components, Designed fronted framework with React JS using class
              and functional components. Very familiar with the properties of
              components, states, and props, Worked on all phases of Software
              Development life cycles including Analysis, Design, Development,
              Bug Fixing, and Support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
