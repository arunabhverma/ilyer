import ImageResizer from "react-native-image-resizer";

const imageUtils = async (imageUri) => {
  console.log('image url', imageUri);
  let val = await ImageResizer.createResizedImage(
    imageUri,
    500,
    500,
    "JPEG",
    100,
    0,
    undefined,
    false
  ).then((response) => `${response.uri}`);
  console.log('val', val)
  return `${val}`;
};

export { imageUtils };
