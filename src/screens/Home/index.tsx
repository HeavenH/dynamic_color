import React, { useState } from 'react';
import {Background, InputChangeColor} from './styles'
import Logo from './code.svg';
// @ts-ignore
import SvgColor from 'react-svg-color'


const Home = () => {


  const [color, setColor] = useState('#6A5ACD')
    return (
      <>
        <Background changeColor={color}>
          {console.log(color)}
          <SvgColor
            svg={Logo}
            colors={[`${color}`]}
          />
          <InputChangeColor value={color} onChange={e => setColor(e.target.value)} />
        </Background>
      </>
    )
}

export default Home;
