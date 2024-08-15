/* eslint-disable react/jsx-key */
// const projectDetails = [
//   {
//     projectTitle: "Video Editor",
//     projectButton: `https://dhanashrilk.github.io/tic-tac-toe-game/`,
//   },
//   {
//     projectImage: "./img/photo-portfolio.png",
//     projectTitle: "Photography Portfolio",
//     projectButton: "https://dhanashrilk.github.io/Photography-portfolio/",
//   },
//   {
//     projectImage: "./img/Food Site.png",
//     projectTitle: "Food Site",
//     projectButton: "https://dhanashrilk.github.io/Food-site/Index.html",
//   },
// ];

const Projects = () => {
  return (
    <div id="projects" className="container projects">
      <div className="row py-3 mb-3">
        <h4 className="py-3 heading">Featured Projects</h4>

        <div className="col-sm-6">
          <div className="card my-3">
            {/* <iframe
                  src="https://dhanashrilk.github.io/tic-tac-toe-game/"
                  frameborder="0"
                ></iframe> */}
            <iframe
              src="https://dhanashrilk.github.io/tic-tac-toe-game/"
              target="_blank"
              height={"300"}
              className="w-100 h-100 overflow-hidden"
              style={{ height: "210px" }}
            />
            <div className="card-body d-flex justify-content-between">
              <h5 className="card-title">Tic-Tac-Toe Game</h5>

              <a
                href="https://dhanashrilk.github.io/tic-tac-toe-game/"
                target="_blank"
                className="btn btn-dark"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card my-3">
            {/* <iframe
                  src="https://dhanashrilk.github.io/tic-tac-toe-game/"
                  frameborder="0"
                ></iframe> */}
            <iframe
              src="https://dhanashrilk.github.io/landing-page/"
              target="_blank"
              height={"300"}
              className="w-100 h-100 overflow-hidden"
              style={{ height: "210px" }}
            />
            <div className="card-body d-flex justify-content-between">
              <h5 className="card-title">Landing Page</h5>

              <a
                href="https://dhanashrilk.github.io/landing-page/"
                target="_blank"
                className="btn btn-dark"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card my-3">
            {/* <iframe
                  src="https://dhanashrilk.github.io/tic-tac-toe-game/"
                  frameborder="0"
                ></iframe> */}
            <iframe
              src="https://dhanashrilk.github.io/Photography-portfolio/"
              target="_blank"
              height={"300"}
              className="w-100 h-100 overflow-hidden"
              style={{ height: "210px" }}
            />
            <div className="card-body d-flex justify-content-between">
              <h5 className="card-title">Photography portfolio</h5>

              <a
                href="https://dhanashrilk.github.io/Photography-portfolio/"
                target="_blank"
                className="btn btn-dark"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card my-3">
            {/* <iframe
                  src="https://dhanashrilk.github.io/tic-tac-toe-game/"
                  frameborder="0"
                ></iframe> */}
            <iframe
              src="https://dhanashrilk.github.io/Video-Edit/"
              target="_blank"
              height={"300"}
              className="w-100 h-100 overflow-hidden"
              style={{ height: "210px" }}
            />
            <div className="card-body d-flex justify-content-between">
              <h5 className="card-title">Photography portfolio</h5>

              <a
                href="https://dhanashrilk.github.io/Video-Edit/"
                target="_blank"
                className="btn btn-dark"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
