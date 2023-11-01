import React from 'react';

function Landing() {
  return (
    <body className="is-ready">
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <div id="container02" className="style2 container default">
              <div className="wrapper">
                <div className="inner">
                  <h1 id="text04">
                    <span>THE</span>
                    <br />
                    <span>H A N D</span>
                    <br />
                    <span>B O O K</span>
                    <br />
                    <span>FOR</span>
                    <br />
                    <span>C R E A T IIV E</span>
                    <br />
                    <span>G E N I U S</span>
                  </h1>
                  <div id="image01" className="style1 image" data-position="center">
                    <span className="frame">
                      <img
                        src="./assets/image01.jpg"
                        alt=""
                      />
                    </span>
                  </div>
                  <ul id="buttons01" className="buttons">
                    <li>
                      <a
                        href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:ae52ddae-0c27-4021-a9fd-e5817d418544"
                        className="button n01"
                      >
                        Download the Free PDF
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.paypal.com/paypalme/thehandbook1"
                        className="button n02"
                      >
                        Donations
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="container04" className="style1 container default">
              <div className="wrapper">
                <div className="inner">
                  <p id="text02" className="style3">
                    <span>85% ARE DUMB, DEAF AND BLIND; 10% VICTIMIZE. THAT LEAVES ONLY FIVE.</span>
                    <br />
                    <span>THOSE WHO ACCEPT THIS HANDBOOK WILL HAVE DEEP ART; WHILE THOSE OTHERS WON'T BE ABLE TO COMPETE</span>
                  </p>
                </div>
              </div>
            </div>
          <div id="container05" className="style1 container default">
              <div className="wrapper">
                <div className="inner">
                  <p id="text02" className="style3">
                    <span>This is where you will say hello or talk</span>
                    <br />
                    <span>to others about what you would like for them to learn</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="../script.js"></script>
    </body>
  );
}

export default Landing;
