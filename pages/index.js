import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

export default function Home({ allOrganizationsData: allOrganizationsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>
          <Link href={`/form`}>
            <a>Formulář</a>
          </Link>
          <Link href={`organizations`}>
            <a>Organizace</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}
