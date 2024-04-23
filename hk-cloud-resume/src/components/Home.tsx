import AboutMe from "./AboutMe.tsx";
import ConnectWithMe from "./ConnectWithMe.tsx";
import Projects from "./Projects.tsx";
import RecentBlogs from "./RecentBlogs.tsx";

export default function Home() {
    return (
        <>
            <p>
                <h2>Hemant Kumar</h2>
                <ConnectWithMe/>
            </p>

            <AboutMe/>
            <Projects/>
            <RecentBlogs/>
        </>
    )
}
