import * as React from 'react'
import Scroll from 'react-scroll'

import * as styles from './descriptionText.scss'

export default class DescriptionText extends React.Component<{}> {

  render(): React.ReactElement<{}> {

    const { Element } = Scroll

    return (
      <div className={styles.main} id='containerElement'>
        <Element name='serviceDescription'>
          <h1 className={styles.header}>COMMON INFORMATION</h1>
        </Element>
        <h3 className={styles.subHeader}>Service Description</h3>
        <p>
          This is a weather data visualization service, which shows an archived information about 
          temperature/precipitation changes for last 120 years in one certain Russian city 
          (unfortunately, information about which city is not provided).
        </p>
        <Element name='inspiration'>
          <h3 className={styles.subHeader}>Inspiration</h3>
        </Element>
        <p>
          My friend told me, that there is a Russian banking company, 
          called Tinkoff, which gave him a technical test task on a Frontend Engineer position. 
          He shared it with me, and after I had a closer look to requirements, I’ve got an inspiration 
          to make a 100% working service, using modern technologies stack. I also wanted to get 
          familliar with TypeScript and get better with D3.
        </p>
        <Element name='UI-UX'>
          <h3 className={styles.subHeader}>UI/UX</h3>
        </Element>
        <p>
          I have a passion of makaing my own UI, so I decided to make one for this 
          service to have everything look good and clean.
        </p>
        <Element name='toolsList'>
          <h1 className={styles.header}>DEVELOPMENT INFORMATION</h1>
        </Element>
        <h3 className={styles.subHeader}>Frontend/Backent Tools List</h3>
        <ul>
          <li>React 16</li>
          <li>React Router 5</li>
          <li>Redux</li>
          <li>Redux-Saga</li>
          <li>Reselect</li>
          <li>Babel</li>
          <li>Webpack 4</li>
          <li>Sass</li>
          <li>TypeScript</li>
          <li>Immutable.js</li>
          <li>D3.js</li>
          <li>Axios</li>
          <li>Express</li>
        </ul>
        <Element name='toolsImplementation'>
          <h3 className={styles.subHeader}>Frontend/Backend Tools Description And Implimentation</h3>
        </Element>
        <p>
          As a frontend engineer, I have a good experience working with different 
          applications from different countries, using React. This service is not an exception.
        </p>
        <p>
          I also use Redux to manage application state, to have one source of truth, 
          which is a redux store, which is read only and can be updated only by dispatching 
          certain actions, as described by Dan Abramov in 3 redux main principles.
        </p>
        <p>
          In terms of Redux, I use Redux-Saga to intercept some certain actions in a separate 
          thread and use it’s side effects to manage asynchronous things like data fetching, 
          websocket channeling, and many other things which I usually do working with my clients 
          applications, but it’s not required for this service.
        </p>
        <p>
          I use Axios, which is an HTTP promise-based client for browser. 
          Combining Redux-Saga call effect and axios promise, 
          I can show/hide preloaders or do some more complex stuff.
        </p>
        <p>
          There are some visible/invisible mutations which I didn’t want to face with in this service, 
          or in any other applications, so I decided to use Immutable.js. 
          That’s why this service has immutable redux store.
        </p>
        <p>
          I wanted to avoid unnecessary recomputions selecting data from a redux store, 
          so I decided to use Reselect library. Using createSelector method from this library, 
          current selection can be stored in a memory, in other words it will be memoised, so it 
          won’t recompute untill incoming parameters will change.
        </p>
        <p>
          I didn’t want to take some predefined boilerplate like create-react-app from Facebook 
          or something like this, because I wanted to use webpack and build everything from scratch. 
          The reason for that is that I wanted to have a full controll over this service, even configuration. 
          I’ve done a separation in between development and production build, enabled hot reloading, 
          split code by chunks, optimized production build and more.
        </p>
        <p>
          Since you are on this page, I’ve got to say that I used React Router to make different pages. 
          It wasn’t required by this technical test task, but it was required by my UI design. 
          Otherwise, this main left navigation bar would have never existed.
        </p>
        <p>
          I’ve hever used TypeScript before, but I always wanted to get familliar with it. 
          This service is a great chance to start using it. There’s still much to learn about this technology 
          for me, but I’m excited to do that because I love it. To start using TypeScript, I had to write 
          some webpack configuration to replace jsx with tsx, configure redux store and etc. But now I’m happy 
          that if there if some wrong import or missing prop, I don’t waste my time to switch to a browser 
          to test it, I see the error right away in a code.
        </p>
        <p>
          Styling in this project is pretty simple. I simply use SASS. One thing to say is that I have 
          an inline styles in my development build, because I want a faster webpack build, but in a production 
          build all of my styles are extracted in a separate file, so I have a faster page loading.
        </p>
        <p>
          Chart is written using D3 technology. The main problem lied with integrating React and D3 seamlessly. 
          Both libraries are built upon data-driven DOM manipulation where the DOM is taken care of for you. The first 
          and simplest idea I have encountered is to basically disable React in D3 land. There are some better 
          ways to integrate React and D3, to have a better performance, but for this service it will go. Anyway, 
          chart is fully responsive. When you toggle main navigation bar or change window size, there is a resize 
          observer, watching these changes and firing events. Chart itself is optimized to manage visual data so 
          it’s not laggy. You can set different year range, set filters, enable detailed information if only 1 
          year selected. There is also svg path animation when you change range or set filters.
        </p>
        <p>
          Backend is very simply. Server is an Express instance, which is a Node.js framework. There are couple 
          of simple REST API endpoints to send data to the client, and that’s it. No database, just a simple 
          JSON files with temperature/precipitation.
        </p>
        <Element name='projectStructure'>
          <h3 className={styles.subHeader}>Project Structure</h3>
        </Element>
        <p>
          Since I’ve got a good experience in building big and extensive frontend applications, 
          I decided to select not standart project structure where you usually have components/containers. 
          Instead, there are common/modules folders. Each module is usually related to a certain page, it can 
          have a layout and its children. Each children can be nested separate module. Each module can be eather 
          component or container. Each module can have its own reducer, actions, selectors and more 
          if other parts of your programm won’t be able to communicate with this reducer. And there is 
          also a common folder, where in components folder you can keep all your reusable components, 
          HOC and more. In common folder are also reducers/selector/actions if they are used in different 
          places, even from different pages, that’s why they called common. This way there are no 
          bottomless folders where you need to scroll much, which saves time and money.
        </p>
        <Element name='buildDeployment'>
          <h3 className={styles.subHeader}>Build/Deployment</h3>
        </Element>
        <p>
          Project with frontend/backend is located in same github repo and can be lounched 
          locally using docker-compose, sh scripts or separate from different terminals from different folders. 
          There is a Dockerfile in frontend/backend folder, so you can make an image and run containers or you can 
          simply use npm commands as described in readme. Each folder (frontend/backed) has its own git origin to Heroku, 
          so it’s really easy to push new updates and manage production build.
        </p>
        <Element name='links'>
          <h3 className={styles.subHeader}>Links</h3>
        </Element>
        <ol>
          <li>
            <span>Tinkoff Bank: </span>
            <a href='https://www.tinkoff.ru' target='_blank'>
              www.tinkoff.ru
            </a>
          </li>
          <li>
            <span>Frontend/Backend Project repo: </span>
            <a href='https://github.com/CodeAnnihilator/WeatherHistoryApp' target='_blank'>
              www.github.com/CodeAnnihilator/WeatherHistoryApp
            </a>
          </li>
          <li>
            <span>Technical Test Task (warning, a lot of russian text is in there): </span>
            <a href='https://drive.google.com/drive/folders/0B8QiH7KmtQTYN0hPVE5vS2liTDQ' target='_blank'>
              www.drive.google.com/drive/folders/0B8QiH7KmtQTYN0hPVE5vS2liTDQ
            </a>
          </li>
        </ol>
      </div>
    )
  }
}