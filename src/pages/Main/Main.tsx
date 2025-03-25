import { LeftColumn } from './componets/LeftColumn/LeftColumn';
import { RightColumn } from './componets/RightColumn/RightColumn';
import styles from './main.module.css';

export const Main = () => {
  return (
    <div className={'center'}>
      <div className={styles.container}>
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
};

// 1 час 17 минут 27 second
