import './App.css'

function App(){
  return (
    <>
      <nav className="navbar">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
          width={"40px"}
          alt="React Logo"
        />
        <h2>MY First React App</h2>

        <a href="">
          Home
        </a>
        <a href=""> About</a>
        <a href="">Contact</a>
      </nav>
      {/* {title section} */}
      <h2 className="title">Welcome to React</h2>
      <div className="purple-line"></div>
      <h3 className="subtitle">This is my First React Application</h3>

      <hr />
      <div class="content">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pJ1KlBzHD26iGaE1kOVCbF38duN5QeB7tVvaxXIS5g&s=10"
          alt=""
          height={"300px"}
        />

        <p>
          This is my first <strong>React </strong> project built using Vite
          <br></br>
          React is a powerfull javaScritp library for building user interfaces.
          <br />
          Learning React is <mark>fun</mark> and exciting !
          <br />
          it is <strong>important</strong> to practice everyday
          <br />
          Start building today and become{" "}
          <span style={{ color: "blue" }}>awesome</span> develper.
          <br />
          Make your concepts <u>strong </u> and journey{" "}
          <span style={{ color: "green" }}>successful.</span>
        </p>
      </div>
      <hr />
      <div id="main">
        <div className="left">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSt3E6a5bD5hpnhzIgqh8_ezw2IfrTkA3qKnj571gYKg&s=10"
            width={"50px"}
            height={"50px"}
            alt=""
          />
          <div>
            <h2 style={{ color: "purple" }}>Topics I am Learning</h2>
            <br />
            <ol typeof="circle">
              <li typeof="circle">JSX</li>
              <li typeof="circle">Vite</li>
              <li typeof="circle">React</li>
              <li typeof="circle">javaScritp</li>
              <li typeof="circle">CSS</li>
            </ol>
          </div>
        </div>
        <div id="test">
          <div className='learn'>
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqUi44TvuODqKacbHekNGjZl6u5nE0ZRir5GiKGWT8w&s=10"
            width={"40px"}
            height={"40px"}
          />
          <p><span style={{ color:"green"}}>My Learnig Steps</span></p>

          </div>
          <ol className="test1">
            <li>Install Reacr</li>
            <li>Learn JXS</li>
            <li>Understand Basic Concept</li>
            <li>Build Project</li>
            <li>Become a React Developer</li>
          </ol>
        </div>
        </div>
    
      <hr />
      <div className="button">
        <button className="app1">Start Learning</button>
        <button className="app2">Learn more</button>
        <button className="app3">Contact</button>
      </div>
      <hr />
      <h2 className="table-title">👤My Information </h2>

      <table className="table-info">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Batch</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Tejaswini kadu patil</td>
            <td>Diploma in CSE</td>
            <td>2026</td>
          </tr>
        </tbody>
      </table>

      <footer className="footer">
        <p className="heart">💜</p>
        <p>© 2026 My First React Application</p>
        <p className="footer-text">Keep Learning, Keep Growing! 🚀</p>
      </footer>
    </>
  );
}

export default App


