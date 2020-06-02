import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      brand: ["Adidas", "Puma", "Reebok", "Nike"],
      company: [
        "About Us",
        "Career",
        "Find a store",
        "Rules and terms",
        "Sitemap",
      ],
      help: [
        "Contact us",
        "Money Refund",
        "Order status",
        "Shipping info",
        "Open dispute",
      ],
      account: ["user login", "User Register", "Account Setting", "My Orders"],
    };
  }

  loop = (value, head) => {
    return (
      <div>
        <h4 className="nav-header font-weight-bold text-muted">{head}</h4>
        {value.map((item) => (
          <ul className="list-unstyled">
            <li key={item}>{item}</li>
          </ul>
        ))}
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="bg-light">
          <div className="container">
            <div className="row">
              {" "}
              {/** External row */}
              <div className="col-md col-6">
                {this.loop(this.state.brand, "Brands")}
              </div>
              <div className="col-md col-6">
                {this.loop(this.state.company, "Company")}
              </div>
              <div className="col-md col-6">
                {this.loop(this.state.help, "Help")}
              </div>
              <div className="col-md col-6">
                {this.loop(this.state.account, "Account")}
              </div>
              <ul className="list-unstyled m-5 col-md">
                <h4 className="text-muted">Status</h4>
                <li>
                  <FontAwesomeIcon icon={faFacebook} color="blue" />
                  Facebook
                </li>
                <li>
                  <FontAwesomeIcon icon={faTwitter} color="blue" />
                  Twitter
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faInstagram} color="blue" />
                  Instagram
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faYoutube} color="blue" />
                  Youtube
                </li>
              </ul>
            </div>
          </div>

          <p>&copy; 2020 Your Company Name</p>
          <p className="m-2">
            info@pixsellz.io +25454665785 Street name 123, Avanue abc
          </p>
        </div>
      </React.Fragment>
    );
  }
}
