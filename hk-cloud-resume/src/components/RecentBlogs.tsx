import {List, ListInlineItem} from "reactstrap";

export default function RecentBlogs(){
    return(
        <>
            <h4>Recent Blogs at Medium</h4>
            <List>
                <ListInlineItem>
                    <a href="https://medium.com/@hkcodeblogs/deploy-a-spring-boot-application-to-aws-ecs-91742a32a5f1" target={"_blank"}>
                        Deploy Spring boot application to AWS ECS</a>
                </ListInlineItem>
                <ListInlineItem>
                    <a href="https://hkcodeblogs.medium.com/cloud-resume-using-aws-services-part-1-69e000894f73" target={"_blank"}>
                        Hosting Cloud Resume over AWS</a>
                </ListInlineItem>
                <ListInlineItem>
                    <a href="https://hkcodeblogs.medium.com/create-docker-image-and-run-spring-boot-3-based-microservice-f57258f148b" target={"_blank"}>
                        Dockerizing Spring boot App</a>
                </ListInlineItem>
                <ListInlineItem>
                    <a href="https://hkcodeblogs.medium.com/rest-apis-using-springboot-3-userbook-application-43df796f69fd" target={"_blank"}>
                        Complete Microservice using Springboot
                    </a>
                </ListInlineItem>
                <ListInlineItem>
                    <a href="https://hkcodeblogs.medium.com/deploy-springboot-3-based-microservice-on-aws-ec2-4b9efdebb798" target={"_blank"}>
                        Deploy Springboot and maven based microservice in AWS EC2 Instance
                    </a>
                </ListInlineItem>
            </List>

        </>
    )
}