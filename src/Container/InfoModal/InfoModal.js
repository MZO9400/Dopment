import React from "react";
import CSS from "./InfoModal.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

class InfoModal extends React.Component {
    state = {
        name: "",
        email: "",
        phone: "",
        project: "",
        details: ""
    };
    validateEmail = () =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ /* eslint-disable-line */
            .test(this.state.email);
    validateName = () =>
        /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/ /* eslint-disable-line */
            .test(this.state.name);
    validatePhone = () =>
        /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/ /* eslint-disable-line */
            .test(this.state.phone) && this.state.phone.length >= 5;
    validateProject = () => this.state.project.length > 5;
    validateAll = () => {
        this.validateName() &&
        this.validateEmail() &&
        this.validatePhone() &&
        this.validateProject();
    };
    calculateWidth = (text, placeholder) => {
        if (text.length >= 20) {
            return "20rem";
        }
        return text.length === 0 ? `${placeholder.length/2}rem` : `${text.length/2}rem`;
    }
    render = () => {
        return (
            <div className={[CSS.show, this.props.open ? "" : CSS.hide].join(" ")}>
                <div className={CSS.backdrop} onClick={this.props.ShutDownModal}/>
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
                                onChange={e => this.setState({name: e.target.value})}
                                type="name"
                                className={CSS.input}
                                style={{width: this.calculateWidth(this.state.name, "John/Janet Doe*")}}
                                placeholder="John/Janet Doe*"
                            />
                            <p>accessible at my email</p>
                            <input
                                value={this.state.email}
                                onChange={e => this.setState({email: e.target.value})}
                                type="email"
                                className={CSS.input}
                                style={{width: this.calculateWidth(this.state.email, "someone@something.com*")}}
                                placeholder="someone@something.com*"
                            />
                            <p>or my phone</p>
                            <input
                                value={this.state.phone}
                                onChange={e => this.setState({phone: e.target.value})}
                                type="phone"
                                className={CSS.input}
                                style={{width: this.calculateWidth(this.state.phone, "+92 300 0000000*")}}
                                placeholder="+92 300 0000000*"
                            />
                            <p>... My Project is about</p>
                            <input
                                value={this.state.project}
                                onChange={e => this.setState({project: e.target.value})}
                                type="text"
                                className={CSS.input}
                                style={{width: this.calculateWidth(this.state.project, "<awesome project idea>*")}}
                                placeholder="<awesome project idea>*"
                            />

                            <p>. Some more details are: </p>
                            <textarea
                                value={this.state.details}
                                onChange={e => this.setState({details: e.target.value})}
                                type="text"
                                className={CSS.input}
                                style={{height: "4em", width: "25em"}}
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
            </div>
        );
    };
}

export default InfoModal;
