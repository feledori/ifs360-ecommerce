import { Layout } from "../components/Layout";
import Head from "next/head";

export default function Shop() {
  return (
    <Layout>
      <Head>
        <title>BM - Inprint</title>
      </Head>
      <main>
        <h2>Business Model</h2>
        <h3>Value proposition</h3>

        <p>
          Our company offers a unique service that simplifies the printing of
          complex print products. This allows non-professionals to print things
          that previously would not have been possible without prior knowledge
          or assistance from graphic designers. Also, our service is suitable
          for corporate clients as we can take over the pre-printing stage for
          any company&apos;s print product, thus simplifying and speeding up the
          process.
        </p>

        <h3>Revenue model</h3>

        <p>
          The main source of revenue will be the service costs that we generate
          for the assistance in the process of printing. Depending on the
          complexity of the project and the size of the project, a lower or
          higher service will be charged. For special requirements, additional
          service costs will be charged. At the same time, our company sells
          several unprinted and printed products. This revenue stream would be
          the secondary source of income. Selling products directly is an easy
          and cost-effective way as we buy the products from our partners and
          resell them. At a later stage, after the company grows, we could
          introduce an affiliate program for which printing companies can apply to become
          partners with us. After that, we can charge printing companies per print product and
          generate another source of income.
        </p>

        <h3>Market opportunity</h3>

        <p>
          Our market is the printing industry at the beginning mainly related to
          individual customers and small businesses. Print products are used
          every day by companies whether internal or external. From advertising
          campaigns to employee apparel, print products are needed. However, to
          realize such products is not possible without support. Here we come
          into play this is our gap which we try to close. There are enough
          printers worldwide and companies which need to print. We want to be
          the middle man between these two fronts and position ourselves there
          in the market.
        </p>

        <h3>Competitive environment</h3>

        <p>
          In this market, we will compete mainly with advertising agencies and
          online printers. Advertising agencies usually offer larger packages
          and are therefore much more expensive than our service. Online
          printers, on the other hand, offer their products directly and are
          therefore cheaper than our product. However, they usually offer little
          or expensive service. This is not their main focus. The main
          competitors in the market are certainly advertising agencies that
          provide services to many small businesses. They have the main market
          of customers which we try to capture.
        </p>

        <h3>Competitive advantage</h3>

        <p>
          We try to position ourselves in between and offer a balance of the two
          sides. Products at an affordable price and services at an affordable
          price. Our big advantage over other competitors is that our service is
          only online. This allows us to eliminate many cost factors and
          undercut the market. We also appeal to a new generation of
          entrepreneurs who have grown up in the digital age.
        </p>

        <h3>Market strategy</h3>

        <p>
          To enter the market we will mainly advertise on social media where our
          customer base is most present. Thus, social media such as Twitter,
          Linked In, and Youtube will be used. Facebook and Instagram will be
          left out as they do not meet our company standards. Likewise, a lot of
          networking will be done, mainly via LinkedIn, where direct contact
          with small entrepreneurs will be established. As the company is a
          print shop until the end, print media will certainly be used as well,
          but this will be the least important channel as print advertising is
          too expensive at the beginning.
        </p>

        <h3>Organizational development</h3>

        <p>
          The company will be a digital company with workers from different
          places and time zones. This will certainly be difficult to manage. The
          workers will be divided into different teams. Teams will be formed
          from the previous knowledge of the workers and will be related to
          services such as textile printing. Likewise, a particularly important
          department will be quality control, through which each print file will
          pass, as well as each finished print product. Marketing will also be
          done internally this will be a small solid team of workers. Helpdesk
          and customer support will certainly be outsourced at the beginning as
          the capacity of the company is not sufficient. A small customer
          support department will be formed in-house so that major problems can
          be solved directly by us.
        </p>

        <h3>Management team</h3>

        <p>
          The management team will not have a standard formation. The company
          should give every employee the chance to work freely and not under
          someone else. The managers of the departments will be specialists who
          have a lot of experience, they will always have the final say in
          decisions. However, decisions will always be made by the team. There
          are no strict guidelines as to who does which task, this must be
          managed internally within the team. This is to be enforced by the
          entire company. As CEO, I will mainly serve as a supervisor for the
          departments.
        </p>
      </main>
      <style jsx>
        {`
          main {
            max-width: 800px;
            margin: 0 auto;
            padding: 60px 0;
          }

          h2 {
            margin-bottom: 60px;
          }

          h3 {
            margin: 30px 0 10px 0;
          }

          p {
            line-height: 1.4em;
          }
        `}
      </style>
    </Layout>
  );
}
