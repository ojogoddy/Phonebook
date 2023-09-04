import React from 'react'
import {Global,css} from "@emotion/react"

const Globalstyles:React.FC = () => {
  return (
    <Global
        styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap');

            body{
                font-family:'Roboto', sans-serif;
                margin: 0;
                padding: 0;
            }
        `}
        />
  )
}

export default Globalstyles