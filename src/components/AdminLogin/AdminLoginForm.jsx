import React from "react";
import "./AdminLoginForm.scss";
export function AdminLoginForm() {
  return (
    <>
      <div className="admin-login-form">
        <div className="container">
          <form id="email-pass">
            <h1 id="welcome-tag">WELCOME BACK</h1>
            <h4 className="tag-line">
              Welcome back! Please enter your details
            </h4>
            <h2 className="tag">Email</h2>
            <input
              className="input-box"
              id="box1"
              placeholder="Enter your email"
              type="email"
            />
            <h2 className="tag">Password</h2>
            <input
              className="input-box"
              id="box2"
              placeholder="Password"
              type="password"
            />
            <div className="rem-me">
              <input className="check-inp" type="checkbox" />
              Remember me
              <button className="btn">Forgot Password</button>
            </div>
            <button id="sign-in-btn">Sign in</button>
            <button id="outlook-btn">
              <img
                width="20"
                height="20"
                class="outlook-img"
                src="data:image/png;base64,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"
              />
              <div>Sign in with Outlook</div>
            </button>
          </form>
        </div>
        <img
          id="food_img"
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
        />
      </div>
    </>
  );
}
