import musicresume from './assets/musicresume.pdf';
import './Music.css';
import instruments from'./pictures/instruments.jpg';



function Music() {
  return(
      <div className="Music">
        <div className="body-container">
          <div className="text-container">
            <h2 className="title">Music</h2>
            <p className="p-text">I am currently studying music performance at UC Irvine
               with Amanda Walker. I have been playing clarinet since 2014.
               I am a member of the UCI symphony orchestra. I am always 
               looking for playing opportunities and take on projects with 
               enthusiasum.</p>
               <a className="music-resume" href={musicresume} download>Music Resume</a>
          </div>
          <img src={instruments} className="picture"></img>
        </div>
       
      </div>
    );
  }
export default Music;