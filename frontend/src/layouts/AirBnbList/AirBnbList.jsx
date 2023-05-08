import './AirBnbList.scss'
import { useEffect, useState } from "react"
import { getPageAirBnb } from "../../api/airbnb"
import AirBnb from "../../components/AirBnb/AirBnb"

function AirBnbList() {
    const [list, setList] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getPageAirBnb(page)
        .then(
            data => {
                setList(data)
            }
        )
    }, [page])

    function reducer() {
        if (page > 1)
        setPage(previous => previous - 1)
    }

    function adder() {
        setPage(previous => previous + 1)
    }

    return (
    <section id="airbnb-list">
        <header id='airbnb-header'>
            <h1>AirBnb List</h1>
            <div id="page-selector">
                <button onClick={reducer}>-</button>
                {page}
                <button onClick={adder}>+</button>
            </div>
        </header>
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
    </section>
)
}
export default AirBnbList