import { MailIcon } from '../../../../UI/Icons/MailIcon/MailIcon.tsx';
import { TelegramIcon } from '../../../../UI/Icons/TelegramIcon/TelegramIcon.tsx';
import styles from './LeftColumn.module.css';
export const LeftColumn = () => {
  return (
    <div className={styles.leftColumn}>
      <div className={styles.heading}>
        <h1 className={styles.family}>Дмитрий Авдошкин</h1>
        <p className={styles.vocation}>Web-разработчик</p>
      </div>
      <div className={styles.about}>
        <div className={styles.about__text}>
          <p>
            Более 12 лет опыта работы в различных областях дизайна и продукта,
            включая ...
          </p>
          <p>
            Облаядаю углублёнными пониманием того, как создавать интерфейсы...
            Моим преимуществом является...
          </p>
          <p>Эпертный уровень в проектировании... Также занимаюсь...</p>
        </div>
      </div>
      <div className={styles.contacts}>
        <h3 className={styles.contacts__heading}>Контакты</h3>
        <div className={styles.contacts__wrapper}>
          <TelegramIcon src="/img/telegram-1%2B1.svg" alt="" />
          <a
            className={styles.contacts__link}
            href="https://web.telegram.org/k/"
          >
            Telegramm
          </a>
        </div>
        <div className={styles.contacts__wrapper}>
          <MailIcon alt="" />
          <a className={styles.contacts__link} href="https://mail.yandex.ru/">
            Mail
          </a>
        </div>
      </div>
    </div>
  );
};

// 1 час 17 минут 27 second
