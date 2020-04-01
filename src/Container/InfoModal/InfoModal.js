import React from "react";
import CSS from "./InfoModal.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
class InfoModal extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    project: "",
    details: ""
  };
  validateEmail = () =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email);
  validateName = () =>
    /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(this.state.name);
  validatePhone = () =>
    /^(?:(\+))?(?:[0-9]{0,3}[\s.\/-]?)?(?:(?:\((?=\d{3}\)))?(\d{3})(?:(?!\(\d{3})\))?[\s.\/-]?)?(?:(?:\((?=\d{3}\)))?(\d{3})(?:(?!\(\d{3})\))?[\s.\/-]?)?(?:(?:\((?=\d{4}\)))?(\d{4})(?:(?!\(\d{4})\))?[\s.\/-]?)?$/g.test(
      this.state.phone
    ) && this.state.phone.length >= 5;
  validateProject = () => this.state.project.length > 5;
  validateAll = () => {
    this.validateName() &&
      this.validateEmail() &&
      this.validatePhone() &&
      this.validateProject();
  };
  render = () => {
    return (
      <>
        <div className={CSS.backdrop} onClick={this.props.ShutDownModal}></div>
        <div className={CSS.main}>
          <div className={CSS.firstLine}>
            <p>FILL OUT YOUR INFO</p>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={this.props.ShutDownModal}
            />
          </div>
          <div>
            <div className={CSS.modal}>
              <p>I am </p>
              <input
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                type="name"
                className={CSS.input}
                placeholder="John/Janet Doe*"
              />
              <p>accessible at my email</p>
              <input
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                type="email"
                className={CSS.input}
                placeholder="someone@something.com*"
              />
              <p>or my phone</p>
              <input
                value={this.state.phone}
                onChange={e => this.setState({ phone: e.target.value })}
                type="phone"
                className={CSS.input}
                placeholder="+92 300 0000000*"
              />
              <p>... My Project is about</p>
              <input
                value={this.state.project}
                onChange={e => this.setState({ project: e.target.value })}
                type="text"
                className={CSS.input}
                placeholder="<awesome project idea>*"
              />

              <p>. Some more details are: </p>
              <textarea
                value={this.state.details}
                onChange={e => this.setState({ details: e.target.value })}
                type="text"
                className={CSS.input}
                style={{ height: "4em", width: "25em" }}
                placeholder="<a mobile app that tracks user's diet with MongoDB integration, use material UI and keep it very simple.>"
              />
            </div>
          </div>
          <div className={CSS.submit}>
            <button className={[CSS.input]} disabled={!this.validateAll}>
              {this.validateName()
                ? this.validateEmail()
                  ? this.validatePhone()
                    ? this.validateProject()
                      ? "Get a response"
                      : "Enter project info"
                    : "Enter correct phone"
                  : "Enter correct email"
                : "Enter correct name"}
            </button>
          </div>
        </div>
      </>
    );
  };
}
export default InfoModal;
