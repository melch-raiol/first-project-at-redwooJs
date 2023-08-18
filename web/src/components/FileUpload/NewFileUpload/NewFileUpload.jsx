import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FileUploadForm from 'src/components/FileUpload/FileUploadForm'

const CREATE_FILE_UPLOAD_MUTATION = gql`
  mutation CreateFileUploadMutation($input: CreateFileUploadInput!) {
    createFileUpload(input: $input) {
      id
    }
  }
`

const NewFileUpload = () => {
  const [createFileUpload, { loading, error }] = useMutation(
    CREATE_FILE_UPLOAD_MUTATION,
    {
      onCompleted: () => {
        toast.success('FileUpload created')
        navigate(routes.fileUploads())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createFileUpload({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New FileUpload</h2>
      </header>
      <div className="rw-segment-main">
        <FileUploadForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFileUpload
