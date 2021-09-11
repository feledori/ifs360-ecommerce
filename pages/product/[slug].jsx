import { Layout } from "../../components/Layout";
import products from "../../assets/products.json";
import Head from "next/head";

export default function Home({ product }) {
  return (
    <Layout>
      <Head>
        <title>{product.name} - Inprint</title>
      </Head>
      <main>
        <div className="prod-img" />
        <section>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button
            onClick={() =>
              alert("Sorry the store is not functional at the moment!")
            }
          >
            Buy now
          </button>
        </section>
      </main>
      <style jsx>{`
        main {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .prod-img {
          width: 40%;
          height: 40vw;
          background: url(/product-images/${product.image}) no-repeat center;
          background-size: cover;
        }

        section {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.2rem;
          margin: 10px 0;
        }

        button {
          outline: none;
          border: none;
          border-radius: 0;
          background-color: black;
          color: white;
          padding: 5px 10px;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = products.map((product) => ({ params: { slug: product.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = products.find((product) => product.slug === params.slug);
  return { props: { product } };
}
