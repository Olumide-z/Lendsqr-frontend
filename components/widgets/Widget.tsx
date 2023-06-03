import React from 'react'
import styles from './widget.module.scss';
import Image from 'next/image';

interface WidgetProps {
    image: string;
    desc: string;
    number: string;
    bg1?: boolean;
    bg2?: boolean;
    bg3?: boolean;
}

const Widget = ({image, desc, number, bg1, bg2, bg3 } : WidgetProps) => {
  return (
    <div className={styles.widget}>
        <div className={bg1 ? styles.bg1: bg2 ? styles.bg2 : bg3 ? styles.bg3 : styles.bg4}>
            <Image src={image} alt='image' width={20} height={17}/>
        </div>
        <p className={styles.widget__desc}>{desc}</p>
        <p className={styles.widget__number}>{number}</p>
    </div>
  )
}

export default Widget