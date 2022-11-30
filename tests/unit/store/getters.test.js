import getters from "@/store/getters";

describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("finds unique organizations from list of jobs", () => {
      const state = {
        jobs: [
          {
            organization: "Google",
          },
          {
            organization: "Google",
          },
          {
            organization: "Amazon",
          },
        ],
      };
      const result = getters.UNIQUE_ORGANIZATIONS(state);

      expect(result).toEqual(new Set(["Google", "Amazon"]));
    });
  });

  describe("FILTERED_JOBS_BY_ORGANIZATIONS", () => {
    it("identifies jobs that are associated with the given organizations", () => {
      const state = {
        jobs: [
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Microsoft" },
        ],
        selectedOrganizations: ["Google", "Microsoft"],
      };
      const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);
      expect(filteredJobs).toEqual([
        { organization: "Google" },
        { organization: "Microsoft" },
      ]);
    });

    describe("when the user has not selected organizations", () => {
      it("returns all jobs", () => {
        const state = {
          jobs: [
            { organization: "Google" },
            { organization: "Amazon" },
            { organization: "Microsoft" },
          ],
          selectedOrganizations: [],
        };
        const filteredJobs =
          state.selectedOrganizations.length > 0
            ? getters.FILTERED_JOBS_BY_ORGANIZATIONS(state)
            : state.jobs;
        expect(filteredJobs).toEqual([
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Microsoft" },
        ]);
      });
    });
  });

  describe("UNIQUE_JOB_TYPES", () => {
    it("finds unique job types from list of jobs", () => {
      const state = {
        jobs: [
          {
            jobType: "Full-time",
          },
          {
            jobType: "Part-time",
          },
          {
            jobType: "Full-time",
          },
        ],
      };
      const result = getters.UNIQUE_JOB_TYPES(state);

      expect(result).toEqual(new Set(["Full-time", "Part-time"]));
    });
  });

  describe("FILTERED_JOBS_BY_JOB_TYPES", () => {
    it("identifies jobs that are associated with the given job types", () => {
      const state = {
        jobs: [
          {
            jobType: "Full-time",
          },
          {
            jobType: "Temporary",
          },
          {
            jobType: "Part-time",
          },
        ],
        selectedJobTypes: ["Full-time", "Part-time"],
      };
      const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state);
      expect(filteredJobs).toEqual([
        {
          jobType: "Full-time",
        },
        {
          jobType: "Part-time",
        },
      ]);
    });

    describe("when the user has not selected job types", () => {
      it("returns all jobs", () => {
        const state = {
          jobs: [
            {
              jobType: "Full-time",
            },
            {
              jobType: "Temporary",
            },
            {
              jobType: "Part-time",
            },
          ],
          selectedJobTypes: [],
        };
        const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state);

        expect(filteredJobs).toEqual([
          {
            jobType: "Full-time",
          },
          {
            jobType: "Temporary",
          },
          {
            jobType: "Part-time",
          },
        ]);
      });
    });
  });
});
