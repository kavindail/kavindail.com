import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="page-content">
        <div class="card">
          <div class="content">
            <a href="https://github.com/kavindail/Snake-Remastered">
              {" "}
              <h2 class="title">PacMan + Snake</h2>
            </a>
            <p class="copy">
              Remastering Snake for the modern era with improved graphics and
              fun new levels!
            </p>
            <div class="pill-buttons">
              <button> Java</button>
              <button> JS</button>
              <button> Python</button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <a href="http://tivujfmelq.eu11.qoddiapp.com">
              {" "}
              <h2 class="title">SuccessWeb</h2>
            </a>
            <p class="copy">
              A study support app aimed to support lower income students.
            </p>
            <div class="pill-buttons">
              <button>Scrap.py</button>
              <button> JS</button>
              <button> Python</button>
              <button> Angular</button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <a href="https://github.com/kavindail/CoverAI">
              {" "}
              <h2 class="title">CoverAI</h2>
            </a>
            <p class="copy">
              An AI Image generator to create personalized playlist covers.
            </p>
            <div class="pill-buttons">
              <button> Java</button>
              <button> JS</button>
              <button> Python</button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <a href="https://github.com/kavindail/VoIP">
              {" "}
              <h2 class="title">Voice Over Ip Telephone</h2>
            </a>
            <p class="copy">
              A Voice Over IP multicast telephone built with UDP & RTP
            </p>
            <div class="pill-buttons">
              <button> C</button>
              <button> C++</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
