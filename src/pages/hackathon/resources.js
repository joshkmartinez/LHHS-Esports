import React, { Fragment } from 'react'
import { Heading, Flex, Column, Box, Container, Link, Text } from "rebass";
import Helmet from "react-helmet";
export default () => (
  <Fragment>
    <Helmet title="Page not found" />
    <Container maxWidth={48} px={2} py={6} align="center">
      <Heading.h1 color="primary" f={[6, 7]} mt={[null, 4]}>
        Hackathon Resources
      </Heading.h1>
      <Text f={4} mt={2} mb={4} color="muted">
        ...
      </Text>
      
    </Container>

  </Fragment>
)