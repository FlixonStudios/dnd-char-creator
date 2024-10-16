import React from "react";

export function Footer({ isMock }) {
  let style = {
    backgroundColor: `rgba(255,0,0,0.7)`,
    left: "0",
    bottom: "0",
    position: "fixed",
    width: "100%",
  };

  function renderDisclaimer() {
    let disclaimerStyle = {
      backgroundColor: `rgba(0,0,0,0.7)`,
      padding: `8px`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
    };
    return (
      <div style={disclaimerStyle}>
        <p style={{ color: "white" }}>
          Disclaimer: This site is a not commercial and is not official. Just my
          personal project.
        </p>
      </div>
    );
  }

  return <div style={style}>{renderDisclaimer()}</div>;
}

//export default Footer;