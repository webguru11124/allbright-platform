"use strict";

let isProd = process.env.NODE_ENV === "production";
if (process.env.NEXT_PUBLIC_BACKEND) {
  isProd = process.env.NEXT_PUBLIC_BACKEND === "prod";
}

module.exports = {
  ALLBRIGHT_API_URL: process.env.ALLBRIGHT_API_URL,
  ALLBRIGHT_API_KEY: process.env.ALLBRIGHT_API_KEY,
  FIREBASE_CLIENT: isProd
    ? {
        apiKey: "AIzaSyA5knxokt6MN24qqLpdsUJd4lGf_YX7I2s",
        authDomain: "allbright-496e8.firebaseapp.com",
        projectId: "allbright-496e8",
        storageBucket: "allbright-496e8.appspot.com",
        messagingSenderId: "812776786652",
        appId: "1:812776786652:web:3157ebdd6527bbd09e8219",
      }
    : {
        apiKey: "AIzaSyAZLP-o1Qy5Yjmttu5XQVbA1jtle7CYAkk",
        authDomain: "allbright-dev.firebaseapp.com",
        projectId: "allbright-dev",
        storageBucket: "allbright-dev.appspot.com",
        messagingSenderId: "627789850522",
        appId: "1:627789850522:web:b23153f835f77b70393c23",
      },
};
