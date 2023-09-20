import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import useData from "../hooks/useData";
import usePlatform, { Platform } from "../hooks/usePlatform";

const PlatformSelected = () => {
  const { data, isLoading, error } = usePlatform();
  if (error) return null;
  // if (isLoading) return <Spinner></Spinner>;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelected;
