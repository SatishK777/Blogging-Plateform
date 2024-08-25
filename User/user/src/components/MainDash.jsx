import React from 'react'
import '../../src/style/maindash.css'
import { Navigate, useNavigate } from 'react-router-dom'
import SignOut from './SignOut';
import { Link } from 'react-router-dom';

function MainDash() {

    const navigate = useNavigate();


    const handleblogs = () => {
        navigate("/h")
    }
    return (
        <>
            <nav>
                <div className="nav__bar">
                    <a href="#"><span className="logo nav__logo">SK</span> Blog Bytes</a>
                    <div className="nav__menu__btn" id="menu-btn">
                        <i className="ri-menu-3-line"></i>
                    </div>
                </div>
                <ul className="nav__links" id="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#" onClick={handleblogs}>Blogs</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#"></a></li>
                </ul>
                <a  className="btn btn__large">
                    Log Out
                      <SignOut />
                    </a>
            </nav>
            <header className="section__container header__container" id="home">
                <div className="header__image">
                    <img src="src/assets/banner.avif" alt="header" />
                </div>
                <div className="header__content">
                    <div>
                        <h1>SK Blog Bytes:<br />Your Voice<br />Amplified</h1>
                    </div>
                    <p className="section__description">
                        Welcome to SK Blog Bytes, your destination for diverse voices, insightful stories, and fresh perspectives. Whether you're here to learn, be inspired, or simply explore new ideas, our community of writers offers something for everyone. Dive into captivating blogs on topics that matter, discover new interests, and connect with stories that resonate with you. Happy reading!
                    </p>
                    <div className="header__btn">
                        <button className="btn" onClick={handleblogs}>BLOGS</button>
                    </div>
                </div>
            </header>

            <section className="section__container about__container" id="about">
                <div className="about__image">
                    <img src="src/assets/bg.png" alt="bg" className="about__bg-1" />
                    <img src="src/assets/bg.png" alt="bg" className="about__bg-2" />
                    <img src="src/assets/skk.jpg" alt="about" className="about__img" />
                </div>
                <div className="about__content">
                    <h2 className="section__header">Bit About Me</h2>
                    <p className="section__description">
                        Welcome to SK Blog Bytes!
                        <br/>
                        <br/>
                        we believe that storytelling has the power to connect, inspire, and transform. Our blog is a space where ideas are shared, experiences are celebrated, and conversations begin. We cover everything from [mention your main topics, e.g., lifestyle, tech, travel, personal growth], with an aim to inform and entertain our readers.
                         <br/>
                         <br/>
                        Whether you're looking for insights, advice, or a touch of inspiration, our goal is to provide content that speaks to your journey. Every article is crafted with passion and a desire to connect with a community that shares our love for curiosity and exploration.
                          <br/>
                          <br/>
                        Thank you for being a part of this journey with us. We’re excited to continue sharing stories, ideas, and experiences that spark positive change.
                    </p>
                    
                </div>
            </section>

            <section className="section__container service__container" id="service">
                <h2 className="section__header">All Time Tranding Blogs</h2>
                <div className="service__grid">
                    <div className="service__card">
                        <img src="src/assets/project-1.jpg" alt="" />
                        <h4>The Future of Work</h4>
                        <p>
                            We craft user-friendly interfaces that engage visitors and help you
                            achieve your online goals with minimum efforts.
                        </p>
                        <Link to={'/tb1'}>Read more</Link>
                    </div>
                    <div className="service__card">
                    <img src="src/assets/project-2.jpg" alt="" />
                        <h4>Quick Fitness Hacks</h4>
                        <p>
                            We build secure, scalable, and user-centric online stores that
                            enhance the shopping experience and drive conversions.
                        </p>
                        <Link to={'/tb2'}>Read more</Link>
                    </div>
                    <div className="service__card">
                    <img src="src/assets/project-3.jpg" alt="" />
                        <h4>Sustainable Living Tips</h4>
                        <p>
                            From iOS to Android, we create apps that deliver seamless
                            performance and keep users coming back for more.
                        </p>
                        <Link to={'/tb3'}>Read more</Link>
                    </div>
                </div>
            </section>

            {/* <section className="section__container portfolio__container" id="portfolio">
                <h2 className="section__header">My Portfolio</h2>
                <p className="section__description">
                    Explore a showcase of my diverse projects, demonstrating my skills in
                    web development, design, and beyond. Each project reflects my passion
                    for creating impactful and innovative digital experiences.
                </p>
                <div className="portfolio__grid">
                    <div className="portfolio__card">
                        <img src="assets/project-1.jpg" alt="portfolio" />
                    </div>
                    <div className="portfolio__card">
                        <img src="assets/project-2.jpg" alt="portfolio" />
                    </div>
                    <div className="portfolio__card">
                        <img src="assets/project-3.jpg" alt="portfolio" />
                    </div>
                    <div className="portfolio__card">
                        <img src="assets/project-4.jpg" alt="portfolio" />
                    </div>
                    <div className="portfolio__card">
                        <img src="assets/project-5.jpg" alt="portfolio" />
                    </div>
                    <div className="portfolio__card">
                        <img src="assets/project-6.jpg" alt="portfolio" />
                    </div>
                </div>
                <div className="portfolio__banner">
                    <div className="portfolio__banner__card">
                        <span><i className="ri-macbook-line"></i></span>
                        <h4>150+ Blogs</h4>
                        <p>Delivered</p>
                    </div>
                    <div className="portfolio__banner__card">
                        <span><i className="ri-discuss-line"></i></span>
                        <h4>Happy</h4>
                        <p>readers</p>
                    </div>
                    <div className="portfolio__banner__card">
                        <span><i className="ri-heart-fill"></i></span>
                        <h4>2700+ Lovely</h4>
                        <p>Feedbacks</p>
                    </div>
                </div>
            </section> */}

            <section className="section__container contact__container" id="contact">
                <div className="logo">SK</div>
                <h2 className="section__header">Let's Talk With Me!</h2>
                <p className="section__description">
                    An open invitation to connect, and exploring collaborative opportunities
                    on my personal portfolio website.
                </p>
                <div className="contact__socials">
                    <a href="#"><i className="ri-twitter-fill"></i></a>
                    <a href="#"><i className="ri-linkedin-fill"></i></a>
                    <a href="#"><i className="ri-instagram-fill"></i></a>
                    <a href="#"><i className="ri-facebook-line"></i></a>
                    <a href="#"><i className="ri-pinterest-line"></i></a>
                </div>
            </section>
            <footer className="footer">
                Copyright © 2023 SK Blog Bytes. All rights reserved.
            </footer>
        </>
    )
}

export default MainDash