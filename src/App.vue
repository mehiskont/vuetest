<template>

  <b-container class="mb-5" fluid="lg">
    <Navbar />
    <b-form @submit="onSubmit" v-if="show" class="container--m">
      <LoanForm />
      <PersonalForm />
      <p class="color--gray-dark mt-5 mb-4">Personal Data</p>
      <div class="grid--2 gap-col--l gap-row--m">
        <float-label label="Country">
          <select class="form-control" v-model="form.country">
            <option selected>Estonia</option>
            <option>Latvia</option>
            <option>Lithuania</option>
          </select>
        </float-label>
        <float-label label="County">
          <select class="form-control" v-model="form.county">
            <option>Vue</option>
            <option>React</option>
            <option>Angular</option>
            <option>Ember</option>
          </select>
        </float-label>

        <float-label label="City / Parish">
          <select class="form-control" v-model="form.city">
            <option>Vue</option>
            <option>React</option>
            <option>Angular</option>
            <option>Ember</option>
          </select>
        </float-label>
        <float-label label="Village / Township">
          <select class="form-control" v-model="form.village">
            <option>Vue</option>
            <option>React</option>
            <option>Angular</option>
            <option>Ember</option>
          </select>
        </float-label>
        <float-label>
          <input class="form-control" type="text" v-model="form.street" placeholder="Street">
        </float-label>
        <div class="grid--3">
          <float-label>
            <input class="form-control" type="text" v-model="form.house" placeholder="House">
          </float-label>
          <float-label>
            <input class="form-control" type="text" v-model="form.apartment" placeholder="Apartment">
          </float-label>
          <float-label>
            <input class="form-control" type="number" v-model="form.postalCode" placeholder="Postal Code">
          </float-label>
        </div>
      </div>

      <div class="h-line--gray mt-4 mb-4">Or</div>
      <div class="d-flex gap--m justify-content-center mb-4">
        <toggle-button color="#53CBA0" :width="34" :height="20" @change="toggleSomething"/>
        <p class="mb-0 text--s color--gray-dark">Add address manually</p>
      </div>
      <div class="h-line--gray mt-4 mb-4 gap--0"></div>

        <b-row>
          <b-col md="6" offset-md="3">
            <label class="grid--checkbox mt-4">
              <input type="checkbox" name="checkbox" v-model="form.isPep"/>
              Neither I nor my family member is PEP
              <b-button v-b-modal.modal-1>
                <svg  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.00006 17C13.4183 17 17.0001 13.4183 17.0001 9C17.0001 4.58172 13.4183 1 9.00006 1C4.58178 1 1.00006 4.58172 1.00006 9C1.00006 13.4183 4.58178 17 9.00006 17Z" stroke="#5948AD" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.00006 12.2V9" stroke="#5948AD" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.00006 5.80005H9.00806" stroke="#5948AD" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </b-button>

            </label>
            <label class="grid--checkbox mt-4">
              <input type="checkbox" name="checkbox-checked" v-model="form.isUbo" />
              I’m the ultimate beneficiary
              <b-button v-b-modal.modal-1>
                <svg  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.00006 17C13.4183 17 17.0001 13.4183 17.0001 9C17.0001 4.58172 13.4183 1 9.00006 1C4.58178 1 1.00006 4.58172 1.00006 9C1.00006 13.4183 4.58178 17 9.00006 17Z" stroke="#5948AD" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.00006 12.2V9" stroke="#5948AD" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.00006 5.80005H9.00806" stroke="#5948AD" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </b-button>
              <!-- modal template for tooltip -->
              <b-modal centered id="modal-1" title="BootstrapVue" ok-only ok-variant="secondary" ok-title="Cancel">
                <template #modal-header="{ close }">
                  <!-- Emulate built in modal header close button action -->
                  <b-button @click="close()">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L24 24" stroke="#9C9C9C" stroke-linecap="round"/>
                      <path d="M1 24L24 1" stroke="#9C9C9C" stroke-linecap="round"/>
                    </svg>
                  </b-button>

                </template>

                <template>
                  <h2>PEP</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </template>

              </b-modal>
              <!-- /modal template for tooltip -->
            </label>

            <b-button type="submit" variant="primary" class="btn-block mt-5">Continue</b-button>
          </b-col>
        </b-row>

      </b-form>
    <b-form/>
  </b-container>

</template>
<script>

import Navbar from './components/Navbar'
import LoanForm from "@/components/LoanForm";
import PersonalForm from "@/components/PersonalForm";

export default {
  components: {
    LoanForm,
    PersonalForm,
    Navbar
  },
  data() {
    return {
      form: {
        country: '',
        county: '',
        city: '',
        village: '',
        street: '',
        house: '',
        apartment: '',
        postalCode: '',
        isPep: false,
        isUbo: false,
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      console.log(JSON.stringify(this.form))
    },
    toggleSomething(e){
      e.preventDefault()
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>


</style>
