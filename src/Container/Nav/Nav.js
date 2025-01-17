import React from "react";
import CSS from "./Nav.module.css";
import DOPMENT from "../../Images/DOPMENT.png";

export default props => {
    let [navBtn, setNavBtn] = React.useState(false);

    React.useEffect(() => {
        if (window.innerWidth >= 600) {
            setNavBtn(true);
        };
    }, [])
    return (
        <div className={CSS.nav}>
            <img src={DOPMENT} className={CSS.img} alt="not available"/>
            <div className={CSS["nav-header"]}>
                <div className={[CSS.mainText, CSS["nav-title"]].join(" ")}>
                    DOPMENT
                </div>
            </div>
            <div className={CSS["nav-btn"]} onClick={() => setNavBtn(!navBtn)}>
                <label>
          <span
    style={{
        transform: navBtn ? "rotate(135deg)" : ""
    }}
    />
                </label>
            </div>
            <div className={[CSS["nav-links"], navBtn ? "" : CSS.display].join(" ")}>
                <li
                    onClick={() =>
                        props.home.current.scrollIntoView({behavior: "smooth"})
                    }
                >
                    Home
                </li>
                <li
                    onClick={() =>
                        props.about.current.scrollIntoView({behavior: "smooth"})
                    }
                >
                    About
                </li>
                <li
                    onClick={() =>
                        props.service.current.scrollIntoView({behavior: "smooth"})
                    }
                >
                    Services
                </li>
                <li
                    onClick={() =>
                        props.work.current.scrollIntoView({behavior: "smooth"})
                    }
                >
                    Work
                </li>
                <li
                    onClick={() =>
                        props.contact.current.scrollIntoView({behavior: "smooth"})
                    }
                >
                    Contact
                </li>
            </div>
        </div>
    );
};
