import useScreenshots from "../hooks/useScreenshots";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl: 3 }} spacing={2}>
      {data?.results.map((file) => (
        <Box maxWidth="400px">
          <Image key={file.id} src={file.image}></Image>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
