import Heading from "../../Component/Heading/Heading";
import styles from "./styles.module.css";

function About() {
  return (
    <section id="about">
      <Heading index="01" heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.desc}>
            I am Pratip Kayal from Kolkata, West Bengal, I am 26 years old.
            I completed my schooling from my home town Diamond Harbour and
            completed my graduation from St. Thomas College of Engineering and
            Technology with a degree of Information Technology in the year of
            2020.
          </p>
          <p className={styles.desc}>
            I have in hand experience in HTML5,CSS3,Bootstrap5,JavaScript,
            jQuery,React.js,Redux and WordPress. 
          </p>
        </div>
        <div className={styles.right}>
          <img
            src="./images/profile.jpg"
            alt="profile"
            className={styles.profile_img}
          />
          <div className={styles.img_border}></div>
        </div>
      </div>
    </section>
  );
}

export default About;
