import AirBnb from "../../components/AirBnb/AirBnb"
import MasonryComponent from '../../components/Masonry/Masonry'

function AirBnbList({ list }) {
    return (
        <MasonryComponent>
            {list.map(item => {
                const { _id, access, accommodates, address, amenities, availability, bathrooms, bed_type,
                bedrooms, beds, calendar_last_scraped, cancellation_policy, cleaning_fee, description,
                extra_people, first_review, guests_included, host, house_rules, images, interaction,
                last_review, last_scraped, listing_url, maximum_nights, minimum_nights, name,
                neighborhood_overview, notes, number_of_reviews, price, property_type, review_scores,
                reviews, room_type, security_deposit, space, summary, transit} = item

                const { street } = address

                return <AirBnb key={_id}
                    street={street}
                    listing_url={listing_url}
                    name={name}
                    property_type={property_type}
                    price={price}
                    images={images}
                    review_scores={review_scores}
                />
            })}
        </MasonryComponent>
    )
}
export default AirBnbList