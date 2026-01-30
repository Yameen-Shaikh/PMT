import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
export default class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				<li className="list-item">
					<i className="material-icons">home</i>
				</li>
				<Link className="list-item" to="/editor">
					<i className="material-icons">edit</i>
				</Link>
				<li className="list-item">
					<i className="material-icons">account_circle</i>
				</li>
				<li className="list-item">
					<i className="material-icons">settings</i>
				</li>
			</div>
		);
	}
}
