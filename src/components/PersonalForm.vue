<template>
  <div class="personal-form mt-4" :class="{ 'is-edit' : !edit }">
    <div class="personal-form__name text-capitalize" v-if="edit">
      anna rodriiger sanas dasdasd
    </div>
    <div class="personal-form__hint ml-2" v-else>
      Change your contact Info
      <p class="mb-0 color--danger text--xxs" v-if="phoneErrors.length">{{ phoneErrors[0] }}</p>
      <p class="mb-0 color--danger text--xxs" v-if="emailErrors.length">{{ emailErrors[0] }}</p>
    </div>
    <div class="personal-form__id" v-if="edit">
      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 12.25V11C11 10.337 10.7366 9.70107 10.2678 9.23223C9.79893 8.76339 9.16304 8.5 8.5 8.5H3.5C2.83696 8.5 2.20107 8.76339 1.73223 9.23223C1.26339 9.70107 1 10.337 1 11V12.25" stroke="#9C9C9C" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6C7.38071 6 8.5 4.88071 8.5 3.5C8.5 2.11929 7.38071 1 6 1C4.61929 1 3.5 2.11929 3.5 3.5C3.5 4.88071 4.61929 6 6 6Z" stroke="#9C9C9C" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <input type="number"
             class="form-control underlined"
             v-autowidth="{maxWidth: '160px', minWidth: '70px', comfortZone: 0}"
             v-model="personalId"/>
    </div>
    <div class="personal-form__phone" :class="{ 'invalid' : phoneErrors.length }">
      <svg class="icon-phone--disabled" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9997 9.23561V10.8916C12.0003 11.0453 11.9687 11.1974 11.907 11.3383C11.8453 11.4792 11.7548 11.6056 11.6413 11.7095C11.5278 11.8134 11.3938 11.8926 11.2479 11.9418C11.102 11.9911 10.9474 12.0094 10.794 11.9955C9.09204 11.811 7.45724 11.2306 6.0209 10.3009C4.68457 9.45346 3.55159 8.32273 2.70244 6.98905C1.76772 5.54904 1.18603 3.90954 1.00449 2.20337C0.990668 2.05073 1.00884 1.89689 1.05786 1.75164C1.10688 1.6064 1.18566 1.47293 1.28919 1.35974C1.39273 1.24654 1.51874 1.1561 1.65922 1.09418C1.79969 1.03225 1.95155 1.0002 2.10511 1.00005H3.76434C4.03276 0.997417 4.29297 1.09228 4.49649 1.26695C4.7 1.44163 4.83293 1.6842 4.8705 1.94946C4.94053 2.4794 5.07041 2.99973 5.25765 3.50053C5.33206 3.6981 5.34817 3.91281 5.30406 4.11923C5.25995 4.32566 5.15747 4.51513 5.00877 4.66521L4.30636 5.36622C5.09369 6.74813 6.24017 7.89234 7.62482 8.67811L8.32723 7.9771C8.4776 7.82869 8.66746 7.72641 8.87429 7.68239C9.08112 7.63837 9.29626 7.65444 9.49422 7.7287C9.99601 7.91558 10.5174 8.0452 11.0484 8.11509C11.317 8.15292 11.5624 8.28798 11.7378 8.49458C11.9132 8.70118 12.0064 8.96491 11.9997 9.23561Z" stroke="#9C9C9C" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <input type="tel"
             @blur="blurEventHandlerPhone($event)"
             class="form-control underlined"
             v-autowidth="{maxWidth: '150px', minWidth: '100px', comfortZone: 0}"
          v-model="personalPhone"/>
    </div>
    <div class="personal-form__email" :class="{ 'invalid' : emailErrors.length }">
      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.2 1.19995H11.8C12.46 1.19995 13 1.73995 13 2.39995V9.59995C13 10.26 12.46 10.8 11.8 10.8H2.2C1.54 10.8 1 10.26 1 9.59995V2.39995C1 1.73995 1.54 1.19995 2.2 1.19995Z" stroke="#9C9C9C" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13 2.3998L7 6.5998L1 2.3998" stroke="#9C9C9C" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <input type="email"
             @blur="blurEventHandlerEmail($event)"
             class="form-control underlined"
             v-autowidth="{maxWidth: '240px', minWidth: '70px', comfortZone: 0}"
             v-model="personalEmail"/>
    </div>
    <button class="btn-round--filled" :class="{ 'disabled' : !edit && phoneErrors.length || !edit && emailErrors.length}" @click="toggleForm">
      <svg  v-if="edit" class="icon-edit--purple" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0779 1.50136C10.2368 1.34241 10.4255 1.21632 10.6332 1.1303C10.8409 1.04428 11.0635 1 11.2883 1C11.513 1 11.7356 1.04428 11.9433 1.1303C12.151 1.21632 12.3397 1.34241 12.4986 1.50136C12.6576 1.66031 12.7837 1.84901 12.8697 2.05669C12.9557 2.26436 13 2.48695 13 2.71174C13 2.93653 12.9557 3.15912 12.8697 3.3668C12.7837 3.57447 12.6576 3.76317 12.4986 3.92212L4.32855 12.0922L1 13L1.90779 9.67145L10.0779 1.50136Z" fill="#2B0A57" stroke="#2B0A57" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg v-else class="icon-caret--purple" width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.23877 1.71649L4.02981 4.50754L1.23877 7.29858" stroke="#F8F5FC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script>

