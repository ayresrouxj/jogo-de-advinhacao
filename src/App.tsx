import styles from './app.module.css'

import { Header } from './components/Header'
import { Tip } from './components/Tip'
import { Letter } from './components/Letter'

export function App() {
  function handleRestartGame() {
    alert('reiniciar o jogo')
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />

        <Tip tip="Linguagem de programação dinâmica" />

        <Letter value="R" />
        <Letter value="" />
        <Letter value="" />
        <Letter value="C" />
        <Letter value="T" />
      </main>
    </div>
  )
}
