function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style global jsx>
        {`
          html,
          body {
            font-family: "Inter", sans-serif;
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            min-height: 100vh;
          }

          * {
            box-sizing: border-box;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          p,
          h1,
          h2,
          h3,
          h4,
          h5 {
            padding: 0;
            margin: 0;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          button {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
