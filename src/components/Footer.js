import React, { Component } from "react";
import EmailPopover from "./EmailPopover";
import SkillsButton from "./SkillsButton";
import Skills from "./Skills";
import Resume from '../MatthewBellucciResume2023.pdf';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsModalShow: false,
      showSkills: false,
    };
    
  }

  render() {
    let detailsModalShow = () => {
      this.setState({ detailsModalShow: true });
    };
    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    let showSkills = () => {
      this.setState({ showSkills: true });
    };
    let hideSkills = () => this.setState({ showSkills: false });

    let onResumeClick = () => window.open(Resume);

    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            {network.url ? (
              [
                network.pdf ? (
                  <a href={require('../MatthewBellucciResume2023.pdf')} target="_blank" without rel="noopener noreferrer">
                    <i className={network.class}></i>
                  </a>) :
                  (
                    <a href={network.url} target="_blank" rel="noopener noreferrer">
                      <i className={network.class}></i>
                    </a>
                  )
              ]
            ) :
              (
                <span style={{ cursor: "pointer" }} onClick={() => detailsModalShow()}>
                  <i className={network.class}></i>
                </span>
              )
            }
          </span>
        );
      });
    }

    return (
      <footer>
        <br></br>
        <div className="col-md-12">
          <span onClick={() => showSkills()} >
            <SkillsButton></SkillsButton>
          </span>
        </div>
        <Skills
          show={this.state.showSkills}
          onHide={hideSkills}
          sharedSkills={this.props.sharedSkills}
          resumeBasicInfo={this.props.resumeBasicInfo}
        />
        <div className="col-md-12">
          <div className="social-links">{networks}</div>
          <EmailPopover
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
          />
          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
