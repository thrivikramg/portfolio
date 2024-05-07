// Home_content.js

import React, { Component } from 'react';
import './Home_content.css';
import home from './home.jpg';
import Card from './Hobbies_card';
import imageSrc1 from './luffy.jpg'; 
import imageSrc2 from './miles.jpg'; 
import imageSrc3 from './songs.jpg'; 
import imageSrc4 from './Meemes_maamey.jpg';
import imageSrc5 from './ViMusic.png'; 
import imageSrc6 from './Vipdf.png'; 
import imageSrc7 from './Free2Go.png'; 
import imageSrc8 from './shopout.png'; 
import imageSrc9 from './dashboard.png'; 
import imagesrc10 from './gmail.png';
import imagesrc11 from './linkedin.png';
import imageSrc12 from './github.svg';

class Home_content extends Component {
    state = {
        textIndex: 0,
        texts: ['the king', 'developer', 'designer', 'student']
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const { textIndex, texts } = this.state;
            const nextIndex = (textIndex + 1) % texts.length;
            this.setState({ textIndex: nextIndex });
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { texts, textIndex } = this.state;
        return (
            <div className="home_content" id="home">
                <h1><i>3 </i>Vikram</h1>
                <h3 className="glitch">
                    <span aria-hidden="true">{texts[textIndex]}</span>
                    <span aria-hidden="true">{texts[textIndex]}</span>
                    <span aria-hidden="true">{texts[textIndex]}</span>
                </h3>
                <img className="right_content" src={home} alt="Home" />
                <p className="paragraph">
                    Highly progressive with UI designs. <br/>
                    Over a year of experience in frontend development.
                </p>
                <div className="about" id="about">
                    <h3 className="glitch">
                    <span aria-hidden="true">Design</span>
                    <span aria-hidden="true">Design</span>
                    <span aria-hidden="true">Design</span>
                    </h3>
                    <p className='paragraph_about'>
                    Design is thinking made visible... 
                    <br/>and sometimes it's just thinking about pizza. That's okay too!
                    </p>
                    <h3 className="glitch" id="right_about">
                    <span aria-hidden="true">Development</span>
                    <span aria-hidden="true">Development</span>
                    <span aria-hidden="true">Development</span>
                    </h3>
                    <p className='paragraph_about1'>
                    Development is the art of turning coffee into code
                    <br/> and occasionally into bugs.
                    </p>
                    <h3 className="glitch">
                    <span aria-hidden="true">Student</span>
                    <span aria-hidden="true">Student</span>
                    <span aria-hidden="true">Student</span>
                    </h3>
                    <p className='paragraph_about'>
                A student of SSCE... 
                    <br/>Pursuing 2nd year in Information Science
                    </p>
                    <h3 className="glitch">
                    <span aria-hidden="true">Hobbie</span>
                    <span aria-hidden="true">Hobbie</span>
                    <span aria-hidden="true">Hobbie</span>
                    </h3>
                    <div className='card_container'>
                    <Card
                      title="Anime"
                      content="Master of the art of anime relaxation. When I'm not designing or coding,
                       you'll find me kicking back with my favorite anime series,
                        enjoying the ultimate form of stress relief!"
                      imageUrl={imageSrc1}
                    />
                    <Card
                      title="Games"
                      content="Virtual gaming aficionado and digital daredevil. 
                      Whether it's slaying dragons or saving galaxies, you'll find me immersed in virtual worlds, 
                      where pixels and polygons become my playground!"
                      imageUrl={imageSrc2}
                    />
                    <Card
                      title="Music"
                      content="Melody maestro and rhythm connoisseur. When I'm not crafting code, I'm lost in a symphony of sounds, 
                      vibing to the beats and harmonizing with the melodies. Music isn't just a hobby; it's my soul's soundtrack"
                      imageUrl={imageSrc3}
                    />
                    </div>
                </div>
                <div className='works' id="works">
                <h3 className="glitch">
                    <span aria-hidden="true">works</span>
                    <span aria-hidden="true">works</span>
                    <span aria-hidden="true">works</span>
                    </h3>
                    <div className='card_container'>
                    <a href='https://github.com/thrivikramg/Memes-maamey'>
                    <Card
                      title="Meemes Maamey"
                      content="It generates memes according to the filters applied by the user using reddit api."
                      imageUrl={imageSrc4}
                    />
                    </a>
                    <a href='https://github.com/thrivikramg/ViMusic'>
                    <Card
                      title="ViMusic"
                      content="ViMusic is a Python script that allows you to download songs from a 
                      Spotify playlist using their names and search for them on YouTube. It then downloads the audio 
                      from the top search result on YouTube and saves it as an MP3 file."
                      imageUrl={imageSrc5}
                    />
                    </a>
                    <a href='https://github.com/thrivikramg/ViPdf'>
                    <Card
                      title="ViPdf"
                      content="This Python script generates a brief description for a PDF file. It extracts text content from the PDF
                       using PyPDF2 and summarizes it with Gensim. 
                      If summarization succeeds, it creates a short description from the summary. Otherwise, it uses the file name."
                      imageUrl={imageSrc6}
                    />
                    </a>
                    </div>
                </div>
                <div className='works1'>
                    <div className='card_container'>
                    <a href='https://www.figma.com/proto/0SgfuTGUpmmZ65eoayPMnV/Shoput?node-id=1-5'>
                    <Card
                      title="Shopout"
                      content="Designed a captivating hero page for an e-commerce app, 
                             setting the stage for a delightful shopping experience.."
                      imageUrl={imageSrc8}
                    />
                    </a>
                    <a href='https://www.figma.com/proto/1USSKFjJYtgKwdrCp1yWSS/free2go?type=design&node-id=1-12&t=D9mLuI41ZKOJF8JC-1&scaling=scale-down&page-id=0:1&starting-point-node-id=1:12&mode=design'>
                    <Card
                      title="Free2Go"
                      content="Designed user interfaces for international ride-sharing services using Figma as part of personal projects"
                      imageUrl={imageSrc7}
                    />
                    </a>
                    <a href='https://www.figma.com/file/gd0aEFtNhL4CRqII202iZa/Untitled?type=design&node-id=0-1&mode=design&t=08BLRi4EQTLtATyp-0'>
                    <Card
                      title="dashboard"
                      content="Crafted a dynamic UI design for a comprehensive crypto dashboard, providing users with real-time insights into their digital assets and investments. Integrated an advertisement 
                      block to promote relevant products or services, enhancing user engagement and monetization opportunities."
                      imageUrl={imageSrc9}
                    />
                    </a>
                    </div>
                </div>
                <div className="contact-us-container">

              
                <div className="contact-links">
                <a href="https://github.com/thrivikramg" target="_blank" rel="noopener noreferrer">
                  <img src={imageSrc12}/>GitHub</a>
                <a href="https://www.linkedin.com/in/thrivikram-guruprasad-8b3754251" target="_blank" rel="noopener noreferrer">
                <img src={imagesrc11}/>LinkedIn</a>
                <a href="mailto:thrivikram3301@gmail.com">
                <img src={imagesrc10}/>Email</a>
        </div>
      </div>
    </div>
        );
    }
}

export default Home_content;
