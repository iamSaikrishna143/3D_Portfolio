import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para" style={{ fontSize: "1rem", color: "#fff", textAlign: "justify" }}>
          Hi, I’m A Saikrishna Achary — a passionate Frontend Developer and
          UI/UX Designer with a strong focus on creating clean, intuitive, and
          engaging digital experiences. With a background in Computer Science
          and hands-on experience in designing and developing web interfaces, I
          love turning complex ideas into user-friendly solutions. <br />
          My journey in tech began with a curiosity for how websites work, and
          over time, it grew into a full-fledged passion for both code and
          design. I enjoy crafting pixel-perfect UIs, optimizing performance,
          and ensuring each interaction feels smooth and purposeful. <br />
          When I’m not working on interfaces, you’ll find me playing cricket,
          listening to music, or exploring new tools to stay ahead in the
          ever-evolving world of tech and design.
        </p>
      </div>
    </div>
  );
};

export default About;
