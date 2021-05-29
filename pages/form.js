import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Page({ allOrganizationsData: allOrganizationsData }) {
    return (
        <Layout page>
            <Head>
                <title>Jakou službu potřebuji?</title>
            </Head>
            <section>
                <h1>Jakou službu potřebuji?</h1>
                <p>@todo</p>
            </section>
        </Layout>
    )
}
