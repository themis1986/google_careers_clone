import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/navigation/MainNav.vue";

const createConfig = () => ({
  global: {
    stubs: {
      "router-link": RouterLinkStub,
    },
  },
});

describe("MainNav", () => {
  it("displays the company name", () => {
    const wrapper = shallowMount(MainNav, createConfig());

    expect(wrapper.text()).toMatch("Bobo Careers");
  });
  it("displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav, createConfig());
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = shallowMount(MainNav, createConfig());
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user loggs in", () => {
    it("displays user profile image", async () => {
      const wrapper = shallowMount(MainNav, createConfig());
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displays subnavigation manu with additional information", async () => {
      const wrapper = shallowMount(MainNav, createConfig());
      let subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});

// describe("MainNav", async () => {
//   it("displays the company name", () => {
//     const wrapper = mount(MainNav);
//     await wrapper.setData({
//     company: "Super Corp"
//     })
//     expect(wrapper.text()).toMatch("Super Corp");
//   });
// });
