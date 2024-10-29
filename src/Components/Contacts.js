import React, { Component } from 'react'

export class Contacts extends Component {
  render() {
    return (
      <div>  

    <div className="contact">
      <h2>Звяжіться з нами</h2>
    </div>

    <div className="main-content">
      <div className="main-content2">
        <p className="contact1">Як я можу проконсультуватись щодо товару?<br />
          Телефонуй: +3800909090;
        </p>
        <div className="contact1">
          <p>Пиши в зручний для тебе месседжер:</p>
          <p>@modernSpace</p>
          <p>@modernSpace</p>
          <p>@modernSpace</p>
        </div>
        <p className="contact1">Або оформляй замовлення на сайті і ми самі тобі зателефонуємо</p>
      </div>
      <img src="/img/7452506.png" height="auto" width="450" alt="Image" />
    </div>

    <div className="main-content3">
      <img src="/img/—Pngtree—big isolated young man work_7258004.png" height="500" alt="Young Man" />
      <img src="/img/exclamation-mark-emoji-clipart-lg.png" height="100" alt="Exclamation Mark" />
      <p className="contact3">
        Виникли проблеми чи скарги? Телефонуй:<br />
        +38010010001<br />
        (9:00-18:00)
      </p>
    </div></div>
    )
  }
}

export default Contacts