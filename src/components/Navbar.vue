<template>

  <b-navbar toggleable type="light" variant="light">
    <b-navbar-brand href="#">
      <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.9519 36.5163C37.9539 36.949 37.8281 37.3725 37.5905 37.7333C37.3529 38.094 37.0141 38.3757 36.6171 38.5427C36.2201 38.7097 35.7828 38.7544 35.3605 38.6712C34.9382 38.5881 34.5499 38.3807 34.2449 38.0755C33.9399 37.7702 33.7319 37.3808 33.6472 36.9566C33.5625 36.5324 33.605 36.0924 33.7692 35.6925C33.9334 35.2926 34.212 34.9506 34.5697 34.71C34.9273 34.4694 35.348 34.341 35.7783 34.341C36.0631 34.3401 36.3453 34.3957 36.6088 34.5046C36.8722 34.6135 37.1118 34.7735 37.3137 34.9755C37.5155 35.1776 37.6758 35.4177 37.7853 35.682C37.8948 35.9464 37.9514 36.2299 37.9519 36.5163ZM37.406 31.715H34.0361V22.1429C34.0347 21.6016 33.9273 21.0658 33.7199 20.5662C33.5126 20.0666 33.2093 19.6129 32.8275 19.2312C32.4457 18.8495 31.9928 18.5472 31.4947 18.3416C30.9967 18.136 30.4632 18.0311 29.9248 18.0328C29.1888 18.0201 28.4582 18.1596 27.7781 18.4428V15.3933C28.7153 15.0006 29.7217 14.8024 30.7369 14.8105C32.4998 14.8087 34.1915 15.5095 35.4415 16.7594C36.6915 18.0092 37.3979 19.7063 37.406 21.4788V31.715ZM25.18 31.715H21.8101V15.2002H25.18V31.715ZM19.2085 31.6168C18.2739 32.005 17.271 32.1998 16.2598 32.1894C14.4952 32.1939 12.8009 31.4943 11.5487 30.2442C10.2965 28.994 9.58871 27.2954 9.58069 25.5211V15.2849H12.9506V24.857C12.9519 25.3984 13.0593 25.9342 13.2667 26.4338C13.4741 26.9334 13.7773 27.387 14.1591 27.7687C14.541 28.1504 14.9938 28.4527 15.4919 28.6583C15.99 28.8639 16.5235 28.9689 17.0619 28.9671C17.7975 28.9796 18.5279 28.8413 19.2085 28.5605V31.6168ZM13.392 10.5039C13.394 10.9366 13.2683 11.3601 13.0307 11.7209C12.793 12.0816 12.4543 12.3633 12.0573 12.5303C11.6603 12.6972 11.2229 12.742 10.8006 12.6588C10.3783 12.5756 9.99011 12.3683 9.68511 12.063C9.38012 11.7578 9.1721 11.3684 9.08741 10.9442C9.00272 10.52 9.04517 10.08 9.20938 9.68009C9.37359 9.28015 9.65218 8.93822 10.0098 8.69762C10.3675 8.45703 10.7881 8.32859 11.2185 8.32858C11.5033 8.32769 11.7855 8.38328 12.049 8.49216C12.3124 8.60104 12.5519 8.76108 12.7538 8.96312C12.9557 9.16516 13.116 9.40524 13.2255 9.66963C13.335 9.93401 13.3916 10.2175 13.392 10.5039ZM47.0001 23.5152C47.0001 10.5209 36.4792 0 23.4984 0C10.5175 0 6.10352e-05 10.5209 6.10352e-05 23.4983C0.00801604 26.5928 0.622154 29.6555 1.8074 32.5114C2.99265 35.3674 4.7258 37.9605 6.90786 40.1429C9.08993 42.3253 11.6782 44.0541 14.5248 45.2306C17.3714 46.4072 20.4207 47.0084 23.4984 46.9999C36.4792 46.9999 47.0001 36.4791 47.0001 23.4983" fill="#2B0A57"/>
      </svg>
    </b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <svg v-if="expanded" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L24 24" stroke="#9C9C9C" stroke-linecap="round"/>
          <path d="M1 24L24 1" stroke="#9C9C9C" stroke-linecap="round"/>
        </svg>
        <svg v-else width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_11)">
            <rect width="22" height="11" fill="white"/>
            <g clip-path="url(#clip1_1_11)">
              <path d="M1 1H15.375H20.75" stroke="#413C3C" stroke-linecap="round"/>
              <path d="M9.5 10.25H20.75" stroke="#413C3C" stroke-linecap="round"/>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_11">
              <rect width="22" height="11" fill="white"/>
            </clipPath>
            <clipPath id="clip1_1_11">
              <rect width="22" height="11" fill="white"/>
            </clipPath>
          </defs>
        </svg>

      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Link 1</b-nav-item>
        <b-nav-item href="#">Link 2</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar.navbar-light.bg-light {
  background-color: transparent !important;
  margin-bottom: 50px;
  margin-top: 16px;
  padding-left: 0;
  padding-right: 0;
}
.navbar-light .navbar-toggler {
  border: unset;
  padding-right: 0;
  text-align: right;
}
.navbar {
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.navbar-brand {
  margin-right: 0;
  grid-column: 2/3;
  text-align: center;
}

</style>
