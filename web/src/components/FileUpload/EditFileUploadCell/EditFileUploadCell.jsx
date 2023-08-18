import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FileUploadForm from 'src/components/FileUpload/FileUploadForm'

export const QUERY = gql`
  query EditFileUploadById($id: Int!) {
    fileUpload: fileUpload(id: $id) {
      id
      name
      size
      type
      createdAt
    }
  }
`
const UPDATE_FILE_UPLOAD_MUTATION = gql`
  mutation UpdateFileUploadMutation($id: Int!, $input: UpdateFileUploadInput!) {
    updateFileUpload(id: $id, input: $input) {
      id
      name
      size
      type
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ fileUpload }) => {
  const [updateFileUpload, { loading, error }] = useMutation(
    UPDATE_FILE_UPLOAD_MUTATION,
    {
      onCompleted: () => {
        toast.success('FileUpload updated')
        navigate(routes.fileUploads())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateFileUpload({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit FileUpload {fileUpload?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <FileUploadForm
          fileUpload={fileUpload}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
