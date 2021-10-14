import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Col, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import Badge from "react-bootstrap/Badge";

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      email: email,
      to_name: "user_4lRezC8rbLcGfWhYKc8VD",
      subject: subject,
      message: message,
      name: name
    }
    emailjs.send(
      "service_igzr54h",
      "template_n8h3nhj",
      templateParams,
      "user_4lRezC8rbLcGfWhYKc8VD"
    )
    this.resetForm()
    this.props.onHide();
  }
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  render() {
    return (
      <>
        <div id="contactEmail">
          <h1 className="project-title-settings mt-3">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Col>
                <Badge pill className="main-badge mr-2 mb-2" key={0}>
                  Email Address
            </Badge>
                <Input
                  type="email"
                  name="email"
                  required
                  value={this.state.email}
                  className="text-primary-black"
                  onChange={this.handleChange.bind(this, 'email')}
                  placeholder="Enter email"
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formBasicName">
              <Col>
                <Badge pill className="main-badge mr-2 mb-2" key={1}>
                  Full Name
            </Badge>
                <Input
                  required
                  type="text"
                  name="name"
                  value={this.state.name}
                  className="text-primary-black"
                  onChange={this.handleChange.bind(this, 'name')}
                  placeholder="Name"
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formBasicSubject">
              <Col>
                <Badge pill className="main-badge mr-2 mb-2" key={2}>
                  Subject
            </Badge>
                <Input
                  type="text"
                  name="subject"
                  className="text-primary-black"
                  value={this.state.subject}
                  onChange={this.handleChange.bind(this, 'subject')}
                  placeholder="Subject"
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Col>
                <Badge pill className="main-badge mr-2 mb-2" key={3}>
                  Message
            </Badge>
                <Input
                  required
                  type="textarea"
                  name="message"
                  className="text-primary-black"
                  value={this.state.message}
                  onChange={this.handleChange.bind(this, 'message')}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Button className="submit-button" variant="outline-secondary" size="lg" block type="submit">
                  Submit
                </Button>
              </Col>
            </FormGroup>
            <br></br>
          </Form>
        </div>
      </>
    )
  }
}
export default ContactForm