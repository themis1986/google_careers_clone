<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-grey-1"
      >
        <a :href="url" class="flex items-center h-full text-xl">{{
          company
        }}</a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <a href="" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center ml-auto">
          <ProfileImage v-if="isLoggedIn" data-test="profile-image" />
          <ActionButton
            v-else
            data-test="login-button"
            text="Sign in"
            type="primary"
            @click="loginUser"
          />
        </div>
      </div>

      <sub-nav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
import ActionButton from "../shared/ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";
import SubNav from "./SubNav.vue";

export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage, SubNav },
  data() {
    return {
      company: "Bobo Careers",
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Bobo",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
};
</script>

<style lang="scss" scoped></style>
