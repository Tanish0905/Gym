import { Box } from '@mui/material';

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <Box className="images">
        <Box>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </Box>
        <Box>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </Box>
        <Box>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Gallery;