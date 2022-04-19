import logo from '../assets/Blaze_logo.png'
const About = () => {
  return (
    <div className="about-page">
      <div>
        <img className="blaze-logo" src={logo} alt="logo" />
      </div>
      <div className="summary-wrapper">
        <p>A hiking app for trail blazers.</p>
        <p>
          Join the community and keep track of your hiking trails with your
          friends!
        </p>
        <p>
          We are a team of three trail pals who want to connect others with
          nature and code along the way.
        </p>
      </div>
      <div className="contacts-wrapper">
        <a href="https://www.linkedin.com/in/nghiem-v-truong/">Nghiem Truong</a>
        <a href="https://www.linkedin.com/in/jenna-leopold-136294127">
          Jenna Leopold
        </a>
        <a href="www.linkedin.com/in/marieobermeier">Molly Obermeier</a>
      </div>
    </div>
  )
}

export default About
