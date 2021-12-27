// Analytics
export const ga = {
  thanks: key => window.ga('gtm1.send', 'pageview', { page: `/${key}/thanks` }),
  confirm: key =>
    window.ga('gtm1.send', 'pageview', { page: `/${key}/confirm` })
}
