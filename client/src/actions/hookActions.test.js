import moxios from "moxios";

import { getDatabaseItems } from "./hookActions";

describe("moxios tests for CRUD actions", () => {
  let mockData;
  let request;

  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("Mocks getting database items", async () => {
    const jobTitle = "developer";

    moxios.wait(() => {
      request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: jobTitle,
      });
    });

    // Create mock for callback arg
    mockData = jest.fn();

    await getDatabaseItems(mockData);

    // See whether mock was run with correct argument
    expect(mockData).toHaveBeenCalledWith(jobTitle);
  });
});
