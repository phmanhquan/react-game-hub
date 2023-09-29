import {
  Box,
  Flex,
  GridItem,
  HStack,
  Heading,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const trailers = data?.results;

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} padding="10px">
      {data?.results?.map((trailer) => (
        <Box padding="10px">
          <Heading padding="10px" fontSize="xl">
            {trailer.name}
          </Heading>
          <video
            key={trailer.id}
            src={trailer.data[480]}
            poster={trailer.preview}
            controls
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameTrailer;
