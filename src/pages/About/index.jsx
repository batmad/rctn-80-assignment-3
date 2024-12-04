import React from'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Paragraph from '../../atoms/Paragraph';

class About extends React.Component {
    render() {
        return (
            <div className="card mb-4 mt-4 border-0">
                <div className="card-body">
                    <h5 className="card-title">About Me</h5>
                    
                    <Paragraph>
                        Hello, I&apos;m Bobby Atmadja, a Junior Web Developer with a passion for creating engaging and functional user experiences in the digital world. I have experience in developing websites using various technologies.
                    </Paragraph>
                    <Paragraph>
                        Thank you for visiting my portfolio. If you&apos;re interested in connecting with me, feel free to reach out!
                    </Paragraph>

                    <div className="d-flex gap-3">
                        <a href="https://www.linkedin.com/in/boby-rizki-atmadja-178a84178/" className="btn btn-primary"
                            target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="me-2" /> LinkedIn
                        </a>

                        <a href="https://github.com/batmad" className="btn btn-dark" target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="me-2" /> GitHub
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;   