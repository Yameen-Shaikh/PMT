import React, { Component } from "react";

export default class Project extends Component {
	render() {
		return <div className="project">{this.props.name}</div>;
	}
}
