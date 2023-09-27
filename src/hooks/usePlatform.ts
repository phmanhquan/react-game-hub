import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data, error } = usePlatforms();
  return data?.results.find((platform) => platform.id === id);
};

export default usePlatform;
