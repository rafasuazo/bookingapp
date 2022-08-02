import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=tegucigalpa,santorini,miami"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.dentonsmunoz.com/es-ES/-/media/images/website/background-images/offices/honduras/honduras.ashx?sc_lang=es-es"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Tegucigalpa</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://elviajerofeliz.com/wp-content/uploads/2018/01/Descubre-5-islas-griegas-que-te-robara%CC%81n-el-corazo%CC%81n.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Santorini</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://allusatravel.com/wp-content/uploads/2019/12/MiamiCityTour.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Miami</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
