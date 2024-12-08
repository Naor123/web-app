function Entry() {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="main-image"
          src="https://scrimba.com/links/travel-journal-japan-image-url"
          alt="mount fuji."
        />
      </div>
      <div className="country-name">
        <img
          className="marker-image"
          src="/src/images/location.png"
          alt="marker icon"
        />
        <span>Japan</span>
        <a href="https://maps.app.goo.gl/gZWy5MXU8AWJWiX69">
          view on Google maps
        </a>
        <h2>Mount Fuji</h2>
        <p>12 jan, 2021 - 24 jan, 2021</p>
        <p>
          Mount fuji is the tallest mountain in japan, standing at 3,776 meters
          (12,380 feet). Mount fuji is the single most popular tourist site in
          japan, for both Japanease and foreign tourists.
        </p>
      </div>
    </article>
  );
}

export default Entry;
