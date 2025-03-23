import styles from './main.module.css';

export const Main = () => {
  return (
    <div className={'center'}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.heading}>
            <h1 className={styles.family}>Дмитрий Авдошкин</h1>
            <p className={styles.vocation}>Web-разработчик</p>
          </div>
          <div className={styles.about}>
            <div className={styles.about__text}>
              <p>
                Более 12 лет опыта работы в различных областях дизайна и
                продукта, включая ...
              </p>
              <p>
                Облаядаю углублёнными пониманием того, как создавать
                интерфейсы... Моим преимуществом является...
              </p>
              <p>Эпертный уровень в проектировании... Также занимаюсь...</p>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <h2>Опыт работы</h2>
        </div>
      </div>
    </div>
  );
};

// 1 час 5 минут 51 second
