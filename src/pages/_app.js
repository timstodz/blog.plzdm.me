import '@/css/tailwind.css'
import Head from 'next/head'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <div className="antialiased">
      <Head>
        <script
          async
          defer
          data-website-id="c55f386c-a013-41bd-953d-85613e20f618"
          src="https://data.drew.tech/umami.js"
        ></script>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <meta
          property="og:image"
          content={`https://plzdm.me/api/thumbnail?path=/blog${router.asPath}`}
        />
        <meta
          property="twitter:image"
          content={`https://plzdm.me/api/thumbnail?path=/blog${router.asPath}`}
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feed.xml" />
        <link rel="alternate" type="application/atom+xml" title="Atom 1.0" href="/atom.xml" />
        <link rel="alternate" type="application/json" title="JSON Feed" href="/feed.json" />
      </Head>
      <SectionContainer>
        <Header />
      </SectionContainer>
      <SectionContainer>
        <main>
          <Component {...pageProps} />
        </main>
      </SectionContainer>
    </div>
  )
}
