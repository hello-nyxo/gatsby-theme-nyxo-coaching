import React, { FC } from "react"
import { Helmet } from "react-helmet"
import { useI18next } from "gatsby-plugin-react-i18next"
import useSiteMetadata from "@hooks/useSiteMetaData"

interface HelmetProps {
  children?: React.ReactChildren
  title?: string | null
  description?: string | null
  pathName: string
  image?: string
  url?: string
  canonical?: string | null
  contentType?: string
  published?: string
  updated?: string
  category?: string
  tags?: string
  author?: string | null
  twitter?: string
  readingTime?: string
  staticImage?: boolean
}

const seoURL = (path?: string) => `https://www.nyxo.app${path}`

// Twitter requires https to prepend any paths.
const addHttps = (path: string | undefined) => {
  if (path?.substring(0, 5) === "https") return path
  return `https:${path}`
}

const seoDescription = `Nyxo is the best aid for improving your sleep quality. We combine leading sleep research techniques with your sleep tracker’s data to provide you with personalized and actionable coaching, to improve your sleep.`

const SEO: FC<HelmetProps> = ({
  children,
  title = "Nyxo Sleep Coaching",
  description = seoDescription,
  pathName,
  canonical,
  image,
  contentType,
  published = new Date().toISOString(),
  updated = new Date().toISOString(),
  category,
  tags,
  twitter,
  readingTime,
  author = "Nyxo",
  staticImage,
}) => {
  const {
    languages,
    language,
    originalPath,
    path,
    defaultLanguage,
    siteUrl = "https://nyxo.app",
  } = useI18next()
  const { company } = useSiteMetadata()

  const createUrlWithLang = (lng: string) => {
    const url = `${siteUrl}${
      lng === defaultLanguage ? "" : `/${lng}`
    }${originalPath}`
    return url.endsWith("/") ? url : `${url}/`
  }

  const canonicalUrl = canonical ? canonical : `${siteUrl}${path}`

  return (
    <Helmet htmlAttributes={{ lang: language }} title={`${title} – ${company}`}>
      {children}
      <link rel="canonical" href={canonicalUrl} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="msvalidate.01" content="E7E7B3852DA058B99618D34CD13518A2" />
      <meta name="description" content={description as string} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="Nyxo" />
      <meta name="twitter:title" content={`${title} – Nyxo`} />
      <meta name="twitter:description" content={description as string} />
      <meta name="twitter:creator" content={twitter || "Nyxo"} />
      <meta
        name="twitter:image"
        content={staticImage ? seoURL(image) : addHttps(image)}
      />
      {readingTime && (
        <>
          <meta name="twitter:label1" content="Reading time" />
          <meta name="twitter:data1" content={readingTime} />
        </>
      )}
      {languages.map((lng) => (
        <link
          rel="alternate"
          key={lng}
          href={createUrlWithLang(lng)}
          hrefLang={lng}
        />
      ))}
      {/* adding a fallback page for unmatched languages */}
      <link
        rel="alternate"
        href={createUrlWithLang(defaultLanguage)}
        hrefLang="x-default"
      />
      {published && <meta name="article:published_time" content={published} />}
      {updated && <meta name="article:modified_time" content={updated} />}
      {category && <meta name="article:section" content={category} />}
      {tags && <meta name="article:tag" content={tags} />}
      <meta property="og:title" content={`${title} – Nyxo`} />
      <meta
        property="og:type"
        content={contentType ? contentType : "website"}
      />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:author" content={author as string} />
      <meta
        property="og:image"
        content={staticImage ? seoURL(image) : addHttps(image)}
      />
      <meta property="og:description" content={description as string} />
      <meta property="og:site_name" content="Nyxo" />

      <meta itemProp="name" content={`${title} – Nyxo`} />
      <meta itemProp="description" content={description as string} />
      <meta
        itemProp="image"
        content={staticImage ? seoURL(image) : addHttps(image)}
      />

      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${seoURL(pathName)}"
        },
          "headline": "${title}",
          "image": "${addHttps(image)}",
          "datePublished": "${published}",
          "dateModified": "${updated}",
          "author": {
            "@type": "Organization",
            "name": "${author ? author : "Nyxo Editors"}"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Nyxo",
            "logo": {
              "@type": "ImageObject",
              "url": "${seoURL("/logo.png")}"
            }
          }, 
          "description": "${description
            ?.replace(/"/g, '\\"')
            .replace(/(\r\n|\n|\r)/gm, "")}"
        }
        `}
      </script>
    </Helmet>
  )
}

export default SEO
