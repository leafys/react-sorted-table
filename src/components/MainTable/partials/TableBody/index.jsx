import React from 'react';
import styles from './TableBody.module.scss';
import dayjs from 'dayjs';

const TableBody = ({ tableData }) => {
  return (
    <tbody className={styles.tbody}>
      {tableData.map((item) => (
        <tr key={item.rank}>
          <td>{item.rank}</td>
          <td className={styles.tbody__nameTd}>
            <img
              className={styles.tbody__nameTd__tdImage}
              src={`images/${item.image}`}
              alt="suka"
            />

            <span>{item.name}</span>
          </td>
          <td>
            <time dateTime={item.time}>
              {dayjs(item.time).format('HH:mm:ss')}
            </time>
          </td>
          <td>{item.speed}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
