import Link from "next/link";

import { Logo } from "./Logo";

export const Navbar = ({ presentationMode = false }) => {
  return (
    <>
      <header
        style={
          presentationMode
            ? { backgroundColor: "transparent", borderColor: "transparent" }
            : {}
        }
      >
        <Link href="/">
          <a style={{ height: "100%" }}>
            <Logo />
          </a>
        </Link>
        {!presentationMode && (
          <nav>
            <ul>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/about">The Company</Link>
              </li>
              <li>
                <Link href="/business-model">The Business</Link>
              </li>
              <li>
                <Link href="/payment-security">Payment & Security</Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <style jsx>
        {`
          header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid black;
            background-color: white;
            z-index: 11;
          }

          ul {
            display: flex;
          }

          li {
            margin-left: 30px;
            text-transform: uppercase;
            font-size: 0.8rem;
          }
        `}
      </style>
    </>
  );
};
