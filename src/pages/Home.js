import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css";

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hello, My Name is Florjan</h2>
                <div className='prompt'>
                    <p>
                        A software developer with a passion for learning and creating
                    </p>
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
                    <div className='quote'>
                        <p>
                            “First, solve the problem. Then, write the code.” – John Johnson
                        </p>
                    </div>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2> Front-End </h2>
                        <span>
                            ReactJS, JavaScript, HTML, CSS, Bootstrap
                        </span>
                    </li>
                    <li className='item'>
                        <h2> Technologies </h2>
                        <span>
                            Git, GitHub, Familiarity with linux
                        </span>
                    </li>
                    <li className='item'>
                        <h2> Languages </h2>
                        <span>
                            JavaScript, Java, C#(Unity), PHP, MySQL
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home;