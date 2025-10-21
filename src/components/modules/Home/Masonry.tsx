import "../../../app/portfolio/Portfolio.css";
const Masonry = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid-wrapper">
          <div className="tall">
            <img src="/images/portfolio/tl1.jpg" alt="tall image 1" />
          </div>
          <div className="tall">
            <img src="/images/portfolio/tl2.jpg" alt="tall image 2" />
          </div>
          <div className="wide">
            <img src="/images/portfolio/wd1.jpg" alt="wide image 1" />
          </div>
          <div className="big">
            <img src="/images/portfolio/bg1.jpg" alt="big image 1" />
          </div>
          <div className="tall">
            <img src="/images/portfolio/tl5.jpg" alt="tall image 5" />
          </div>
          <div className="wide">
            <img src="/images/portfolio/wd2.jpg" alt="wide image 2" />
          </div>
          <div className="big">
            <img src="/images/portfolio/bg3.jpg" alt="big image 3" />
          </div>
          <div className="big">
            <img src="/images/portfolio/bg2.jpg" alt="big image 2" />
          </div>
          <div className="tall">
            <img src="/images/portfolio/tl3.jpg" alt="tall image 3" />
          </div>
          <div>
            <img
              src="/images/portfolio/screencapture-poppythehippo-fun-2025-10-21-14_07_10-(1)-(1).png"
              alt="poppy hippo"
            />
          </div>
          <div className="tall">
            <img src="/images/portfolio/tl4.jpg" alt="tall image 4" />
          </div>
          <div className="tall">
            <img src="/images/portfolio/tl6.jpg" alt="tall image 6" />
          </div>
          <div className="wide">
            <img src="/images/portfolio/wd3.jpg" alt="wide image 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Masonry;
