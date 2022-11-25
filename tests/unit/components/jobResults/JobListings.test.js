import { shallowMount, flushPromises } from "@vue/test-utils";
import axios from "axios";
import JobListings from "@/components/jobResults/JobListings.vue";
jest.mock("axios");

describe("JobListings", () => {
  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    const $route = {
      query: {
        page: "5",
      },
    };
    shallowMount(JobListings, {
      global: {
        mocks: {
          $route,
        },
      },
    });
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for a maximum of 10 jobs", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const $route = {
      query: {
        page: "1",
      },
    };
    const wrapper = shallowMount(JobListings, {
      global: {
        mocks: {
          $route,
        },
      },
    });
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });
});
