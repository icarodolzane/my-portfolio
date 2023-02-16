import React, { Component } from "react";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import ProjectCard from "../components/ProjectCard";
import RightSideBar from "../components/RightSideBar";
import Title from "../components/Title";
import "../style/pages/Work.css";
import projects from "../projects-data";
export default class Work extends Component {
  render() {
    return (
      <>
        <Header />
        <LeftSideBar />
        <RightSideBar />
        <div className="work-content">
          <Title heading="Take a look at my projects" />
          <div className="projects-content">
            {projects.map((project) => (
              <ProjectCard {...project} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
