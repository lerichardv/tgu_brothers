import React, { useEffect } from 'react';
import "./scss/index.scss";
import 'animate.css/animate.css';
import { Webnav } from "./parts/webnav";
import { Splash } from "./parts/splash";
import { About } from "./parts/about";
import { Courses } from "./parts/courses";
import { Teachers } from "./parts/teachers";
import { Media } from "./parts/media";
import { Contact } from "./parts/contact";
import { Footer } from "./parts/footer";
import SmoothScroll from "smooth-scroll";

function Web() {

	useEffect(()=>{
		new SmoothScroll('a[href*="#"]', {
			speed: 500,
			speedAsDuration: true,
			offset: 100
		});
	}, []);

	return (
		<>
			<Webnav/>
			<Splash/>
			<About/>
			<Courses/>
			<Teachers/>
			<Media/>
			<Contact/>
			<Footer/>
		</>
	);
}

export default Web;