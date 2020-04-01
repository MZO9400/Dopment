import React from "react";
import CSS from "./Work.module.css";
class OurWork extends React.Component {
  state = {
    selected: "All",
    showMore: false
  };
  render = () => {
    return (
      <div className={CSS.main} ref={this.props.refr}>
        <div>
          <h1 style={{ color: "#1a7cb5" }}>Our Work</h1>
          <p>
            Our clients live in different countries and speak different
            languages but we are close partners all the same. Every project is a
            story of close cooperation between us and our clients. We love to
            find solutions together, to design together, to reach great results
            together.
          </p>
        </div>
        <div>
          <div className={CSS["nav-links"]}>
            <li
              onClick={() =>
                this.setState({ showMore: false, selected: "All" })
              }
              style={{
                color: this.state.selected === "All" ? "#1a7cb5" : "inherit"
              }}
            >
              All
            </li>
            <li
              onClick={() =>
                this.setState({ showMore: false, selected: "Web" })
              }
              style={{
                color: this.state.selected === "Web" ? "#1a7cb5" : "inherit"
              }}
            >
              Web Dev
            </li>
            <li
              onClick={() =>
                this.setState({ showMore: false, selected: "Ecm" })
              }
              style={{
                color: this.state.selected === "Ecm" ? "#1a7cb5" : "inherit"
              }}
            >
              E Comm
            </li>
            <li
              onClick={() =>
                this.setState({ showMore: false, selected: "Agn" })
              }
              style={{
                color: this.state.selected === "Agn" ? "#1a7cb5" : "inherit"
              }}
            >
              Agency
            </li>
            <li
              onClick={() =>
                this.setState({ showMore: false, selected: "Mbl" })
              }
              style={{
                color: this.state.selected === "Mbl" ? "#1a7cb5" : "inherit"
              }}
            >
              Mobile
            </li>
          </div>
        </div>
        <div>{/*WIP*/}</div>
      </div>
    );
  };
}
export default OurWork;
