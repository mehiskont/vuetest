<template>
  <div class="loan-form" :class="{ 'is-hidden' : !show }">

    <button v-if="!show" type="submit" class="btn-round--transparent" @click="toggleForm">
      <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 14L1 7.5L7 1" stroke="#FDFDFD" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <div v-if="show" class="form-group d-flex align-items-center">
      <div class="mr-2 text-right">
        <label>Amount</label>
        <p class="hint">{{amountMin}} - {{amountMax | formatNumber}} {{currency}}</p>
      </div>
      <label class="input-fill--currency" :data-text="currency">
        <input id="amount"
               :min="amountMin" :max="amountMax"
               class="form-control underlined"
               v-model="amount"
               type="number"
               required/>
      </label>
    </div>
    <div v-if="show" class="form-group d-flex align-items-center">
      <label for="duration" class="margin-top--2">Duration</label>
      <label class="input-fill--months" data-text="months">
        <input id="duration"
               min="1" step="1" max="36"
               class="form-control underlined"
               v-model="months"
               type="number"
               required/>
      </label>


    </div>
    <div v-if="show" class="loan-form__sum">
      <p class="text--s">
        Monthly Payment
      </p>
      <div class="text--m">
        {{( amount /  months).toFixed(2)}}<span class="suffix-currency">{{currency}}</span>
      </div>
    </div>

    <div v-else class="loan-form__intro">
      <h1>Your loan application</h1>
      <div class="d-flex align-items-baseline">
        <div class="text--m font-weight-light mr-1">{{amount}}<span class="suffix-currency">{{currency}}</span> / {{ months}}</div><p class="text--s font-weight-light">months</p>
      </div>
    </div>

    <button class="btn-round--filled" v-if="show" @click="toggleForm">
      <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.23877 1.71649L4.02981 4.50754L1.23877 7.29858" stroke="#2B0A57" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script>

export default {

  name: 'LoanForm',

  data() {
    return {
      amount: 2700,
      amountMin: 200,
      amountMax: 10000,
      months: 36,
      show: true,
      currency: '€'
    }
  },
  methods: {
    toggleForm() {
      this.show = !this.show;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@ColorGray:#DEDEDE;
h1 {
  color: @ColorGray;
  font-style: normal;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
}
.form-control {
  text-align: right;
}
.form-control.underlined {
  border-bottom: 0.5px solid @ColorGray;
  line-height: 24px;
  height: 30px;
  color: #FDFDFD;
  font-weight: 400;
  font-size: 20px;
  width: 90px;
  padding: 6px;
}
.form-group  {
  margin-bottom: 0;
}
.form-group label {
  color: @ColorGray;
  font-size: 14px;
  font-weight: 300;
}


.is-hidden {
  grid-template-columns: 34px 1fr;
}
.is-hidden:before {
  content: unset;
}


</style>
