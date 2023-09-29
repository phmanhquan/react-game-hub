import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Text, Heading, Spinner, SimpleGrid, GridItem } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshot from "../components/GameScreenshot";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading padding="10px">{game?.name}</Heading>
          <ExpandableText>{game?.description_raw}</ExpandableText>
          <GameAttributes game={game}></GameAttributes>
        </GridItem>
        <GridItem>
          <GameScreenshot gameId={game.id}></GameScreenshot>
        </GridItem>
      </SimpleGrid>
      <GameTrailer gameId={game.id}></GameTrailer>
    </>
  );
};

export default GameDetailPage;
