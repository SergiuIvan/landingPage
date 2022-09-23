import "./Network.scss";
const Network = () => {
  return (
    <>
      <div className="network container-sm">
        <div className="network-title ">Huge Global Network of Fast VPN</div>
        <div className="network-description">
          See <b>LaslesVPN</b> everywhere to make it easier for you when you move
          locations.
        </div>
        <div className="map">
            <img src={require("../../images/map.png")}></img>
        </div>
        <div className="sponsored">
        <img src={require("../../images/Sponsored.png")}></img>

        </div>
      </div>
    </>
  );
};

export default Network;
