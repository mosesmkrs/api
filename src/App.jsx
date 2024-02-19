import { useState, useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";

function App() {
  const [callToAction] = useState("Submit your photos of kittens!");
  const [gallery, setGallery] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  useEffect(() => {
    loadImages();
    // This comment is to avoid the ESLint warning
  }, []);

  const loadImages = async () => {
    // Simulate loading images; replace with your actual API call
    const images = [
      "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D/300/300",
      "https://www.shutterstock.com/image-photo/british-shorthair-kitten-silver-color-260nw-1510641710.jpg",
      "https://i.pinimg.com/736x/42/62/2f/42622f451b8f0ab8b31fcd460e835551.jpg",
      "https://i.pinimg.com/736x/18/4b/97/184b973611e8456b4d6e384795047123.jpg",
    ];

    setGallery(images);
  };

  const openImageViewer = (index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="App">
      <h1>Pick.le: Pick your pics 🥒</h1>
      <h2>{callToAction}</h2>
      {gallery.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          key={index}
          style={{ margin: "2px", height: "100px" }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={gallery}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
}

export default App;
