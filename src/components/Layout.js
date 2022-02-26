import * as React from "react";
import { Container, Header } from "./Layout.styled";
import DevicesManager from "./devicesManager/DevicesManager";

export default class Layout extends React.Component {
  render() {
    return (
      <Container>
        <Header>Endpoints Manager</Header>
        <DevicesManager />
      </Container>
    );
  }
}
