import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Heading>Oops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page is not exist"
          : "Unexpected error"}
      </Text>
    </>
  );
};

export default ErrorPage;
