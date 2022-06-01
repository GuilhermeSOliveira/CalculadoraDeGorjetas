import styles from './Index.module.css'

function Template () {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.item}>

                    <div className={styles.child}>
                        <label>Conta</label>
                        <input type="number"></input>

                        <label>Selecione gorjeta %</label>
                        <button>5%</button>
                        <button>10%</button>
                        <button>15%</button>
                        <button>25%</button>
                        <button>50%</button>
                        <input></input>

                        <label>Numero de Pessoas</label>
                        <input type="number"></input>
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