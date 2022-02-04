import Link from 'next/link';
import Image from 'next/image';
import {styles} from '@/styles/EventItem.module.css';

export const EventItem = ({evt}) => {
  return (
      <div className={styles.event}>
          <div className={styles.img}>
              <Image src={evt.image ? evt.image : './images/default.jpg' } width={170} height={100} alt='event image' />

          </div>
      </div>
  )
};
