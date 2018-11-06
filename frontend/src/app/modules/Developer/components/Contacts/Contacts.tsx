import * as React from 'react'

import * as styles from './contacts.scss'

export default class Contacts extends React.Component<{}> {

  render(): React.ReactElement<{}> {
    return (
      <div>
        <h1 className={styles.header}>CONTACTS AND LINKS</h1>
        <ol>
          <li>E-mail: frostberryart@gmail.com</li>
          <li>github: <a href='https://github.com/CodeAnnihilator' target='_blank'>www.github.com/CodeAnnihilator</a></li>
          <li>VK.com: <a href='https://vk.com/id276375229'>www.vk.com/id276375229</a></li>
        </ol>
      </div>
    )
  }
}