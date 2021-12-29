<template>
  <div id="page">
    <Loading :show="loading"></Loading>
    <HeaderLogo />
    <div id="temp-shop-register" class="clearfix">
      <main id="main" role="main">
        <template>
          <div class="heading mb10">
            <h2 class="title mb5">資料ダウンロード</h2>
            <p class="sub-title">下記フォームの入力をお願いします。</p>
          </div>
          <form @keypress.13.prevent ref="registerForm" method="POST">
            <!--事業形態-->
            <div class="form-group half-width half-width-pc">
              <div class="form-group-title mb10px">
                {{ formData.corpTypeId.displayName }}
                <span class="required">必須</span>
              </div>
              <div class="form-group-content">
                <BaseSelect
                  :selectObject="formData.corpTypeId"
                  :isShowLable="false"
                />
              </div>
            </div>
            <!--法人名 ※事業形態で「法人」を選択した場合に表示-->
            <div class="form-group" v-if="isCorporation">
              <div class="form-group-title mb10px">
                {{ formData.corpName.displayName }}
                <span class="required">必須</span>
              </div>
              <div class="form-group-content">
                <BaseInput
                  :isShowLable="false"
                  :inputObject="formData.corpName"
                  class="mb20px"
                />
              </div>
            </div>

            <!--店舗名-->
            <div class="form-group">
              <div class="form-group-title mb10px">
                {{ formData.trademark.displayName }}
              </div>
              <div class="form-group-content">
                <BaseInput
                  :isShowLable="false"
                  :inputObject="formData.trademark"
                  class="mb20px"
                />
              </div>
            </div>

            <!--氏名-->
            <div class="form-group">
              <div class="form-group-title mb10px">
                氏名<span class="required">必須</span>
              </div>
              <div class="form-group-content flex">
                <BaseInput
                  :inputObject="formData.lastName"
                  class="mb20px half-width"
                />
                <BaseInput
                  :inputObject="formData.firstName"
                  class="mb20px half-width"
                />
              </div>
            </div>

            <!--電話番号-->
            <div class="form-group">
              <div class="form-group-title mb10px">
                {{ formData.tel.displayName }}
                <span class="required">必須</span>
              </div>
              <div class="form-group-content">
                <BaseInput
                  :inputObject="formData.tel"
                  @on-blur="formatTelNumber()"
                  :isShowLable="false"
                />
              </div>
            </div>

            <!--メールアドレス-->
            <div class="form-group">
              <div class="form-group-title mb10px">
                {{ formData.email.displayName }}
                <span class="required">必須</span>
              </div>
              <div class="form-group-content">
                <BaseInput :inputObject="formData.email" :isShowLable="false" />
              </div>
            </div>

            <!--主な取り扱い商材-->
            <div class="form-group">
              <div class="form-group-title mb10px">
                {{ formData.mainCategories.displayName }}
                <span class="required">必須</span>
              </div>
              <div class="form-group-content">
                <BaseCheck
                  :checkObject="formData.mainCategories"
                  :isShowLable="false"
                />
              </div>
            </div>

            <!--主な取り扱い商材 その他-->
            <div class="form-group" v-if="isCategoryOther">
              <div class="form-group-title mb10px">
                {{ formData.categoryOther.displayName }}
                <span class="required">必須</span>
              </div>
              <div class="form-group-content">
                <div class="form-group-content">
                  <BaseInput
                    :inputObject="formData.categoryOther"
                    :isShowLable="false"
                  />
                </div>
              </div>
            </div>

            <!--月間の仕入れ点数-->
            <div class="form-group half-width half-width-pc">
              <div class="form-group-title mb10px">
                {{ formData.stockingNumber.displayName }}
                <span class="required">必須</span>
              </div>
              <div class="form-group-content">
                <BaseSelect
                  :selectObject="formData.stockingNumber"
                  :isShowLable="false"
                />
              </div>
            </div>

            <!--現在感じている課題を教えてください-->
            <div class="form-group">
              <div class="form-group-title mb10px">
                {{ formData.currentIssue.displayName }}
              </div>
              <div class="form-group-content">
                <BaseInput
                  :isShowLable="false"
                  :inputObject="formData.currentIssue"
                  class="mb20px"
                />
              </div>
            </div>

            <!--備考-->
            <div class="form-group">
              <div class="form-group-title mb10px">
                {{ formData.note.displayName }}
              </div>
              <div class="form-group-content">
                <BaseInput
                  :isShowLable="false"
                  :inputObject="formData.note"
                  class="mb20px"
                />
              </div>
            </div>

            <div class="form-group mb20px">
              <div class="form-group-content privacy-policy">
                <span>
                  個人情報は、当社の
                  <a :href="primacyUrl" target="_blank">プライバシーポリシー</a>
                  に則って取り扱います。
                </span>
              </div>
            </div>

            <div class="form-group submit">
              <button
                @click.enter.prevent="checkForm"
                :class="{ loading: loading }"
              >
                <span>送信する</span>
              </button>
            </div>
            <span class="form-group note">
              フォームの送信完了後に資料がダウンロードいただけます。
            </span>
          </form>
        </template>
      </main>
    </div>
    <FooterLogo />
  </div>
