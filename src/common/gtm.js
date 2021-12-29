// GoogleTagManager
export const oikura_gtm = {
  thanks: key => {
    window.dataLayer.push({
      event: 'pageview',
      virtualUrl: `/${key}/thanks`
    })
  },
  confirm: key => {
    window.dataLayer.push({
      event: 'pageview',
      virtualUrl: `/${key}/confirm`
    })
  },
  tempRegister: (key, label) => {
    if ( window.dataLayer === undefined ) return;
    window.dataLayer.push({
      event: 'OikuraFormGeneralClickEvent',
      ClickEventCategory: `おいくらフォーム[${key}]`,
      ClickEventLabel: label,
      ClickEventValue: 1,
      ClickEventAction: '加盟店情報仮登録フォーム 送信ボタン',
    })
  },
  officialRegister: (key, label, step) => {
    if ( window.dataLayer === undefined ) return;
    window.dataLayer.push({
      event: 'OikuraFormGeneralClickEvent',
      ClickEventCategory: `おいくらフォーム[${key}]`,
      ClickEventLabel: label,
      ClickEventValue: 1,
      ClickEventAction: `加盟店情報本登録フォーム[${step}] 送信ボタン`,
    })
  },

}
