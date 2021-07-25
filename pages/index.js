import Head from "next/head";
import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Alvin Almodal</title>
        <meta
          name="description"
          content="Hi I'm Alvin Almodal a Full-Stack Javascript developer."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header></Header>
      </main>
    </React.Fragment>
  );
}
