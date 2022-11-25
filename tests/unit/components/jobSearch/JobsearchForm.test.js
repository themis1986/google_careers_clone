import { mount } from "@vue/test-utils";
import JobSearhForm from "@/components/jobSearch/JobSearchForm.vue";

describe("JobSearchForm", () => {
  describe("when the user submits the form", () => {
    it("directs user to job results page with users search parameters", async () => {
      const push = jest.fn();
      const $router = { push };

      const wrapper = mount(JobSearhForm, {
        attachTo: document.body,
        global: {
          mocks: {
            $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const roleInput = wrapper.find("[data-test='role-input']");
      await roleInput.setValue("Vue Developer");
      const locationInput = wrapper.find("[data-test='location-input']");
      await locationInput.setValue("Dallas");

      const submitButton = wrapper.find("[data-test='form-submit-button']");
      await submitButton.trigger("click");

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "Vue Developer",
          location: "Dallas",
        },
      });
    });
  });
});
