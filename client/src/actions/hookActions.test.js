import moxios from 'moxios'

import { mockAxiosCall } from './hookActions'


describe('Test database CRUD actions with moxios', () => {
    beforeEach(() => {
        moxios.install()
    })
    afterEach(() => {
        moxios.uninstall()
    })


    test('Calls database & gets response from axios', async () => {
        const jobInfo = 'developer'

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: jobInfo,
            })
        })

        // Create mock for callback arg
        const mockData = jest.fn()

        await mockAxiosCall(mockData)

        // See whether mock was run with correct argument
        expect(mockData).toHaveBeenCalledWith(jobInfo)
    })

    test('deletes database item', async () => {
        const deletedMessage = 'item deleted'

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: deletedMessage,
            })
        })

        // Create mock for callback arg
        const mockData = jest.fn()

        await mockAxiosCall(mockData)

        // See whether mock was run with correct argument
        expect(mockData).toHaveBeenCalledWith(deletedMessage)
    })

})