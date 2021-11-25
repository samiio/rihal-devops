import Head from "next/head";

const Meta = ({ title }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="rihal.jpg" />
      <title>{title}</title>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"
      ></script>
      <script type="text/javascript" src="/js/model.js"></script>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Rihal Assigment",
};

export default Meta;
