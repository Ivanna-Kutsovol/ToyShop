"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./Sliderpage.module.scss";
import ArrowLeftActive from "/public/ImgSliders/arrowLeftActive.svg";
import ArrowLeft from "/public/ImgSliders/arrowLeft.svg";
import ArrowRightActive from "/public/ImgSliders/arrowRightActive.svg";
import ArrowRight from "/public/ImgSliders/arrowRight.svg";

const InitialSliders = (data: any) => {
  const dataArr = data.data[0];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActiveLeft, setIsActiveLeft] = useState(false);
  const [isActiveRight, setIsActiveRight] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); 
  const [nextIndex, setNextIndex] = useState(0);
  const [direction, setDirection] = useState('right')

  useEffect(() => {
        if (isAnimating) {
          const timeout = setTimeout(() => {
            setCurrentIndex(nextIndex); 
            setIsAnimating(false); 
            setDirection('right')
          }, 2000);
    
          return () => clearTimeout(timeout); 
        }
      }, [isAnimating, nextIndex, currentIndex, direction]);

  useEffect(() => {
    const interval = setInterval(() => {
      if(!isAnimating) {
        setNextIndex((currentIndex) => (currentIndex + 1) % dataArr.length);
        setIsAnimating(true); 
      }
    }, 10000); 

    return () => clearInterval(interval); 
  }, [currentIndex, dataArr.length, isAnimating]);
  
  const handleClickLeft = () => {
    if(!isAnimating){
      setIsActiveLeft(true);
      setIsActiveRight(false);
      setDirection('left')
      const newIndex = currentIndex === 0 ? dataArr.length - 1 : currentIndex - 1;
      setNextIndex(newIndex); 
      setIsAnimating(true);
    }    
  };

  const handleClickRight = () => {
    if(!isAnimating){
      setIsActiveLeft(false);
      setIsActiveRight(true);
      setDirection('right')
      const newIndex = currentIndex === 0 ? dataArr.length - 1 : currentIndex - 1;
      setNextIndex(newIndex); 
      setIsAnimating(true);
    }   
  };

  return (
    <div className={styles.slides}>
      <section className={styles.slides__container}>
        <a className={`${styles.slides__backgroundSlideSmall}`} 
         style={{
          backgroundImage: `url('/ImgSliders/${dataArr[nextIndex].ImgSlideSmall}')`,
          backgroundRepeat: 'no-repeat'
        }}
         >
          <Image
            unoptimized 
            src={`/ImgSliders/${dataArr[currentIndex].ImgSlideSmall}`}
            alt="slider"
            width={206}
            height={765}
            priority={true}
            className={isAnimating ? 
              direction === 'right' 
              ? styles.slides__animatingSmall : styles.slides__animatingSmallLeft : ''} 
          />
        </a>

        <section className={styles.slides__info}>
          <h1 className={styles.slides__topic}>Create while playing!</h1>
          <p className={styles.slides__text}>
          Discover a world of toys that enhance your child&apos;s fine motor skills and creativity.
          </p> 
          <section className={styles.slides__arrow}>
            <button
              className={isActiveLeft ? styles.slides__ArrowLeftActive : styles.slides__ArrowLeft}
              onClick={handleClickLeft} 
              disabled={isAnimating}
            >
              <Image
                src={isActiveLeft ? ArrowLeftActive : ArrowLeft}
                alt="arrow left"
                width={120}
                height={120}
              />
            </button>

            <button
              className={isActiveRight ? styles.slides__ArrowRightActive : styles.slides__ArrowRight}
              onClick={handleClickRight}
              disabled={isAnimating}
              >
              <Image
                src={isActiveRight ? ArrowRight : ArrowRightActive}
                alt="arrow right"
                width={120}
                height={120}
              />
            </button>
          </section>
        </section>

        <a className={`${styles.slides__backgroundImgSlide} `}
        style={{
          backgroundImage: `url('/ImgSliders/${dataArr[nextIndex].ImgSlide}')`,
          backgroundRepeat: 'no-repeat'
          
          }}
        >
          <Image
            unoptimized 
            src={`/ImgSliders/${dataArr[currentIndex].ImgSlide}`}
            alt="slider"
            width={590}
            height={768}
            priority={true}
            className={isAnimating ?
              direction === 'right'
              ? styles.slides__animatingLarge : styles.slides__animatingLargeLeft : ''
            }  
          />
        </a>
      </section>
    </div>
  );
}

export default InitialSliders;