import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Page({ allOrganizationsData: allOrganizationsData }) {
  return (
    <Layout page>
      <Head>
        <title>Přehled služeb</title>
      </Head>
      <div className="index-container listOfServices__background--img">
        <div className="index-intro">
          <h2 className="headings index-heading">Přehled služeb</h2>
          <p className="intro__text bold">
            Veškeré služby, které vám mohou pomoci v péči o vaše blízké, najdete
            přehledně na této stránce. Popisy jednotlivých služeb vám pomohou s
            výběrem té správné pomocné ruky právě pro vás a vaše blízké.
          </p>
        </div>
        <div
          className="accordion accordion-flush container-fluid"
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Terénní odlehčovací služby
                <span className="pruhledne">1111111</span>
                <sub>
                  Pomocná ruka pro všechny pečující, kteří si potřebují vyřídit
                  nejnutnější záležitosti, odpočinout si od každodenní péče nebo
                  se věnovat svým koníčkům.
                </sub>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse text_flex"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <Image
                src={`/img/obrazky/listOfServices1.jpg`}
                alt={`terenni_odlehcovaci_sluzby`}
                width={350}
                height={350}
                objectFit="contain"
                className="listOfServices_img"
              />
              <div className="accordion-body">
                Pomocná ruka pro všechny pečující, kteří si potřebují vyřídit
                nejnutnější záležitosti, odpočinout si od každodenní péče nebo
                se věnovat svým koníčkům. Domů přijede pečovatelka, případně
                zdravotní sestra a postará se o vše potřebné. Vašim blízkým bude
                poskytnuta profesionální péče a vy získáte trochu volného času.
              </div>
              <Link href={`/organizations`}>
                <a className="btn btn-list_of_services">
                  <span className="bold">
                    Organizace poskytující terénní odlehčovací služby
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Paliativní péče
            <span className="pruhledne">11111111111111111</span>
            <sub>
              Péče o nevyléčitelně nemocné pacienty v domácích podmínkách.
              Domácí hospicová péče nabízí pomoc 24 hodin denně 7 dní v týdnu.
            </sub>
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse text_flex"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#flush-headingTwo"
        >
          <Image
            src={`/img/obrazky/listOfServices2.jpg`}
            alt={`paliativní péče`}
            width={350}
            height={350}
            objectFit="contain"
            className="listOfServices_img"
          />
          <div className="accordion-body">
            Péče o nevyléčitelně nemocné pacienty v domácích podmínkách. Domácí
            hospicová péče nabízí pomoc zdravotních sester i pečovatelek 24
            hodin denně 7 dní v týdnu. Pečující mohou využít pomoc při dávkování
            léků, zdravotní péči, s hygienou nemocného nebo psychologickou a
            sociální podporu.
          </div>
          <Link href={`/organizations`}>
            <a className="btn btn-list_of_services">
              <span className="bold">
                Organizace poskytující paliativní péči
              </span>
            </a>
          </Link>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Osobní asistence<span className="pruhledne">111111111111111</span>
            <sub>
              Pomoc a podpora pro pacienty při chodu domácnosti, hygieně, se
              sociálními kontakty a dalšími potřebami.
            </sub>
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse text_flex"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#flush-headingThree"
        >
          <Image
            src={`/img/obrazky/listOfServices3.jpg`}
            alt={`osobní asistence`}
            width={350}
            height={350}
            objectFit="contain"
            className="listOfServices_img"
          />
          <div className="accordion-body">
            Pomoc a podpora pro pacienty při chodu domácnosti, hygieně, se
            sociálními kontakty a dalšími potřebami. Osobní asistence je placená
            sociální služba pomáhající osobám, které z důvodu zdravotního
            postižení, věku nebo nemoci potřebují pomoc v běžných činnostech
            života.
          </div>
          <Link href={`/organizations`}>
            <a className="btn btn-list_of_services">
              <span className="bold">
                Organizace poskytující osobní asistenci
              </span>
            </a>
          </Link>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading3">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse3"
            aria-expanded="false"
            aria-controls="flush-collapse3"
          >
            Psychologická péče<span className="pruhledne">1111111111111</span>
            <sub>
              Psychologická pomoc pro pacienty i jejich rodiny, zejména o
              pečující členy domácnosti je velmi potřebná.
            </sub>
          </button>
        </h2>
        <div
          id="flush-collapse3"
          className="accordion-collapse collapse text_flex"
          aria-labelledby="flush-heading3"
          data-bs-parent="#accordionFlushExample"
        >
          <Image
            src={`/img/obrazky/listOfServices4.jpg`}
            alt={`psychologická péče`}
            width={350}
            height={350}
            objectFit="contain"
            className="listOfServices_img"
          />
          <div className="accordion-body">
            Psychologická pomoc pro pacienty i jejich rodiny, zejména o pečující
            členy domácnosti, je velmi potřebná. Psycholog vyslechne, poradí a
            pomůže v těžké situaci. Nebojte se obrátit na odborníky, kteří vám
            mohou v náročném životním období ulehčit.
          </div>
          <Link href={`/organizations`}>
            <a className="btn btn-list_of_services">
              <span className="bold">
                Organizace poskytující psychologickou péči
              </span>
            </a>
          </Link>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading4">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse4"
            aria-expanded="false"
            aria-controls="flush-collapse4"
          >
            Půjčovna kompenzačních pomůcek
            <sub>
              Velká pomoc pro pečující rodiny i jejich pacienty jsou různé
              kompenzační pomůcky, které pomohou ulehčit péči i každodenní běžné
              fungování rodiny.
            </sub>
          </button>
        </h2>
        <div
          id="flush-collapse4"
          className="accordion-collapse collapse text_flex"
          aria-labelledby="flush-heading4"
          data-bs-parent="#flush-heading4"
        >
          <Image
            src={`/img/obrazky/listOfServices5.jpg`}
            alt={`půjčovna kompenzačních pomůcek`}
            width={350}
            height={350}
            objectFit="contain"
            className="listOfServices_img"
          />
          <div className="accordion-body">
            Velká pomoc pro pečující rodiny i jejich pacienty jsou různé
            kompenzační pomůcky, které pomohou ulehčit péči i každodenní běžné
            fungování rodiny. Půjčovny kompenzačních pomůcek nabízejí mnoho
            možností od polohovacích postelí, vozíků, chodítek, až po
            oxygenátory či lienární dávkovače léků.
          </div>
          <Link href={`/organizations`}>
            <a className="btn btn-list_of_services">
              <span className="bold">Půjčovny kompenzačních pomůcek</span>
            </a>
          </Link>
        </div>
        <form method="GET" action="/organizations">
          <select
            class="form-select form__lisOfServices"
            aria-label="Default select example"
          >
            <option selected>Vyberte město, kde chcete pečovat</option>
            <option class="listOfServices__dropdown--content" value="1">
              Borovany
            </option>
            <option class="listOfServices__dropdown--content" value="2">
              České Budějovice
            </option>
            <option class="listOfServices__dropdown--content" value="3">
              Český Krumlov
            </option>
            <option class="listOfServices__dropdown--content" value="4">
              Dačice
            </option>
            <option class="listOfServices__dropdown--content" value="5">
              Dříteň
            </option>
            <option class="listOfServices__dropdown--content" value="6">
              Kaplice
            </option>
            <option class="listOfServices__dropdown--content" value="7">
              Písek
            </option>
            <option class="listOfServices__dropdown--content" value="8">
              Strakonice
            </option>
            <option class="listOfServices__dropdown--content" value="9">
              Tábor
            </option>
            <option class="listOfServices__dropdown--content" value="10">
              Trhové Sviny
            </option>
            <option class="listOfServices__dropdown--content" value="11">
              Třeboň
            </option>
            <option class="listOfServices__dropdown--content" value="12">
              Týn nad Vltavou
            </option>
            <option class="listOfServices__dropdown--content" value="13">
              Veselí nad Lužnicí
            </option>
            <option class="listOfServices__dropdown--content" value="14">
              Vimperk
            </option>
          </select>
          <h4>Vyberte služby, o které máte zájem:</h4>
          <div class="form-check form-check-inline form__lisOfServices">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" htmlFor="inlineCheckbox1">
              Terénní odlehčovací služby
            </label>
          </div>
          <div class="form-check form-check-inline form__lisOfServices">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label class="form-check-label" htmlFor="inlineCheckbox2">
              Paliativní péče
            </label>
          </div>
          <div class="form-check form-check-inline form__lisOfServices">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="option3"
            />
            <label class="form-check-label" htmlFor="inlineCheckbox3">
              Osobní asistence
            </label>
          </div>
          <div class="form-check form-check-inline form__lisOfServices">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox4"
              value="option4"
            />
            <label class="form-check-label" htmlFor="inlineCheckbox4">
              Psychologická péče
            </label>
          </div>
          <div class="form-check form-check-inline form__lisOfServices">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox5"
              value="option5"
            />
            <label class="form-check-label" htmlFor="inlineCheckbox5">
              Půjčovna kompenzačních pomůcek
            </label>
          </div>
        </form>
      </div>
    </Layout>
  );
}
