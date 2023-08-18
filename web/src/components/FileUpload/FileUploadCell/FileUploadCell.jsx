import FileUpload from 'src/components/FileUpload/FileUpload'

export const QUERY = gql`
  query FindFileUploadById($id: Int!) {
    fileUpload: fileUpload(id: $id) {
      id
      name
      size
      type
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>FileUpload not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ fileUpload }) => {
  return <FileUpload fileUpload={fileUpload} />
}
