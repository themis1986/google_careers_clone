import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays the company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Bobo Careers");
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
