import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="subscribe container-sm">
        <div className="subscribe-text">
          <div className="subs-text-bold">
            Subscribe Now for Get Special Features!
          </div>
          <div className="subs-description">
            Let's subscribe with us and find the fun.
          </div>
        </div>
        <div className="subscribe-but">
          <button>Subscribe Now</button>
        </div>
      </div>

      <div className="footer-info container-sm">
        <div className="first-column">
          <div className="footer-logo">
            <img src={require("../../images/logo.png")}></img>
          </div>
          <div className="first-column-text">
            <b>LaslesVPN</b> is a private virtual network that has unique
            features and has high security.
          </div>
          <div className="social">
            <div className="facebook">
              <img src={require("../../images/Socmed/Facebook.png")}></img>
            </div>
            <div className="twitter">
              <img src={require("../../images/Socmed/Twitter.png")}></img>
            </div>
            <div className="instagram">
              <img src={require("../../images/Socmed/Instagram.png")}></img>
            </div>
          </div>
          <div className="copyright">©2020LaslesVPN</div>
        </div>
        <div className="second-column">
            <div className="second-title">Product</div>
            <div className="second-list">
                Download<br/>
                Pricing<br/>
                Locations<br/>
                Server<br/>
                Countries<br/>
                Blog<br/>
            </div>
        </div>
        <div className="third-column">
        <div className="third-title">Engage</div>
            <div className="third-list">
                LaslesVPN?<br/>
                FAQ<br/>
                Tutorials<br/>
                About Us<br/>
                Privacy Policy<br/>
                Terms of Service<br/>
            </div>
        </div>
        <div className="fourth-column">
        <div className="fourth-title">Earn Money</div>
            <div className="fourth-list">
                Afiliate<br/>
                Become Partner<br/>
                
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
