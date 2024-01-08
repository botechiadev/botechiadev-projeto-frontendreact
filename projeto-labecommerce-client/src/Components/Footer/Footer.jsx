import { FooterContainer } from "./styled.Footer";
import { FaGithubSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

export default  function Footer() {
  return (
    <FooterContainer>
        <ul>
            <li>
                <a href="https://github.com/botechiadev"><FaGithubSquare /></a>
            </li>
            <li>
                <a href="https://linkedin.com/in/botechia-erika"><GrLinkedin /></a>
            </li>
            <li>
                <a href="mailto:botechiadev@gmail.com">botechiadev@gmail.com</a>
            </li>
        </ul>
    </FooterContainer>
  )
}
