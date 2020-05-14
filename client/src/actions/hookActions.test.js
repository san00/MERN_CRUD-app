import moxios from 'moxios'

import { mockAxiosCall } from './hookActions'

describe('Test database CRUD actions with moxios', () => {
    let mockData
    let request 

    beforeEach(() => {
        moxios.install()
    })
    afterEach(() => {
        moxios.uninstall()
    })

    test('Get database items', async () => {
        const jobInfo = 'developer'

        moxios.wait(() => {
            request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: jobInfo,
            })
        })

        // Create mock for callback arg
        mockData = jest.fn()

        await mockAxiosCall(mockData)

        // See whether mock was run with correct argument
        expect(mockData).toHaveBeenCalledWith(jobInfo)
    })

    test('Deletes database item', async () => {
        const deletedMessage = 'item deleted'

        moxios.wait(() => {
            request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: deletedMessage,
            })
        })

        mockData = jest.fn()
        await mockAxiosCall(mockData)
        expect(mockData).toHaveBeenCalledWith(deletedMessage)
    })

    test('Updates database item', async () => {
        const editedItem = 'item updated'

        moxios.wait(() => {
            request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: editedItem,
            })
        })

        mockData = jest.fn()
        await mockAxiosCall(mockData)
        expect(mockData).toHaveBeenCalledWith(editedItem)
    })

    test('Creates database item', async () => {
        const CreateItem = 'item created'

        moxios.wait(() => {
            request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: CreateItem,
            })
        })

        mockData = jest.fn()
        await mockAxiosCall(mockData)
        expect(mockData).toHaveBeenCalledWith(CreateItem)
    })

})