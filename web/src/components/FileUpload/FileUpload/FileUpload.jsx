import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_FILE_UPLOAD_MUTATION = gql`
  mutation DeleteFileUploadMutation($id: Int!) {
    deleteFileUpload(id: $id) {
      id
    }
  }
`

const FileUpload = ({ fileUpload }) => {
  const [deleteFileUpload] = useMutation(DELETE_FILE_UPLOAD_MUTATION, {
    onCompleted: () => {
      toast.success('FileUpload deleted')
      navigate(routes.fileUploads())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete fileUpload ' + id + '?')) {
      deleteFileUpload({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            FileUpload {fileUpload.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{fileUpload.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{fileUpload.name}</td>
            </tr>
            <tr>
              <th>Size</th>
              <td>{fileUpload.size}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{fileUpload.type}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(fileUpload.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFileUpload({ id: fileUpload.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(fileUpload.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default FileUpload
