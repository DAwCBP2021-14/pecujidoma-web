import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Image from 'next/image';
import { getSortedOrganizationsData } from '../lib/organizations';
import { useRouter } from 'next/router';

export default function Page({ allOrganizationsData: allOrganizationsData, allOrganizationsPagesCount: allOrganizationsPagesCount }) {
  const router = useRouter();

  const sortChanged = async (event) => {
    event.preventDefault();
    let currentPage = router.query.page ?? 1;
    router.push({
      pathname: '/organizations',
      query: {
        page: currentPage,
        sort: event.target.value,
      },
    })
  };

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
            {router.query.town ? (
              <>
                <span>Máte aktivní filtrování z přehledu služeb.</span>
                {' '}
                <Link href={`/organizations/`}>
                  <a className="btn card-org__town">
                    <span className="bold">Zrušit</span>
                  </a>
                </Link>
              </>
            ) : (
              <label htmlFor="org">
                <select
                  id="org"
                  name="sort"
                  value={(router.query.sort ?? "name")}
                  onChange={sortChanged}
                >
                  <option disabled>Vyberte způsob řazení</option>
                  <option value="name">Řažení podle názvu organizace</option>
                  <option value="town">Řažení podle názvu města</option>
                </select>
              </label>
            )}
          </div>

          {allOrganizationsData.map(({ id, name, town, url, logo }) => (
            <div className="card-org" key={id}>
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

          {router.query.town ? (
            <>
            </>
          ) : (
            <nav className="pages" aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                {Array.from(Array(allOrganizationsPagesCount).keys()).map(pageIndex => (
                  <li className={(router.query.page ?? 1) == (pageIndex + 1) ? 'page-item active' : 'page-item'} key={pageIndex}>
                    <Link href={`/organizations?page=${pageIndex + 1}&sort=${router.query.sort}`}>
                      <a className="page-link">{pageIndex + 1}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let sortBy = context.query.sort
  let page = context.query.page
  let town = context.query.town
  let services = context.query.services
  const [allOrganizationsData, allOrganizationsPagesCount] = getSortedOrganizationsData(sortBy, page, town, services);
  return {
    props: {
      allOrganizationsData: allOrganizationsData,
      allOrganizationsPagesCount: allOrganizationsPagesCount,
    },
  };
}
