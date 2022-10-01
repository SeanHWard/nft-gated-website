import { useAddress, useLogin, Web3Button, ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import contractAddress from '../const/yourDetails';

export default function Login() {
  const address = useAddress(); // Get the user's address
  const login = useLogin(); // Sign in

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Auth - NFT Gated Content</h1>

      <p className={styles.explain}>
        You cannot access the main page unless you own an NFT from our
        collection!
      </p>

      <hr className={styles.divider} />

      <>
        <p>Welcome, {address?.slice(0, 6)}...</p>

        <button
          className={styles.mainButton}
          style={{ width: 256 }}
          onClick={login}
        >
          Sign In
        </button>

        <p>
          For demo purposes, you can claim an NFT from our collection below:
        </p>

        <ConnectWallet></ConnectWallet>
        {/* <Web3Button
          contractAddress={contractAddress}
          action={(contract) => contract.erc1155.claim(0, 1)}
          accentColor="#F213A4"
        >
          Claim NFT
        </Web3Button> */}
      </>
    </div>
  );
}
