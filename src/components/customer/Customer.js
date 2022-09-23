import "./Customer.scss";
import CardCustomer from "../cards-customer/CardCustomer";
const Customer = () => {
  return (
    <>
      <div className="customer container-sm">
        <div className="customer-title">
          Trusted by Thousands of Happy Customer
        </div>
        <div className="customer-description">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </div>

        <div className="customers">
          <div className="customer1">
            <CardCustomer
              image="customer1.png"
              name="Viezh Robert"
              location="Warsaw, Poland"
              description="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
            />
          </div>
          <div className="customer2">
            <CardCustomer
              image="customer2.png"
              name="Yessica Christy"
              location="Shanxi, China"
              description="“I like it because I like to travel far and still can connect with high speed.”."
            />
          </div>
          <div className="customer3">
            <CardCustomer
              image="customer3.png"
              name="Kim Young Jou"
              location="Seoul, South Korea"
              description="“This is very unusual for my business that currently requires a virtual private network that has high security.”."
            />
          </div>
        </div>
        <div className="buttons">
          <div className="dots">
            <svg
              width="135"
              height="16"
              viewBox="0 0 135 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="67.5" cy="8.25293" r="7.5" fill="#DDE0E4" />
              <circle cx="97.5" cy="8.25293" r="7.5" fill="#DDE0E4" />
              <circle cx="127.5" cy="8.25293" r="7.5" fill="#DDE0E4" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.55721 15.7527C7.53816 15.7529 7.51909 15.7529 7.5 15.7529C7.48091 15.7529 7.46184 15.7529 7.44279 15.7527H6.9469V15.7328C3.06303 15.4497 0 12.209 0 8.25293C0 4.29682 3.06303 1.05612 6.9469 0.773015V0.75293H7.5H37.0841V0.764267C37.2218 0.756742 37.3604 0.75293 37.5 0.75293C41.6421 0.75293 45 4.11079 45 8.25293C45 12.3951 41.6421 15.7529 37.5 15.7529C37.3604 15.7529 37.2218 15.7491 37.0841 15.7416V15.7527H7.55721Z"
                fill="#F53838"
              />
            </svg>
          </div>
          <div className="active-inactive">
          <div className="butInactive">
            <svg
              width="60"
              height="61"
              viewBox="0 0 60 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30.2529"
                r="29"
                stroke="#F53838"
                stroke-width="2"
              />
              <path
                d="M38.75 29.0029H23.925L28.4625 23.5529C28.6747 23.2976 28.7768 22.9685 28.7463 22.638C28.7158 22.3075 28.5553 22.0026 28.3 21.7904C28.0447 21.5782 27.7156 21.4762 27.3851 21.5066C27.0546 21.5371 26.7497 21.6976 26.5375 21.9529L20.2875 29.4529C20.2455 29.5126 20.2078 29.5752 20.175 29.6404C20.175 29.7029 20.175 29.7404 20.0875 29.8029C20.0308 29.9462 20.0012 30.0988 20 30.2529C20.0012 30.407 20.0308 30.5596 20.0875 30.7029C20.0875 30.7654 20.0875 30.8029 20.175 30.8654C20.2078 30.9306 20.2455 30.9933 20.2875 31.0529L26.5375 38.5529C26.655 38.694 26.8022 38.8075 26.9686 38.8853C27.1349 38.963 27.3164 39.0032 27.5 39.0029C27.7921 39.0035 28.0751 38.9018 28.3 38.7154C28.4266 38.6105 28.5312 38.4816 28.6079 38.3362C28.6846 38.1907 28.7318 38.0316 28.7469 37.8679C28.762 37.7042 28.7447 37.5391 28.6959 37.3821C28.6471 37.2251 28.5678 37.0792 28.4625 36.9529L23.925 31.5029H38.75C39.0815 31.5029 39.3995 31.3712 39.6339 31.1368C39.8683 30.9024 40 30.5844 40 30.2529C40 29.9214 39.8683 29.6034 39.6339 29.369C39.3995 29.1346 39.0815 29.0029 38.75 29.0029Z"
                fill="#F53838"
              />
            </svg>
          </div>
          <div className="butActive">
            <svg
              width="148"
              height="149"
              viewBox="0 0 148 149"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_11_50)">
                <circle cx="74" cy="60.2529" r="30" fill="#F53838" />
                <circle
                  cx="74"
                  cy="60.2529"
                  r="29"
                  stroke="#F53838"
                  stroke-width="2"
                />
              </g>
              <path
                d="M65.25 59.0029H80.075L75.5375 53.5529C75.3253 53.2976 75.2232 52.9685 75.2537 52.638C75.2842 52.3075 75.4447 52.0026 75.7 51.7904C75.9553 51.5782 76.2844 51.4762 76.6149 51.5066C76.9454 51.5371 77.2503 51.6976 77.4625 51.9529L83.7125 59.4529C83.7545 59.5126 83.7922 59.5752 83.825 59.6404C83.825 59.7029 83.825 59.7404 83.9125 59.8029C83.9692 59.9462 83.9988 60.0988 84 60.2529C83.9988 60.407 83.9692 60.5596 83.9125 60.7029C83.9125 60.7654 83.9125 60.8029 83.825 60.8654C83.7922 60.9306 83.7545 60.9933 83.7125 61.0529L77.4625 68.5529C77.345 68.694 77.1978 68.8075 77.0314 68.8853C76.8651 68.963 76.6836 69.0032 76.5 69.0029C76.2079 69.0035 75.9249 68.9018 75.7 68.7154C75.5734 68.6105 75.4688 68.4816 75.3921 68.3362C75.3154 68.1907 75.2682 68.0316 75.2531 67.8679C75.238 67.7042 75.2553 67.5391 75.3041 67.3821C75.3529 67.2251 75.4322 67.0792 75.5375 66.9529L80.075 61.5029H65.25C64.9185 61.5029 64.6005 61.3712 64.3661 61.1368C64.1317 60.9024 64 60.5844 64 60.2529C64 59.9214 64.1317 59.6034 64.3661 59.369C64.6005 59.1346 64.9185 59.0029 65.25 59.0029Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_d_11_50"
                  x="0"
                  y="0.25293"
                  width="148"
                  height="148"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="14" />
                  <feGaussianBlur stdDeviation="22" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0561111 0 0 0 0 0.0777333 0 0 0 0 0.133333 0 0 0 0.08 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_11_50"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_11_50"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
