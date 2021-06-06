import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Page({ allOrganizationsData: allOrganizationsData }) {
    return (
        <Layout page>
            <Head>
                <title>404</title>
            </Head>
            <div className="aboutUs-container">
                <h3 className="headings">404</h3>
                <p>Stránka nenalezena</p>
            </div>
        </Layout>
    );
}
