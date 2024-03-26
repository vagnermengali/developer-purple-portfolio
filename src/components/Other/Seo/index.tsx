import Head from "next/head";

import { SeoProps } from "@/interfaces/SeoProps/SeoProps";

const Seo = ({ title, description, routes }: SeoProps) => {
    return (
        <Head>
            <meta name="author" content="Vagner Mengali" />
            <meta name="keywords" content="Javascript" />
            <link rel="fluid-icon" href="/favicon.webp" title="Vagner Mengali" />
            <link rel="icon" type="svg+xml" href="/favicon.webp" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>
                {title === "Homepage"
                    ? "Vagner Mengali • Portfólio"
                    : `${title} • Vagner Mengali • Portfólio`}
            </title>
            <link rel="shortcut icon" href="/favicon.webp" type="x-icon" />
            <link rel="icon" href="/favicon32x32.webp" sizes="32x32" />
            <link rel="icon" href="/favicon48x48.webp" sizes="48x48" />
            <link rel="icon" href="/favicon96x96.webp" sizes="96x96" />
            <link rel="icon" href="/favicon144x144.webp" sizes="144x144" />
            <link rel="icon" href="/favicon512x512.webp" sizes="512x512" />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="Vagner Mengali" />
            <meta property="og:type" content="website" key="ogtype" />
            <meta property="og:url" content="https://vagnermengali.com/" />
            <meta property="og:image:alt" content={description} />
            <meta property="og:image" content="/portfolio.webp" />
            <meta name="twitter:title" content="Vagner Mengali" />
            <meta name="twitter:site" content="@vagnermengali" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="/portfolio.webp" />
            <meta name="twitter:description" content={description} />
            <meta property="al:ios:app_name" content="Vagner Mengali" />
            <meta property="al:ios:url" content="https://vagnermengali.com/" />
            <meta property="al:android:app_name" content="Vagner Mengali" />
            <meta property="al:android:url" content="https://vagnermengali.com/" />
            <link rel="canonical" href={`https://vagnermengali.com/${routes}`} />
            <meta name="theme-color" content="#101010" />
            <meta name="msapplication-TileColor" content="#101010" />
            <meta name="msapplication-navbutton-color" content="#101010" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#101010" />
            <link rel="manifest" href={"/manifest.webmanifest"} />
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index, follow" />
        </Head>
    );
};

export default Seo;
