import { Global } from '@emotion/core'
import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Anchor } from '../components/Anchor'
import { ButtonContainer } from '../components/Button/ButtonContainer'
import { GlowingAnchorButton } from '../components/Button/GlowingAnchorButton'
import { GlowingButton } from '../components/Button/GlowingButton'
import { CenteredText } from '../components/CenteredText'
import { CenteredTitle } from '../components/CenteredTitle'
import { Favicons } from '../components/Favicons'
import { Feature } from '../components/Feature'
import { Features } from '../components/Features'
import { FocusStyles } from '../components/FocusStyles'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Section } from '../components/Section'
import { globalStyles } from '../styles/global'

const url = 'https://changecast.now.sh'
const title = 'ChangeCast'
const description =
  'Create beautiful, performant, accessible changelogs from your Github releases.'

const IndexTemplate = ({
  data: {
    site: {
      siteMetadata: {
        exampleSiteUrls: [reactBeautifulDndUrl, materialUiUrl, workboxUrl],
      },
    },
    logo: {
      childFavicon: { faviconElements },
      childOgImage: {
        ogImageWithText: { src: ogImgSrc },
      },
    },
  },
}) => (
  <>
    <FocusStyles />
    <Global styles={globalStyles} />
    <Favicons favicons={faviconElements} />
    <Helmet
      title={title}
      meta={[
        { property: 'og:title', content: title },
        { name: 'description', content: description },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: 'og:image',
          content: `${url}${ogImgSrc}`,
        },
        {
          name: 'twitter:url',
          content: url,
        },
        { name: 'twitter:title', content: title },
        {
          name: 'twitter:image',
          content: `${url}${ogImgSrc}`,
        },
      ]}
    />
    {(process.env.NODE_ENV === 'development' ||
      typeof window === 'undefined') && (
      <Helmet>
        <script
          src={`${reactBeautifulDndUrl}/widget.js`}
          data-selectors="[data-react-beautiful-dnd-changecast]"
          defer
        />
        <script
          src={`${materialUiUrl}/widget.js`}
          data-selectors="[data-material-ui-changecast]"
          defer
        />
        <script
          src={`${workboxUrl}/widget.js`}
          data-selectors="[data-workbox-changecast]"
          defer
        />
        <script
          src="https://changecast-log.netlify.com/widget.js"
          data-selectors="[data-changecast-changecast]"
          defer
        />
      </Helmet>
    )}
    <Header />
    <Section background="black">
      <CenteredTitle color="white">How does it work?</CenteredTitle>
      <CenteredText color="white">
        ChangeCast generates a static site and widget from your Github releases.
        Adding these to your project homepage will keep users informed of any
        updates you make. Click on the examples below to see ChangeCast in
        action!
      </CenteredText>
      <ButtonContainer>
        <GlowingButton
          data-react-beautiful-dnd-changecast
          css={{
            marginRight: 30,
          }}
        >
          React Beautiful DnD
        </GlowingButton>
        <GlowingButton
          data-material-ui-changecast
          css={{
            marginRight: 30,
          }}
        >
          Material UI
        </GlowingButton>
        <GlowingButton data-workbox-changecast>Workbox</GlowingButton>
      </ButtonContainer>
    </Section>
    <Section background="white">
      <CenteredTitle color="black">What are the features?</CenteredTitle>
      <CenteredText color="black">
        ChangeCast comes with every feature you need to easily communicate
        project updates. If you think something is missing, please{' '}
        <Anchor href="https://github.com/palmerhq/changecast/issues/new">
          open an issue
        </Anchor>
        !
      </CenteredText>
      <Features>
        <Feature title="Built-in Widget">
          Our widget notifies users of new updates and allows them to view
          release notes without leaving your site.
        </Feature>
        <Feature title="Themeable">
          Our site and widget are built with your Github avatar's color scheme
          and can be overridden with any color you choose.
        </Feature>
        <Feature title="Shareable">
          Each release comes with it's own shareable link and open graph image
          that looks great when shared on social media.
        </Feature>
        <Feature title="Searchable">
          Users can search the text of each release to find the feature or
          update they are looking for.
        </Feature>
        <Feature title="Accessible">
          We take accessibility seriously and will make sure that your project
          updates can reach everyone.
        </Feature>
        <Feature title="Blazing Fast">
          Built on top of{' '}
          <Anchor href="https://www.gatsbyjs.org">Gatsby</Anchor>, your site and
          widget are tuned for a fast experience out of the box.
        </Feature>
      </Features>
    </Section>
    <Section background="black">
      <CenteredTitle color="white">How do I get started?</CenteredTitle>
      <CenteredText color="white">
        ChangeCast can be built and deployed on{' '}
        <Anchor
          href="https://www.netlify.com"
          css={{ color: 'white', ':visited': { color: 'white' } }}
        >
          Netlify
        </Anchor>
        ,{' '}
        <Anchor
          href="https://zeit.co/now"
          css={{ color: 'white', ':visited': { color: 'white' } }}
        >
          Now
        </Anchor>
        , or any other static hosting service. And, using a Github webhook or
        action, you can configure ChangeCast to redeploy whenver you cut a new
        release.
      </CenteredText>
      <div css={{ textAlign: 'center', color: 'white', marginBottom: 30 }}>
        <GlowingAnchorButton href="https://github.com/palmerhq/changecast#getting-started">
          Get Started
        </GlowingAnchorButton>
      </div>
    </Section>
    <Footer />
  </>
)

export const query = graphql`
  query IndexQuery($ogText: String!) {
    site {
      siteMetadata {
        exampleSiteUrls
      }
    }
    logo: file(relativePath: { eq: "ChangeCastTransparent.png" }) {
      childFavicon {
        faviconElements {
          props
          type
        }
      }
      childOgImage {
        ogImageWithText(text: $ogText) {
          src
        }
      }
    }
  }
`

export default IndexTemplate
