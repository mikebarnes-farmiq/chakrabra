import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

import { Box, useToast, Button, Input } from "@chakra-ui/react"

// m={2} refers to the value of `theme.space[2]`


const Home = () => (
  <Fragment>

  <Box m={2}>Tomato</Box>

  // You can also use custom values
  <Box maxW="960px" mx="auto" />

  // sets margin `8px` on all viewports and `12px` from the first breakpoint and up
  <Box m={[2, 3]} />
    <ToastExample/>

  </Fragment>
);

export default Home;

function ToastExample() {
  const toast = useToast()
  return (
      <>
      <Button

          data-testid={'toast'}
          variant={'with-shadow'}
          onClick={() =>
              toast({
                  title: 'Account created.',
                  description: "We've created your account for you.",
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
              })
          }
      >
          Show Toast
      </Button>

      <Input data-testid={'input'} placeholder='Basic usage' />
      </>


  )
}
