import React from 'react';
import logo from './logo.webp';
import profileBg from './profile-bg.webp';
import profilePhoto from './profile.png';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <main className="main">
        <aside className="side">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item"><a href="#" className="nav__link">Profile</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Messages</a></li>
              <li className="nav__item"><a href="#" className="nav__link">News</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Music</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Settings</a></li>
            </ul>
          </nav>
        </aside>
        <div className="content">
          <div className="profile">
            <img src={profileBg} alt="profile-bg" className="profile__bg-img" />
            <div className="profile__info">
              <img src={profilePhoto} alt="photo" className="profile__photo" />
              <div className="profile__desc">
                <div className="profile__name">Max R.</div>
                <div className="profile__desc-text">Date of Birth: <span>11 May</span></div>
                <div className="profile__desc-text">City: <span>New York</span></div>
                <div className="profile__desc-text">Education: <span>NYC</span></div>
                <div className="profile__desc-text">Web Site: <span><a href="#">google.com</a></span></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
