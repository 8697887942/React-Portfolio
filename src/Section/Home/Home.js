import styles from "./styles.module.css";

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<p className={styles.greet}>Hi, my name is</p>
			<h1 className={styles.heading_1}>Pratip</h1>
			<h1 className={styles.heading_2}>I am a Front End Developer</h1>
			<p className={styles.desc}>
            I’m organized and detail- oriented, work well under pressure and deadlines, enjoy working with a verity of people and have great attitude. I’m looking for a creative, challenging, growth-oriented position and would like the opportunity to learn more about corporation. What you need and what I can do sounds like a match.
			</p>
			<a href="#work">
				<button className={styles.btn}>Check out my work !</button>
			</a>
		</section>
	);
}

export default Home;