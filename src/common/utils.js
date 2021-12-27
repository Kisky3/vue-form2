import parser from 'ua-parser-js'
import { Path } from '@/config/index.ts'
export const getUrlParam = () => {
  return location.search
    .split(/[?&]/)
    .slice(1)
    .map(param => {
      return param.split(/=(.+)?/).slice(0, 2)
    })
    .reduce((obj, pairArray) => {
      obj[pairArray[0]] = pairArray[1]
      return obj
    }, {})
}

export const prefCode = [
  {
    value: '北海道',
    label: '北海道'
  },
  {
    value: '青森県',
    label: '青森県'
  },
  {
    value: '秋田県',
    label: '秋田県'
  },
  {
    value: '岩手県',
    label: '岩手県'
  },
  {
    value: '山形県',
    label: '山形県'
  },
  {
    value: '宮城県',
    label: '宮城県'
  },
  {
    value: '福島県',
    label: '福島県'
  },
  {
    value: '山梨県',
    label: '山梨県'
  },
  {
    value: '長野県',
    label: '長野県'
  },
  {
    value: '新潟県',
    label: '新潟県'
  },
  {
    value: '富山県',
    label: '富山県'
  },
  {
    value: '石川県',
    label: '石川県'
  },
  {
    value: '福井県',
    label: '福井県'
  },
  {
    value: '茨城県',
    label: '茨城県'
  },
  {
    value: '栃木県',
    label: '栃木県'
  },
  {
    value: '群馬県',
    label: '群馬県'
  },
  {
    value: '埼玉県',
    label: '埼玉県'
  },
  {
    value: '千葉県',
    label: '千葉県'
  },
  {
    value: '東京都',
    label: '東京都'
  },
  {
    value: '神奈川県',
    label: '神奈川県'
  },
  {
    value: '愛知県',
    label: '愛知県'
  },
  {
    value: '静岡県',
    label: '静岡県'
  },
  {
    value: '岐阜県',
    label: '岐阜県'
  },
  {
    value: '三重県',
    label: '三重県'
  },
  {
    value: '大阪府',
    label: '大阪府'
  },
  {
    value: '兵庫県',
    label: '兵庫県'
  },
  {
    value: '京都府',
    label: '京都府'
  },
  {
    value: '滋賀県',
    label: '滋賀県'
  },
  {
    value: '奈良県',
    label: '奈良県'
  },
  {
    value: '和歌山県',
    label: '和歌山県'
  },
  {
    value: '岡山県',
    label: '岡山県'
  },
  {
    value: '広島県',
    label: '広島県'
  },
  {
    value: '鳥取県',
    label: '鳥取県'
  },
  {
    value: '島根県',
    label: '島根県'
  },
  {
    value: '山口県',
    label: '山口県'
  },
  {
    value: '徳島県',
    label: '徳島県'
  },
  {
    value: '香川県',
    label: '香川県'
  },
  {
    value: '愛媛県',
    label: '愛媛県'
  },
  {
    value: '高知県',
    label: '高知県'
  },
  {
    value: '福岡県',
    label: '福岡県'
  },
  {
    value: '佐賀県',
    label: '佐賀県'
  },
  {
    value: '長崎県',
    label: '長崎県'
  },
  {
    value: '熊本県',
    label: '熊本県'
  },
  {
    value: '大分県',
    label: '大分県'
  },
  {
    value: '宮崎県',
    label: '宮崎県'
  },
  {
    value: '鹿児島県',
    label: '鹿児島県'
  },
  {
    value: '沖縄県',
    label: '沖縄県'
  }
]

export const titles = {
  _shop_register: '加盟店 仮登録フォーム｜おいくら'
}

export const messages = {
  error: {
    notification: '入力内容に誤りがございます。赤字箇所を修正して下さい。',
    address: '住所変換に失敗しました。\nもう一度お試しください。',
    post: '送信できませんでした。\nご確認のうえ、もう一度送信してください。',
    server:
      'サーバー エラーが発生しました。ブラウザの [再読み込み] を押してください。'
  }
}

/**
 * 現在時刻を取得する
 */
export const getTimestamp = () => {
  const weeks = ['日', '月', '火', '水', '木', '金', '土']
  const d = new Date()
  // 年月日・曜日・時分秒の取得
  let month = d.getMonth() + 1
  let day = d.getDate()
  let week = weeks[d.getDay()]
  let hour = d.getHours()
  let minute = d.getMinutes()
  let second = d.getSeconds()
  // 1桁を2桁に変換する
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  if (hour < 10) {
    hour = '0' + hour
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  if (second < 10) {
    second = '0' + second
  }
  return (
    d.getFullYear() +
    '年' +
    month +
    '月' +
    day +
    '日 （' +
    week +
    '） ' +
    hour +
    ':' +
    minute +
    ':' +
    second
  )
}

export const toHalfWidth = value => {
  return value.replace(/[\uff01-\uff5e]/g, function(ch) {
    return String.fromCharCode(ch.charCodeAt(0) - 0xfee0)
  })
}

// device情報を取得する
export const getDevice = () => {
  const p = new parser()
  return p.getDevice()
}

// Get formatted phome number
export const telFormat = tel => {
  const undash = tel.replace(/(\-|\ー|\ｰ|\－|\−)/g, '')
  switch (undash.length) {
    case 11:
      return undash.replace(/^(\d{3})(\d{4})(\d{4})$/g, '$1-$2-$3')
    case 10:
      return undash.replace(/^(\d{2})(\d{4})(\d{4})$/g, '$1-$2-$3')
    default:
      const matcher = undash.match(/\d{3}|\d+/g)
      return matcher ? matcher.join('-') : ''
  }
}

// 1040031 -> 104-0031
export const zipCodeFormat = zipCode => {
  if (zipCode) {
    const undash = zipCode.replace(/(\-|\ー|\ｰ|\－|\−)/g, '')
    return '〒' + undash.replace(/^(\d{3})(\d{4})$/g, '$1-$2')
  } else {
    return ''
  }
}

// 2001-02-03 -> 2001年 2月 3日
export const birthdayFormat = birthDay => {
  const arrSplitDay = birthDay.split('-')
  return `${parseInt(arrSplitDay[0])}年 ${parseInt(
    arrSplitDay[1]
  )}月 ${parseInt(arrSplitDay[2])}日`
}

/**
 * Define resource (url, image, ...)
 */
export const BaseUrl = Path
export const url = `${BaseUrl}`
export const logo = `${BaseUrl}common/img/logo.png`
// // // export const offerFormUrl = `${BaseUrl}offer-form/?rt=topmain&baitai=rps`
// // // export const offerFormIcon = `${BaseUrl}common/img/icon_satei.svg`
// // // export const guideUrl = `${BaseUrl}guide`
// // // export const guideIcon = `${BaseUrl}common/img/icon_guide.svg`
// // // export const mypageUrl = `${BaseUrl}mypage`
// // // export const mypageIcon = `${BaseUrl}common/img/icon_mypage.svg`
