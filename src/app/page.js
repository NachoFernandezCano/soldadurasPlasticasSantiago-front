'use client';
import BasicCard from '@/components/card/Card';
import styles from './home.module.css'

export default function Home() {
  return (
      <main>
				<h1 className={styles.nombreTaller}>
					Soldaduras plasticas Santiago
				</h1>
        <div className={styles.containerCards}>
          <BasicCard></BasicCard>
        </div>
    </main>
  )
}
