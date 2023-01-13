import React from "react";

function Page1(props) {
  return (
    <>
      {/* contents2 */}
      <section className="contents2">
        <div className="flex grid">
          <div className="flex flex_fr">
            <div className="txt">
              <h3>
                우리의 <span className="underline">핵심가치</span>
              </h3>
              <p>
                삶에서 만족을 느끼기 위해선
                <br />
                당신이 위대하다고 생각하는 일을 해야 하죠.
              </p>
            </div>
          </div>
          <div className="flex flex_manage">
            <div className="txt2">
              <h3>Management</h3>
              <span className="material-symbols-rounded">arrow_forward</span>
            </div>
          </div>
          <div className="flex flex_branding">
            <div className="txt2">
              <h3>branding</h3>
              <span className="material-symbols-rounded">arrow_forward</span>
            </div>
          </div>
          <div className="flex flex_development left">
            <div className="txt2">
              <h3>Development</h3>
              <span className="material-symbols-rounded">arrow_forward</span>
            </div>
          </div>
          <div className="flex flex_analysis">
            <div className="txt2">
              <h3>Analysis</h3>
              <span className="material-symbols-rounded">arrow_forward</span>
            </div>
          </div>
          <div className="flex flex_marketing">
            <div className="txt2">
              <h3>Marketing</h3>
              <span className="material-symbols-rounded">arrow_forward</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page1;
