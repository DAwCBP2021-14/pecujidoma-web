import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Page({ allOrganizationsData: allOrganizationsData }) {
  return (
    <Layout page>
      <Head>
        <title>O nás</title>
      </Head>
      <div className="aboutUs-container">
        <h3 className="headings">O nás</h3>
        <p>
          Vlastní zkušenost s péčí o blízké nás přivedla k vytvoření tohoto
          webu. Přináší rychlé a přehledné informace o tom, kdo a jak Vám může
          pomoci při péči o blízkého člověka, pokud se o něj staráte doma. Do
          projektu se mohou zapojit organizace, které poskytují služby pro
          pečující.
        </p>
        <div className="aboutUs-heros">
          <p>
            <span className="bold">Autorky webu: </span> Barbora Drachovská,
            Kristýna Říhová, Ivana Kubičková  
          </p>
        </div>
      </div>
    </Layout>
  );
}
