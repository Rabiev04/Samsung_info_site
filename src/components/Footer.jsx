import { useState } from "react";

export default function Footer() {
  const [subscribe, setSubscribe] = useState({
    email: "",
    name: "",
    lastName: "",
  });
  const [form, setForm] = useState([]);

  const onChangeData = (key) => (e) => {
    setSubscribe({ ...subscribe, [key]: e.target.value });
    console.log(subscribe);
  };

  const onClickAdd = () => {
    setForm([...form, subscribe]);
    console.log(form);
  };
  return (
    <div className="footer">
      <div className="nav-footer">
        <div className="form-box">
          <div className="sub-title">
            <h1>Подписаться</h1>
            <img
              alt="#"
              src="//images.samsung.com/is/image/samsung/assets/global/p6-b2b/pilot/home/icon-light-communication-subscribe.png?$32_32_PNG$"
            ></img>
          </div>
          <div className="form">
            <input
              onChange={onChangeData("email")}
              autoComplete="off"
              required
            />
            <label htmlFor="text" className="label-email">
              <span className="content-email">Email *</span>
            </label>
            <input
              onChange={onChangeData("name")}
              autoComplete="off"
              required
            />
            <label htmlFor="text" className="label-name">
              <span className="content-name">Имя *</span>
            </label>
            <input
              onChange={onChangeData("lastName")}
              autoComplete="off"
              required
            />
            <label htmlFor="text" className="label-lastname">
              <span className="content-lastname">Фамилия *</span>
            </label>
            <button onClick={onClickAdd}>Отправить</button>
          </div>
        </div>
        <div className="contact-us-box">
          <div>
            <div className="contact-us-heading">
              <h1>Запросы по продажам</h1>
              <img
                alt="#"
                src="//images.samsung.com/is/image/samsung/assets/global/p6-b2b/pilot/home/icon-light-communication-email-outline.png?$32_32_PNG$"
              ></img>
            </div>
            <div className="contact-us-title">
              <p>
                Свяжитесь с нашим отделом продаж, чтобы обсудить лучшие варианты
                для вашего бизнеса.
              </p>
              <button>Обратный звонок</button>
            </div>
          </div>
          <div className="straight-call">
            <div className="straight-call-heading">
              <h1>Прямой вызов</h1>
              <img src="//images.samsung.com/is/image/samsung/assets/global/p6-b2b/pilot/home/icon-light-communication-call.png?$32_32_PNG$" />
            </div>
            <button>88888888888</button>
          </div>
        </div>
        <div className="technical-help">
          <div>
            <div className="technical-help-heading">
              <h1>Техническая поддержка</h1>
              <img src="//images.samsung.com/is/image/samsung/assets/global/p6-b2b/pilot/home/icon-light-service-repair-support.png?$32_32_PNG$"></img>
            </div>
            <div className="technical-help-title">
              <p>
                Нужна поддержка? Свяжитесь с нашими экспертами для получения
                поддержки и технической помощи по конкретным продуктам.
              </p>
              <button>Помощь</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
