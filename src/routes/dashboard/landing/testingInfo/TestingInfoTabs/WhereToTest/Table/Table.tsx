import React, { FC, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import TableRow from './TableRow';
import {
  IFetchAllocatedHospitalListAPIResponse,
  fetchAllocatedHospitalListAPI,
  IAllocatedHospital
} from 'src/services/hospitals';

const AllocatedHospitalTable: FC<{}> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [allocatedHospitalList, setAllocatedHospitalList] = useState<IAllocatedHospital[]>([] as IAllocatedHospital[]);

  useEffect(() => {
    fetchAllocatedHospitalList();
  }, []);

  const fetchAllocatedHospitalList = async () => {
    try {
      const response: IFetchAllocatedHospitalListAPIResponse = await fetchAllocatedHospitalListAPI();
      setAllocatedHospitalList(response.docs);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoaded(true);
    }
  };

  return (
    <Table responsive className="text-white">
      <thead>
        <tr>
          <th>Name of Hospital</th>
          <th>Open Hours</th>
          <th>No. of beds available</th>
        </tr>
      </thead>

      <tbody>
        {isLoaded ? (
          allocatedHospitalList.length > 0 ? (
            allocatedHospitalList.map(hospital => <TableRow hospital={hospital} />)
          ) : (
            <span>No records found</span>
          )
        ) : (
          <span>Loading...</span>
        )}
      </tbody>
    </Table>
  );
};

export default AllocatedHospitalTable;
