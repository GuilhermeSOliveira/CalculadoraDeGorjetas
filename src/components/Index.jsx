import styles from './Index.module.css'

function Template () {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.item}>

                    <div className={styles.child}>
                        <label className={styles.titulo}>Conta</label>
                        <input type="number" className={styles.valor}></input>

                        <label className={styles.titulo}>Selecione gorjeta %</label>
                        <button className={styles.botao}>5%</button>
                        <button className={styles.botao}>10%</button>
                        <button className={styles.botao}>15%</button>
                        <button className={styles.botao}>25%</button>
                        <button className={styles.botao}>50%</button>
                        <input className={styles.inputbotao}></input>

                        <label className={styles.titulo}>Numero de Pessoas</label>
                        <input type="number" className={styles.valor}></input>
                    </div>

                </div>

                <div className={styles.item}>

                    <div className={styles.child}>
                        <p>Valor da Gorjeta</p>
                        <subtitle>/ pessoa</subtitle>
                        <h1>!</h1>
                    
                        <p>Total</p>
                        <subtitle>/ pessoa</subtitle>
                        <h1>!</h1>

                        <button>Reset</button>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Template