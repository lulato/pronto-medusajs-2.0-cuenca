import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import Head from "next/head"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <Head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </Head>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
