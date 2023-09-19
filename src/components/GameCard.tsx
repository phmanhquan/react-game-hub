import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image}></Image>
      <CardBody fontSize="2xl">{game.name}</CardBody>
    </Card>
  );
};

export default GameCard;
