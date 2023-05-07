function AirBnb({ listing_url, name, property_type, price, images, review_scores }) {
    const numberPrice = price['$numberDecimal']
    const pictureUrl = images['picture_url']
    const rating = review_scores['review_scores_rating']

    function redirect() {
        window.open(listing_url, '_blank')
    }

    return (
        <div className="airbnb" onClick={redirect}>
            <div className="airbnb-left">
                <h1>{name}</h1>
                <h2>{property_type}</h2>
                <h3>{numberPrice}</h3>
                <p>{rating}</p>
            </div>
            <img src={pictureUrl} alt={`Image of ${name}`} />
        </div>
    )
}
export default AirBnb