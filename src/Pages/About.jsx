import Img from "../assets/images/img.jpg";


function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="aboutContent">

        <div className="aboutText">
          <h2>Welcome to Our Website!</h2>
          <p>
            We are a team of passionate individuals dedicated to providing you with the best experience possible. Our mission is to deliver high-quality content and services that meet your needs and exceed your expectations.
          </p>
        </div>

        <div className="aboutImage">
          <img src={Img} alt="About Us" />
        </div>

      </div>

    </div>
  );
}
export default About;