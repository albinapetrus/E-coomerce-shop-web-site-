import React, { Component } from 'react';

import styles from '../assets/Aboutus.module.css'; // Імпорт модуля CSS

export class AboutUs extends Component {
  render() {
    return (
      <div>
        <section className={styles.wrapperAbout}>
          <div className={styles.block0}>
            <img src="/img/clipart3302286.png" className={styles.icon1} alt="Icon 1" />
            <p className={styles.welcomeText}>Ласкаво просимо до світу стилю, комфорту та інновацій! <br /> Наш інтернет-магазин меблів — це ваше онлайн-простір, де ви можете знайти все, <br /> що потрібно для перетворення вашого дому на затишне та елегантне місце.</p>
          </div>

          <h2 className={styles.myHeading}>Широкий асортимент:</h2>
          <div className={styles.block2}>
            <img src="/img/free-icon-online-store-3222660.png" className={styles.icon} alt="Icon 2" />
            <p className={styles.welcomeText1}>У нашому магазині представлений величезний вибір меблів для кожної кімнати вашого дому.<br /> Від сучасних диванів і елегантних обідніх столів до стильних шаф та комодів — у нас є все, <br /> що потрібно для створення ідеального інтер’єру. Ми пропонуємо як класичні,<br /> так і сучасні рішення, які підходять для будь-якого стилю життя.</p>
          </div>

          <h2 className={styles.myHeading2}>Зручний шопінг:</h2>
          <div className={styles.block}>
            <p className={styles.welcomeText}>Завдяки зручному інтерфейсу нашого сайту, ви можете легко знайти потрібні товари. <br /> Сортуйте меблі за категоріями, кольорами, матеріалами або ціною, <br /> щоб швидко знайти те, що вам потрібно. Ми також надаємо <br /> детальні описи та зображення кожного товару, <br /> щоб ви могли зробити усвідомлений вибір.</p>
            <img src="/img/free-icon-online-shopping-10840517.png" className={styles.icon} alt="Icon 3" />
          </div>

          <h2 className={styles.myHeading}>Якість та стиль:</h2>
          <div className={styles.block2}>
            <img src="/img/free-icon-quality-8228428.png" className={styles.icon} alt="Icon 4" />
            <p className={styles.welcomeText1}>Ми працюємо лише з перевіреними виробниками,<br /> щоб забезпечити високу якість кожного виробу.<br /> Наші меблі не тільки виглядають чудово,<br /> але й виготовлені з використанням найкращих матеріалів,<br /> що забезпечує їхню довговічність та зручність у використанні.</p>
          </div>

          <h2 className={styles.myHeading2}>Індивідуальний підхід:</h2>
          <div className={styles.block}>
            <p className={styles.welcomeText}>Наша команда професіоналів завжди готова допомогти вам з вибором.<br /> Ви можете звернутися до нас з будь-якими запитаннями чи побажаннями,<br /> і ми з радістю надамо вам консультацію, щоб допомогти знайти ідеальні меблі для вашого дому.</p>
            <img src="/img/individual.png" className={styles.icon} alt="Icon 5" />
          </div>

          <h2 className={styles.myHeading}>Швидка доставка:</h2>
          <div className={styles.block2}>
            <img src="/img/fast-delivery.png" className={styles.icon} alt="Icon 6" />
            <p className={styles.welcomeText1}>Ми розуміємо, наскільки важливо отримати ваші нові меблі вчасно.<br /> Тому ми пропонуємо швидку та надійну доставку по всій території країни,<br /> щоб ви могли насолоджуватися своїми новими покупками без зайвих затримок.</p>
          </div>

          <h3>Приходьте до нас, і давайте разом створимо ваш ідеальний простір!</h3>
        </section>
      </div>
    );
  }
}

export default AboutUs;

