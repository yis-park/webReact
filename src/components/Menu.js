import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const path = process.env.PUBLIC_URL;
  const headerRef = useRef(null);
  const handleScroll = () => {
    console.log("스크롤 중");
    if (window.scrollY > 150) {
      headerRef.current.className = "on";
    } else {
      headerRef.current.className = "";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="container">
        {/* <header> */}

        <header ref={headerRef}>
          {/* logo */}
          <Link to="/" className="logo">
            <img
              className="logoDark "
              src={path + "/images/logo-dark.png"}
              alt="logo"
            />
            <img
              className="logoImg"
              src={path + "/images/logo.png"}
              alt="logo"
            />
          </Link>
          {/* 드롭다운 메뉴버튼 */}
          <ul className="gnb">
            <li>
              <Link to="/"> about </Link>
              <ul>
                <li>
                  <Link to="/">clean</Link>
                </li>
                <li>
                  <Link to="/">simple</Link>
                </li>
                <li>
                  <Link to="/">wide</Link>
                </li>
                <li>
                  <Link to="/">history</Link>
                </li>
                <li>
                  <Link to="/">store map</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/"> service </Link>
              <ul>
                <li>
                  <Link to="/">clean</Link>
                </li>
                <li>
                  <Link to="/">simple</Link>
                </li>
                <li>
                  <Link to="/">wide</Link>
                </li>
                <li>
                  <Link to="/">grid</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/"> product </Link>
              <ul>
                <li>
                  <Link to="/">photo</Link>
                </li>
                <li>
                  <Link to="/">albums</Link>
                </li>
                <li>
                  <Link to="/">video</Link>
                </li>
                <li>
                  <Link to="/">popup</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/"> board </Link>
              <ul>
                <li>
                  <Link to="/">news</Link>
                </li>
                <li>
                  <Link to="/">gallery</Link>
                </li>
                <li>
                  <Link to="/">webzine</Link>
                </li>
                <li>
                  <Link to="/">schdule</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/"> contact </Link>
              <ul>
                <li>
                  <Link to="/">clean</Link>
                </li>
                <li>
                  <Link to="/">simple</Link>
                </li>
                <li>
                  <Link to="/">wide</Link>
                </li>
                <li>
                  <Link to="/">faq</Link>
                </li>
                <li>
                  <Link to="/">1:1 qna</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/"> element </Link>
              <ul>
                <li>
                  <Link to="/">grid</Link>
                </li>
                <li>
                  <Link to="/">section</Link>
                </li>
                <li>
                  <Link to="/">typeography</Link>
                </li>
                <li>
                  <Link to="/">buttons</Link>
                </li>
                <li>
                  <Link to="/">icon box</Link>
                </li>
                <li>
                  <Link to="/">tabs & accordions</Link>
                </li>
                <li>
                  <Link to="/">chart & progress</Link>
                </li>
                <li>
                  <Link to="/">footer style</Link>
                </li>
                <li>
                  <Link to="/">board output</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/"> shop </Link>
            </li>
          </ul>
          <ul className="gnb_log">
            <li className="log">
              <Link to="/"> join </Link>
            </li>
            <li>
              <Link to="/"> login </Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default Menu;
