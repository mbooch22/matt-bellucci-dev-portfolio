import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { Icon } from "@iconify/react";
import pythonIcon from "@iconify/icons-logos/python";
import reactIcon from "@iconify/icons-logos/react";
import javaIcon from "@iconify/icons-logos/java";

class Title extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: true, nightMode: 1 };

    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat();
      var profilepic = "images/" + this.props.sharedData.image;
    }

    const HeaderTitleTypeAnimation = React.memo(() => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: 'fit-content', display: 'block' }}>
        <div className="fixed-top" style={{ paddingTop: '10px', paddingRight: '10px', display: 'flex',  justifyContent: 'flex-end'  }}>
          <Switch
            checked={this.state.checked}
            onChange={this.onThemeSwitchChange}
            offColor="#92c4f3"
            onColor="#353535"
            className="react-switch"
            width={90}
            height={40}
            uncheckedIcon={
              <span
                className="iconify"
                data-icon="bi:moon-stars-fill"
                data-inline="false"
                style={{
                  display: "block",
                  height: "100%",
                  fontSize: 25,
                  textAlign: "end",
                  marginLeft: "20px",
                  color: "#353239",
                }}
              ></span>
            }
            checkedIcon={
              <span
                className="iconify"
                data-icon="noto-v1:sun"
                data-inline="false"
                style={{
                  display: "block",
                  height: "100%",
                  fontSize: 25,
                  textAlign: "end",
                  marginLeft: "10px",
                  color: "#353239",
                }}
              ></span>
            }
            id="icon-switch"
          />
        </div>
        <div className="row aligner" style={{ height: '100%' }}>
          <div className="col-md-6 mb-5">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>

            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img
                  height="250px"
                  src={profilepic}
                  alt="Avatar placeholder"
                />
                <Icon
                  icon={pythonIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={reactIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={javaIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Title;
