import React, { useEffect, useState } from "react";

import config from "@/config";

declare global {
  interface Window {
    gapi: any;
    handleGoogleSignInCallback: (response: any) => void;
  }
}
interface Props {
  handleToken: (token: string) => void;
}

const GoogleSignIn = ({ handleToken }: Props) => {
  const [, setLoaded] = useState(false);

  const handleCallback = React.useCallback(
    (response: any) => {
      console.log(response);
      handleToken(response.credential);
    },
    [handleToken]
  );
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
    window.handleGoogleSignInCallback = handleCallback;
  }, [handleCallback]);

  return (
    <div>
      <div
        id="g_id_onload"
        data-client_id={config.GOOGLE_CLIENT_ID}
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleGoogleSignInCallback"
        data-nonce=""
        data-itp_support="true"></div>

      <div
        className="g_id_signin"
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

export default GoogleSignIn;
