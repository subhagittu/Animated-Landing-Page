import './App.css';
import gsap from "gsap";
import Expo from "scrolltrigger";
import image1 from "../public/images/image1.jpg";
import image2 from "../public/images/image2.jpg";
import image3 from "../public/images/image3.jpg";
import image4 from "../public/images/image4.jpg";
import image5 from "../public/images/image5.jpg";
import logo from "../public/images/raybanlogo.png";

function App() {

  let elems = document.querySelectorAll('.elem')

  elems.forEach(function (elem) {
    let h1s = elem.querySelectorAll('h1');
    let index = 0;
    let animating = false;


    document.querySelector("#main").addEventListener("click", function () {
      if (!animating) {
        animating = true;

        gsap.to(h1s[index], {
          top: '-=100%',
          ease: Expo.easeInOut,
          duration: 1,
          onComplete: function () {
            gsap.set(this._targets[0], { top: '100%' })
            animating = false;
          },
        });
        (index === h1s.length - 1) ? (index = 0) : index++
        gsap.to(h1s[index], {
          top: '-=100%',
          ease: Expo.easeInOut,
          duration: 1
        });

      }
    })

  })



  return (
    <>
      <div id="main">
        <div id="back">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
        </div>
        <div id="top">
          <div id="workingarea">
            <div id="nav">
              <div id="nleft">
                <img src={logo}/>
                <a href="">Home</a>
                <a href="">Blogs</a>
              </div>
              <div id="nright">
                <a href="">About</a>
                <a href="">Contact</a>
              </div>
            </div>
            <div id="hero">
              <div id="heroleft">
                <div className="elem">
                  <h1>Nature's beauty</h1>
                  <h1>Wilderness whispers</h1>
                  <h1>Earth's palette,</h1>
                  <h1>Sky's canvas,</h1>
                  <h1>Nature's cure,</h1>
                </div>
                <div className="elem">
                  <h1>is Earth's</h1>
                  <h1>humanity</h1>
                  <h1>vibrant and</h1>
                  <h1>painted with</h1>
                  <h1>a breath</h1>
                </div>
                <div className="elem">
                  <h1>poetry.</h1>
                  <h1>listens.</h1>
                  <h1>alive</h1>
                  <h1>clouds</h1>
                  <h1>away</h1>
                </div>
                <button>Explore Now</button>
              </div>
              <div id="heroright">
                <p>Nature's rhythm, life's symphony.</p>
                <div id="imagediv"></div>
                <p>
                  Nature, in all its grandeur and subtlety, stands as an unrivaled
                  masterpiece, an intricate tapestry woven with threads of beauty
                  and complexity. From the majestic peaks of towering mountains to
                  the delicate petals of a blooming flower, nature is a testament to
                  the boundless creativity of the universe.
                </p>
                <p>
                  The landscapes that unfold under nature's brush are diverse and
                  awe-inspiring. Lush forests, dense and verdant, harbor a plethora
                  of life, from the towering trees that pierce the sky to the myriad
                  creatures that call the undergrowth home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
