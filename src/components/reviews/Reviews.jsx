import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import "swiper/css";
import 'swiper/css/pagination';
import "./reviews.scss";
import AvatarWebp_1 from "./../../assets/avatar1.webp";
import AvatarJpg_1 from "./../../assets/avatar1.jpg";
import AvatarWebp_2 from "./../../assets/avatar2.webp";
import AvatarJpg_2 from "./../../assets/avatar2.jpg";
import AvatarWebp_3 from "./../../assets/avatar3.webp";
import AvatarJpg_3 from "./../../assets/avatar3.jpg";
import AvatarWebp_4 from "./../../assets/avatar4.webp";
import AvatarJpg_4 from "./../../assets/avatar4.jpg";

const data = [
  {
    id: 1,
    name: "Dora Varuna",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, quam. Minima nobis cumque mollitia unde deleniti ducimus repellendus soluta, amet alias accusantium itaque! Obcaecati eligendi totam quis voluptatibus at illo!",
    imgJpg: AvatarJpg_1,
    imgWebp: AvatarWebp_1,
  },
  {
    id: 2,
    name: "Ursula Miron",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, quam. Minima nobis cumque mollitia unde deleniti ducimus repellendus soluta, amet alias accusantium itaque! Obcaecati eligendi totam quis voluptatibus at illo!",
    imgJpg: AvatarJpg_2,
    imgWebp: AvatarWebp_2,
  },
  {
    id: 3,
    name: "Kasi Deirbhile",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, quam. Minima nobis cumque mollitia unde deleniti ducimus repellendus soluta, amet alias accusantium itaque! Obcaecati eligendi totam quis voluptatibus at illo!",
    imgJpg: AvatarJpg_3,
    imgWebp: AvatarWebp_3,
  },
  {
    id: 4,
    name: "Falk Kidist",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, quam. Minima nobis cumque mollitia unde deleniti ducimus repellendus soluta, amet alias accusantium itaque! Obcaecati eligendi totam quis voluptatibus at illo!",
    imgJpg: AvatarJpg_4,
    imgWebp: AvatarWebp_4,
  },
];

const Reviews = () => {
  return (
    <section id="reviews">
      <h2>Reviews from clients</h2>
      <h3>Testimonials</h3>
      <Swiper
        className="container reviews_container"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
      >
        {data.map((item) => (
          <SwiperSlide className="reviews_item" key={item.id}>
            <div className="reviews_item_img">
              <picture>
                <source srcSet={item.imgWebp} type="image/webp" />
                <img src={item.imgJpg} alt={item.name} width={75} height={75} />
              </picture>
            </div>
            <h4 className="reviews_item_name">{item.name}</h4>
            <small className="reviews_item_info">{item.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
