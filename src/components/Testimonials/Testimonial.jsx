import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.png";
import profilePic2 from "../../img/profile2.jfif";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Michael is an exceptional web developer who goes above and beyond to deliver outstanding results.",
    },
    {
      img: profilePic2,
      review:
        "I am beyond impressed with Michael's web development skills. His attention to detail, technical expertise, and commitment to delivering on time is outstanding.",
    },
    {
      img: profilePic3,
      review:
        "Michael has an impeccable eye for design, and transforms vision into a stunning reality. The website he creates is not only visually captivating but also intuitive and user-friendly. I highly recommend Michael for his exceptional web design skills.",
    },
    {
      img: profilePic4,
      review:
        "Working with Michael was an absolute game-changer for my business. His web design expertise is exceptional, and he brought my brand to life with his artistic flair. The website he designed is not only visually stunning but also user-centric, providing an exceptional browsing experience.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
