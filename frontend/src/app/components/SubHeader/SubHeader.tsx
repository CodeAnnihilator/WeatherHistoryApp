import * as React from 'react'

import * as styles from './subHeader.scss'

interface ISubHeaderProps {
  text: string
  backgroundColor?: string
}

const SubHeader: React.SFC<ISubHeaderProps> = (props) => {
  return (
    <h2 className={styles.text} style={{ backgroundColor: props.backgroundColor }}>{props.text}</h2>
  )
}

export default SubHeader