import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import  {findByTestAttr}  from '../tests/testUtils'
import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Setup function for App component
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
    return shallow(<App {...props} />)
}

test('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-app')
    expect(component.length).toBe(1)
})