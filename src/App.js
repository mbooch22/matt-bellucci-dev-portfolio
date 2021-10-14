import logo from './logo.svg';
import './App.scss';
import React, { Component } from "react";
import $ from "jquery";
import Title from "./components/Title";
import WorkHistory from './components/WorkHistory';
import Timeline from './components/HorizontalTimelineExample';
import Projects from './components/Projects';
import Footer from "./components/Footer";


class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
      detailsModalShow: false,
    };
  }

  componentDidMount() {
    this.loadConstants();
    this.loadResumeFromPath();
  }


  loadConstants() {
    $.ajax({
      url: 'constants.json',
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadResumeFromPath() {
    $.ajax({
      url: 'resume_data.json',
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    let detailsModalShow = () => {
      this.setState({ detailsModalShow: true });
    };
    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    return (
      <div>
        <Title sharedData={this.state.sharedData.basic_info} />
        <WorkHistory
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info}
                sharedSkills={this.state.sharedData.skills}
                resumeBasicInfo={this.state.resumeData.basic_info}
        />
      </div>
    );
  }
}

export default App;
