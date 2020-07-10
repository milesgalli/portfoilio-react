import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class landing extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent.fper5-1.fna.fbcdn.net/v/t1.0-9/70248219_2550338405011963_3971002826305306624_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=ynh3eN-aZjkAX9bIFIm&_nc_ht=scontent.fper5-1.fna&oh=0e0f023ab4716d270e6b3579e0849122&oe=5F2D75B7"
              alt="profile-pic"
              className="profile-photo"
            />
            <div className="banner-text">
              <h1>Junior Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Javascript | Bootstrap | MongoDB | React | Express |
                NodeJSF
              </p>
              {/*linkedIn */}
              <div className="soical-links">
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                {/*GitHub */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default landing;
