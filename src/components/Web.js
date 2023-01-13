import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../assets/style/WebStyle.css";
import "../assets/style/WebBannerStyle.css";
import { Pagination, Autoplay, Navigation } from "swiper";

function Web() {
  return (
    <>
      {/* contents1 */}
      <main>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
          }}
          navigation
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              slot="container-start"
              className="parallax-bg"
              style={{ background: "url(./images/img-2.jpg)" }}
            ></div>
            <div className="title" data-swiper-parallax="-300">
              누군가를 위해
              <br />
              당신의 삶을
              <br />
              버리지 마세요.
            </div>

            <div className="text" data-swiper-parallax="-100">
              <p>
                인생에서 가장 좋아하는 것을 하는데는 돈이 필요하지 않다. <br />
                즉, 우리 모두가 가진 가장 귀중한 자산은 시간이다.
              </p>
            </div>
            <input type="button" value="more view" />
          </SwiperSlide>

          <SwiperSlide>
            <div
              slot="container-start"
              className="parallax-bg"
              style={{ background: "url(./images/img-1.jpg)" }}
            ></div>
            <div className="title2" data-swiper-parallax="-300">
              당신이 원한다면
              <br />
              당신을 날수도 있다.
              <br />
              자신을 믿어라.
            </div>

            <div className="text2" data-swiper-parallax="-100">
              <p>
                인생에서 가장 좋아하는 것을 하는데는 돈이 필요하지 않다. <br />
                즉, 우리 모두가 가진 가장 귀중한 자산은 시간이다.
              </p>
            </div>
            <div className="btn2">
              <input type="button" value="more view" />
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
          }}
          navigation
          loop={true}
          className="mySwiper"
        >
          <section className="contents1">
            <SwiperSlide>
              <h2>
                누군가를 위해
                <br />
                당신의 삶을
                <br />
                버리지 마세요.
              </h2>

              <p>
                인생에서 가장 좋아하는 것을 하는데는 돈이 필요하지 않다. <br />
                즉, 우리 모두가 가진 가장 귀중한 자산은 시간이다.
              </p>
              <img src="./images/img-1.jpg" alt="img1" />
            </SwiperSlide>
            <SwiperSlide>
              <h2>
                누군가를 위해
                <br />
                당신의 삶을
                <br />
                버리지 마세요.
              </h2>

              <p>
                인생에서 가장 좋아하는 것을 하는데는 돈이 필요하지 않다. <br />
                즉, 우리 모두가 가진 가장 귀중한 자산은 시간이다.
              </p>
              <img src="./images/img-2.jpg" alt="img2" />
            </SwiperSlide>
            <input type="button" value="more view" />
          </section>
        </Swiper> */}
      </main>
    </>
  );
}

export default Web;
