import Head from "next/head";

const Meta = ({ title }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="rihal.jpg" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Rihal Assigment",
};

export default Meta;
