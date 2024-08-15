export const formatImages = (images) => {
  return images.map((image) => ({
    name: image.name,
    uid: image._id,
    url: `http://localhost:5001/${image.url}`,
  }));
};
