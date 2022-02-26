import * as React from "react";
import {
  Row,
  Label,
  Text,
  Title,
  DeviceCard,
  DeviceCardContent,
} from "./Device.styled";
import { DeviceContext } from "../../../../DeviceContext";

export default function Device({ device }) {
  const { selectedDevices, toggleSelectDevice } =
    React.useContext(DeviceContext);

  const currentSelectedDevice = selectedDevices.find(
    (selectedDevice) => selectedDevice.id === device.id
  );
  return (
    <DeviceCard
      data-testid="device-card"
      onClick={() => toggleSelectDevice(device, !currentSelectedDevice)}
      isSelected={!!currentSelectedDevice}
    >
      <DeviceCardContent>
        <Title>{device.deviceName}</Title>
        <Row>
          <Label>ID:</Label>
          <Text>{device.id}</Text>
        </Row>
        <Row>
          <Label>Status:</Label>
          <Text>{device.status}</Text>
        </Row>
        <Row>
          <Label>Application Count:</Label>
          <Text>{device.applicationCount}</Text>
        </Row>
        <Row>
          <Label>OS:</Label>
          <Text>{device.operatingSystem}</Text>
        </Row>
        <Row>
          <Label>IP Address:</Label>
          <Text>{device.ipAddress}</Text>
        </Row>
      </DeviceCardContent>
    </DeviceCard>
  );
}
