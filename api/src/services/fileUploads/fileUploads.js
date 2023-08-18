import { db } from 'src/lib/db'

export const fileUploads = () => {
  return db.fileUpload.findMany()
}

export const fileUpload = ({ id }) => {
  return db.fileUpload.findUnique({
    where: { id },
  })
}

export const createFileUpload = ({ input }) => {
  return db.fileUpload.create({
    data: input,
  })
}

export const updateFileUpload = ({ id, input }) => {
  return db.fileUpload.update({
    data: input,
    where: { id },
  })
}

export const deleteFileUpload = ({ id }) => {
  return db.fileUpload.delete({
    where: { id },
  })
}
