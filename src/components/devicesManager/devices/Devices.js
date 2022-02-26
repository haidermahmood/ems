import * as React from "react";
import { Container } from "./Devices.styled";
import Device from "./device/Device";
import Paginator from "../../pagination/Pagination";

export default function Devices() {
  const [allDevices, setAllDevices] = React.useState([]);

  const [devices, setDevices] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(0);
  const paginationProps = {
    currentPage,
    setCurrentPage,
    pageCount,
    setPageCount,
  };

  React.useEffect(() => {
    //fetch("https://api.mockaroo.com/api/08100050?count=1000&key=3e2ade60")
    fetch("data/Endpoints.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setAllDevices(result);
          setPageCount(Math.ceil(result.length / 9));
          const currentDevices = result.slice(0, 9);
          setDevices(currentDevices);
        },
        (error) => {
          console.log("Error fetching devices");
        }
      );
  }, []);

  React.useEffect(() => {
    if (allDevices?.length > 0 && pageCount > 0) {
      const currentDevices = allDevices.slice(
        (currentPage - 1) * 9,
        currentPage * 9
      );
      setDevices(currentDevices);
    }
  }, [currentPage, allDevices, pageCount]);

  return (
    <Container>
      {devices.map((device) => (
        <Device key={device.id} device={device} />
      ))}
      <Paginator {...paginationProps} />
    </Container>
  );
}
