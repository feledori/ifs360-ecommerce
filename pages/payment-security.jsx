import { Layout } from "../components/Layout";
import Head from "next/head";

export default function Shop() {
  return (
    <Layout>
      <Head>
        <title>PS - Inprint</title>
      </Head>
      <main>
        <h2>Payment & Security</h2>
        <h3>Payment</h3>

        <p>
          When it comes to payment processing, I will outsource my payment
          service. It makes more sense to outsource such a big responsibility to
          a third party. Otherwise, you would have to put a whole team of
          computer scientists only on security, and computer scientists are
          expensive employees, especially those who specialize in security. As a
          payment provider, I will use the third-party provider Stripe and carry
          out the transactions via their api. I will also integrate the Paypal
          api which allows payments via Paypal.
          <br />
          <br />
          All these transactions will be done on the server as it would not be
          secure on the client side. Also the non-critical data like name and
          address will be secured in a user account on the database. This
          database is precisely planned and can only be accessed from the
          server. In addition, row level security is incorporated into the
          database in order to secure the data on the database once again and
          not just the interface.
          <br />
          <br />
          Why did I choose Stripe? Stripe, a toolkit that can monetize virtually
          any online business model, its APIs can be used to accept payments,
          manage customers, handle subscriptions and more. I chose it because it
          is extremely popular for startups because of its developer approach,
          instead of worrying about things like compliance, security, and fraud
          detection you can focus on the user experience and implement your
          payment system with just a few API calls.
        </p>

        <h3>Security</h3>
        <p>
          To ensure the security of the online operation, certain security gaps
          are checked by external companies at the beginning. Likewise, all
          connections are completed via the web security standards such as
          https. On the technical side, all software that is used is kept up to
          date in order to close any security gaps directly. Also, the software
          design is such that any server is encapsulated and can only talk to
          certain other servers. This ensures the exchange between servers and
          their responsibility in the system. If someone were to get into the
          system, they would be trapped in such a bubble and would not be able
          to move forward. As mentioned in the previous section, the database is
          also further secured by row level security.
          <br />
          <br />
          On the user side, the user is directly offered two factor
          authentication during registration. Also, a certain password scheme is
          required during registration, which forces the user to choose his
          password well. As registration and login is also offered the login
          through google, apple or other providers. Thus, the burden of data
          protection for those accounts is removed by us.
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
            line-height: 1.5em;
          }
        `}
      </style>
    </Layout>
  );
}
