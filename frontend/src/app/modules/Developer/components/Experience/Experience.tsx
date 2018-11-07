import * as React from 'react'

import * as styles from './experience.scss'

export default class Experience extends React.Component<{}> {

  render(): React.ReactElement<{}> {
    return (
      <div>
        <h1 className={styles.header}>EXPERIENCE AND PROJECTS</h1>
        <h3 className={styles.sub_header}>
          1. Ucoz. Website: <a href='https://www.ucoz.com/' target='_blank'>www.ucoz.com</a>.
        </h3>
        <p>
          This is my first job as a Front-End engineer where I was working on 
          developing front-end for browser MMO game from scratch, using existing 
          boilerplate <a href='https://github.com/tomatau/breko-hub' target='_blank'>www.github.com/tomatau/breko-hub</a>. 
          It was a really complex and at the same time interresting job where I had to manage websockets flow, 
          using redux-saga channeling, plan and scale whole front-end architecture, work with infographics, 
          modal windows and much more. I have growen up at this job as a front-end engineer.
        </p>
        <h3 className={styles.sub_header}>2. England Online Patent System.</h3>
        <p>
          This job was really interresting. As a Front-End engineer I had a chance to work 
          with big response data. To show it to an end user, I had to first filter, map and 
          reduce deep nested objects, memoize result with Reselect, and finally render selection. 
          I had to develop file system from scratch like each modern OS has, where you can make a folder, 
          put files inside that filder and even other folders. I’ve done it recursively rendering react 
          components with possibility to drag and drop it anywhere you want. I’ve also implemented big 
          find and filter sustem, created system to highlight created and selected text elements from 
          each patent and many other cool stuff. At this front-end job I focused a lot at developing 
          functionality, and I really liked this.
        </p>
        <h3 className={styles.sub_header}>
          3. TSL, American Streaming E-Commerce. Website: <a href='https://talkshop.live/' target='_blank'>www.talkshop.live</a>.
        </h3>
        <p>
          I was selected from over 50 people to become a Front-End developer and Front-End 
          Consultant for an american company developing e-commerce streaming service. I’ve fixed a 
          lot of bugs at this project like start/stop streaming flow, websockets wrong behaviours, 
          client/server data flow with REST api requests, player functions and much more. This project 
          was something like a legacy from other developers, so I had to work alone to fix these 
          bugs and implement new features.
        </p>
        <h3 className={styles.sub_header}>4. Simplicity, International Budget Planning System.</h3>
        <p>
          This is a Russian startup project, where I had to write whole 
          front-end and back-end from scratch, apply e-commerce using stripe payments, 
          implement registration and authentication, develop UI/UX, make markups for each page, 
          allow user to register simuntaniously buying selected subscription with selected duration 
          with posibility to automatically withdraw money each month/year. There is a lot of infographics, 
          complex calendar where you can manage meetings with your clients, and much more. This project 
          was really cool and inspiring, I liked it so much, and even more, every line of code from 
          the wery beginning is written by myself from scratch.
        </p>
        <h3 className={styles.sub_header}>
          5. I also have a lot pet projects, some of them you can find on my github page 
          <a href='https://github.com/CodeAnnihilator' target='_blank'> www.github.com/CodeAnnihilator</a>
        </h3>
        <p>
          Many of these project are related to Full-Stack development because 
          I love to learn something new and always try to complete everything I do. 
          There are also bunch of javascript games like snake, pacman, space invaders and more, 
          which unfortunately are not presented at my git repo yet. When I have a free time 
          I usually keep developing my own multiplayer browser 3d game with world editor, 
          written with React and Three.js to let people make their own levels.
        </p>
      </div>
    )
  }
}