import React from 'react';
import MediumBtn from 'components/common/MediumBtn';

import './DriverTable.scss';

interface IDriverTable {
  driverItems: JSX.Element[];
}

const DriverTable = ({ driverItems }: IDriverTable): JSX.Element => {
  return (
    <div className="DriverTable">
      <div className="DriverTable-Filter">
        <MediumBtn title='승인 대기' className='DriverTable-Filter-await' />
        <MediumBtn title='배달 중' className='DriverTable-Filter-delivery' />
        <MediumBtn title='승인' className='DriverTable-Filter-allow' />
        <MediumBtn title='거절' className='DriverTable-Filter-deny' />
      </div>

      <table className="DriverTable-Table">
        <thead>
          <tr>
            <th />
            <th>ID</th>
            <th>이름</th>
            <th>승인 상태</th>
            <th>배달 상태</th>
          </tr>
        </thead>

        <tbody>
          {driverItems}
        </tbody>
      </table>
    </div >
  )
}

export default DriverTable;