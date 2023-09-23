import "./App.css";
import {
  img1,
  img2,
  img3,
  ish1,
  ish2,
  ish3,
  ish4,
  ish0,
  img9,
  img10,
  img11,
} from "./assets";
function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logoDiv">
          <img src={img1} alt="logo"></img>
        </div>
        <div className="Uldiv">
          <ul className="ulHeader">
            <li className="LiHeader1">Продукция |</li>
            <li className="LiHeader2">Сертификаты |</li>
            <li className="LiHeader3">Наша команда |</li>
            <li className="LiHeader4">О нас |</li>
            <li className="LiHeader5">Новости |</li>
            <li className="LiHeader6">Вакансии |</li>
            <li className="LiHeader7">Контакты</li>
          </ul>
        </div>
        <div className="darkDiv">
          <button id="Dark">Dark</button>
          <button id="light">Light</button>
        </div>
      </header>
      <div className="sectionDiv">
        <div className="mainSec">
          <h6 className="GroupName">LEANGROUP - тубы и этикетки</h6>
          <h1 className="Title">Ламинатные тубы</h1>
          <p className="lorems">
            Используются для производства зубных паст. Широко применяются в
            сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
            химии и DIY (Do-it-Yourself).
          </p>
          <button className="BtnCatalog">Каталог</button>
        </div>
      </div>
      <div className="leanGroup">
        <h1>О Компании</h1>
        <h1 className="lean">LEANGROUP</h1>
      </div>
      <div className="mainDiv">
        <div className="mainDivs1">
          <img src={img2} alt="video" />
        </div>
        <div className="textDiv">
          <div className="mainDivs2">
            Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на
            сегодняшний день является ведущей компанией по производству
            ламинатных и экструзионных туб
          </div>
          <div className="mainDivs3">
            Имея две технологии – для производства ламинатных и экструзионных
            туб, мы предлагаем вам широкий спектр возможностей. Большим
            преимуществом является собственный печатный цех в ламинате и in-line
            печать в экструзии с возможностью различных дополнительных опций
            декора. Особое внимание уделяется работе с поставщиками для контроля
            и поддержания качества производимой нами продукции.
          </div>
          <div className="mainDivs4">
            С января 2018 года компания стала членом Европейской Ассоциации
            производителей туб (ETMA), что подтверждает сильную позицию бренда и
            на рынке Европы.{" "}
          </div>
        </div>
      </div>

      <div className="sertificat">
        <h1>Качесто продукции потдверждают</h1>
        <h1 className="sert">сертификаты</h1>
      </div>

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img11} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img11} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img11} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="product">
        <div className="minProduct0"><h1>Наша Продукция</h1></div>
        <div className="minProduct1">
          <button className="btnpr1">Ламинатные Тубы</button>
          <button className="btnpr2">Экструзионные Тубы</button>
          <button className="btnpr3">Другая упаковка</button>
        </div>
        <div className="minProduct2">
          <img src={img10} alt="img" />
        </div>
        <div className="minProduct3">
          <button className="PerCatalog">Перейти в Каталог</button>
        </div>
      </div>

<div className="form">
<div className="divForms1">
  <h1>Получить подробную информацию</h1>
</div>
<div className="divForms2">
  <p>Просто заполните форму, наш менеджер свяжется с вами в ближайшее время</p>
</div>
<div className="divForms3">
<form>
  <input placeholder="Ваше Имя" type="text" id="name" name="name" required/>
  <input placeholder="Ваш Номер" type="tel" id="number" name="number" required/>
</form>

</div>
<div className="divForms5">
  <textarea placeholder="Ваши Мнения" id="comments" name="comments" rows="4" required></textarea>
</div>
<div className="divForms6">
  <button className="infg">Отправить Информацию</button>
</div>
</div>


      </div>
  );
}

export default App;
