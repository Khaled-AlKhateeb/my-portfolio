import React from "react";
import "../styles/Home.css";
import { SocialIcon } from "react-social-icons";
import dotaRoshanTimer from "../assets/dota-roshan-timer.png";
import Webycob from "../assets/Webycob-Screenshot.png";
import flappyBird from "../assets/flappy-bird-clone-screenshot.jpeg";
import motorTech from "../assets/motor-tech.png";
import awesomeBooks from "../assets/awesome-books.png";
import listStructure from "../assets/list-structure.png";
import mathMagicians from "../assets/math-magicians.png";
import bookStore from "../assets/book-store.png";
import youFlex from "../assets/youflex.png";
import airPollution from "../assets/air-pollution.png";
import sipparPharma from "../assets/sippar-pharma.png";
import schoolLibrary from "../assets/school-library.png";
import ownTracker from "../assets/own-tracker.png";
import budgetControl from "../assets/budgetControl.png";

import Work from "./Work";

const Home = () => {
  return (
    <div className='main-container'>
      <section className='main-info-container'>
        <div className='title-container'>
          <h1 className='main-title'>Hi, I'm Khaled Al-Khateeb</h1>
          <div
            className='robot'
            data-hover='&#x1F916;'
          ></div>
        </div>
        <div className='about-container'>
          <p className='about-content'>
            Full-Stack Developer, building mobile applications, websites and
            webapps. Completed with excellence the{" "}
            <span className='microverse'>Microverse</span> international
            software development program. <br />I am dedicated to deliver
            perfectly functional projects on time.
          </p>
        </div>
        <div className='email-container'>
          <a
            className='link'
            href='#contact'
          >
            Contact me
          </a>
        </div>
      </section>
      <section className='works-main-container'>
        <ul className='works-main-title'>
          <h3 className="works-title">Recent work</h3>
          <Work
            name='Air Pollution'
            image={airPollution}
            production='Nov 28 2022'
            description='Air Pollution is a web app that tracks Air Quality worldwide. It uses the Air Pollution API from Open Weather Map, which gives realtime updated air pollution statistics'
            skill={["HTML 8%", "CSS 24%", "JavaScript 68%", "ReactJS"]}
            url='https://airpollution-capstone.vercel.app/'
          />
          <Work
            name='Awesome Books'
            image={awesomeBooks}
            production='Sep 26 2022'
            description='A book library tool built using JavaScript ES6.'
            skill={["HTML 1%", "CSS 1%", "JavaScript 98%"]}
            url='https://khaled-alkhateeb.github.io/awesome-books-ES6/'
          />
          <Work
            name='Book store'
            image={bookStore}
            production='Nov 5 2022'
            description='Book reading assist webapp built using React.js and Redux, still under-construction.'
            skill={[
              "HTML 12%",
              "CSS 23%",
              "JavaScript 65%",
              "ReactJS",
              "Redux",
            ]}
            url='https://bookstore-iota-puce.vercel.app/'
          />
          <Work
            name='Budget Control'
            image={budgetControl}
            production='Feb 28 2023'
            description='Budget Control is a mobile web application that can helps you keep track of your daily financial transaction and manage your budget where you have a list of transactions associated with a category, so that you can see how much money you spent on what.'
            skill={[
              "HTML 22%",
              "SCSS 2%",
              "JavaScript 2%",
              "Ruby on Rails 70%",
              "Batchfile 4%",
              "Shell 1%",
            ]}
            url='https://budget-control.onrender.com/'
          />
          <Work
            name='Dota Timer'
            image={dotaRoshanTimer}
            production='Sep 17 2021'
            description='My first JavaScript project, applying a fully functional clock with 3 alarm inputs.'
            skill={["HTML 20%", "CSS 16%", "JavaScript 64%"]}
            url='https://khaled-alkhateeb.github.io/dota-timer/'
          />
          <Work
            name='Flappy Bird Clone'
            image={flappyBird}
            production='May 25 2022'
            description='Recreating Flappy bird mobile game using react-native for practice.'
            skill={["React-Native"]}
            url='https://drive.google.com/file/d/1gz-KyRek6d9_cOvRttYEugGk0Xk-18f8/view'
          />
          <Work
            name='List Structure'
            image={listStructure}
            production='Sep 28 2022'
            description='Simple HTML/CSS/JavaScript project to add tasks to the to-do list using webpack.'
            skill={["HTML 11%", "CSS 14%", "JavaScript 75%"]}
            url='https://khaled-alkhateeb.github.io/list-structure/dist/'
          />
          <Work
            name='Math Magicians'
            image={mathMagicians}
            production='Oct 25 2022'
            description='My first calculator app, created using react.'
            skill={["HTML 12%", "CSS 15%", "JavaScript 73%", "ReactJS"]}
            url='https://math-magicians-teal.vercel.app/calculator'
          />
          <Work
            name='Motor Tech'
            image={motorTech}
            production='Sep 12 2022'
            description='Mockup website for showing the latest motor technologies, unpublished under-construction.'
            skill={["HTML 41%", "CSS 38%", "JavaScript 21%"]}
            url='https://khaled-alkhateeb.github.io/motor-tech/'
          />
          <Work
            name='Media Tracker (Backend)'
            image={ownTracker}
            production='Jan 16 2023'
            description='A console app that helps keeping records of different types of things you own: books, music albums, movies, and games. Follow link and read instructions in the README.md file for a try.'
            skill={["Ruby", "SQL"]}
            url='https://github.com/Khaled-AlKhateeb/Ruby-capstone'
          />
          <Work
            name='School Library (Backend)'
            image={schoolLibrary}
            production='Jan 3 2023'
            description='A tool to record what books are in the library and who borrows them.
              Follow link and read instructions in the README.md file for a try.'
            skill={["Ruby", "SQL"]}
            url='https://github.com/Khaled-AlKhateeb/OOP_School_Library'
          />
          <Work
            name='Sippar Pharma'
            image={sipparPharma}
            production='Nov 8 2022'
            description='Static website for an iraqy pharmaceutical factory, should be dynamic by the start of 2024.'
            skill={["HTML 4%", "CSS 40%", "JavaScript 56%", "ReactJS"]}
            url='https://sipparpharma.com/'
          />
          <Work
            name='Webycob'
            image={Webycob}
            production='Oct 6 2021'
            description='My first HTML/ CSS project, just built it to experience the knowledge.'
            skill={["HTML 74%", "CSS 26%"]}
            url='https://khaled-alkhateeb.github.io/Webycob/'
          />
          <Work
            name='YouFlex'
            image={youFlex}
            production='Oct 17 2022'
            description="A capstone JavaScript application that utilises 2 APIs to display movies and enables users to like and comment on their favourate movies. The application consists of the Homepage that contains the list of movies and a popup window that displays details of a specific movie, it's likes and comments."
            skill={["HTML 16%", "CSS 24%", "JavaScript 60%"]}
            url='https://khaled-alkhateeb.github.io/YouFlex/'
          />
        </ul>
      </section>
      <section className='skills-container'>
        <div className='skills-main-container'>
          <h2 className='skills-title'>Languages</h2>
          <p className='skill'>CSS</p>
          <p className='skill'>HTML</p>
          <p className='skill'>JavaScript</p>
          <p className='skill'>Ruby</p>
          <p className='skill'>SASS</p>
          <p className='skill'>SQL</p>
        </div>
        <div className='skills-main-container'>
          <h2 className='skills-title'>Frameworks</h2>
          <p className='skill'>Bootstrap</p>
          <p className='skill'>Node.js</p>
          <p className='skill'>React.js</p>
          <p className='skill'>REST APIs</p>
          <p className='skill'>Ruby on Rails</p>
          <p className='skill'>Tailwind</p>
        </div>
        <div className='skills-main-container'>
          <h2 className='skills-title'>Tools & Technologies</h2>
          <p className='skill'>Git</p>
          <p className='skill'>GitHub</p>
          <p className='skill'>HTML5</p>
          <p className='skill'>Jest</p>
          <p className='skill'>MVC</p>
          <p className='skill'>OOP</p>
          <p className='skill'>PostgreSQL</p>
          <p className='skill'>Redux</p>
          <p className='skill'>RSpec</p>
          <p className='skill'>Webpack</p>
        </div>
      </section>
      <section className='form-main-container'>
        <h2 className='email-form-title'>Email Contact Form</h2>
        <form
          className='form'
          action='https://formspree.io/f/mnqrnjbr'
          method='POST'
        >
          <input
            id='nameInput'
            className='input'
            type='text'
            name='name'
            placeholder='Full Name'
            required
          />
          <input
            id='emailInput'
            className='input'
            type='email'
            name='email'
            placeholder='Email address'
            required
          />
          <textarea
            id='areaInput'
            className='input textarea'
            name='message'
            placeholder='Enter text here'
            required
          ></textarea>
          <button
            id='formSubmit'
            className='form-btn'
            type='submit'
          >
            Send
          </button>
          <span
            id='error'
            className='error-msg'
          ></span>
        </form>
      </section>
      <footer
        className='footer-container'
        id='contact'
      >
        <SocialIcon
          url='https://www.facebook.com/abu.Derp'
          bgColor='var(--Text)'
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url='https://github.com/Khaled-AlKhateeb'
          bgColor='var(--Text)'
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url='https://discord.com/channels/Freakless#6172'
          bgColor='var(--Text)'
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url='mailto:khaled.w.khateeb85@gmail.com'
          bgColor='var(--Text)'
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url='https://www.linkedin.com/in/khaled-w-al-khateeb/'
          bgColor='var(--Text)'
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url='https://medium.com/@khaled.w.khateeb85'
          bgColor='var(--Text)'
          style={{ height: 35, width: 35 }}
        />
      </footer>
    </div>
  );
};

export default Home;
