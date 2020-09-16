import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { LocaleContext } from "../layouts/layout"

function useTranslations() {
  // Grab the locale (passed through context) from the Context Provider
  const { locale } = React.useContext(LocaleContext);
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query);

  // Simplify the response from GraphQL
  const simplified = rawData.edges.map(item => {
    return {
      name: item.node.name,
      translations: item.node.translations
    };
  });

  // Only return translations for the current locale
  const { translations } = simplified.filter(lang => lang.name === locale)[0];

  return translations;
}

export default useTranslations;

const query = graphql`
  query useTranslations {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            aboutUs {
                title
                about
                additionalText
                main {
                  firstPart
                  firstSpan
                  secondPart
                  secondSpan
                  thirdPart
                }
                bestsData {
                  number
                  title
                  text
                }
            }
            links {
              home
                about
                whatWeDo
                contact
            }
            slider {
              buttons {
                next
                prev
                exploreMore
                action
              }
              items {
                introduction
                mainTitleStart
                mainTitleSpan
                mainTitleEnd
                slogan
                onClick
                marginTop
              }
            }
            whatWeDo {
              title
              mainSlogan {
                slogan
                markedSlogan
              }
              description
              things {
                title
                info
              }
            }
          }
        }
      }
    }
  }
`;