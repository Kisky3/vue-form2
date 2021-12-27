let corpTypes = [
  { value: '', label: '選択してください' },
  { value: '法人', label: '法人' },
  { value: 'ギグワーカー', label: 'ギグワーカー' },
  { value: '個人事業主', label: '個人事業主' }
]

let mainCategories = [
  { value: '家電', label: '家電' },
  { value: '家具', label: '家具' },
  { value: 'カメラ', label: 'カメラ' },
  { value: 'パソコン', label: 'パソコン' },
  { value: 'その他', label: 'その他' }
]

let stockingNumbers = [
  { value: '', label: '選択してください' },
  { value: '1〜30点', label: '1〜30点' },
  { value: '31〜50点', label: '31〜50点' },
  { value: '50〜100点', label: '50〜100点' },
  { value: '101点以上', label: 'まだ仕入れを行っていない' }
]

export default {
  corpTypeId: {
    value: '',
    name: 'corp_type_id',
    displayName: '事業形態',
    validate: 'required',
    placeholder: '選択してください',
    options: corpTypes
  },
  corpName: {
    value: '',
    name: 'corp_name',
    displayName: '法人名',
    example: '例）株式会社Kouらの場合：Kou',
    validate: 'required|max:80'
  },
  trademark: {
    value: '',
    name: 'trademark',
    displayName: '店舗名',
    example: '例）kou shop',
    validate: 'max:50'
  },
  firstName: {
    value: '',
    name: 'first_name',
    displayName: '名',
    example: '例）太郎',
    validate: 'required|max:20'
  },
  lastName: {
    value: '',
    name: 'last_name',
    displayName: '姓',
    example: '例）山田',
    validate: 'required|max:20'
  },
  tel: {
    value: '',
    name: 'tel',
    displayName: '電話番号',
    validate: {
      required: true,
      regex: /^[0-9]{2,3}-[0-9]{4}-[0-9]{4}$/,
      max: 30
    },
    example: '例）03-6691-3220'
  },
  email: {
    value: '',
    name: 'email',
    displayName: 'メールアドレス',
    example: 'kou@126.com',
    validate: {
      required: true,
      regex: /^.{1,60}@.{1,60}$/,
      email: true,
      max: 121
    }
  },
  mainCategories: {
    value: [],
    name: 'main_categories',
    displayName: '主な取り扱い商材',
    validate: {
      required: true
    },
    options: mainCategories,
    example: '※ 複数選択可'
  },
  categoryOther: {
    value: '',
    name: 'category_other',
    displayName: '取り扱い商材 その他',
    validate: {
      required: true
    },
    example: ''
  },
  stockingNumber: {
    value: '',
    name: 'stocking_number',
    displayName: '仕入れ点数',
    validate: {
      required: true
    },
    options: stockingNumbers
  },
  currentIssue: {
    value: '',
    name: 'current_issue',
    displayName: '現在感じている課題を教えてください'
  },
  note: {
    value: '',
    name: 'note',
    displayName: '備考'
  }
}
