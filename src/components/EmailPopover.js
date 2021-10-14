import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import ReactTooltip from 'react-tooltip';
import ContactUs from "./ContactUs";

class EmailPopover extends Component {
    render() {

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal-inside">
                <span onClick={this.props.onHide} className="modal-close">
                    <i className="fas fa-times fa-3x close-icon"></i>
                </span>
                <ContactUs
                {...this.props}
                ></ContactUs>
            </Modal>

        );
    }
}

export default EmailPopover;
