import React from 'react';
import '../style.css';

//<link rel="preconnect" href="https://fonts.googleapis.com"/>
//<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
//<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
//<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
//<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>

function Home() {
    return (
        <div className="leftSidebar fixed border-r-2 border-accent">
            <a href="\v0.0.2\index.html">
                <div className="logo">
                    <span className="material-icons">pets</span>
                    <h2>DoggoHub</h2>
                </div>
            </a>
            <div className="leftSidebarOption">
                <span className="material-icons">home</span>
                <h2>Startseite</h2>
            </div>
            <div className="leftSidebarOption">
                <span className="material-icons">search</span>
                <h2>Informationen</h2>
            </div>
            <div className="leftSidebarOption">
                <span className="material-icons">notifications_none</span>
                <h2>Benachrichtigung</h2>
            </div>
            <div className="leftSidebarOption">
                <span className="material-icons">mail_outline</span>
                <h2>Nachrichten</h2>
            </div>
            <div className="leftSidebarOption">
                <span className="material-icons">perm_identity</span>
                <h2>Login</h2>
            </div>
            <div className="leftSidebarOption">
                <span className="material-icons">more_horiz</span>
                <h2>Mehr</h2>
            </div>
            <button className="leftSidebarPost">Hochladen</button>
        </div>
    );
}

export default Home;