import {
  fileUploads,
  fileUpload,
  createFileUpload,
  updateFileUpload,
  deleteFileUpload,
} from './fileUploads'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('fileUploads', () => {
  scenario('returns all fileUploads', async (scenario) => {
    const result = await fileUploads()

    expect(result.length).toEqual(Object.keys(scenario.fileUpload).length)
  })

  scenario('returns a single fileUpload', async (scenario) => {
    const result = await fileUpload({ id: scenario.fileUpload.one.id })

    expect(result).toEqual(scenario.fileUpload.one)
  })

  scenario('creates a fileUpload', async () => {
    const result = await createFileUpload({
      input: { name: 'String', size: 8979020, type: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.size).toEqual(8979020)
    expect(result.type).toEqual('String')
  })

  scenario('updates a fileUpload', async (scenario) => {
    const original = await fileUpload({
      id: scenario.fileUpload.one.id,
    })
    const result = await updateFileUpload({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a fileUpload', async (scenario) => {
    const original = await deleteFileUpload({
      id: scenario.fileUpload.one.id,
    })
    const result = await fileUpload({ id: original.id })

    expect(result).toEqual(null)
  })
})
