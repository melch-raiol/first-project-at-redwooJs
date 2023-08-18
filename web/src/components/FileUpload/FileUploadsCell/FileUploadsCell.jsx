import { Link, routes } from '@redwoodjs/router'

import FileUploads from 'src/components/FileUpload/FileUploads'

export const QUERY = gql`
  query FindFileUploads {
    fileUploads {
      id
      name
      size
      type
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No fileUploads yet. '}
      <Link to={routes.newFileUpload()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ fileUploads }) => {
  return <FileUploads fileUploads={fileUploads} />
}
