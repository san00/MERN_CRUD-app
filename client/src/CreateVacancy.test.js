import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { findByTestAttr } from '../tests/testUtils'
import Create from './components/Create'

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Setup function for Create component
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = 'null') => {
    return shallow(<Create {...props} />)
}

test('Component renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-CreateVacancy')
    expect(component.length).toBe(1)
})
