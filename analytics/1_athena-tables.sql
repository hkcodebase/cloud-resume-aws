-- v2 latest-table
CREATE EXTERNAL TABLE `cr_access_cloudfront_logs_v1`(
  `date` date,
  `time` string,
  `x_edge_location` string,
  `sc_bytes` bigint,
  `c_ip` string,
  `cs_method` string,
  `cs_host` string,
  `cs_uri_stem` string,
  `sc_status` int,
  `cs_referrer` string,
  `cs_user_agent` string,
  `cs_uri_query` string,
  `cs_cookie` string,
  `x_edge_result_type` string,
  `x_edge_request_id` string,
  `x_host_header` string,
  `cs_protocol` string,
  `cs_bytes` bigint,
  `time_taken` float,
  `x_forwarded_for` string,
  `ssl_protocol` string,
  `ssl_cipher` string,
  `x_edge_response_result_type` string,
  `cs_protocol_version` string,
  `fle_status` string,
  `fle_encrypted_fields` int,
  `c_port` int,
  `time_to_first_byte` float,
  `x_edge_detailed_result_type` string,
  `sc_content_type` string,
  `sc_content_len` bigint,
  `sc_range_start` bigint,
  `sc_range_end` bigint)
ROW FORMAT DELIMITED
  FIELDS TERMINATED BY '\t'
STORED AS INPUTFORMAT
  'org.apache.hadoop.mapred.TextInputFormat'
OUTPUTFORMAT
  'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'
LOCATION
  's3://hk-log-bucket-00/cr'
TBLPROPERTIES (
  'skip.header.line.count'='2',
  'transient_lastDdlTime'='1702925164');


-- v1
CREATE EXTERNAL TABLE `cr_access_cloudfront_logs`(
`date` date,
`time` string,
`x_edge_location` string,
`sc_bytes` bigint,
`c_ip` string,
`cs_method` string,
`cs_host` string,
`cs_uri_stem` string,
`sc_status` int,
`cs_referrer` string,
`cs_user_agent` string,
`cs_uri_query` string,
`cs_cookie` string,
`x_edge_result_type` string,
`x_edge_request_id` string,
`x_host_header` string,
`cs_protocol` string,
`cs_bytes` bigint,
`time_taken` float,
`x_forwarded_for` string,
`ssl_protocol` string,
`ssl_cipher` string,
`x_edge_response_result_type` string,
`cs_protocol_version` string,
`fle_status` string,
`fle_encrypted_fields` int,
`c_port` int,
`time_to_first_byte` float,
`x_edge_detailed_result_type` string,
`sc_content_type` string,
`sc_content_len` bigint,
`sc_range_start` bigint,
`sc_range_end` bigint)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY '\t'
STORED AS INPUTFORMAT
'org.apache.hadoop.mapred.TextInputFormat'
OUTPUTFORMAT
'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'
LOCATION
's3://hk-log-bucket-00/cloudresume'
TBLPROPERTIES (
'skip.header.line.count'='2',
'transient_lastDdlTime'='1701487051');