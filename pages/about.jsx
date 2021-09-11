import { Layout } from "../components/Layout";
import Head from "next/head";

const Image = ({ imgPath }) => {
  return (
    <>
      <div />
      <style jsx>
        {`
          div {
            width: 300px;
            height: 300px;
            background: url(${imgPath}) no-repeat center;
            background-size: cover !important;
          }
        `}
      </style>
    </>
  );
};

export default function About() {
  return (
    <Layout presentationMode noFooter>
      <Head>
        <title>About - Inprint</title>
      </Head>
      <section className="header">
        <div>
          <p>Our Mission:</p>
          <h1>
            Enable everyone to focus on their idea rather then the execution
          </h1>
        </div>
      </section>
      <main>
        <article>
          <h2>About Inprint</h2>
          <p>
            Inprint is a digital printing service provider that enables
            end-users to collaborate with large printing companies. Our mission
            is to assist customers in the creation of any print product and to
            enable the printing of complex products for consumers. Our service
            is to take care of the entire pre-printing stage and to assist the
            customer in the creation of his product.
          </p>
        </article>
        <article>
          <Image imgPath="/images/colorswatch.jpg" />
          <div>
            <h2>Our goals</h2>
            <p>
              Our goal is to allow end consumers to print complex print products
              and smaller companies to be independent of marketing companies.
              Our goal is to minimize the effort and associated costs of such
              orders and to provide you with a good value end product. But also
              larger companies can become more independent through our
              Enterprise Consumer Plan and link your marketing team directly to
              our print specialists to minimize pre-press costs.
            </p>
          </div>
        </article>
        <article>
          <div>
            <h2>How we work</h2>
            <p>
              This service is provided by our experienced team of graphic
              designers and printing specialists. There will be a charge for
              this service from our side. The final price is set by the chosen
              printing company, which the consumer can choose for products that
              offer the possibility. We have many different printing partners
              that allow us to print our vast product line. Some of our products
              can be printed by more than one of our partners, giving the
              customer the option to choose and explaining the different aspects
              of the printing company.
            </p>
          </div>
          <Image imgPath="/images/partners.jpg" />
        </article>
        <article>
          <Image imgPath="/images/environment.jpg" />
          <div>
            <h2>Core value</h2>
            <p>
              100% Green! Inprint is a climate-neutral company. Every print made
              by our service is made climate-neutral from our side. This is one
              of our most important aspects and a goal of our company is to
              become climate positive. We work together with several non-profit
              companies which help us to neutralize our climate footprint. This
              is made possible by our partner Climate Neutral, we work with them
              to keep our company climate-neutral and have a positive effect on
              us and our environment.
            </p>
          </div>
        </article>
        <article>
          <div>
            <h2>Culture</h2>
            <p>
              Working standards and a good working environment are given to each
              of our workers at Inprint. We have a team of over 100+ employees
              across the globe from diverse cultures, backgrounds, and
              religions. Tolerance and openness are very important to us and
              every employee must adhere to these values. In return, our
              employees are offered social as well as existential security. We
              believe in flexible working hours and flexible workplaces, each of
              our employees can choose their working hours and workplace.
            </p>
          </div>
          <Image imgPath="/images/team.jpg" />
        </article>
        <article>
          <Image imgPath="/images/support.jpg" />
          <div>
            <h2>Service</h2>
            <p>
              Our company is an online service provider and therefore our
              company does not have any physical offices. Therefore, the company
              attaches great importance to online support systems and provides
              24/7 online support chat, as well as a phone number where we can
              be reached at specified times. The satisfaction of our customers
              is our highest priority and for this reason, we provide a 100%
              money-back guarantee in case our service cannot print your
              product.
            </p>
          </div>
        </article>
      </main>
      <style jsx>{`
        .header {
          transform: translateY(-60px);
          height: 100vh;
          padding: 0 200px;
          background: url("./images/man-paper.jpg") no-repeat center;
          background-size: cover !important;
          text-align: center;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          color: black;
          filter: brightness(1.2);
        }

        .header div {
          max-width: 1000px;
          margin: 0 auto;
        }

        .header p {
          font-size: 3rem;
        }

        .header h1 {
          font-size: 6rem;
          font-weight: 800;
        }

        main {
          max-width: 1000px;
          margin: 0 auto;
        }

        article {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 120px 0;
        }

        article:first-of-type {
          display: block;
        }

        article div {
          display: inline-block;
          width: calc(100% - 400px);
        }

        h2 {
          font-size: 3rem;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.4rem;
          font-weight: 300;
        }
      `}</style>
    </Layout>
  );
}
