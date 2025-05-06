import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const getIcon = id => {
    switch (id) {
      case '1':
        return <FaRegThumbsUp className={style.icon} />;
      case '2':
        return <MdPeople className={style.icon} />;
      case '3':
        return <GiTreeDoor className={style.icon} />;
      case '4':
        return <MdOutlineProductionQuantityLimits className={style.icon} />;
      default:
        return null;
    }
  };

  return (
    <>
      <h2>Statistics</h2>
      {title && <h3 className={style.title}>{title}</h3>}

      <ul className={style.list}>
        {stats.map(({ id, title, total }) => (
          <li key={id}>
            <StatisticsItem icon={getIcon(id)} title={title} total={total} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Statistics;
