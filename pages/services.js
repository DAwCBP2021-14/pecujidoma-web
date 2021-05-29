import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Page({ allOrganizationsData: allOrganizationsData }) {
  return (
    <Layout page>
      <Head>
        <title>Přehled služeb</title>
      </Head>
      <div class="index-container listOfServices__background--img">
        <div class="index-intro">
          <h2 class="headings index-heading">Přehled služeb</h2>
          <p class="intro__text listOfServices__intro--background">
            Veškeré služby, které vám mohou pomoci v péči o vaše blízké, najdete
            přehledně na této stránce. Popisy jednotlivých služeb vám pomohou s
            výběrem té správné pomocné ruky právě pro vás a vaše blízké.
          </p>
        </div>
        <div
          class="accordion accordion-flush container-fluid"
          id="accordionFlushExample"
        >
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Terénní odlehčovací služby
                <span class="pruhledne">1111111</span>
                <sub>
                  Pomocná ruka pro všechny pečující, kteří si potřebují vyřídit
                  nejnutnější záležitosti, odpočinout si od každodenní péče nebo
                  se věnovat svým koníčkům.
                </sub>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse text_flex"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <img
                src="img/obrazky/listOfServices1.jpg"
                alt="terenni_odlehcovaci_sluzby"
                class="listOfServices_img"
              />
              <div class="accordion-body">
                Pomocná ruka pro všechny pečující, kteří si potřebují vyřídit
                nejnutnější záležitosti, odpočinout si od každodenní péče nebo
                se věnovat svým koníčkům. Domů přijede pečovatelka, případně
                zdravotní sestra a postará se o vše potřebné. Vašim blízkým bude
                poskytnuta profesionální péče a vy získáte trochu volného času.
              </div>
              <a href="listOfOrg.html" class="btn btn-list_of_services">
                <span class="bold">
                  Organizace poskytující terénní odlehčovací služby
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Paliativní péče
            <span class="pruhledne">11111111111111111</span>
            <sub>
              Péče o nevyléčitelně nemocné pacienty v domácích podmínkách.
              Domácí hospicová péče nabízí pomoc 24 hodin denně 7 dní v týdnu.
            </sub>
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse text_flex"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#flush-headingTwo"
        >
          <img
            src="img/obrazky/listOfServices2.jpg"
            alt="paliativní péče"
            class="listOfServices_img"
          />
          <div class="accordion-body">
            Péče o nevyléčitelně nemocné pacienty v domácích podmínkách. Domácí
            hospicová péče nabízí pomoc zdravotních sester i pečovatelek 24
            hodin denně 7 dní v týdnu. Pečující mohou využít pomoc při dávkování
            léků, zdravotní péči, s hygienou nemocného nebo psychologickou a
            sociální podporu.
          </div>
          <a href="listOfOrg.html" class="btn btn-list_of_services">
            <span class="bold">Organizace poskytující paliativní péči</span>
          </a>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Osobní asistence<span class="pruhledne">111111111111111</span>
            <sub>
              Pomoc a podpora pro pacienty při chodu domácnosti, hygieně, se
              sociálními kontakty a dalšími potřebami.
            </sub>
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse text_flex"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#flush-headingThree"
        >
          <img
            src="img/obrazky/listOfServices3.jpg"
            alt="osobní asistence"
            class="listOfServices_img"
          />
          <div class="accordion-body">
            Pomoc a podpora pro pacienty při chodu domácnosti, hygieně, se
            sociálními kontakty a dalšími potřebami. Osobní asistence je placená
            sociální služba pomáhající osobám, které z důvodu zdravotního
            postižení, věku nebo nemoci potřebují pomoc v běžných činnostech
            života.
          </div>
          <a href="listOfOrg.html" class="btn btn-list_of_services">
            <span class="bold">Organizace poskytující osobní asistenci</span>
          </a>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-heading3">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse3"
            aria-expanded="false"
            aria-controls="flush-collapse3"
          >
            Psychologická péče<span class="pruhledne">1111111111111</span>
            <sub>
              Psychologická pomoc pro pacienty i jejich rodiny, zejména o
              pečující členy domácnosti je velmi potřebná.
            </sub>
          </button>
        </h2>
        <div
          id="flush-collapse3"
          class="accordion-collapse collapse text_flex"
          aria-labelledby="flush-heading3"
          data-bs-parent="#accordionFlushExample"
        >
          <img
            src="img/obrazky/listOfServices4.jpg"
            alt="psychologická péče"
            class="listOfServices_img"
          />
          <div class="accordion-body">
            Psychologická pomoc pro pacienty i jejich rodiny, zejména o pečující
            členy domácnosti, je velmi potřebná. Psycholog vyslechne, poradí a
            pomůže v těžké situaci. Nebojte se obrátit na odborníky, kteří vám
            mohou v náročném životním období ulehčit.
          </div>
          <a href="listOfOrg.html" class="btn btn-list_of_services">
            <span class="bold">Organizace poskytující psychologickou péči</span>
          </a>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-heading4">
          <button
            class="accordion-button collapsed"
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
          class="accordion-collapse collapse text_flex"
          aria-labelledby="flush-heading4"
          data-bs-parent="#flush-heading4"
        >
          <img
            src="img/obrazky/listOfServices5.jpg"
            alt="půjčovna kompenzačních pomůcek"
            class="listOfServices_img"
          />
          <div class="accordion-body">
            Velká pomoc pro pečující rodiny i jejich pacienty jsou různé
            kompenzační pomůcky, které pomohou ulehčit péči i každodenní běžné
            fungování rodiny. Půjčovny kompenzačních pomůcek nabízejí mnoho
            možností od polohovacích postelí, vozíků, chodítek, až po
            oxygenátory či lienární dávkovače léků.
          </div>
          <a href="listOfOrg.html" class="btn btn-list_of_services">
            <span class="bold">Půjčovny kompenzačních pomůcek</span>
          </a>
        </div>
      </div>
    </Layout>
  );
}
