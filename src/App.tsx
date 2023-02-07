import jpegzbg from './assets/jpegzbg.webm';
import jpegzbgmp4 from './assets/jpegzbg.mp4';
import jpegzbgwebp from './assets/jpegzbg.webp';
import jpegzlogo from './assets/JPEGZ_logo_Green.png';
import './App.css';

function App() {
  return (
    <div className="HiddenOverflow">
      <div className="MainApp">
        <video className="ImageCover" loop autoPlay muted poster={jpegzbgwebp}>
          <source src={jpegzbg} type="video/webm" />
          <source src={jpegzbgmp4} type="video/mp4" />
        </video>
        <div className="TextBox">
          <img src={jpegzlogo} className="Logo" alt="logo" />
          <h3 className="SubTitleText">Total NFT Market Cap Token <br/> Exclusively on Arbitrum </h3>
        </div>
        <div className="ButtonBox">
          <a href="#" className="JPEGZButton">Watch the Video</a>
          <a href="https://cryptexfinance.notion.site/JPEGz-d69c8df153ee4795b1fd728ef6daba5d" target="_blank" className="JPEGZButton">Learn More</a>
          <a href="https://twitter.com/CryptexFinance" target="_blank" className="JPEGZButton">Follow on Twitter</a>
        </div>
      </div>
    </div>

);}

export default App;
