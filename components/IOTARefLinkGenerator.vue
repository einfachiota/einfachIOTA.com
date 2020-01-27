<template>
  <div>
    <el-form
      ref="ruleForm"
      v-if="!refLink"
      :model="ruleForm"
      :rules="rules"
      status-icon
      label-width="120px"
      class="ruleForm"
    >
      <el-form-item prop="address">
        <el-input
          v-model="ruleForm.address"
          type="text"
          autocomplete="off"
          placeholder="Input your IOTA address."
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="submitForm('ruleForm')"
          class="generate"
          type="primary"
          >Generate your link</el-button
        >
      </el-form-item>
    </el-form>
    <div v-else class="refLink-box">
      <h3>Here is your ref link, share it!</h3>
      <p @click="copyRefLink(refLink)" class="refLink">{{ refLink }}</p>
      <el-button @click="copyRefLink(refLink)" type="default">Copy</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const validateAddress = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the iota address'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      ruleForm: {
        address: ''
      },
      rules: {
        address: [{ validator: validateAddress, trigger: 'blur' }]
      },
      refLink: ''
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!!', formName)

          this.refLink =
            process.env.shopUrl + '?lang=en&refLink=' + this.ruleForm.address
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    async copyRefLink(text) {
      try {
        await this.$copyText(text)
        this.copySuccess()
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style lang="scss">
.ruleForm {
  text-align: center;
}
.el-form-item {
  color: red;
  flex-direction: column;
  text-align: center;
}
.generate {
  width: 80%;
  margin-top: 20px;
}

.el-form-item__content {
  margin-left: 0 !important;
}

.refLink-box {
  margin-top: 50px;
  background-color: var(--primary);
  padding: 20px;
  border-radius: 10px;
  color: var(--white);
  max-width: 800px;
  .refLink {
    font-size: 0.8em;
    word-break: break-all;
    padding: 20px 10px;
  }
}
</style>
