export default {
  methods: {
    mapShopInfoErrors(errorObj) {
      if (!errorObj) return

      const errors = []
      Object.keys(errorObj).forEach(key => {
        errors.push({ field: key, msg: Object.values(errorObj[key])[0] })
      })
      return errors
    }
  }
}
