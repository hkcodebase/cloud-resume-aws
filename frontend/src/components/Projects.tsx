import {List, ListInlineItem} from "reactstrap";

export default function Projects() {
    return (
        <>
            <h4>Hobby Projects</h4>
            <List>
                <ListInlineItem>
                    <a href="https://hkcloudresume.com/" target={"_blank"}> Cloud Resume </a> - Portfolio website with UI in React and deployed in AWS(Route53, S3 and CloudFront) using Github Actions.
                </ListInlineItem>
                <ListInlineItem>
                    <a href="https://github.com/spring-lab-01/netflix-data-analyzer" target={"_blank"}>Netflix Data Analyzer </a> - Analyze your view stats from zip provided provided by Netflix. Developed using Java, Springboot, Thymeleaf, Docker, Docker Compose
                </ListInlineItem>
                <ListInlineItem>
                    <a href="https://github.com/spring-lab-01" target={"_blank"}>Spring Lab 01 </a> - Repository of Spring boot based projects with different capabilities.
                </ListInlineItem>
                <ListInlineItem>
                    <a href="https://github.com/spring-lab-01/finance-portfolio" target={"_blank"}>Finance Portfolio </a> - Manage your finances in one place, built using React, Java, Springboot, Docker
                </ListInlineItem>

            </List>

        </>
    );
}