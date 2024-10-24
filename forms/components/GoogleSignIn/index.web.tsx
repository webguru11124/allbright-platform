import React, { useEffect, useState } from "react";

import config from "@/config";

declare global {
  interface Window {
    gapi: any;
  }
}

const GoogleSignIn = () => {
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
  }, []);

  const handleSignIn = async () => {
    setIsInProgress(true);

    if (loaded && window.gapi) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      try {
        const user = await auth2.signIn();
        console.log(user.getBasicProfile());
      } catch (error) {
        console.error("Error during sign-in:", error);
      }
    } else {
      console.error("Google API not loaded");
    }

    setIsInProgress(false);
  };

  return (
    <div>
      <div
        id="g_id_onload"
        data-client_id="627789850522-ag0dpop3o79mmqhk4n8r9hbs6m3vt7d1.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="http://localhost:8081"
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
