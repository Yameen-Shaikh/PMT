import React, { Component } from "react";
import Projects from "../Projects/Projects";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
export default class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard-container">
				<Sidebar />
				<div className="content">
					<Projects />
				</div>
			</div>
		);
	}
}
