import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { useRouter } from 'next/router';
import ReactConfetti from 'react-confetti';
import { TypeAnimation } from '../components/TypeAnimation';
import JSConfetti from 'js-confetti';
import axios from 'axios';

export default function HowAreYouReadingThis() {
  const router = useRouter();
  const { name } = router.query;
  const [country, setCountry] = useState('');
  const [hide, setHide] = useState(true);

  useEffect(() => {
    const getGeoInfo = async () => {
      const response = await (await axios.get('https://ipapi.co/json/')).data;
      setCountry(response.country_name);
    };
    getGeoInfo();
  }, []);

  const handleClick = () => {
    const jsConfetti = new JSConfetti();
    setHide(false);

    jsConfetti.addConfetti({
      emojis: ['🎄', '🧠', '🎅', '☕'],
      emojiSize: 50,
      confettiColors: [
        '#ff0a54',
        '#ff477e',
        '#ff7096',
        '#ff85a1',
        '#fbb1bd',
        '#f9bec7',
      ],
    });
  };
  return (
    <>
      <Head>
        <title>If you are reading this you are gay 👨‍🦲</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://images.emojiterra.com/twitter/v13.1/512px/1f384.png"
        />
      </Head>
      <main className={styles.main}>
        {!hide && (
          <ReactConfetti
            width={window.innerWidth - 20}
            height={window.innerHeight - 20}
          />
        )}
        <div className={styles.container}>
          {!hide && (
            <TypeAnimation
              // @ts-ignore
              name={name}
              country={country}
            />
          )}
          <button onClick={handleClick}>Click me 😳</button>
        </div>
      </main>
    </>
  );
}
