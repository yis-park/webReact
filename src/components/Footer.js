import React from "react";

function Footer(props) {
  return (
    <footer>
      <div className="foot">
        <p>
          copyrigth &copy; 2022 ALL Rigth by DYAMI.
          <br />
          <a href="#"> Terms of Use</a> / <a href="#">Privacy Policy</a>
        </p>
        <p className="right">from.yami@gmail.com · 1234-5678</p>
      </div>
      <a href="#">
        <span className="material-symbols-rounded"> arrow_circle_up </span>
      </a>
    </footer>
  );
}

export default Footer;
