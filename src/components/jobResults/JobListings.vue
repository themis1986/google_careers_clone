<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <JobListing v-for="job in jobs" :key="job.id" :job="job" />
    </ol>
  </main>
</template>

<script>
import axios from "axios";
import JobListing from "@/components/jobResults/JobListing.vue";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      const response = await axios.get("http://localhost:3000/jobs");
      const fetchedJobs = response.data;
      this.jobs = fetchedJobs;
      console.log(this.jobs);
    },
  },
};
</script>

<style lang="scss" scoped></style>
