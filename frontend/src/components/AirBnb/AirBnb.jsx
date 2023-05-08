import './AirBnb.scss'

function AirBnb({ listing_url, street, name, property_type, price, images, review_scores }) {
    const numberPrice = price['$numberDecimal']
    const pictureUrl = images['picture_url']
    const rating = review_scores['review_scores_rating']

    function redirect() {
        window.open(listing_url, '_blank')
    }

    return (
        <div className="airbnb" onClick={redirect}>
            <img src={pictureUrl} alt={`Image of ${name}`} />

            <div className="bottom">
                <div className='important'>
                    <h1>{name}<br/><small>{street}</small></h1>
                    <h3>$ {numberPrice}</h3>
                </div>
                <div className='details'>
                    <p>{rating || 'No rated 😥'}</p>
                    <h2>{property_type}</h2>
                </div>
            </div>
        </div>
    )
}
export default AirBnb