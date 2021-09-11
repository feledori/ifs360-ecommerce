import Image from "next/image";
import { Layout } from "../components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Inprint</title>
      </Head>
      <section className="intro">
        <div className="text">
          <h2>
            Make printing
            <br />
            accessible to everyone
          </h2>
        </div>
        <Image
          src="/images/printer.jpg"
          width={2400}
          height={1602}
          alt="Industrial Printer"
          className="image"
        />
      </section>
      <section className="products">
        <h3>We believe in your ideas!</h3>
        <div
          className="image"
          style={{
            background: "url(/images/product1.jpg) no-repeat center",
          }}
        />
        <div
          className="image"
          style={{
            background: "url(/images/product2.jpg) no-repeat center",
          }}
        />
      </section>
      <section className="signup">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5L12 13.5L23 5M1 4H23V20H1V4Z"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
          Stay updated: new products, recommendations, long reads and more
          <input type="text" placeholder="Email" />
        </div>
      </section>
      <style jsx>
        {`
          .intro {
            position: relative;
            max-height: calc(100vh - 60px);
            overflow: hidden;
          }

          .text {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 60px;
            background-color: rgba(0, 0, 0, 0.4);
            color: white;
            z-index: 10;
          }

          h2,
          h3 {
            font-size: 4rem;
            font-weight: 400;
            text-transform: uppercase;
          }

          h3 {
            width: 100%;
            text-align: center;
            margin-bottom: 100px;
          }

          .products {
            padding: 100px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .products .image {
            width: 40%;
            height: 50vw;
            background-size: cover !important;
          }

          .signup {
            padding: 100px;
          }

          .signup div {
            background-color: black;
            color: white;
            padding: 80px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
          }

          .signup input {
            background: black;
            border: 1px solid white;
            height: 30px;
            padding-left: 6px;
          }

          .signup input::placeholder {
            color: white;
            opacity: 1;
          }
        `}
      </style>
    </Layout>
  );
}
