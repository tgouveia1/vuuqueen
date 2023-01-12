import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/121399207.jpg?k=16e7a6131ee3cc1bc92346d473b167d92eb9be1a35172e03db8426b47041e91f&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">3 Epoques Apartments by Prague Residences</span>
        <span className="fpCity">Praga 01, República Checa, Praha 1</span>
        <span className="fpPrice">A partir de <b>€ 84</b></span>
        <div className="fpRating">
          <button>8.7</button>
          <span>Fabuloso · 406 comentários</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/44146554.jpg?k=c418ab13d5c0ad2402cb939d157a20953f233ffbba42753b0f00c4195626a1c1&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Villa Domina</span>
        <span className="fpCity">Split City Centre, Croácia, Split</span>
        <span className="fpPrice">A partir de <b>€ 55</b></span>
        <div className="fpRating">
          <button>9.4</button>
          <span>Soberbo · 1 021 comentários</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/87428762.jpg?k=3f7ea7636b2689409ba55ce84f1b3c8921054cbeaebc747a517f1b2caead7a31&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">7Seasons Apartments Budapest</span>
        <span className="fpCity">06. Terézváros, Hungria, Budapest</span>
        <span className="fpPrice">A partir de <b>€ 78</b></span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Fabuloso</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
