import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import './feedbackpage.css'

const CaptchaTest = () => {
        const[verified, setVerified] = useState(false)

        function onChange(value) {
            console.log("Captcha value:", value);
            setVerified(true)
          }
          
    return (
      <div className="captcha">
    <ReCAPTCHA
    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={onChange}
  />
      </div>
    );
  }


export default CaptchaTest;
