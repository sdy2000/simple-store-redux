import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const SocialBox = () => {
  return (
    <ul className="mt-8 flex gap-6">
      <li>
        <a
          href="https://www.linkedin.com/in/sdy2000/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-300 transition hover:opacity-75 text-2xl duration-300"
        >
          <span className="sr-only">Facebook</span>

          <BsFacebook />
        </a>
      </li>

      <li>
        <a
          href="https://instagram.com/ssdy2000?igshid=ZDdkNTZiNTM="
          rel="noreferrer"
          target="_blank"
          className="text-gray-300 transition hover:opacity-75 text-2xl duration-300"
        >
          <span className="sr-only">Instagram</span>

          <BsInstagram />
        </a>
      </li>

      <li>
        <a
          href="https://twitter.com/sdy20000?s=09"
          rel="noreferrer"
          target="_blank"
          className="text-gray-300 transition hover:opacity-75 text-2xl duration-300"
        >
          <span className="sr-only">Twitter</span>

          <BsTwitter />
        </a>
      </li>

      <li>
        <a
          href="https://github.com/sdy2000"
          rel="noreferrer"
          target="_blank"
          className="text-gray-300 transition hover:opacity-75 text-2xl duration-300"
        >
          <span className="sr-only">GitHub</span>

          <BsGithub />
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/sdy2000/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-300 transition hover:opacity-75 text-2xl duration-300"
        >
          <span className="sr-only">Dribbble</span>

          <BsLinkedin />
        </a>
      </li>
    </ul>
  );
};
export default SocialBox;
