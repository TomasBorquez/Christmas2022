/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import style from './TypeAnimation.module.scss';
const colors = ['#ff595e', '#d1d646', '#00798c', '#edae49'];

const countries = {
  Kazakhstan:
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-kazakhstan_1f1f0-1f1ff.png',
  Argentina:
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-argentina_1f1e6-1f1f7.png',
  Poland:
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-poland_1f1f5-1f1f1.png',
};

type props = {
  name: string;
  country: string;
};

export const TypeAnimation = ({ name, country }: props) => {
  const TEXTS: any = [
    'Happy',
    'Christmas',
    `${name[0].toUpperCase() + name.slice(1)}!!!^@1!!ao@a!ao}!`,
    // eslint-disable-next-line @next/next/no-img-element
    <div className={style.emoji}>
      <img
        // @ts-ignore
        src={countries[country]}
        alt=""
      ></img>
      ,
    </div>,
  ];

  if (name === 'aidana') {
    TEXTS.pop();
    TEXTS.push(
      <p className={style.emoji}>
        🧠 from
        <img
          // @ts-ignore
          src={countries['Kazakhstan']}
          alt=""
        ></img>
      </p>
    );
  } else if (name === 'honey') {
    TEXTS.push('tuki 🐸🤠');
  } else if (name === 'laucha') {
    TEXTS.pop();
    TEXTS.push('juju');
  } else if (name === 'santo') {
    TEXTS.pop();
    TEXTS.push('rust player 🧓');
    } else if (name === 'panadero') {
    TEXTS.pop();
    TEXTS.push('🍞🥖🥐🍞🥖🥐');
    TEXTS.push('panadeirou al que le gusta bananeiro 🍌');
  }

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={style.typeAnimation}>
      <h1>
        <TextTransition
          springConfig={presets.default}
          style={{
            color: colors[index % colors.length],
            justifyContent: 'center',
          }}
        >
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </h1>
    </div>
  );
};
