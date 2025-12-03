import { useState } from 'react';
import './App.css';
import UGSTour from './assets/ugstour.png';
import BrokerConnect from './assets/brokerconnect.png';
import BreezeInit from './assets/breeze-init.png';
import Headshot from './assets/Diljodh.png';

function App() {
    const [activeTab, setActiveTab] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const experiences = [
        {
            company: "Simon Fraser University",
            role: "BSc Computer Science",
            period: "Sep 2020 – Dec 2025",
            responsibilities: [
                "Bachelor of Science in Computer Science with a focus on software engineering and web development",
                "Completed coursework in software engineering, data structures and algorithms, object-oriented design, web development, machine learning, and large language models",
                "Built multiple full-stack projects using React, Node.js, Django, PostgreSQL, and more",
                "Collaborated with classmates on team-based projects, using Git and modern development workflows"
            ]
        },
        {
            company: "Cloverdale Robotics Learning",
            role: "Full-Stack Developer & Programming Instructor",
            period: "Jan 2023 – Jan 2025",
            responsibilities: [
                "Developed full-stack internal tools and web applications for instructors to streamline daily workflows",
                "Managed databases and server hosting for internal and outward-facing websites",
                "Built a cross-platform mobile application (iOS and Android) for instructors to submit attendance and communicate with parents in real time",
                "Created an emergency alert system to instantly notify parents and office staff of critical updates",
                "Taught elementary school students foundational programming, robotics, and computational thinking concepts",
                "Designed and iterated on lesson plans to deliver engaging, age-appropriate STEM content",
                "Managed inventory of robots, tablets, and accessories to ensure equipment availability and reduce loss"
            ]
        },
        {
            company: "Dhanrhak Investments",
            role: "Full-Stack Developer Intern",
            period: "Sep 2020 – Feb 2023",
            responsibilities: [
                "Developed RESTful APIs using Django REST Framework and PostgreSQL for multiple internal projects",
                "Built a React Native mobile application that helps customers discover local small businesses",
                "Coordinated with the team lead to define project requirements and timelines, improving delivery predictability",
                "Managed Trello boards and cross-team communication to keep stakeholders aligned and ensure deadlines were met",
                "Maintained and enhanced existing applications in response to new business requirements and market changes",
                "Reviewed and provided feedback on pull requests to ensure code quality, performance, and security best practices"
            ]
        }
    ];

    const handleNavClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <main>
            <nav>
                <button
                    className={`nav-toggle ${mobileMenuOpen ? 'open' : ''}`}
                    onClick={() => setMobileMenuOpen(prev => !prev)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className={`nav-links ${mobileMenuOpen ? 'nav-links-mobile-open' : ''}`}>
                    <li>
                        <a href="#about" className="text-none" onClick={handleNavClick}>
                            <span>01.</span> About
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="text-none" onClick={handleNavClick}>
                            <span>02.</span> Experience
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-none" onClick={handleNavClick}>
                            <span>03.</span> Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-none" onClick={handleNavClick}>
                            <span>04.</span> Contact
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="/DilNahalResume.pdf"
                            className="text-none"
                            rel="noopener noreferrer"
                            onClick={handleNavClick}
                        >
                            My Resume
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="left">
                <a href="https://github.com/DiljodhNahal" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/dil-nahal-04859b167/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0 1 5,7A2,2 0 0 1 3,5A2,2 0 0 1 5,3Z" />
                    </svg>
                </a>
                <hr />
            </div>

            <div className="right">
                <a>diljodhnahal@hotmail.com</a>
                <hr />
            </div>

            <div id="hero" className="section">
                <h1 className="introduction">Hi, my name is</h1>
                <h1 className="name">Dil Nahal</h1>
                <h3 className="title">Full-Stack Developer</h3>
                <p className="description">
                    I'm a full-stack developer specializing in building modern, <br />
                    scalable web and mobile applications. From front-end interfaces to back-end services, <br />
                    I create seamless user experiences and robust functionality.
                </p>
                <a href="#contact" className="cta">Let's Talk</a>
            </div>

            <div id="about" className="section">
                <div className="section-header">
                    <h2><span>01.</span> About Me</h2>
                </div>
                <p className="description">
                    I'm a passionate full-stack developer with a strong foundation in both front-end and back-end technologies. With a keen eye for detail and a commitment to delivering high-quality solutions, I thrive in dynamic environments.
                </p>
                <p className="description">
                    My expertise spans across various programming languages and frameworks, allowing me to create robust and scalable applications that meet diverse needs. I thrive in collaborative environments, where I can contribute effectively to team projects and drive innovation.
                </p>
                <p className="description">
                    Beyond coding, I'm a dedicated learner and a team player, always eager to expand my knowledge and skill set. I'm excited about the opportunities to contribute to innovative projects and make a meaningful impact in the tech industry.
                </p>
                <a href="#contact" className="cta">Let's Talk</a>
            </div>

            <div id="experience" className="section">
                <div className="section-header">
                    <h2><span>02.</span> My Experience</h2>
                </div>

                <div className="experience-container">
                    <div className="tab-list">
                        {experiences.map((exp, index) => (
                            <button
                                key={index}
                                className={`tab ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {exp.company}
                            </button>
                        ))}
                    </div>

                    <div className="tab-content">
                        <h3>
                            {experiences[activeTab].role}
                            <span className="company"> @ {experiences[activeTab].company}</span>
                        </h3>
                        <p className="period">{experiences[activeTab].period}</p>
                        <ul>
                            {experiences[activeTab].responsibilities.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div id="projects" className="section">
                <div className="section-header">
                    <h2><span>03.</span> My Projects</h2>
                </div>

                <div className="featured-project">
                    <a className="project-image" href="https://ugstour.com" target="_blank" rel="noopener noreferrer">
                        <div className="project-image-overlay" />
                        <img src={UGSTour} alt="Ultimate Golf Sim" />
                    </a>
                    <div className="project-content">
                        <p className="project-overline">Featured Project</p>
                        <h3 className="project-title">Ultimate Golf Sim</h3>
                        <div className="project-description">
                            <p>
                                An online, browser-based golf game. Play against real players, upgrade your own golfer, and climb the leaderboard. Interact with a growing community of golfers around the world.
                            </p>
                        </div>
                        <ul className="project-tech-list">
                            <li>React</li>
                            <li>Express</li>
                            <li>Prisma</li>
                            <li>Postgres</li>
                            <li>Cloudflare R2</li>
                        </ul>
                        <div className="project-links">
                            <a href="https://ugstour.com" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="featured-project flipped">
                    <a className="project-image" href="https://brokerconnect.app" target="_blank" rel="noopener noreferrer">
                        <div className="project-image-overlay" />
                        <img src={BrokerConnect} alt="BrokerConnect" />
                    </a>
                    <div className="project-content">
                        <p className="project-overline">Featured Project</p>
                        <h3 className="project-title">BrokerConnect</h3>
                        <div className="project-description">
                            <p>
                                A iOS and Android mobile application which allows Real Estate Brokers to connect with each other, and share their off-market exclusives, client requirements, and more.
                            </p>
                        </div>
                        <ul className="project-tech-list">
                            <li>React Native</li>
                            <li>TypeScript</li>
                            <li>NestJS</li>
                            <li>Twilio</li>
                            <li>RevenueCat</li>
                        </ul>
                        <div className="project-links">
                            <a href="https://brokerconnect.app" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="featured-project">
                    <a className="project-image" href="https://www.npmjs.com/package/breeze-init" target="_blank" rel="noopener noreferrer">
                        <div className="project-image-overlay" />
                        <img src={BreezeInit} alt="Breeze-Init" />
                    </a>
                    <div className="project-content">
                        <p className="project-overline">Featured Project</p>
                        <h3 className="project-title">Breeze-Init</h3>
                        <div className="project-description">
                            <p>
                                A lightweight CLI tool to initialize a new Express project with optional Authentication, Prisma, PostgreSQL, Docker, ESLint, Prettier, Vitest, Swagger, and Git support.
                            </p>
                        </div>
                        <ul className="project-tech-list">
                            <li>Npm</li>
                            <li>Prisma</li>
                            <li>Postgres</li>
                            <li>Vitest</li>
                            <li>Swagger</li>
                            <li>Docker</li>
                        </ul>
                        <div className="project-links">
                            <a href="https://github.com/DiljodhNahal/breeze-init" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <a href="https://www.npmjs.com/package/breeze-init" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="section contact-section">
                <div className="section-header">
                    <h2><span>04.</span> Contact Me</h2>
                </div>
                <div className="contact-content">
                    <div className="contact-photo">
                        <img src={Headshot} alt="Dil Nahal" />
                    </div>
                    <div className="contact-details">
                        <h3 className="contact-heading">Let’s connect</h3>
                        <p className="description">
                            I’m currently looking for new opportunities as a Software Engineer / Full-Stack Developer.
                        </p>
                        <ul className="contact-list">
                            <li>
                                <span className="contact-label">Name:</span>
                                <span className="contact-value">Dil Nahal</span>
                            </li>
                            <li>
                                <span className="contact-label">Location:</span>
                                <span className="contact-value">Vancouver, BC</span>
                            </li>
                            <li>
                                <span className="contact-label">Email:</span>
                                <a href="mailto:diljodhnahal@hotmail.com" className="contact-value">
                                    diljodhnahal@hotmail.com
                                </a>
                            </li>
                            <li>
                                <span className="contact-label">Phone:</span>
                                <a href="tel:+16046138520" className="contact-value">
                                    +1 (604) 613-8520
                                </a>
                            </li>
                            <li>
                                <span className="contact-label">Open to:</span>
                                <span className="contact-value">Full-time, Internship, Remote</span>
                            </li>
                        </ul>
                        <a href="mailto:diljodhnahal@hotmail.com" className="cta">Say Hello</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
