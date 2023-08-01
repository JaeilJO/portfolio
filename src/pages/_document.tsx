import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark scroll-smooth">
      <Head>
        <title>Jaeil Studio</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <body className="dark:bg-neutral-900 bg-neutral-50 ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
