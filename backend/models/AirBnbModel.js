import { Decimal128, Int32 } from "bson";
import { Schema, model } from "mongoose";

const definition = {
    airbnb: {
        "_id": String,
        "listing_url": String,
        "name": String,
        "summary": String,
        "space": String,
        "description": String,
        "neighborhood_overview": String,
        "notes": String,
        "transit": String,
        "access": String,
        "interaction": String,
        "house_rules": String,
        "property_type": String,
        "room_type": String,
        "bed_type": String,
        "minimum_nights": String,
        "maximum_nights": String,
        "cancellation_policy": String,
        "last_scraped": Date,
        "calendar_last_scraped": Date,
        "first_review": Date,
        "last_review": Date,
        "accommodates": Number,
        "bedrooms": Number,
        "beds": Number,
        "number_of_reviews": Number,
        "bathrooms": Decimal128,
        "amenities": Array,
        "price": Decimal128,
        "security_deposit": Decimal128,
        "cleaning_fee": Decimal128,
        "extra_people": Decimal128,
        "guests_included": Decimal128,
        "images": Object,
        "host": Object,
        "address": Object,
        "availability": Object,
        "review_scores": Object,
        "reviews": Array
    }
}

const AirBnbSchema = new Schema(definition)

export default model('AirBnb', AirBnbSchema)