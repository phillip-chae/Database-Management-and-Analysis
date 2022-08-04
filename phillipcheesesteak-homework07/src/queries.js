// 1.
db.listings.find().limit(2)
/*
{ _id: ObjectId("61ae3db13e7ebca7cebad640"),
  id: '2595',
  listing_url: 'https://www.airbnb.com/rooms/2595',
  scrape_id: '20211102175544',
  last_scraped: '2021-11-03',
  name: 'Skylit Midtown Castle',
  description: 'Beautiful, spacious skylit studio in the heart of Midtown, Manhattan. <br /><br />STUNNING SKYLIT STUDIO / 1 BED + SINGLE / FULL BATH / FULL KITCHEN / FIREPLACE / CENTRALLY LOCATED / WiFi + APPLE TV / SHEETS + TOWELS<br /><br /><b>The space</b><br />- Spacious (500+ft²), immaculate and nicely furnished & designed studio.<br />- Tuck yourself into the ultra comfortable bed under the skylight. Fall in love with a myriad of bright lights in the city night sky. <br />- Single-sized bed/convertible floor mattress with luxury bedding (available upon request).<br />- Gorgeous pyramid skylight with amazing diffused natural light, stunning architectural details, soaring high vaulted ceilings, exposed brick, wood burning fireplace, floor seating area with natural zafu cushions, modern style mixed with eclectic art & antique treasures, large full bath, newly renovated kitchen, air conditioning/heat, high speed WiFi Internet, and Apple TV.<br />- Centrally located in the heart of Midtown Manhattan',
  neighborhood_overview: 'Centrally located in the heart of Manhattan just a few blocks from all subway connections in the very desirable Midtown location a few minutes walk to Times Square, the Theater District, Bryant Park and Herald Square.',
  picture_url: 'https://a0.muscache.com/pictures/f0813a11-40b2-489e-8217-89a2e1637830.jpg',
  host_id: '2845',
 */

// 2.
db.listings.distinct()
/*
[
  "'Cil",
  '(Ari) HENRY LEE',
  '(Email hidden by Airbnb)',
  '-TheQueensCornerLot',
  '0123',
  '2018Serenity',
  '235 Bainbridge',
  '420spa',
  '475',
*/

// 3.
db.listings.find({"host_name":"2018Serenity"}, {_id:0,"listing_url":1,"name":1,"host_name":1})
/*
{ listing_url: 'https://www.airbnb.com/rooms/26895166',
  name: '2018Serenity',
  host_name: '2018Serenity' }
*/

// 4.
db.listings.find(
    {"$or":[
        {"host_name":"Adelma"},
        {"host_name":"2018Serenity"},
        {"host_name":"0123"}
    ]},
    {
        _id:0,
        "name":1,
        "host_name":1,
        "neighbourhood_cleansed":1,
        "price":1
    }
).sort({"host_name":1})
/*
{ name: 'Neve recording studio',
  host_name: '0123',
  neighbourhood_cleansed: 'Lower East Side',
  price: '$600.00' }
{ name: '2018Serenity',
  host_name: '2018Serenity',
  neighbourhood_cleansed: 'East Harlem',
  price: '$85.00' }
{ name: 'PRIVATE ROOM IN SHARED APARTMENT, UN VICINITY',
  host_name: 'Adelma',
 */

// 5.
db.listings.find(
    {
        "bedrooms":{$gte:2},
        "neighbourhood_group_cleansed":"Brooklyn"
    },
    {
        _id:0,
        "name":1,
        "neighbourhood_cleansed":1,
        "bedrooms":1,
        "price":1
    }
).sort(
    {"review_scores_rating":-1}
)
/*
{ name: 'Spacious Brooklyn Duplex, Patio + Garden',
  neighbourhood_cleansed: 'Sunset Park',
  bedrooms: 2,
  price: '$275.00' }
{ name: 'Luxe, Spacious 2BR 2BA Nr Trains',
  neighbourhood_cleansed: 'Gowanus',
  bedrooms: 2,
  price: '$260.00' }
{ name: 'Windsor Terrace/Kensington',
  neighbourhood_cleansed: 'Windsor Terrace',
 */

