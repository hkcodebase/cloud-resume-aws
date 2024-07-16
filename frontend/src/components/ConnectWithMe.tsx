import gitLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";
import twitterLogo from "../assets/twitter.png"

export default function ConnectWithMe() {
    return (
        <>

            <a href="https://github.com/hkcodebase" target="_blank">
                <img src={gitLogo} className="social-logo" alt="Github"/>
            </a>
            <a href="https://www.linkedin.com/in/hemantk01/" target="_blank">
                <img src={linkedinLogo} className="social-logo" alt="LinkedIn"/>
            </a>
            <a href="https://twitter.com/hey_mant" target="_blank">
                <img src={twitterLogo} className="social-logo" alt="Twitter"/>
            </a>
        </>
    );
}