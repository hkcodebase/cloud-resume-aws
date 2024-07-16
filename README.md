# cloud-resume-aws
This repository has code for [**my cloud resume website**](https://hkcloudresume.com/) as per challenge and steps in this article 
 https://cloudresumechallenge.dev/docs/the-challenge/aws/

## Steps of Challenge

### 1. Certification

- [AWS Cloud Practitioner Certificate](https://www.credly.com/badges/3f155c87-ee29-4a3f-b6f9-ab791a779593/)

### 2. HTML &  3. CSS
- [Resume files](./web/)
- [Learning Resource 1](https://internetingishard.netlify.app/) 
- [Learning Resource 2](https://developer.mozilla.org/en-US/docs/Learn)

### 4. Static Website on AWS S3
- [Resume URL over S3](http://hk-cloud-resume.s3-website-us-east-1.amazonaws.com/)
- [Steps to create it](https://github.com/hkcodebase/path-aws/blob/main/s3/cloud-resume.md)

### 5. HTTPS
- [Resume over CloudFront](https://d371yj7u2esz45.cloudfront.net/)

### 6. DNS
- [Domain using Route53 pointing to CloudFront Distribution](https://hkcloudresume.com)

### 7. Javascript

### 8. Database

### 9. API

Built using Spring boot and DynamoDB. Deployed in AWS EC2
```
cd backend
docker build -t hkchauhan022/cloud-resume .
docker run -p 8080:8080 hkchauhan022/cloud-resume
```

### 10. Python

### 11. Tests

### 12. Infrastructure as Code

### 13. Source Control
 - This Repository

### 14. CI/CD (Back end)

### 15. CI/CD (Front end)
 - [Github Actions]()
 - [My Cloud Resume CI/CD](https://github.com/hkcodebase/cloud-resume-aws/blob/main/.github/workflows/aws.yml)

### 16. Blog post
 - [Cloud Resume V1 on Medium](https://medium.com/@hkcodeblogs/cloud-resume-using-aws-services-part-1-69e000894f73)