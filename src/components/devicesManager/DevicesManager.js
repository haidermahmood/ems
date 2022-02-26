import * as React from "react";
import { Content, Header } from "./DevicesManager.styled";
import ActionButtons from "./actionButtons/ActionButtons";
import Devices from "./devices/Devices";
import ActionListModal from "../actionListModal/ActionListModal";
import { formatDate } from "../../utils/datetime";
import { DeviceContext } from "../../DeviceContext";

export default function DevicesManager() {
  const [selectedDevices, setSelectedDevices] = React.useState([]);

  const [actionItems, setActionItems] = React.useState([]);

  function pushActionDetail(action) {
    const id = actionItems.length + 1;
    const actionName = action;
    const devices = selectedDevices.reduce((deviceNameList, { deviceName }) => {
      deviceNameList.push(deviceName.substr(0, deviceName.indexOf(".")));
      return deviceNameList;
    }, []);
    const currentDateTime = new Date();
    const datetimeFormated = formatDate(currentDateTime);
    const deviceNames = devices.join(", ");

    const actionItem = {
      id,
      actionName,
      deviceNames,
      datetimeFormated,
    };

    const newActionItems = [...actionItems, actionItem];

    setActionItems(newActionItems);
  }

  function toggleSelectDevice(device, isSelected) {
    if (!isSelected) {
      const indexToRemove = selectedDevices.findIndex(
        (selectedDevice) => selectedDevice.id === device.id
      );
      const newSelectedDevices = [
        ...selectedDevices.slice(0, indexToRemove),
        ...selectedDevices.slice(indexToRemove + 1),
      ];
      setSelectedDevices(newSelectedDevices);
    } else {
      const newSelectedDevices = [...selectedDevices, device];
      setSelectedDevices(newSelectedDevices);
    }
  }

  return (
    <DeviceContext.Provider
      value={{
        selectedDevices,
        toggleSelectDevice,
        actionItems,
        pushActionDetail,
      }}
    >
      <>
        <ActionListModal />
        <Content>
          <Header>Available Endpoints</Header>
          <ActionButtons />
          <Devices />
        </Content>
      </>
    </DeviceContext.Provider>
  );
}
