import React, { useState } from "react";
import "../styles/Home.css";
import { SocialIcon } from "react-social-icons";
import data from "../data";
import Work from "./Work";
import Popup from "./Popup";

const Home = () => {
  const [activePopup, setActivePopup] = useState(null);
  
  const handleClose = () => {
    setActivePopup(null);
  };

  return (
    <div className='main-container'>
      <section className='main-info-container'>
        <h1 className='main-title'>Hi, I'm Khaled Al-Khateeb</h1>
        <div
          className='robot'
          data-hover='&#x1F916;'
        ></div>
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
        <div className='works-main-title'>
          <h3 className='works-title'>Recent Works</h3>
          <div className='web-apps'>
            <h4 className='web-app-title'>WebApps</h4>
            {data.map((work, index) => {
              if (work.type == "webapp") {
                return (
                  <Work
                    openPopup={() => setActivePopup(index)}
                    key={index}
                    name={work.name}
                  />
                );
              }
            })}
          </div>
          <div className='web-apps'>
            <h4
              className='web-sites-title'
              dir='rtl'
            >
              Websites
            </h4>
            {data.map((work, index) => {
              if (work.type == "website") {
                return (
                  <Work
                    openPopup={() => setActivePopup(index)}
                    key={work.id}
                    name={work.name}
                  />
                );
              }
            })}
          </div>
          <div className='web-apps'>
            <h4 className='web-app-title'>Mobile Apps</h4>
            {data.map((work, index) => {
              if (work.type == "mobileapp") {
                return (
                  <Work
                    openPopup={() => setActivePopup(index)}
                    key={work.id}
                    name={work.name}
                  />
                );
              }
            })}
          </div>
        </div>
      </section>
      {data.map((popup, index) => (
        <div
          key={index}
          style={{ display: activePopup === index ? "block" : "none" }}
        >
          <Popup
            key={index}
            name={popup.name}
            image={popup.image}
            production={popup.production}
            description={popup.description}
            skill={popup.skill}
            url={popup.url}
            urlSource={popup.urlSource}
            handleClose={handleClose}
          />
        </div>
      ))}
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
        <h2 className='email-form-title'>Contact Form</h2>
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
