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

      <div class="list-of-org">
        <h3 class="headings">
          Seznam organizací poskytující služby v&nbsp;oblasti péče
        </h3>
        <p class="intro__text text-margin">
          Organizace, které v Jihočeském kraji poskytují pomoc s domácí péčí,
          jsou v tomto seznamu seřazeny abecedně. Můžete je filtrovat také podle
          místa, kde potřebujete pomocnou ruku.
        </p>
        <div class="card-container">
          <div class="org-sorted">
            <label for="org">
              <select id="org">
                <option value="placeholder">Řažení podle:</option>
                <option value="company-name">názvu organizace</option>
                <option value="town-name">názvu města</option>
              </select>
            </label>
          </div>

          {allOrganizationsData.map(({ id, name, town, url, logo }) => (
            <div class="card-org">
              <div class="card-org-flex">
                <div class="card-org__item card-org__item--logo">
                  <div class="card-org__logo">
                    <Image
                      src={`/img/loga/${logo}`}
                      alt={name}
                      width={400}
                      height={300}
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div class="card-org__item card-org__item--name">
                  <h2 class="card-org__name">{name}</h2>
                  <p class="card-org__town">{town}</p>
                  <p class="card-org__www">
                    <a href={url} target="_blank">
                      {url}
                    </a>
                  </p>
                </div>
              </div>
              <Link href={`/organizations/${id}`}>
                <a class="btn card-org__town">
                  <span class="bold">Detail</span>
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
