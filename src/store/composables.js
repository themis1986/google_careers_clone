import { useStore } from "vuex";
import { computed } from "vue";

import { FILTERED_JOBS } from "./constants";

export const useFilteredJobs = () => {
  const store = useStore();
  return computed(() => store.getters[FILTERED_JOBS]);
};
