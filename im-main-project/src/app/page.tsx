import Image from 'next/image'
import styles from './page.module.css'
import PopupsDraw from '@/components/popupsDraw/PopupsDraw'

export default function Home() {
	return (
		<main className={styles.main}>
			<PopupsDraw />
		</main>
	)
}
