import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="social-media">
      <a href="https://linkedin.com/in/harinder-partap-singh-007a82198">
        <FaLinkedin className="social-link linkedin" size={"40px"} />
      </a>
      <a href="https://github.com/HarryIsCodingg">
        <FaGithub className="social-link" size={"40px"} />
      </a>
    </div>
  );
}

export default SocialMedia;
