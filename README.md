# cloud-resume-aws
This repository has code for [**my cloud resume website**](https://hkcloudresume.com/) as per challenge and steps in [this article]( 
 https://cloudresumechallenge.dev/docs/the-challenge/aws/)

## Steps of Challenge

### 1. Certification

- [AWS Cloud Practitioner Certificate](https://www.credly.com/badges/3f155c87-ee29-4a3f-b6f9-ab791a779593/)

### 2. HTML &  3. CSS
- [Resume files](./web/)
- [Learning Resource 1](https://internetingishard.netlify.app/) 
- [Learning Resource 2](https://developer.mozilla.org/en-US/docs/Learn)

### 4. Static Website on AWS S3
- [Use S3 to host resume website](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/getting-started-cloudfront-overview.html)
- [Steps to create it](https://github.com/hkcodebase/path-aws/blob/main/s3/cloud-resume.md)

### 5. HTTPS
- [Enable HTTPS Using AWS Certificate Manger](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-requirements.html)

### 6. DNS
- [Pointing Domain to CloudFront Distribution using Route53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html)

### 7. Javascript
- [React Component to get Counter from AWS](https://github.com/hkcodebase/cloud-resume-aws/blob/main/frontend/src/components/Counter.tsx)

### 8. Database
- [Dynamo DB](https://aws.amazon.com/dynamodb/) table to keep site visitor counts.

### 9. API
 - [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html) to create API to increment site visits and get that value

### 10. Python
- [API Backend](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html) to get and put site visit values to database

### 11. Tests

### 12. Infrastructure as Code

### 13. Source Control
 - [This Repository](https://github.com/hkcodebase/cloud-resume-aws)

### 14. CI/CD (Back end)

### 15. CI/CD (Front end)
 - [Github Actions]()
 - [My Cloud Resume CI/CD](https://github.com/hkcodebase/cloud-resume-aws/blob/main/.github/workflows/aws.yml)

### 16. Blog post
 - [Cloud Resume V1 on Medium](https://medium.com/@hkcodeblogs/cloud-resume-using-aws-services-part-1-69e000894f73)