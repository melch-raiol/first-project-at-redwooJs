import { render } from '@redwoodjs/testing/web'

import FileUploadLayout from './FileUploadLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FileUploadLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FileUploadLayout />)
    }).not.toThrow()
  })
})
