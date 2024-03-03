import "../styles/index.css";
import Head from "next/head";
import React from "react";
import { AppProps } from "next/app";

function TYOH({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Webpage Title */}
      <Head>
        <title>The Yard of Horror</title>
        {/* Meta tags */}
        <meta name="title" content="The Yard Of Horror" />
        <meta name="description" content="This project will send chills down your spine" />
        <link rel="icon" type="image/x-icon" href="/tyohfav.png" />
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="cardano, tyoh, halloween, ada, cnft, horror, The Yard of Horror, mint, 31th October, zombies"
        />
        <meta name="robots" content="all" />
        <meta httpEquiv="Content-Type" content="text/html;" />
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="language" content="English" />
      </Head>
      <>{<Component {...pageProps} />}</>
    </>
  );
}

export default TYOH;
