import { Carousel } from "antd";
import { Link } from "react-router-dom";
const contentStyle = {
  width: "1485px",
  height: "633px",
  color: "#000",
  lineHeight: "160px",
  textAlign: "center",
  background: "#000",
};
const SliderMain = () => (
  <Carousel autoplay>
    <div className="each_slider_main">
      <div className="slider_main_first_text">
        <h1>Galaxy S23 | S23+</h1>
        <Link to="/s23galaxy" className="find_more">
          Узнать больше
        </Link>
      </div>
      <h3 style={contentStyle}>
        <img
          style={{ width: "100%", height: "100%" }}
          src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-camera-kv.jpg"
        ></img>
      </h3>
    </div>
    <div className="each_slider_main">
      <div className="slider_main_text">
        <h1>Galaxy S22 Ultra</h1>
        <Link to="/mobiles" className="find_more">
          Узнать больше
        </Link>
      </div>
      <h3 className="slider_main_img" style={contentStyle}>
        <img
          style={{ width: "100%", height: "100%" }}
          alt="Galaxy S22 Ultra в цвете бургунди."
          src="//images.samsung.com/is/image/samsung/assets/ru/business/home/HOME_Galaxy_S22_Ultra_KV_Main-KV_1440X640.jpg?imwidth=1366"
        ></img>
      </h3>
    </div>
    <div className="each_slider_main">
      <h3 style={contentStyle}>
        <img
          style={{ width: "100%", height: "100%" }}
          alt="Гостиная оборудована настенным кондиционером"
          src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/SEACE_MAIN_LANDING_Header_pc.png?imwidth=1366"
        ></img>
      </h3>
    </div>
    <div className="each_slider_main">
      <h3 style={contentStyle}>
        <img
          style={{ width: "100%", height: "100%" }}
          alt="Три молодых специалиста улыбаются во время совместной работы за столом. Перед одним из них на столе лежит Galaxy Tab S8 Ultra, а перед другим - открытый Galaxy Book2 Pro 360."
          src="//images.samsung.com/is/image/samsung/assets/ru/business/why-samsung-for-business/b2b_global0001_why-samsung-for-business_hd01-carousel1_pc_1440x810.jpg?imwidth=1366"
        ></img>
      </h3>
    </div>
    <div className="each_slider_main">
      <h3 style={contentStyle}>
        <img
          style={{ width: "100%", height: "100%" }}
          alt="Зарегистрируйте свой бизнес-аккаунт и получите скидку "
          src="//images.samsung.com/is/image/samsung/assets/ru/business/home/1440x640__Business.png?imwidth=1366"
        ></img>
      </h3>
    </div>
    <div className="each_slider_main">
      <h3 style={contentStyle}>
        <img
          style={{ width: "100%", height: "100%" }}
          alt="Три монитора высокого разрешения на столе"
          src="//images.samsung.com/is/image/samsung/assets/ru/p6-b2b/gro1/home/1_High_Resolution_Monitor_PC1.jpg?imwidth=1366"
        ></img>
      </h3>
    </div>
  </Carousel>
);
export default SliderMain;
