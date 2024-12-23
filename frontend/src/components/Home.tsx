import AboutMe from "./AboutMe.tsx";
import ConnectWithMe from "./ConnectWithMe.tsx";
import Projects from "./Projects.tsx";
import RecentBlogs from "./RecentBlogs.tsx";
// import Counter from "./Counter.tsx";

export default function Home() {
    return (
        <>
            <h1>Hemant Kumar </h1>
            <ConnectWithMe/>
            <AboutMe/>
            <Projects/>
            <RecentBlogs/>
        </>
    )
}
