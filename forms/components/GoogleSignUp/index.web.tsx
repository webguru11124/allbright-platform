import React, { useEffect, useState } from "react";

import config from "@/config";

declare global {
  interface Window {
    gapi: any;
    handleGoogleSignUpCallback: (response: any) => void;
  }
}
interface Props {
  handleToken: (token: string) => void;
}

const GoogleSignUp = (props: Props) => {
  const [isInProgress, setIsInProgress] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://accounts.google.com/gsi/client";
    scriptTag.async = true;
    scriptTag.onload = () => {
      if (window.gapi) {
        window.gapi.load("auth2", () => {
          window.gapi.auth2
            .init({
              client_id: config.GOOGLE_CLIENT_ID,
              callback: handleCallback,
            })
            .then(() => {
              setLoaded(true);
            })
            .catch((error: any) => {
              console.error("Error initializing Google Auth:", error);
            });
        });
      } else {
        console.error("Google API not loaded");
      }
    };
    scriptTag.onerror = () => {
      console.error("Failed to load Google One-tap script");
    };

    document.body.appendChild(scriptTag);
    window.handleGoogleSignUpCallback = handleCallback;
  }, []);

  const handleCallback = (response: any) => {
    console.log(response);
    props.handleToken(response.credential);
  };

  return (
    <div>
      <div
        id="g_id_onload"
        data-client_id={config.GOOGLE_CLIENT_ID}
        data-context="signup"
        data-ux_mode="popup"
        data-callback="handleGoogleSignUpCallback"
        data-nonce=""
        data-itp_support="true"></div>

      <div
        className="g_id_signup"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="center"
        data-width="399"></div>
    </div>
  );
};

export default GoogleSignUp;
