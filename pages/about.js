import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Page({ allOrganizationsData: allOrganizationsData }) {
    return (
        <Layout page>
            <Head>
                <title>O nás</title>
            </Head>
            <section>
                <h1>O nás</h1>
                <p>@todo</p>
            </section>
        </Layout>
    )
}
