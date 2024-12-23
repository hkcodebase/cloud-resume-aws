-- cloud resume access logs from bucket->'s3://hk-log-bucket-00/cloudresume'
-- date range 2023-11-24 to 2023-12-13
-- table - cr_access_cloudfront_logs
-- cr = cloudresume

SELECT *
FROM "default"."cr_access_cloudfront_logs"
order by date desc
    limit 20;

-- cloudresume access logs from bucket-> 's3://hk-log-bucket-00/cr'
-- table - cr_access_cloudfront_logs_v1
-- date range 2023-12-17 till present
SELECT *
FROM "default"."cr_access_cloudfront_logs_v1"
order by date desc
    limit 20;

-- distinct c_ip of today with sc_status <> 200
select distinct c_ip,
                cs_uri_stem
from cr_access_cloudfront_logs_v1
where cast(date as varchar) = '2024-12-07'
  and sc_status <> 200
order by c_ip desc;

-- distinct c_ip of today with sc_status <> 200
select distinct c_ip,
    date
from cr_access_cloudfront_logs_v1
where sc_status <> 200
  and cast(date as varchar) = '2024-12-07'
order by date desc;

-- unique visitors and urls with status 200 till date
select distinct c_ip,
                cs_uri_stem
from cr_access_cloudfront_logs_v1
where sc_status = 200
order by c_ip;

--
