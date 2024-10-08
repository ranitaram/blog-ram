import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
     <Head >
     <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XFXNVQNPCG"></Script>
     <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16709632945"></Script>
<Script id="google-analytics">
  {
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
  
    // gtag('config', 'G-XFXNVQNPCG');

  }
</Script>

<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16709632945">
</script>

        <link rel="icon" href="/logo-shark.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
      </Head>
      <body>
      {/* <div id="cookie-banner">
    <p>Utilizamos cookies para mejorar tu experiencia. <a href="/politica-de-cookies">Más información</a></p>
    <button id="accept-cookies">Aceptar</button>
    <button id="reject-cookies">Rechazar</button>
    </div> */}
        <Main />
        <NextScript />

      </body>
    </Html>
  );
}
