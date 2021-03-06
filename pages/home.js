import Head from 'next/head';

//import components
import Section from '../templates/components/section';

// import Data
import { dataProject } from '../api-data/components/project';

export default function Index() {
  return (
    <main className="main">
      <div className="app">
        <Head>
          <title>{`${'Name Page'} - AMELA Technology`}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Section data={dataProject} />
      </div>
    </main>
  );
}
