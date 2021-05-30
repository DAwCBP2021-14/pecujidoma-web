import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Image from 'next/image';
import { getSortedOrganizationsData } from '../lib/organizations';
import { useState } from 'react';

export default function Page({ allOrganizationsData: allOrganizationsData }) {
  const [typeOfFilter, setTypeOfFilter] = useState('');

  if (typeOfFilter === 'organization-name') {
    console.log('řazení dle názvu organizace');
  } else if (typeOfFilter === 'town-name') {
    console.log('řazení dle návvu mesta');
  }

  console.log(typeOfFilter);
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
              <select
                id="org"
                value={typeOfFilter}
                onChange={(event) => setTypeOfFilter(event.target.value)}
              >
                <option value="placeholder">Řažení podle:</option>
                <option value="organization-name">názvu organizace</option>
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

          <nav className="pages" aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
            </ul>
          </nav>
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
