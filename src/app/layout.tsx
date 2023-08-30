import "./style.css"
import Head from "next/head"
import Script from "next/script"

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Jakub Podbielski',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en">
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link href="https://fonts.googleapis.com/css2?family=Kanit&family=Oswald:wght@300;400&display=swap" rel="stylesheet"/>
            <Script
            src=".scripts/menu.ts"
            />
            </Head>
            <body>
            {children}
            </body>
        </html>
    )
  }