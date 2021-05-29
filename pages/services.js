import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Page({ allOrganizationsData: allOrganizationsData }) {
  return (
    <Layout page>
      <Head>
        <title>Přehled služeb</title>
      </Head>
      <div class="index-container listOfServices__background--img">
        <div class="index-intro">
          <h2 class="headings index-heading">Přehled služeb</h2>
          <p class="intro__text listOfServices__intro--background">
            Veškeré služby, které vám mohou pomoci v péči o vaše blízké, najdete
            přehledně na této stránce. Popisy jednotlivých služeb vám pomohou s
            výběrem té správné pomocné ruky právě pro vás a vaše blízké.
          </p>
        </div>
      </div>
    </Layout>
  );
}
