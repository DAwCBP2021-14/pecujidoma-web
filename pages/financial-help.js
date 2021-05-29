import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Page({ allOrganizationsData: allOrganizationsData }) {
    return (
        <Layout page>
            <Head>
                <title>Finanční pomoc</title>
            </Head>
            <section>
                <h1>Finanční pomoc</h1>
                <p>@todo</p>
            </section>
        </Layout>
    )
}
