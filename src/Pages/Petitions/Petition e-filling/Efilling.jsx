import React from 'react'


export default function Efilling() {
  return (
    <div>
          <div className="reg-tabs">
                  <div className="login-reg-tabs">
                    <div className="login-box">
                      <div>
                        <img
                          width="42"
                          height="42"
                          src="https://img.icons8.com/material/24/FFFFFF/administrator-male--v1.png"
                          alt="administrator-male--v1"
                          className="login-icon"
                        />
                      </div>
                    </div>

                    <div className="login-box">
                      <div>
                        <img
                          width="42"
                          height="42"
                          src="https://img.icons8.com/material/24/FFFFFF/administrator-male--v1.png"
                          alt="administrator-male--v1"
                          className="login-icon"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="title">
                    <h4 id="log">Login</h4>
                    <h4 id="reg">
                      e-Registration <br></br>
                      <p id="new-user">(New User)</p>{" "}
                    </h4>
                  </div>

                  <div className="login-reg-boxes">
                    <div className="login-box-2">
                      <a href="/petitionpage/login">
                        {" "}
                        <h6>Click Here</h6>{" "}
                      </a>
                    </div>

                    <div className="login-box-2">
                      <a href="/petitionpage/e-registration">
                        {" "}
                        <h6>Click Here</h6>
                      </a>
                    </div>
                  </div>
                </div>
    </div>
  )
}
