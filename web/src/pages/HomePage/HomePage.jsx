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

      <>
        <ArticlesCell />
      </>
      <h1 className="text-red-600">Teste</h1>
    </>
  )
}

export default HomePage
