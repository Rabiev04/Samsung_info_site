import SliderMain from "../SliderMain";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { accardionHover } from "../../mockData/MenuItemsDrop";
import NavbarPage from "./NavbarPage";
export default function MainPage() {
  const [position, setPosition] = useState({
    x: "",
    y: "",
  });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="main_page_box">
      <div className="slider-main">
        <SliderMain />
      </div>
      <div className="mobiles_main_links"></div>
      <div>
        <div className="mobiles_main_heading-box">
          <Link className="mobiles_main_heading" to="/mobiles">
            Мобильные устройства
          </Link>
        </div>
        <div className="mobiles-swiperslide">
          <Swiper
            // className="swiper-mobiles"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="mobiles-first-swipeslider">
                <div className="promotions-for-business">
                  <Link to="/s23galaxy">
                    <img
                      class="s23_galaxy_in_main"
                      src="//images.samsung.com/is/image/samsung/assets/ru/2302/home/HOME_DM1_DM2_KV_Merchandising_376X376_pc.png?$376_376_PNG$"
                    ></img>
                  </Link>
                </div>
                <div className="sumsung-knox-galaxy-swiper">
                  <div class="four-recommendation-images">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img
                        class="oneof-four-recommendation-images"
                        src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/2D_UK_pc.png?$330_330_PNG$"
                      ></img>
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">This is a title</h3>
                        <p class="content-text">This is a short description</p>
                      </div>
                    </div>
                  </div>
                  <div class="four-recommendation-images">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img
                        class="oneof-four-recommendation-images"
                        src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/Knox-Suite_pc.png?$330_330_PNG$"
                      ></img>
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">This is a title</h3>
                        <p class="content-text">This is a short description</p>
                      </div>
                    </div>
                  </div>
                  <div class="four-recommendation-images">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img
                        class="galaxy-s22-swiper"
                        src="//images.samsung.com/is/image/samsung/assets/ru/business/home/HOME_Galaxy_S22_Ultra_KV_Merchandising_160X160.png?$160_160_PNG$"
                      ></img>
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">This is a title</h3>
                        <p class="content-text">This is a short description</p>
                      </div>
                    </div>
                  </div>
                  <div class="four-recommendation-images">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img
                        class="galaxy-s22-swiper"
                        src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/IM_Home_Showcase_Card_01_Feature_5_Samsung_Business_Shop_MO_192X192.jpg?$160_160_JPG$"
                      ></img>
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">This is a title</h3>
                        <p class="content-text">This is a short description</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mobiles-second-swipeslider-box">
              <div className="mobiles-second-swipeslider">
                <div className="products-mobiles-swipeslider">
                  <img
                    class="galaxy-a52-mobiles-swipeslider"
                    alt="Galaxy A52"
                    src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/IM_Home_Showcase_Card_02_Products_1_Enterprise_Edition_PC_376X376.png?$376_376_PNG$"
                  ></img>
                </div>
                <div className="products-mobiles-swipeslider">
                  <img
                    class="galaxy-tab-active-3-swipeslider"
                    alt="Galaxy Tab Active 3 и Galaxy XCover 5"
                    src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/IM_Home_Showcase_Card_02_Products_2_Rugged_PC_376X376.png?$376_376_PNG$"
                  ></img>
                </div>
                <div className="products-mobiles-swipeslider">
                  <img
                    class="galaxy-tab8-swipeslide"
                    alt="Galaxy Tab S8"
                    src="//images.samsung.com/is/image/samsung/assets/ru/business/home/IM_Home_Showcase_Card_02_Products_3_Tablets_PC_376X376.png?$376_376_PNG$"
                  ></img>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div>
        <div className="mobiles_main_heading-box">
          <Link className="mobiles_main_heading" to="/displays">
            Дисплеи
          </Link>
        </div>
        <div className="mobiles-swiperslide">
          <Swiper
            // className="swiper-mobiles"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="mobiles-first-swipeslider">
                <div className="promotions-for-business-display">
                  <img
                    class="promotions-for-business-img"
                    alt="Откройте для себя бесконечные возможности Samsung The Wall — от создания роскошного стиля жизни до изысканной корпоративной среды"
                    src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/big_The-wall-showcase_pc.jpg?$684_684_JPG$"
                  ></img>
                </div>
                <div className="sumsung-knox-galaxy-swiper">
                  <div class="four-recommendation-images">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img
                        class="galaxy-s22-swiper"
                        alt="Продукты смарт-панелей"
                        src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/display-products_PC_Smart-Signage_2.png?$160_160_PNG$"
                      ></img>
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">This is a title</h3>
                        <p class="content-text">This is a short description</p>
                      </div>
                    </div>
                  </div>
                  <div class="four-recommendation-images">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img
                        class="galaxy-s22-swiper"
                        alt="Коммерческие ТВ"
                        src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/display-products_PC_Commercial-TVs_2.png?$160_160_PNG$"
                      ></img>
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">This is a title</h3>
                        <p class="content-text">This is a short description</p>
                      </div>
                    </div>
                  </div>
                  <div class="four-recommendation-images">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img
                        class="s22-galaxy-swiper"
                        alt="LED-панели"
                        src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/display-products_PC_LED-Signage_2.png?$160_160_PNG$"
                      ></img>
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">This is a title</h3>
                        <p class="content-text">This is a short description</p>
                      </div>
                    </div>
                  </div>
                  <div class="four-recommendation-images">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img
                        class="s22-galaxy-swiper"
                        alt="Мониторы"
                        src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/display-products_PC_Monitors_2.png?$160_160_PNG$"
                      ></img>
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">This is a title</h3>
                        <p class="content-text">This is a short description</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mobiles-second-swipeslider-box">
              <div className="mobiles-second-swipeslider">
                <div className="products-mobiles-swipeslider">
                  <img
                    class="smart-displays"
                    alt="MagicINFO™ управляет различными цифровыми панелями "
                    src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/Display-Solutions_PC_448x684_3-Card_MagicINFO.jpg?$448_684_JPG$"
                  ></img>
                </div>
                <div className="products-mobiles-swipeslider">
                  <img
                    class="galaxy-tab-active-3-swipeslider"
                    alt="Galaxy Tab Active 3 и Galaxy XCover 5"
                    src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/IM_Home_Showcase_Card_02_Products_2_Rugged_PC_376X376.png?$376_376_PNG$"
                  ></img>
                </div>
                <div className="products-mobiles-swipeslider">
                  <img
                    class="galaxy-tab8-swipeslide"
                    alt="Galaxy Tab S8"
                    src="//images.samsung.com/is/image/samsung/assets/ru/business/home/IM_Home_Showcase_Card_02_Products_3_Tablets_PC_376X376.png?$376_376_PNG$"
                  ></img>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div>
        <div className="mobiles_main_heading-box">
          <Link className="mobiles_main_heading" to="/climat">
            Климат
          </Link>
        </div>
        <div className="climat-swiperslide">
          <div className="mobiles-first-swipeslider">
            <div className="modern-climat-solutions">
              <Link to="/climat">
                <img
                  class="modern-climat-solutions-img"
                  alt="Настенный кондиционер установлен на стене, под ним — диван, стол и другая мебель."
                  src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/da-showcase-card1-pc.jpg?$684_684_JPG$"
                ></img>
              </Link>
            </div>
            <div className="sumsung-knox-galaxy-swiper">
              <div class="four-recommendation-images">
                <div class="content">
                  <div class="content-overlay"></div>
                  <img
                    class="galaxy-s22-swiper"
                    alt="Изображение настенного кондиционера"
                    src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/AM015TNVDCH-AA_001_Front_White_thumb_PC_160x160.png?$160_160_PNG$"
                  ></img>
                  <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">This is a title</h3>
                    <p class="content-text">This is a short description</p>
                  </div>
                </div>
              </div>
              <div class="four-recommendation-images">
                <div class="content">
                  <div class="content-overlay"></div>
                  <img
                    class="galaxy-s22-swiper"
                    alt="Изображение продукта: 4-х поточный кондиционер WindFree"
                    src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/250_AM045NN4DEH-EU_001_Front-Sensor-on_White_thumb_PC_160x160.png?$160_160_PNG$"
                  ></img>
                  <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">This is a title</h3>
                    <p class="content-text">This is a short description</p>
                  </div>
                </div>
              </div>
              <div class="four-recommendation-images">
                <div class="content">
                  <div class="content-overlay"></div>
                  <img
                    class="galxy-s22-swiper"
                    alt="Изображение продукта: 1-но поточный кондиционер WindFree"
                    src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/250_AM007NN1DCH-AA_001_Front_White_thumb_PC_160x160.png?$160_160_PNG$"
                  ></img>
                  <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">This is a title</h3>
                    <p class="content-text">This is a short description</p>
                  </div>
                </div>
              </div>
              <div class="four-recommendation-images">
                <div class="content">
                  <div class="content-overlay"></div>
                  <img
                    class="galaxy-s22-swiper"
                    alt="Изображение продукта: кассетный кондиционер 360"
                    src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/180_4.AC071KN4DKH-EU_002_Front_White_thumb_PC_160x160.png?$160_160_PNG$"
                  ></img>
                  <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">This is a title</h3>
                    <p class="content-text">This is a short description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="history_of_success">
        <ul className="list-of_successes">
          {accardionHover.map((el, i) => {
            return (
              <li key={i}>
                <div className="image-name">
                  <span>{el.name}</span>
                  <div className="image-cont">
                    <img src={el.img} alt={el.name}></img>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          className="cursor"
        ></div>
      </div>
    </div>
  );
}
