import {
  UNIQUE_ORGANIZATIONS,
  FILTERED_JOBS_BY_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  FILTERED_JOBS_BY_JOB_TYPES,
} from "@/store/constants";

const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },
  [FILTERED_JOBS_BY_ORGANIZATIONS](state) {
    const filteredJobs =
      state.selectedOrganizations.length > 0
        ? state.jobs.filter((job) =>
            state.selectedOrganizations.includes(job.organization)
          )
        : state.jobs;
    return filteredJobs;
  },
  [UNIQUE_JOB_TYPES](state) {
    const uniqueJobTypes = new Set();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },
  [FILTERED_JOBS_BY_JOB_TYPES](state) {
    const filteredJobs =
      state.selectedJobTypes.length > 0
        ? state.jobs.filter((job) =>
            state.selectedJobTypes.includes(job.jobType)
          )
        : state.jobs;
    return filteredJobs;
  },
};
export default getters;
