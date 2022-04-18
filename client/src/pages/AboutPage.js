const About = () => {
  return (
    <div className="about-page">
      <img
        className="blaze-logo"
        src="https://i.imgur.com/rggyD1j.png"
        alt="logo"
      />
      <h3>
        This is a hiking app for trail blazers. Join and keep track of your
        hiking trails with your friends!
      </h3>
      <h3>
        We are a team of three trail pals who want to connect others with nature
        and code along the way.
      </h3>
      <h3>Contacts</h3>
      <div className="contacts-wrapper">
        <p>
          <a href="https://www.linkedin.com/in/nghiem-v-truong/">
            Nghiem Truong
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/jenna-leopold-136294127">
            Jenna Leopold
          </a>
        </p>
        <p>
          <a href="www.linkedin.com/in/marieobermeier">Molly Obermeier</a>
        </p>
      </div>
    </div>
  )
}

export default About
