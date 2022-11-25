<template>
  <div class="">
    <JobFiltersSidebar />
    <JobListings />
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/jobResults/jobFiltersSidebar/JobFiltersSidebar.vue";
import JobListings from "../components/jobResults/JobListings.vue";

export default {
  name: "JobResultsView",
  components: {
    JobFiltersSidebar,
    JobListings,
  },
};
</script>
