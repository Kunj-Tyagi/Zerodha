import React from "react";

function Universe({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mb-4">The Zerodha Universe</h1>
        <p className="fs-5 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 ">
          <img src="media/images/smallcaseLogo.png" className="mb-2"></img>
          <p className="text-small text-muted">
            Thematic investing platform
            <br /> that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "40%" }}
            className="mb-2"
          ></img>
          <p className="text-small text-muted">
            Systematic trading platform
            <br /> that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "60%" }}
            className="mb-3"
          ></img>
          <p className="text-small text-muted">
            Options trading platform that lets you
            <br /> create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/zerodhafundHouse.png"
            style={{ width: "44%" }}
            className="mb-2"
          ></img>
          <p className="text-small text-muted">
            Our asset management venture
            <br /> that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/dittoLogo.png"
            style={{ width: "35%" }}
            className="mb-2"
          ></img>
          <p className="text-small text-muted">
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-selling. Sign up for free
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/tijori.svg"
            style={{ width: "35%" }}
            className="mb-2"
          ></img>
          <p className="text-small text-muted">
            Investment research platform <br/>that offers detailed insights on
            stocks,<br/> sectors, supply chains, and more.
          </p>
        </div>
        <button className="p-2 btn btn-primary fs-5 mt-5 mb-4" style={{ width: "20%", margin: "0 auto" }}>
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
