import { MetaTags } from '@redwoodjs/web'
// import { useState } from 'react';
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {

  // const [image, setImage] = useState("");

  // const uploadImage = async (e) => {
  //   e.preventDefault();
  //   console.log("upload");
  //   console.log(image);

  //   const formData = new FormData();
  //   formData.append("image", image);

  //   // await api.post("/upload-image", formData);
  // };

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <><ArticlesCell /></>
      {/* <h1>File Upload</h1>
      <form onSubmit={uploadImage}>
        <label>Image:</label>
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br></br>
        <button type="submit">Salvar</button>
      </form> */}
    </>
  )
}

export default HomePage
