import { Layout } from "../components/Layout";
import Head from "next/head";

export default function Shop() {
  return (
    <Layout>
      <Head>
        <title>MS - Inprint</title>
      </Head>
      <main>
        <h2>Marketing & Social Media</h2>

        <p>
          Marketing is in my opinion the most important part of the whole
          business as it helps us to reach the target consumer. Therefore, a
          large part of the budget will be spent on marketing campaigns. Since
          the company is purely digital but still sells physical products, it
          needs a multi-channel marketing plan. Also, the company is in a market
          dominated by marketing agencies. Therefore, it is very important to
          have a strong presence when it comes to marketing.
          <br />
          <h3>Traditional online marketing</h3>
          Traditional online marketing is certainly one of the main points in
          the marketing plan which is very important. SEO will be very important
          for us and the site must be optimized very well to be ranked high on
          the first page. Also keywords will be bought for the search engine so
          that we appear as an ad on Google in the first results. Banner ads
          will be shown on relevant pages that report on our topic, but this
          will be limited. Email marketing will also be a big point and we will
          try to collect a large list of users interested in printing. This will
          be achieved through affiliate codes and also coupons to get people to
          subscribe to a newsletter.
          <br />
          <h3>Social Networks</h3>
          The social network appearance is also very important, so on each
          social platform a company account will be created to represent our
          company. There is a strong focus on young entrepreneurs who are just
          starting their business. Therefore, we mainly advertise on Instagram,
          Twitter and TikTok. To connect with younger users, a little humor is
          brought into the campaigns and these funnier campaigns are mainly
          distributed on twitter and tiktok. Otherwise, the appearance on
          facebook or linkedin is kept very professional and traditional. For
          effective marketing, the tools offered by the respective platforms are
          used.
          <br />
          <h3>Offline marketing</h3>
          Last but not least, offline marketing is also carried out. Since we
          are in close contact with our partner printers, we can reduce some
          costs when it comes to printing. However, the advertising space will
          cost us quite a lot. Therefore, in the beginning this channel will be
          kept to a minimum and will only be promoted strongly when the company
          grows. For this we will mainly print billboards and posters which are
          located in larger cities and public places.
          <br />
          <h3>Plan</h3>
          At the beginning of the company, these marketing channels are promoted
          very strongly and a lot of money is invested in them. After we have
          built up our consumer base and have a certain following on the various
          media, the budget will be reduced a little. After that we will mainly
          keep an active presence on the different platforms and not only push
          the service. At this point, campaigns will be run for our individual
          products and not just to push our brand. We will also budget for a
          guerrilla marketing campaign to create a buzz and if possible have a
          viral marketing campaign.
          <br />
          <br />
          After we have acquired several customers through all these campaigns,
          we can use our accumulated data to promote evaluations for geolocation
          marketing. These campaigns are then highly customized for each site
          and market. This is intended to create repeat customers and build
          trust with them. We will also be able to target our campaigns more
          effectively and increase our marketing efficiency.
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
