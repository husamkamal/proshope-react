import "./style.css";
import React, { Component } from "react";
import Img from "../../Img";
import H1 from "../../H1";
import Button from "../../Button";
import Header from "../../Header";
import Images from "../../../Assets";
class Profile extends Component {
  render() {
    return (
      <div className="flex pearn">
          <Header/>
        <div className="profile flex">
          <div className="amy flex">
            <div className="image-h1 flex">
              <Img src={Images.Group240} />
              <H1>Amy Mayer</H1>
            </div>
            <div className="myorder flex">
              <span>My Orders</span>
              <span>Wishlist</span>
              <span>Notifcations</span>
              <span>Settings</span>
              <hr />
              <span>Logout</span>
            </div>
          </div>
          <div className="myprofile flex">
            <div className="myinfo flex">
              <H1>My Profile</H1>
              <span className="flex">
                First Name <H1>Amy</H1>
              </span>
              <span className="flex">
                Last Name <H1>Mayer</H1>
              </span>
              <span className="flex">
                Email <H1>amymay@gmail.com</H1>
              </span>
              <span className="flex">
                Birthday <H1>12/04/1991</H1>
              </span>
              <Button>Change Password</Button>
            </div>
            <div className="photo flex">
              <Img src={Images.Group421} />
              <Button>Upload new photo</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
