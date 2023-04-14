import { useState } from "react";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function S23Galaxy() {
  return (
    <div>
      <div className="galaxys23_header">
        <h2>Galaxy S23 | S23+</h2>
      </div>
      <div className="two_galaxys23_main">
        <h1>Galaxy S23 | S23+</h1>
        <img
          src="//images.samsung.com/is/image/samsung/assets/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-kv.jpg?$ORIGIN_JPG$"
          alt="Galaxy S23 в бежевом цвете и S23 plus в цвете Лаванда − бок о бок и вид сзади под небольшим углом, под которым видна металлическая рамка сбоку."
        ></img>
      </div>
      <div className="design_galaxys23">
        <p>Design</p>
        <h1>Впечатляет</h1>
        <img
          src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-design-kv-end.jpg"
          class="js-res-img scroll-video__end-image load-complete"
        ></img>
      </div>
      <div className="4colors_of_s23"></div>
      <div className="made_with_natural_products-box">
        <div className="made_with_natural_products">
          <div className="natural_materials_heading">
            <h3>МАТЕРИАЛЫ</h3>
            <h1>Создан с любовью к природе</h1>
          </div>
          <div className="natural_materials_text">
            <p>
              Почувствуйте заботу о природе в каждой детали. Мы создали этот
              смартфон с использованием переработанных стекла и ПЭТ-пленки, а
              также природных красителей. А основой для коробки стали
              переработанные бумажные материалы.2,3,4,5
            </p>
          </div>
        </div>
        <img
          src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-materials-a.jpg"
          class="js-res-img load-complete"
        ></img>
      </div>
      <div className="main_grey_back">
        <div className="taken_with_gallery_box">
          <h1>Каждый кадр - шедевр</h1>
          <div className="taken_with_gallery">
            <img
              src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-camera-selfie-with-balloon.jpg"
              className="girl_with_baloons"
            ></img>
            <img
              src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-camera-selfie.jpg"
              className="girl_and_boy_selfi_at_night"
              alt="Селфи, сделанные в условиях слабого овещения с помощью ночного режима, имеют яркие цвета и минимальный уровень шума. Примеры фотографий были сделаны на Galaxy S23 plus в широкоугольном режиме с диафрагмой F2.2."
            ></img>
          </div>
          <p>
            Ловите лучшие моменты дня и ночи. С Pro-Grade камерой, оснащенной
            сенсором высокого разрешения и интеллектуальными светопоглощающими
            пикселями, невероятный кадр может получиться в любое время суток.
          </p>
        </div>
        <div className="camera_px_s23">
          <img
            src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-camera-kv.jpg"
            class="large_s23_pixels"
          ></img>
        </div>
        <div className="night_mode_box">
          <div className="night_mode">
            <div className="night_mode_text">
              <h2>НОЧНОЙ РЕЖИМ</h2>
              <h1>Четкие снимки даже в темноте.</h1>
              <p>
                Приготовьтесь покорить всех невероятными ночными снимками!
                Усовершенствованная технология искусственного интеллекта (AI),
                используемая в Ночном режиме, сохранит четкость каждой детали и
                сделает ваши фото и видео яркими и насыщенными даже при слабом
                освещении.
              </p>
            </div>
            <div className="night_mode_img">
              <img
                src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-nightography-kv.jpg"
                className="men_taking_selfi_night_mode"
                alt="Мужчина делает селфи в темном помещении с разноцветными огнями. Его лицо яркое, цвета живые. Фото сделано на Galaxy S23 плюс в широкоугольном режиме с диафрагмой F2.2."
              ></img>
            </div>
          </div>
          <div className="night_mode">
            <div className="night_mode_img">
              <img
                src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-nightography-photo-01.jpg"
                className="girl-taking_selfi"
                alt="Женщина делает селфи в слабо освещенной комнате. Свет на ее лице сбалансирован даже с контровым светом на фото. Фото сделано на Galaxy S23 plus в широкоугольном режиме с диафрагмой F2.2."
              ></img>
            </div>
            <div className="night_mode_text">
              <p>01</p>
              <h2>НОЧЬ ДЛЯ ЯРКИХ СЕЛФИ</h2>
              <p>
                Благодаря технологии Dual Pixel фронтальная камера фокусируется
                быстрее и точнее даже при слабом освещении, а искусственный
                интеллект помогает максимально точно передать цвета на селфи,
                которые выглядят так естественно.
              </p>
            </div>
          </div>
          <div className="high_resolution">
            <div className="high_resolution_img">
              <img
                src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-resolution-front.jpg"
                className="full_face_of_girl"
              ></img>
              <img
                src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-resolution-back.jpg"
                alt="Фотография высокого разрешения женщины, стоящей в кирпичном атриуме с многоэтажными лестницами с замысловатой железной конструкцией. Далее та же лестница под другим углом и на расстоянии, показывающем архитектуру атриума. 50-мегапиксельная камера способна передать все богатство деталей и цвета сцены. Обе фотографии были сделаны камерой Galaxy S23 plus в широкоугольном режиме и с диафрагмой F1,8."
              ></img>
            </div>
            <div className="high_resolution_text">
              <img src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-resolution-wide.jpg"></img>
              <h2>ВЫСОКОЕ РАЗРЕШЕНИЕ</h2>
              <h1>Все в мельчайших подробностях</h1>
              <p>
                50МП широкоугольная камера в сочетании с мощным чипом быстро
                анализирует серию отдельных кадров, выделяет и оптимизирует
                изображение деталей объектов и формирует снимок высокого
                разрешения. Добавьте к этому технологию улучшения изображения
                деталей (Detail Enhancer), и вы получите настолько высокую
                четкость, что сможете увеличивать изображение, пока не
                разглядите все в мельчайших подробностях.
              </p>
            </div>
          </div>
          <div className="night_mode">
            <div className="night_mode_text">
              <h2>ЭКСПЕРТ В RAW</h2>
              <h1>Снимайте как профи</h1>
              <p>
                Создавайте космически четкие снимки в RAW формате. Откройте
                приложение Expert RAW и наведите камеру на звезды, чтобы
                запечатлеть созвездия и планеты с захватывающей дух
                детализацией.6
              </p>
            </div>
            <div className="night_mode_img">
              <img
                src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-expert-raw-kv.jpg"
                alt="Фото ночного пейзажа с силуэтом гористой местности на переднем плане. Детали звездного неба четко фиксируются в высоком разрешении с помощью Expert Raw."
              ></img>
            </div>
          </div>
          <div className="night_mode_quality">
            <div className="night_mode_quality_text">
              <div className="quality_text_heading">
                <h2>УЛУЧШЕНИЕ ИЗОБРАЖЕНИЯ</h2>
                <h1>Превратите неудачные кадры в шедевры</h1>
              </div>
              <div className="quality_text_title">
                <p>
                  Переходите в галерею, чтобы улучшить темные или размытые
                  изображения, старые детские фотографии или картинки из
                  интернета. Вы также можете обновить нечеткие GIF-файлы,
                  устранить шумы и увеличиить детализацию, чтобы каждый снимок
                  выглядел идеальным.
                </p>
              </div>
            </div>
            <div className="night_mode_quality_img">
              <img
                src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-remaster-kv-after.jpg"
                className="girl_eating_icecream"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="high_performance">
        <div className="high_performance_heading">
          <p>ПРОИЗВОДИТЕЛЬНОСТЬ</p>
          <h1>Супер скорость</h1>
        </div>
        <div className="superspeed_img">
          <img
            src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-performance-kv.jpg"
            className="photo_of_game_and_concert"
            alt="Galaxy S23 спереди и в горизонтальном положении. На одной стороне экрана идет сцена из игры. На другой – видео с концерта."
          ></img>
        </div>
        <div className="characteristics">
          <div className="accamulator">
            <h2>АККУМУЛЯТОР</h2>
            <h1>Заряжен на долгую игру</h1>
            <p>
              Готовы погрузиться в любимую игру или сериал на всю ночь? С мощным
              аккумулятором и сверхбыстрой зарядкой Galaxy это просто как
              никогда!
            </p>
            <div>
              <img
                src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-battery.jpg"
                className="persantage_of_battery"
              ></img>
            </div>
          </div>
          <div className="accamulator">
            <h2>ДИСПЛЕЙ</h2>
            <h1>Бликам здесь не место</h1>
            <p>
              Играйте или записывайте трансляции на открытом воздухе без бликов
              на экране. Функция адаптивной видимости подстроит оптимальные
              цвета и яркость для любого освещения.8 Адаптивная частота
              обновления 120 Гц обеспечит плавный скроллинг, а технология Eye
              Comfort Shield не даст вашим глазам устать, даже при просмотре в
              темноте.
            </p>
            <div>
              <img
                src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-display-vde.jpg"
                className="tested_VDE"
                alt="Логотип VDE. ID: 40056066"
              ></img>
              <img
                src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-display.jpg"
                className=""
              ></img>
            </div>
          </div>
        </div>
        <div className="smart_switch_box">
          <div className="smart_switch">
            <div className="smart_switch_text">
              <h2>SMART SWITCH</h2>
              <h1>Возьмите любимые файлы на новый смартфон</h1>
              <p>
                Перенесите свои приложения, фотографии, сообщения и другие файлы
                из любой ОС на новый смартфон в несколько кликов с приложением
                Smart Switch. Сделайте этот процесс еще проще с передачей по
                Wi-Fi или через быстрый вход в учетную запись Samsung
                Account.9,10
              </p>
            </div>
            <div className="smart_switch_img">
              <img
                src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-smart-switch-b.jpg"
                className="switch_files_sumsung"
                alt="На дисплее Galaxy S23 отображается индикатор выполнения передачи данных Smart Switch."
              ></img>
            </div>
          </div>
          <div className="work_with_pc">
            <div className="work_with_pc_text">
              <h2>БЕСШОВНАЯ РАБОТА С ПК</h2>
              <h1>Мультиконтроль</h1>
              <p>
                Ваш смартфон и ПК работают как единое целое, чтобы сохранить
                ваше время. Не переключая мышь, клавиатуру или сенсорную панель,
                переносите, копируйте, вставляйте и печатайте на обоих
                устройствах.11,12,13,14
              </p>
            </div>
            <div className="work_with_pc_img">
              <img
                src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-pc-continuty-kv.jpg"
                className="notebook_and_phone"
                alt="На экране Galaxy S23 plus открыто приложение Gallery. Рядом с ним на экране ноутбука открыта презентация концепции гардероба. На экране ноутбука происходит перетаскивание портретной фотографии из приложения Gallery на Galaxy S23 plus в презентацию."
              ></img>
            </div>
          </div>
          <div className="one_ui">
            <div className="one_ui_text">
              <h2>ONE UI</h2>
              <h1>Ваш Galaxy, все по-вашему</h1>
              <p>
                Настроить интерфейс по своему вкусу стало легко как никогда.
                Оболочка One UI позволяет кастомизировать практически любую
                деталь: от экранов блокировки и тем до виджетов и уведомлений на
                всех ваших устройствах.
              </p>
            </div>
            <div className="one_ui_img">
              <img
                src="//images.samsung.com/ru/smartphones/galaxy-s23/images/galaxy-s23-highlights-one-ui-kv.jpg"
                className="four_phones"
                alt="Четыре устройства Galaxy S23 plus с лицевой стороны. На одном из них открыт видеоредактор для создания воспроизведения видео на экране блокировки. Затем изменяется стиль и расположение часов. Затем – выбор обоев. Затем – настроенный экран блокировки с наклеенными стикерами."
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="accardion">
        <div className="questions_accardion">
          <h1>Часто Задаваемые Вопросы</h1>
        </div>
        <Accordion className="each_accardion">
          <AccordionSummary
            className="accardion-typography"
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accardion_heading">
              <h1> Чем отличаются Galaxy S23 и S23+ от Galaxy S22 и S22+?</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accardion_details">
              <p>
                При 3900 мАч (типичное значение) и 4700 мАч (обычное значение)
                Galaxy S23 и S23+ имеют увеличенное время автономной работы по
                сравнению с Galaxy S22 и S22+.16 Ночные селфи и видео при слабом
                освещении получаются более четкими благодаря 12МП селфи-камере,
                улучшенной по сравнению с 10МП Galaxy S22 и S22+. С новыми
                смартфонами вы можете снимать высококачественные 50МП фотографии
                с дополнительной детализацией в формате Expert RAW.6
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="each_accardion">
          <AccordionSummary
            className="accardion-typography"
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accardion_heading">
              <h1> В каких цветах представлены Galaxy S23 и S23+?</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accardion_details">
              <p>
                Galaxy S23 и S23+ представлены в цветах Лаванда, Бежевый, Черный
                Фантом и Зеленый.1 Выберите классический цвет или начните модный
                тренд с совершенно нового оттенка.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="each_accardion">
          <AccordionSummary
            className="accardion-typography"
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accardion_heading">
              <h1> Как улучшились камеры Galaxy S23 и S23+?</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accardion_details">
              <p>
                Galaxy S23 и S23+ имеют 12-мегапиксельные селфи-камеры,
                улучшенные по сравнению с 10-мегапиксельной селфи-камерой на
                Galaxy S22 и S22+. Они делают еще более яркие и четкие селфи и
                видео при слабом освещении. Приложение Expert RAW поддерживает
                режим "Мультиэкспозиция" при съемке с разрешением 50МП. В
                результате получаются снимки высокой четкости с широким
                динамическим диапазоном.6
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="each_accardion">
          <AccordionSummary
            className="accardion-typography"
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accardion_heading">
              <h1> Какие функции для гейминга есть в Galaxy S23 и S23+?</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accardion_details">
              <p>
                В дополнение к сверхплавному дисплею с частотой обновления 120
                Гц Galaxy S23 и S23+ оснащены мобильной платформой Snapdragon®
                7,18 Gen 2 для Galaxy, которая оптимизирует время загрузки и
                энергопотребление. Также, чтобы увеличить продолжительность
                игры, оба смартфона обладают большей емкостью батареи по
                сравнению с Galaxy S22 и S22+.16
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="each_accardion">
          <AccordionSummary
            className="accardion-typography"
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accardion_heading">
              <h1> Какие дисплеи у Galaxy S23 и S23+?</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accardion_details">
              <p>
                Galaxy S23 и S23+ оснащены адаптивными дисплеями с частотой
                обновления 120 Гц для плавной игры и удобного скролинга. В
                дисплеях Galaxy S23 и S23+ более высокие пиковые значения нит,
                чем у предыдущих моделей, что обеспечивает максимальную
                видимость при просмотре даже вне помещения.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="each_accardion">
          <AccordionSummary
            className="accardion-typography"
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accardion_heading">
              <h1>На сколько хватает заряда аккумулятора Galaxy S23 и S23+?</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accardion_details">
              <p>
                Galaxy S23 оснащен аккумулятором емкостью 3900 мАч (типичное
                значение), а Galaxy S23+ — аккумулятором емкостью 4700 мАч
                (стандартным значением).16 Заряда смартфонов хватит на целый
                день, даже в режиме воспроизведения видео Galaxy S23 будет
                работать до 22 часов, а Galaxy S23+ до 27 часов.19
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