// 6.
db.listings.aggregate([
    {$group:{
        _id: "$host_name",
        listingsCount: {
          $sum: 1
        }
    }}
])
/*
{ _id: 'R.J', listingsCount: 4 }
{ _id: 'Desislava', listingsCount: 1 }
{ _id: 'Shandor', listingsCount: 5 }
{ _id: 'Yitzchak', listingsCount: 1 }
{ _id: 'Rikki', listingsCount: 1 }
{ _id: 'Laura And Robert', listingsCount: 1 }
{ _id: 'Esin', listingsCount: 4 }
{ _id: 'Young Jean', listingsCount: 1 }
{ _id: 'Brian,Gigi & Clementine', listingsCount: 1 }
{ _id: 'Pushp', listingsCount: 1 }
*/

// 7.
db.listings.aggregate([
    {$group:{
        _id: "$host_name",
        listingsCount: {
            $sum: 1
        }
    }},
    {$sort:{
        "listingsCount":-1
    }}
    
])
/*
{ _id: 'June', listingsCount: 400 }
{ _id: 'Michael', listingsCount: 311 }
{ _id: 'Blueground', listingsCount: 304 }
{ _id: 'Karen', listingsCount: 251 }
{ _id: 'David', listingsCount: 238 }
{ _id: 'Jeniffer', listingsCount: 222 }
{ _id: 'Alex', listingsCount: 210 }
{ _id: 'Daniel', listingsCount: 178 }
{ _id: 'John', listingsCount: 175 }
{ _id: 'Eugene', listingsCount: 174 }
*/

// 8.
db.listings.find(
    {
        "beds":{$gte:1},
        "bedrooms":{$gte:1},
        "neighbourhood_group_cleansed": "Brooklyn"
    },
    {
        _id: 0,
        "name": 1,
        "neighbourhood_cleansed": 1,
        "bedrooms": 1,
        "beds": 1,
        "bedroomBedRatio":{$divide: ["$bedrooms","$beds"]}
    }
).sort(
    {"neighbourhood_cleansed":1}
)
/*
{ name: 'Brand New small 1 Bedroom apt in Brooklyn',
  neighbourhood_cleansed: 'Bath Beach',
  bedrooms: 1,
  beds: 1,
  bedroomBedRatio: 1 }
{ name: 'Private Queen room&bathroom in NEW Luxury Building',
  neighbourhood_cleansed: 'Bath Beach',
  bedrooms: 1,
  beds: 1,
  bedroomBedRatio: 1 }
*/

// 9.
db.listings.aggregate([
    {$match: {
        "beds":{$gte:1},
        "bedrooms":{$gte:1}
    }},
    {$group:{
        _id: "$neighbourhood_group_cleansed",
        avgBedRatio: {
            $avg: {$divide: ["$bedrooms","$beds"]}
        }
    }}
])
/*
{ _id: 'Staten Island', avgBedRatio: 0.83395660461987 }
{ _id: 'Manhattan', avgBedRatio: 0.9020413600110374 }
{ _id: 'Brooklyn', avgBedRatio: 0.925893863719455 }
{ _id: 'Bronx', avgBedRatio: 0.8876594739329029 }
{ _id: 'Queens', avgBedRatio: 0.88898632498287 }
*/

// 10.
db.listings.aggregate([
    {$match: {
        "neighbourhood_group_cleansed": "Manhattan"
    }},
    {$group:{
        _id: "$neighbourhood_cleansed",
        avgRating: {
            $avg: "$review_scores_rating"
        },
        countListings: {
            $sum: 1
        }
    }},
    {$match: {
        "countListings": {$gt: 100}
    }},
    {$sort: {
        "avgRating": -1
    }}
])
/*
{ _id: 'West Village',
  avgRating: Decimal128("4.700544554455445544554455445544554"),
  countListings: 520 }
{ _id: 'Nolita',
  avgRating: Decimal128("4.694313725490196078431372549019608"),
  countListings: 212 }
{ _id: 'Gramercy',
  avgRating: Decimal128("4.680877192982456140350877192982456"),
  countListings: 227 }
{ _id: 'Chinatown',
*/