CREATE TABLE IF NOT EXISTS public.covidhistory
(
    id SERIAL,
    date date,
    death numeric,
    deathincrease numeric,
    inicucumulative numeric,
    inicucurrently numeric,
    hospitalizedincrease numeric,
    hospitalizedcurrently numeric,
    hospitalizedcumulative numeric,
    negative numeric,
    negativeincrease numeric,
    onventilatorcumulative numeric,
    onventilatorcurrently numeric,
    positive numeric,
    positiveincrease numeric,
    states numeric,
    totaltestresults numeric,
    totaltestresultsincrease numeric
)