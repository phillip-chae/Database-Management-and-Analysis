-- write your queries underneath each number:
 
-- 1. the total number of rows in the database
SELECT COUNT(*)
FROM public.covidhistory;

-- 2. show the first 15 rows, but only display 3 columns (your choice)
SELECT date, deathincrease, death
FROM public.covidhistory
WHERE id < 16;

-- 3. do the same as above, but chose a column to sort on, and sort in descending order
SELECT date, deathincrease, death
FROM public.covidhistory
WHERE id < 16
ORDER BY DESC;

-- 4. add a new column without a default value
ALTER TABLE public.covidhistory
ADD COLUMN temp VARCHAR(10);

-- 5. set the value of that new column
UPDATE public.covidhistory
SET temp = 'temporary';

-- 6. show only the unique (non duplicates) of a column of your choice
SELECT DISTINCT states
FROM public.covidhistory;

-- 7.group rows together by a column value (your choice) and use an aggregate function to calculate something about that group 
SELECT COUNT(positiveincrease)
FROM public.covidhistory
GROUP BY states

-- 8. now, using the same grouping query or creating another one, find a way to filter the query results based on the values for the groups 
SELECT COUNT(positiveincrease)
FROM public.covidhistory
GROUP BY states
HAVING COUNT(positiveincrease) > 10;

-- 9. Total number of positive COVID cases
SELECT SUM(positiveIncrease)
FROM public.covidhistory;

-- 10. Total number of hospitalized patients from COVID
SELECT SUM(hospitalizedIncrease)
FROM public.covidhistory;

-- 11. Number of daily covid cases in decreasing order
SELECT date, positiveincrease, deathincrease
FROM public.covidhistory
ORDER BY positiveincrease desc;

-- 12. Total number of negative COVID cases
SELECT SUM(negativeincrease)
FROM public.covidhistory;
