<template>
  <form class="loan-form" @submit="onSubmit" @reset="onReset" v-if="show">

    <button type="submit" class="btn-round--transparent">
      <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 14L1 7.5L7 1" stroke="#FDFDFD" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <div class="form-group d-flex align-items-center">
      <label for="amount">Amount</label>
      <input id="amount"
             class="form-control underlined"
             v-model="form.amount"
             type="number"
             required/>
    </div>
    <div class="form-group d-flex align-items-center">
      <label for="duration">Duration</label>
      <input id="duration"
             class="form-control underlined"
             v-model="form.duration"
             type="number"
             required/>
    </div>


    <div class="monthly-sum">
      12355667€
    </div>

    <button type="submit" class="btn-round--filled">
      <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.23877 1.71649L4.02981 4.50754L1.23877 7.29858" stroke="#2B0A57" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  name: 'LoanForm',
  data() {
    return {
      form: {
        amount: null,
        months: null,
      },
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.amount = null
      this.form.months = null
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.form-group  {
  margin-bottom: 0;
}
.form-group label {
  color: #DEDEDE;
}

.loan-form {
  background-color: #2B0A57;
  border-radius: 30px;
  min-height: 58px;
  display: grid;
  grid-template-columns: 34px 1fr 1fr 1fr 34px;
  gap: 16px;
  align-items: center;
  justify-content: center;
}



</style>
