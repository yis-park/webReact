import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconName, FaRegStopCircle } from "react-icons/fa";
import "./page2.scss";

function Page2() {
  const [isNav, setIsNav] = useState(false);
  const OnPlay = () => {
    setIsNav(!isNav);
  };
  const path = process.env.PUBLIC_URL;
  return (
    <>
      {/* contents3 */}
      <section className="contents3">
        <div className="flex flex_h3">
          <h3>
            <span className="underline"> 위대한 일 </span>은 언제나 다른 사람과
            협력해야만 이뤄낼 수 있습니다.
          </h3>

          <h4>
            우리는 많은 것을 할 수 있는 기회 없고, 모든 사람들은 훌륭히 해내야만
            한다. 이건 우리 인생이기 때문이다.
            <br />
            인생은 짧고 끝이 있다. 우리 모두는 맡은 일을 하도록 선택되었다.
            그러니까 정말 훌륭하게 해내야 하고 가치있게 만들어야 한다.
          </h4>
        </div>
        <div className="video">
          <img src={path + "/images/09.jpg"} alt="video" />
          <Link to="/" className={isNav ? "on" : ""} onClick={OnPlay}>
            <span className="material-symbols-rounded"></span>
          </Link>

          <iframe
            className={!isNav ? "on" : ""}
            onClick={OnPlay}
            src="https://player.vimeo.com/video/544444262?h=8f60d3a658"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div
            id="closeBtn"
            className={!isNav ? "on" : ""}
            onClick={() => setIsNav(false)}
          >
            <FaRegStopCircle />
          </div>
        </div>
      </section>
    </>
  );
}

export default Page2;
