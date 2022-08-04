-- 1. 
SELECT report_id, UPPER(product)
FROM staging_caers_event
WHERE patient_age = 75
ORDER BY report_id ASC;

-- 2.
EXPLAIN ANALYZE
SELECT report_id, UPPER(product)
FROM staging_caers_event
WHERE patient_age = 75
ORDER BY report_id ASC;
/*
"Sort  (cost=2003.24..2004.72 rows=592 width=39) (actual time=6.816..6.832 rows=561 loops=1)"
"  Sort Key: report_id"
"  Sort Method: quicksort  Memory: 76kB"
"  ->  Seq Scan on staging_caers_event  (cost=0.00..1975.98 rows=592 width=39) (actual time=0.041..6.191 rows=561 loops=1)"
"        Filter: (patient_age = 75)"
"        Rows Removed by Filter: 49879"
"Planning Time: 0.090 ms"
"Execution Time: 6.864 ms"
*/

-- 3.
INDEX patient_age_index ON staging_caers_event(patient_age);
/*patient_age_index*/
EXPLAIN ANALYZE
SELECT report_id, product
FROM staging_caers_event
WHERE patient_age > 0;
