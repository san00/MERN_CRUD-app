import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findByTestAttr } from "../tests/testUtils";
import VacancyList from "./components/VacancyList";
import hookActions from "./actions/hookActions";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockGetItems = jest.fn();

/**
 * Setup function for ReadAndDelete component
 * @returns {ReactWrapper}
 */

const setup = () => {
  mockGetItems.mockClear();
  hookActions.getDatabaseItems = mockGetItems;

  // use mount as useEffect is not called on `shallow`
  // https://github.com/enzymejs/enzyme/issues/2086
  return mount(<VacancyList />);
};

test("Component renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-ReadAndDelete");
  expect(component.length).toBe(1);
});

describe("Database call", () => {
  test("setVacancy gets all db items & updates changes", () => {
    setup();
    expect(mockGetItems).toHaveBeenCalled();
  });
});
