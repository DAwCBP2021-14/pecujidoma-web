import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";

const APP_NAME = 'Pečuji doma'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
    const router = useRouter();
    return (
        <div>
            <Head>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta property="og:image" content="/img/LogoSkia.png" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>

            <header>
                <nav class="navbar navbar-expand-lg navbar-light fix-top">
                    <div class="container-fluid">
                        <Link href="/" class="navbar-brand">
                            <a>
                                <Image
                                    priority
                                    src="/img/LogoSkia.png"
                                    width={150}
                                    height={75}
                                    alt="logo"
                                />
                            </a>
                        </Link>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link href="/organizations">
                                        <a class={router.pathname === "/organizations" ? "nav-link active" : "nav-link"}>Seznam organizací</a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link href="/services">
                                        <a class={router.pathname === "/services" ? "nav-link active" : "nav-link"}>Přehled služeb</a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link href="/financial-help">
                                        <a class={router.pathname === "/financial-help" ? "nav-link active" : "nav-link"}>Finanční pomoc</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>
                    <Link href="/about">
                        <a class={router.pathname === "/about" ? "active" : ""}>O nás</a>
                    </Link>
                    {' | '}
                    <Link href="/contact">
                        <a class={router.pathname === "/contact" ? "active" : ""}>Kontakt</a>
                    </Link>
                </p>
                <p>&copy; 2021, Vytvořeno při Digitální akademii WEB</p>
            </footer>
        </div >
    )
}