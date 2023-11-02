import React from "react";
import '/src/styles/Header.css'
import naruto from '/src/assets/naruto-logo.png'

function Header(props) {
	return (
		<div className="header">
			<div className="header-content">
				<div className="logo-container">
					<img src={naruto} className="logo" alt="" />
				</div>
				<div className="scores">
					<p>Score: {props.score}</p>
					<p>Best score: {props.bestScore}</p>
				</div>
			</div>
			<p className="instruction">Get points by clicking on an image but don't click on any more than once!</p>
		</div>
	);
}

export default Header;