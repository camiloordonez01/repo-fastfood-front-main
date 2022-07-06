import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {
    title: string
    pathname: string
    description?: string
    lang?: string
    meta?: []
    image?: string
    keywords?: []
    children?: React.ReactNode
}
const SEO: React.FC<Props> = ({
    description,
    lang,
    meta,
    image,
    title,
    pathname,
    keywords,
    children,
}: Props) => {
    const { siteMetadata } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                    }
                }
            }
        `
    ).site

    const metaDescription = description || siteMetadata.description

    const canonical =
        pathname !== null ? `${siteMetadata.siteUrl}${pathname}` : null

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            defaultTitle={siteMetadata.title}
            title={title}
            titleTemplate={`%s | ${siteMetadata.title}`}
            link={
                canonical
                    ? [
                          {
                              rel: 'canonical',
                              href: canonical,
                          },
                      ]
                    : []
            }
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:creator`,
                    content: siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ]
                .concat(
                    image
                        ? [
                              {
                                  property: 'og:image',
                                  content: image,
                              },
                              {
                                  name: 'twitter:card',
                                  content: 'summary_large_image',
                              },
                          ]
                        : [
                              {
                                  name: 'twitter:card',
                                  content: 'summary',
                              },
                          ]
                )
                .concat(
                    keywords.length > 0
                        ? {
                              name: `keywords`,
                              content: keywords.join(`, `),
                          }
                        : []
                )
                .concat(meta)}
        >
            {children}
        </Helmet>
    )
}

SEO.defaultProps = {
    lang: `es`,
    meta: [],
    description: ``,
    image: ``,
    keywords: [],
    children: null,
}

SEO.propTypes = {
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    pathname: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default SEO
