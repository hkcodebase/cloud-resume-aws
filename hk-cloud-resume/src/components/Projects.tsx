import {List, ListInlineItem} from "reactstrap";

export default function Projects() {
    return (
        <>
            <h4>Projects</h4>
            <List>
                <ListInlineItem>
                    <a href="https://hkcloudresume.com/" target={"_blank"}> Cloud Resume </a>- My resume made in React and deployed in AWS(Route53, S3 and CloudFront) using Github Actions
                </ListInlineItem>
                <ListInlineItem>
                    <a href="https://github.com/spring-lab-01/goal-tracker" target={"_blank"}>Goal Tracker </a>
                     - App to track goals, built using React, Java, Springboot, Docker
                </ListInlineItem>
                <ListInlineItem>
                    <a href="https://github.com/spring-lab-01/finance-portfolio" target={"_blank"}>Finance Portfolio </a>
                     - Finance Portfolio App, built using React, Java, Springboot, Docker
                </ListInlineItem>
            </List>

        </>
    );
}