import React from "react";
import Link from 'next/Link';
import { useAddress, useLogin, Web3Button, ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.sitetitle}>Wardos</Link>
      <ul>
        <li className={styles.active}>
          <Link href="/Roadmap">Roadmap</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <ConnectWallet colorMode="light" accentColor="#555"></ConnectWallet>
        </li>
      </ul>
    </nav>
  );
}
