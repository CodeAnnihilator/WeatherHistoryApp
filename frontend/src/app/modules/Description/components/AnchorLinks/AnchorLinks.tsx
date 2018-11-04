import * as React from 'react'

import Anchor from '../Anchor/Anchor'

import styles from './anchorLinks.scss'

import openBook from 'app/assets/open-book.svg'
import lightBulb from 'app/assets/light-bulb.svg'
import sketch from 'app/assets/sketch.svg'
import checklist from 'app/assets/checklist.svg'
import wrench from 'app/assets/wrench.svg'
import diagram from 'app/assets/diagram.svg'
import box from 'app/assets/box.svg'
import unlink from 'app/assets/unlink.svg'

export default class AnchorLinks extends React.Component<{}> {

  render(): React.ReactElement<{}> {
    return (
      <div className={styles.leftNav}>
        <div className={styles.leftNav_header}>Common Information</div>
        <Anchor
          icon={openBook}
          desc='Service Description'
          to='serviceDescription'
          containerId='containerElement'
        />
        <Anchor
          icon={lightBulb}
          desc='Inspiration'
          to='inspiration'
          containerId='containerElement'
        />
        <Anchor
          icon={sketch}
          desc='UI/UX'
          to='UI-UX'
          containerId='containerElement'
        />
        <div className={styles.leftNav_header}>Development Information</div>
        <Anchor
          icon={checklist}
          desc='Frontend/Backent Tools List'
          to='toolsList'
          containerId='containerElement'
        />
        <Anchor
          icon={wrench}
          desc='Frontend/Backend Tools Description And Implimentation'
          to='toolsImplementation'
          containerId='containerElement'
        />
        <Anchor
          icon={diagram}
          desc='Project Structure'
          to='projectStructure'
          containerId='containerElement'
        />
        <Anchor
          icon={box}
          desc='Build/Deployment'
          to='buildDeployment'
          containerId='containerElement'
        />
        <Anchor
          icon={unlink}
          desc='Links'
          to='links'
          containerId='containerElement'
        />
      </div>
    )
  }
}