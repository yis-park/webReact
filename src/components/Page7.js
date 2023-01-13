import React from "react";
import KakaoMap from "./KakaoMap";

function Page7(props) {
  const path = process.env.PUBLIC_URL;

  return (
    <section>
      <div className="contents8">
        <div className="h3 p">
          <h3>찾아오시는 길</h3>
          <p>무료주차가 가능한 편리하고 넓은 지상주차장 보유!</p>
        </div>

        <div className="container_map">
          <KakaoMap />
        </div>
        <div className="container_adress">
          <div className="adress">
            <div className="aeress_aro">
              <div className="adress_fr list">
                <div className="icon">
                  <span className="material-symbols-rounded">location_on</span>
                </div>
                <div className="h5 p">
                  <h5>주소</h5>
                  <p>795 Folsom Ave, Suite 600 San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
            <div className="aeress_aro">
              <div className="adress_se list">
                <div className="icon">
                  <span className="material-symbols-rounded"> headphones </span>
                </div>
                <div className="h5 p">
                  <h5>전화번호</h5>
                  <p>+62-111-222-333</p>
                </div>
              </div>
            </div>
            <div className="aeress_aro">
              <div className="adress_th list">
                <div className="icon">
                  <span className="material-symbols-rounded"> mail </span>
                </div>
                <div className="h5 p">
                  <h5>이메일</h5>
                  <p>from.yami@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="aeress_aro">
              <div className="adress_fo list">
                <div className="icon">
                  <span className="material-symbols-rounded"> sms </span>
                </div>
                <div className="h5 p">
                  <h5>카카오 채널</h5>
                  <p>from.yami@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page7;
