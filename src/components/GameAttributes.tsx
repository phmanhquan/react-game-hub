import React from "react";
import { Game } from "../entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import CriticScore from "./CriticScore";
interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
      spacing={6}
      padding="10px"
      as="dl"
    >
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text> {platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="MetaScore">
        <CriticScore score={game?.metacritic}></CriticScore>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres?.map((genre) => (
          <Text> {genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text> {publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
