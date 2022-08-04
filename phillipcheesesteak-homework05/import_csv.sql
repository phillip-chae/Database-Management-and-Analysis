COPY covidhistory(date, death, deathincrease,inicucumulative, inicucurrently, hospitalizedincrease, hospitalizedcurrently, hospitalizedcumulative, negative, negativeincrease, onventilatorcumulative, onventilatorcurrently, positive, positiveincrease, states, totaltestresults, totaltestresultsincrease)

FROM 'national-history.csv'

DELIMITER ','

CSV HEADER;