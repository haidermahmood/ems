import * as React from "react";
import { Container, Content, Header } from "./Layout.styled";
import DevicesManager from "./devicesManager/DevicesManager";

export default class Layout extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Header>Endpoints Manager</Header>
          <DevicesManager />
        </Content>
      </Container>
    );
  }
}
