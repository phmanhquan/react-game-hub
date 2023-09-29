import { Box, Flex, HStack, Heading, List, ListItem } from "@chakra-ui/react";
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
    <List display="flex" flexDirection="column" alignItems="center">
      {data?.results?.map((trailer) => (
        <ListItem key={trailer.id} paddingY="5px">
          <Box maxWidth="700px">
            <Heading>{trailer.name}</Heading>
            <video
              key={trailer.id}
              src={trailer.data[480]}
              poster={trailer.preview}
              controls
            />
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default GameTrailer;
