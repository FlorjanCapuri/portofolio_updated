import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a
                    href="https://www.linkedin.com/in/florjan-capuri-302bb71bb/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInIcon />
                </a>
                <a
                    href="https://mail.google.com/mail/u/0/#inbox"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <EmailIcon />
                </a>
                <a
                    href="https://github.com/FlorjanCapuri"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GithubIcon />
                </a>
            </div>
            <p>
                &copy; 2022 florjancapuri.com
            </p>
        </div>
    )
}

export default Footer;