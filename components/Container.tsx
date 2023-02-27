import Head from 'next/head';
import Nav from 'components/Nav';

const Container = (props) => {
  return (
    <>
      <Head>
        <title>Geun-logs</title>
      </Head>
      <header>
        <Nav />
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Container;
