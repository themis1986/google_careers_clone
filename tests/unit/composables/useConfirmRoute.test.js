import useConfirmRoute from "@/composables/useConfirmRoute";
import { useRoute } from "vue-router";
jest.mock("vue-router");

describe("useConfirmRoute", () => {
  it("determines that page route matches specified route", () => {
    useRoute.mockReturnValue({ name: "Home" });
    const routeName = "Home";
    const result = useConfirmRoute(routeName);

    expect(result.value).toBe(true);
  });
});
