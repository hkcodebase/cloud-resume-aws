
-- status till date
select count(*) as total_requests,
       SUM( CASE WHEN sc_status = 200 THEN 1 ELSE 0 END ) AS count_200,
       SUM( CASE WHEN sc_status != 200 THEN 1 ELSE 0 END ) AS count_other_status,
       count( distinct C_ip ) as total_unique_IPs,
       count( distinct case when sc_status = 200 THEN C_ip else null end ) as total_unique_IPs_200,
       count( distinct case when sc_status != 200 THEN C_ip else null end ) as total_unique_IPs_Other_Status
from cr_access_cloudfront_logs_v1;

-- status date wise
select  date,
    count(*) as total_requests,
    SUM( CASE WHEN sc_status = 200 THEN 1 ELSE 0 END ) AS count_200,
    SUM( CASE WHEN sc_status != 200 THEN 1 ELSE 0 END ) AS count_other_status,
    count( distinct C_ip ) as total_unique_IPs,
    count( distinct case when sc_status = 200 THEN C_ip else null end ) as total_unique_IPs_200,
    count( distinct case when sc_status != 200 THEN C_ip else null end ) as total_unique_IPs_Other_Status
from cr_access_cloudfront_logs_v1 group by date order by date desc;

--
