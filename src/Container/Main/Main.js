import React from "react";
import CSS from "./Main.module.css";
import Particles from "react-particles-js";
import particleConfig from "./Particles";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import Work from "./Work/Work";
import Footer from "./Footer/Footer";
import InfoModal from "../InfoModal/InfoModal";
import Nav from "../Nav/Nav";
import Marquee from "../../Components/Marquee/Marquee";

export default class extends React.Component {
    state = {
        getInTouchModal: false
    };

    constructor(props) {
        super(props);
        this.HomeRef = React.createRef();
        this.ServiceRef = React.createRef();
        this.WorkRef = React.createRef();
        this.AboutRef = React.createRef();
        this.ContactRef = React.createRef();
    }

    toggleDrawer = () =>
        this.setState(state => {
            return {getInTouchModal: !state.getInTouchModal};
        });

    render() {
        return (
            <div className={CSS.main}>
                <Particles
                    params={particleConfig()}
                    style={{
                        position: "fixed",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: "-9999"
                    }}
                />
                <InfoModal
                    ShutDownModal={this.toggleDrawer}
                    open={this.state.getInTouchModal}
                />
                <Nav
                    home={this.HomeRef}
                    service={this.ServiceRef}
                    about={this.AboutRef}
                    work={this.WorkRef}
                    contact={this.ContactRef}
                />
                <div className={CSS.heading} ref={this.HomeRef}>
                    <h1>
                        We shape brand identities and design digital experiences to help
                        organizations innovate their business
                    </h1>
                </div>
                <AboutUs refr={this.AboutRef}/>
                <Services refr={this.ServiceRef}/>
                <Work refr={this.WorkRef}/>
                <Marquee text="Get in touch" onClick={this.toggleDrawer}/>
                <Footer refr={this.ContactRef}/>
            </div>
        );
    }
}