</template>
<script>
import {
  url,
  logo,
  guideIcon,
  telFormat,
  toHalfWidth
} from '@/common/utils'
import errors from '@/common/mixins/mapper/errors'
import HeaderLogo from '@/components/HeaderLogo'
import FooterLogo from '@/components/FooterLogo'
import Loading from '@/components/RegisterLoading.vue'
import BaseInput from '@/components/baseFields/Input.vue'
import BaseSelect from '@/components/baseFields/Select.vue'
import BaseCheck from '@/components/baseFields/Check.vue'
import { default as formFields } from '@/common/mixins/shopRegisterFields/tempInfomation'

export default {
  components: {
    HeaderLogo,
    FooterLogo,
    Loading,
    BaseInput,
    BaseSelect,
    BaseCheck
  },
  mixins: [errors],
  data() {
    return {
      formData: formFields,
      url: url,
      logo: logo,
      guideIcon: guideIcon,
      primacyUrl: 'https://www.kou.jp/privacy',
      loading: false
    }
  },
  provide() {
    return {
      $validator: this.$validator
    }
  },
  computed: {
    isCorporation() {
      return this.formData.corpTypeId.value === '法人'
    },
    isCategoryOther() {
      if (!this.formData.mainCategories.value.length) return false
      return this.formData.mainCategories.value.includes('その他')
    }
  },
  methods: {
    checkForm(e) {
      e.preventDefault()
      this.$validator.validateAll().then(result => {
        if (result) this.submitForm()
        else this.scrollToError()
      })
    },
    async submitForm() {
      alert('送信する')
      // console.log(this.mapParams())
      // this.loading = true
      //TODO:送信処理
      // await post(this.registerEndpoint, this.mapParams())
      //   .then(result => {
      //     this.showThanks()
      //   })
      //   .catch(error => {
      //     const errorList = this.mapShopInfoErrors(error.response.data.data)
      //     errorList.forEach(err => this.$validator.errors.add(err))
      //     this.scrollToError()
      //   })
      //   .then(() => {
      //     this.loading = false
      //   })
    },
    mapParams() {
      const params = {}
      Object.keys(this.formData).forEach(key => {
        if (
          this.formData[key].name &&
          this.formData[key].name !== 'mainCategories'
        ) {
          params[this.formData[key].name] = this.formData[key].value
        }
      })
      if (this.formData.main_categories) {
        params['mainCategories'] = this.formData.main_categories
      }
      return params
    },
    formatTelNumber() {
      const unformat = toHalfWidth(this.formData.tel.value)
      const formatted = telFormat(unformat)
      this.formData.tel.value = formatted
    },
    scrollToError() {
      setTimeout(() => {
        this.$scrollTo(
          'select.error, input[type="text"].error, input[type="checkbox"].error',
          {
            offset: -100
          }
        )
      }, 0)
    }
  }
}
</script>
<style scoped src="@/css/reset.css"></style>
<style scoped src="@/css/clearfix.css"></style>
<style scoped src="@/css/default.css"></style>
<style scoped src="@/css/style.css"></style>
<style scoped src="@/css/shopsupport_download.css"></style>
<style scoped lang="scss">
#temp-shop-register {
  display: flex;
  justify-content: center;
  #main {
    @media screen and (max-width: 768px) {
      width: calc(100% - 20px);
    }
    .heading {
      text-align: center;
      margin-bottom: 32px;
      @media screen and (max-width: 768px) {
        padding: 0;
      }
      .title {
        margin: 17px 0 20px 0 !important;
        font-size: 24px;
        font-weight: bold;
        color: #212121;
      }
      .sub-title {
        padding: 5px 0;
        font-size: 16px;
        color: white;
        background: #606060;
        margin-top: 32px;
        font-weight: 600;
      }
    }
    .form-group {
      .form-group-title {
        .required {
          vertical-align: text-bottom;
        }
      }
      .form-group-content.privacy-policy {
        text-align: center;
      }
    }
  }
}
</style>
