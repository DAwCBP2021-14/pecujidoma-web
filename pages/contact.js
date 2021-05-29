import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Page({ allOrganizationsData: allOrganizationsData }) {
    return (
        <Layout page>
            <Head>
                <title>Kontakt</title>
            </Head>
            <section>
                <h1>Kontakt</h1>
                <p>@todo</p>
            </section>
        </Layout>
    )
}