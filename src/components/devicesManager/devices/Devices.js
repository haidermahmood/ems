import * as React from "react";
import { Container } from "./Devices.styled";
import Device from "./device/Device";

export default function Devices() {
  const [devices, setDevices] = React.useState([]);

  React.useEffect(() => {
    //fetch("https://api.mockaroo.com/api/08100050?count=1000&key=3e2ade60")
    fetch("data/Endpoints.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setDevices(result);
        },
        (error) => {
          console.log("Error fetching devices");
        }
      );
  }, []);

  return (
    <Container>
      {devices.map((device) => (
        <Device key={device.id} device={device} />
      ))}
    </Container>
  );
}
