import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        {/* Preload critical assets */}
        <link rel="preload" href="/images/energiequelle-logo-new.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/images/zinzino-products-hero.png" as="image" />
        <link
          rel="preload"
          href="/_next/static/media/e9b8c9f6c7d23e1e.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Add preconnect for external domains */}
        <link rel="preconnect" href="https://www.zinzino.com" />

        {/* Add inline critical CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          :root{--background:0 0% 100%;--foreground:222.2 84% 4.9%;--primary:162 60% 42%;--primary-foreground:210 40% 98%}
          body{background-color:hsl(var(--background));color:hsl(var(--foreground));text-rendering:optimizeSpeed}
          .section-title{font-size:2.25rem;line-height:2.5rem;font-weight:700;margin-bottom:1.5rem;text-align:center}
          .cta-button{background-color:#38c0b2;color:white;font-weight:700;padding:0.75rem 1.5rem;border-radius:0.375rem;transition:all 0.3s ease}
          .section{padding:3rem 1rem;max-width:80rem;margin:0 auto;position:relative}
          @media (min-width:768px){.section{padding:3rem 2rem}}
        `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
