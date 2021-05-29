import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Image from 'next/image';
import { getSortedOrganizationsData } from '../lib/organizations';

export default function Page({ allOrganizationsData: allOrganizationsData }) {
  return (
    <Layout page>
      <Head>
        <title>Seznam organizací</title>
      </Head>

      <div className="list-of-org">
        <h3 className="headings">
          Seznam organizací poskytující služby v&nbsp;oblasti péče
        </h3>
        <p className="intro__text text-margin">
          Organizace, které v Jihočeském kraji poskytují pomoc s domácí péčí,
          jsou v tomto seznamu seřazeny abecedně. Můžete je filtrovat také podle
          místa, kde potřebujete pomocnou ruku.
        </p>
        <div className="card-container">
          <div className="org-sorted">
            <label for="org">
              <select id="org">
                <option value="placeholder">Řažení podle:</option>
                <option value="company-name">názvu organizace</option>
                <option value="town-name">názvu města</option>
              </select>
            </label>
          </div>

          {allOrganizationsData.map(({ id, name, town, url, logo }) => (
            <div className="card-org">
              <div className="card-org-flex">
                <div className="card-org__item card-org__item--logo">
                  <div className="card-org__logo">
                    <Image
                      src={`/img/loga/${logo}`}
                      alt={name}
                      width={400}
                      height={300}
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className="card-org__item card-org__item--name">
                  <h2 className="card-org__name">{name}</h2>
                  <p className="card-org__town">{town}</p>
                  <p className="card-org__www">
                    <a href={url} target="_blank">
                      {url}
                    </a>
                  </p>
                </div>
              </div>
              <Link href={`/organizations/${id}`}>
                <a className="btn card-org__town">
                  <span className="bold">Detail</span>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allOrganizationsData = getSortedOrganizationsData();
  return {
    props: {
      allOrganizationsData: allOrganizationsData,
    },
  };
}
