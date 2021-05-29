import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Page({ allOrganizationsData: allOrganizationsData }) {
  const contactForm = async (event) => {
    event.preventDefault();

    alert('@todo');
  };
  return (
    <Layout page>
      <Head>
        <title>Kontakt</title>
      </Head>
      <div class="aboutUs-container">
        <h3 className="headings">
          Zajišťujete péči doma a chcete svůj kontakt vložit na tento web?
        </h3>
      </div>
      <form class="container" onSubmit={contactForm}>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Název organizace
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Název organizace"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon11">
            Adresa organizace
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Adresa organizace"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Vaše webová stránka"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text" id="basic-addon4">
            www
          </span>
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Váš e-mail"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text" id="basic-addon44">
            @
          </span>
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Kontaktní telefon"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text" id="basic-addon444">
            <i class="fas fa-phone"></i>
          </span>
        </div>

        <div class="input-group">
          <span class="input-group-text">Vaše zpráva</span>
          <textarea
            class="form-control"
            aria-label="With textarea"
            placeholder="Zde je prostor pro Váš vzkaz"
          ></textarea>
        </div>

        <button class="btn btn-aboutUs" type="submit">
          Odeslat
        </button>
      </form>
    </Layout>
  );
}
