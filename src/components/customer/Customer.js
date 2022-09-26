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
              <img src={require("../../images/Button/nonact/left.png")}></img>
            </div>
            <div className="butActive">
              <img src={require("../../images/Button/act/right.png")}>
                
              </img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
