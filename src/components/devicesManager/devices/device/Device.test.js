import { fireEvent, render, screen } from "@testing-library/react";
import Device from "./Device";
import { DeviceContext } from "../../../../DeviceContext";

const selectedDevices = [];
const toggleSelectDevice = jest.fn();
const deviceProp = {
  id: 1,
  deviceName: "0W315W0W.random.net",
  status: "Online",
  applicationCount: 40,
  operatingSystem: "Fedora",
  ipAddress: "98.165.62.169",
};

const renderComponent = (device) => {
  render(
    <DeviceContext.Provider
      value={{
        selectedDevices,
        toggleSelectDevice,
      }}
    >
      <Device device={device} />
    </DeviceContext.Provider>
  );
};

describe("renders device properties correctly", () => {
  it("renders device name", () => {
    renderComponent(deviceProp);
    const deviceNameText = screen.getByText(deviceProp.deviceName);
    expect(deviceNameText).toBeInTheDocument();
  });

  it("renders device ID", () => {
    renderComponent(deviceProp);
    const deviceIdText = screen.getByText(deviceProp.id);
    expect(deviceIdText).toBeInTheDocument();
  });

  it("renders device status", () => {
    renderComponent(deviceProp);
    const deviceStatus = screen.getByText(deviceProp.status);
    expect(deviceStatus).toBeInTheDocument();
  });

  it("renders device applicationCount", () => {
    renderComponent(deviceProp);
    const deviceApplicationCountText = screen.getByText(
      deviceProp.applicationCount
    );
    expect(deviceApplicationCountText).toBeInTheDocument();
  });

  it("renders device operatingSystem", () => {
    renderComponent(deviceProp);
    const deviceOSText = screen.getByText(deviceProp.operatingSystem);
    expect(deviceOSText).toBeInTheDocument();
  });

  it("renders device ipAddress", () => {
    renderComponent(deviceProp);
    const deviceIP = screen.getByText(deviceProp.ipAddress);
    expect(deviceIP).toBeInTheDocument();
  });
});

describe("test click event works", () => {
  it("renders device ipAddress", () => {
    renderComponent(deviceProp);
    const deviceCard = screen.getByTestId("device-card");
    fireEvent.click(deviceCard);
    expect(toggleSelectDevice).toBeCalledTimes(1);
  });
});
