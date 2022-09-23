import "./ChoosePlan.scss";

const ChoosePlan = () => {
  return (
    <>
      <div className="plan container-sm">
        <div className="title">
          <p>Choose Your Plan</p>
        </div>

        <div className="descriptionPlan">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </div>

        <div className="cards">
          <div className="card1">
            <img src={require("../../images/Illustration/Free.png")}></img>
            <div className="type-plan">Free Plan</div>
            <div className="check-plan">
              <p>
                <img
                  src={require("../../images/jam_check.png")}
                  alt="check"
                ></img>
                Unlimited Bandwitch
                <br />
                <img
                  src={require("../../images/jam_check.png")}
                  alt="check"
                ></img>
                Encrypted Connection
                <br />
                <img
                  src={require("../../images/jam_check.png")}
                  alt="check"
                ></img>
                No Traffic Logs
                <br />
                <img
                  src={require("../../images/jam_check.png")}
                  alt="check"
                ></img>
                Works on All Devices
                <br />
              </p>
              <div className="bottom-text1">Free</div>
              <div className="selectBut1"><button>Select</button></div>
            </div>
          </div>
          <div className="card2">
            {" "}
            <img src={require("../../images/Illustration/Standard.png")}></img>
            <div className="type-plan">Standard Plan</div>
            <div className="check-plan">
              <p>
                <img
                  src={require("../../images/jam_check.png")}
                  alt="check"
                ></img>
                Unlimited Bandwitch
                <br />
                <img
                  src={require("../../images/jam_check.png")}
                  alt="check"
                ></img>
                Encrypted Connection
                <br />
                <img
                  src={require("../../images/jam_check.png")}
                  alt="check"
                ></img>
                Yes Traffic Logs
                <br />
                <img
                  src={require("../../images/jam_check.png")}
                  alt="check"
                ></img>
                Works on All Devices
                <br />
                <img
                  src={require("../../images/jam_check.png")}
                  alt="check"
                ></img>
                Connect Anyware
                <br />
              </p>
            </div>
            <div className="bottom-text2">$9<span style={{color:"#4F5665"}}>/mo</span></div>
            <div className="selectBut2"><button>Select</button></div>
          </div>
          <div className="card3">
            <img src={require("../../images/Illustration/Premium.png")}></img>
            <div className="type-plan">Premium Plan</div>
            <div className="check-plan">
              <p>
                <img
                  src={require("../../images/jam_check.png")}
                  alt="check"
                ></img>
                Unlimited Bandwitch
                <br />
                <img
                  src={require("../../images/jam_check.png")}
                  alt="check"
                ></img>
                Encrypted Connection
                <br />
                <img
                  src={require("../../images/jam_check.png")}
                  alt="check"
                ></img>
                Yes Traffic Logs
                <br />
                <img
                  src={require("../../images/jam_check.png")}
                  alt="check"
                ></img>
                Works on All Devices
                <br />
                <img
                  src={require("../../images/jam_check.png")}
                  alt="check"
                ></img>
                Connect Anyware
                <br />
                <img
                  src={require("../../images/jam_check.png")}
                  alt="check"
                ></img>
                Get New Features
                <br />
              </p>
            </div>
            <div className="bottom-text3">$12<span style={{color:"#4F5665"}}>/mo</span></div>
            <div className="selectBut3"><button>Select</button></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoosePlan;
