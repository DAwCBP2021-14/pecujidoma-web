import Layout from '../../components/layout'
import { getAllOrganizationIds, getOrganizationData } from '../../lib/organizations'
import Head from 'next/head'

export default function Organization({ organizationData: organizationData }) {
    return (
        <Layout>
            <Head>
                <title>{organizationData.name}</title>
            </Head>
            <article>
                <h1>{organizationData.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: organizationData.contentHtml }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllOrganizationIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const organizationData = await getOrganizationData(params.id)
    return {
        props: {
            organizationData
        }
    }
}