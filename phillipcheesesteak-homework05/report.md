# Overview

Name / Title: National History of COVID-19 Cases
- [Data Source](https://covidtracking.com/data/download)
- [License](https://covidtracking.com/about-data/license): Creative Commons CC BY 4.0

```
      Column name              | Non-nulls     | dtype
-------------------------------+---------------+----------
 0.   date                     | 420 non-null  |  object 
 1.   death                    | 392 non-null  |  float64
 2.   deathIncrease            | 420 non-null  |  int64  
 3.   inIcuCumulative          | 348 non-null  |  float64
 4.   inIcuCurrently           | 347 non-null  |  float64
 5.   hospitalizedIncrease     | 420 non-null  |  int64  
 6.   hospitalizedCurrently    | 356 non-null  |  float64
 7.   hospitalizedCumulative   | 369 non-null  |  float64
 8.   negative                 | 372 non-null  |  float64
 9.   negativeIncrease         | 420 non-null  |  int64  
 10.  onVentilatorCumulative   | 341 non-null  |  float64
 11.  onVentilatorCurrently    | 348 non-null  |  float64
 12.  positive                 | 419 non-null  |  float64
 13.  positiveIncrease         | 420 non-null  |  int64  
 14.  states                   | 420 non-null  |  int64  
 15.  totalTestResults         | 420 non-null  |  int64  
 16.  totalTestResultsIncrease | 420 non-null  |  int64  
```

# Table Design

I have allowed null values for all columns as there are many missing data across the columns

# Import

Import suceeded without error

# Database Information

```
postgres=# \l
                                                 List of databases
    Name    |  Owner   | Encoding |          Collate           |           Ctype            |   Access privileges
------------+----------+----------+----------------------------+----------------------------+-----------------------
 homework05 | postgres | UTF8     | English_United States.1252 | English_United States.1252 |
 postgres   | postgres | UTF8     | English_United States.1252 | English_United States.1252 |
 template0  | postgres | UTF8     | English_United States.1252 | English_United States.1252 | =c/postgres          +
            |          |          |                            |                            | postgres=CTc/postgres
 template1  | postgres | UTF8     | English_United States.1252 | English_United States.1252 | =c/postgres          +
            |          |          |                            |                            | postgres=CTc/postgres
(4 rows)


postgres=# \c homework05
You are now connected to database "homework05" as user "postgres".
homework05=# \d
                 List of relations
 Schema |        Name         |   Type   |  Owner
--------+---------------------+----------+----------
 public | covidhistory        | table    | postgres
 public | covidhistory_id_seq | sequence | postgres
(2 rows)


homework05=# \d covidhistory
                                     Table "public.covidhistory"
          Column          |  Type   | Collation | Nullable |                 Default
--------------------------+---------+-----------+----------+------------------------------------------
 id                       | integer |           | not null | nextval('covidhistory_id_seq'::regclass)
 date                     | date    |           |          |
 death                    | numeric |           |          |
 deathincrease            | numeric |           |          |
 inicucumulative          | numeric |           |          |
 inicucurrently           | numeric |           |          |
 hospitalizedincrease     | numeric |           |          |
 hospitalizedcurrently    | numeric |           |          |
 hospitalizedcumulative   | numeric |           |          |
 negative                 | numeric |           |          |
 negativeincrease         | numeric |           |          |
 onventilatorcumulative   | numeric |           |          |
 onventilatorcurrently    | numeric |           |          |
 positive                 | numeric |           |          |
 positiveincrease         | numeric |           |          |
 states                   | numeric |           |          |
 totaltestresults         | numeric |           |          |
 totaltestresultsincrease | numeric |           |          |
```

# Query Results

```
### 1. the total number of rows in the database
     | count   
-----+-------
 1   | 420   
```
```
### 2. number and description from below		
    date    | deathincrease | death
------------+---------------+--------
 2021-03-07 |           842 | 515151
 2021-03-06 |          1680 | 514309
 2021-03-05 |          2221 | 512629
 2021-03-04 |          1743 | 510408
 2021-03-03 |          2449 | 508665
 2021-03-02 |          1728 | 506216
 2021-03-01 |          1241 | 504488
 2021-02-28 |          1051 | 503247
 2021-02-27 |          1847 | 502196
 2021-02-26 |          2141 | 500349
 2021-02-25 |          3138 | 498208
 2021-02-24 |          2447 | 495070
 2021-02-23 |          2241 | 492623
 2021-02-22 |          1235 | 490382
 2021-02-21 |          1287 | 489147
```
```
### 3. do the same as above, but chose a column to sort on, and sort in descending order	
    date    | deathincrease | death
------------+---------------+--------
 2021-02-25 |          3138 | 498208
 2021-03-03 |          2449 | 508665
 2021-02-24 |          2447 | 495070
 2021-02-23 |          2241 | 492623
 2021-03-05 |          2221 | 512629
 2021-02-26 |          2141 | 500349
 2021-02-27 |          1847 | 502196
 2021-03-04 |          1743 | 510408
 2021-03-02 |          1728 | 506216
 2021-03-06 |          1680 | 514309
 2021-02-21 |          1287 | 489147
 2021-03-01 |          1241 | 504488
 2021-02-22 |          1235 | 490382
 2021-02-28 |          1051 | 503247
 2021-03-07 |           842 | 515151
```
```
### 4. add a new column without a default value		
ALTER TABLE
```
```
### 5. set the value of that new column		
UPDATE 420
```
```
### 6. number and description from below		
 states
--------
      8
      5
      6
      2
     56
      3
     11
      7
     26
     32
     51
     16
     12
     40
      1
      4
```
```
### 7.group rows together by a column value (your choice) and use an aggregate function to calculate something about that group 		
count
-------
     1
     5
    12
     5
   357
     2
     1
     2
     1
     1
     9
     1
     1
     1
     9
    12
```
```
### 8. now, using the same grouping query or creating another one, find a way to filter the query results based on the values for the groups 		
 count
-------
    12
   357
    12
```
```
### 9. Total number of positive COVID cases		
   sum
----------
 28756489
```
```
### 10. Total number of hospitalized patients from COVID		
  sum
--------
 776361
```
```
### 11. Number of daily covid cases in decreasing order		
    date    | positiveincrease | deathincrease
------------+------------------+---------------
 2021-01-08 |           295121 |          3780
 2021-01-02 |           280318 |          2406
 2021-01-07 |           272043 |          4079
 2021-01-09 |           269368 |          3537
 2021-01-06 |           250184 |          3902
 2021-01-15 |           246454 |          3679
 2020-12-17 |           242970 |          3465
 2020-12-18 |           241786 |          2866
 2020-12-11 |           236933 |          2747
 2020-12-16 |           234288 |          3453
 2020-12-04 |           230313 |          2563
 2020-12-30 |           229496 |          3900
 2021-01-10 |           228732 |          2068
 2020-12-12 |           226904 |          2497
 2020-12-31 |           226246 |          3297
 2021-01-14 |           225616 |          3915
 2020-12-23 |           224526 |          3393
 2021-01-13 |           224491 |          4087
 2020-12-10 |           220846 |          3132
 2021-01-05 |           219075 |          3484
 2020-12-05 |           219070 |          2486
 2021-01-16 |           218085 |          3709
 2021-01-12 |           218020 |          4064
 2020-12-08 |           217844 |          2680
 2020-12-09 |           216728 |          3169
 2020-12-03 |           216271 |          2822
 2021-01-03 |           208457 |          1455
```
```
### 12. Total number of negative COVID cases		
   sum
----------
 74582825
```