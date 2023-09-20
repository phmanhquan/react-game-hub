import noImage from "../assets/no-image-placeholder.webp";

const gerCroppedImageUrl = (url: string, size: string = "600/400") => {
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/" + size + "/" + url.slice(index);
};

export default gerCroppedImageUrl;