export default {

  name: 'PersonalForm',

  data() {
    return {
      name: 'Anna Maria Tamm Rodriguez Espinosa',
      personalId: 39204275555,
      personalPhone: 37253443224,
      personalEmail: 'asd@email.xom',
      edit: true,
      currency: '€',
      emailErrors:[],
      phoneErrors:[]
    }
  },
  methods: {
    blurEventHandlerEmail: function (e) {
      this.emailErrors = [];
      const email = e.target.value;
      if (!email) {
        this.emailErrors.push('Email required');
      } else if (!this.validEmail(email)) {
        this.emailErrors.push('Incorrect Email');
      }
    },
    blurEventHandlerPhone: function (e) {
      this.phoneErrors = [];
      const phone = e.target.value;
      if (!phone) {
        this.phoneErrors.push('Phone number required');
      } else if (!this.validNumber(phone)) {
        this.phoneErrors.push('Incorrect phone number');
      }
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validNumber: function (number) {
      if (number.length !== 11) {
        return false
      }else return true
    },
    toggleForm() {
      this. edit = !this. edit;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@ColorGray:#DEDEDE;
@mobileViewWidth: 800px;
@mobileViewWidthMin: 801px;

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
  text-align: center;
}
.form-control.underlined {
  border-bottom: unset;
  line-height: 24px;
  height: 20px;
  font-weight: 400;
  font-size: 14px;
  padding: 0;
  color: #413C3C;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.form-group  {
  margin-bottom: 0;
}
.form-group label {
  color: @ColorGray;
  font-size: 14px;
  font-weight: 300;
}

.personal-form__hint {
  color: #413C3C;
}
.personal-form__id,
.personal-form__name,
.personal-form__phone,
.personal-form__email {
  pointer-events: none;
}
.personal-form.is-edit {
  display: grid;
  grid-template-columns: 220px max-content 1fr max-content;
  gap: 24px;
  padding: 8px 12px;
  border: 0 solid #F8F5FC;
  background-color: #F8F5FC;
  @media (max-width: @mobileViewWidth) {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .form-control {
   border-bottom: 1px solid #9C9C9C;
   &:hover {
     border-bottom: 1px solid #2B0A57;
   }
  }
  .personal-form__id,
  .personal-form__name,
  .personal-form__phone,
  .personal-form__email {
    background-color: #F8F5FC;
    pointer-events: unset;
    &:hover {
      svg {
        path{
          stroke: #2B0A57;
        }
      }
    }
  }
   .btn-round--filled {
     background-color: #2B0A57;
     position: relative;
     top: unset;
     right:unset;
     justify-self: end;

     @media (max-width: @mobileViewWidth) {
       width: 100%;
       border-radius: 30px;
     }
    &:hover {
      background-color: #FDFDFD;
      svg.icon-caret--purple {
        path {
         stroke:  #2B0A57;
        }
      }
    }
   }
}
@media (min-width: @mobileViewWidthMin) {
  .personal-form__email {
    margin-right: auto;
  }
}

.btn-round--filled {
  box-shadow: unset;

  &:hover {
    background-color: #2B0A57;
    box-shadow: unset;
    svg.icon-edit--purple {
      path{
        stroke : #FDFDFD;
        fill: #FDFDFD;
      }
    }
  }

}




</style>
