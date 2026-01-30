import React, { Component } from "react";
import EditorSidebar from "./EditorSidebar/EditorSidebar";

import "./Editor.css";
export default class Editor extends Component {
	render() {
		return (
			<div className="editor-component">
				<EditorSidebar />
				I'm the Editor component
			</div>
		);
	}
}
