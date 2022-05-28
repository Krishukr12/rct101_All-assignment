import React from "react";
import styled from "styled-components";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
const P = styled.p`
  font-size: 25px;
  margin-left: 10px;
  padding-top:5px;
`;
const Div = styled.div`
  height: 56px;
  width: 186px;
  margin-top: 10px;
  border-radius:10px;
  &:hover{
      background-color:aqua;
      color:white;
      font-size:30px;
  }
`;
const Drawer1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="2px" fontSize="40px">
            Logo
          </DrawerHeader>
          <DrawerBody>
            <Div>
              <P>Home</P>
            </Div>
            <Div>
              <P>Trending</P>
            </Div>
            <Div>
              <P>Explore</P>
            </Div>
            <Div>
              <P>Favourite</P>
            </Div>
            <Div>
              <P>Settings</P>
            </Div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Drawer1;
