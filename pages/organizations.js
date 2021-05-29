import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import { getSortedOrganizationsData } from '../lib/organizations'

export default function Page({ allOrganizationsData: allOrganizationsData }) {
    return (
        <Layout page>
            <Head>
                <title>Seznam organizací</title>
            </Head>
            <section>
                <h2>Seznam organizací</h2>
                <ul>
                    {allOrganizationsData.map(({ id, name }) => (
                        <li key={id}>
                            <Link href={`/organizations/${id}`}>
                                <a>{name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allOrganizationsData = getSortedOrganizationsData()
    return {
        props: {
            allOrganizationsData: allOrganizationsData
        }
    }
}