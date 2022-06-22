import styles from './Index.module.css'

function Template () {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.item}>

                    <div className={styles.primeiraParte}>
                        <label className={styles.titulo}>Conta</label>
                        <input type="number" className={styles.valor} id='valor'></input>

                        <label className={styles.titulo}>Selecione gorjeta %</label>
                        <button className={styles.botao} onClick={gorjetada} id='gorjeta' value={0.05}>5%</button>
                        <button className={styles.botao} id='gorjeta'>10%</button>
                        <button className={styles.botao} id='gorjeta'>15%</button>
                        <button className={styles.botao} id='gorjeta'>25%</button>
                        <button className={styles.botao} id='gorjeta'>50%</button>
                        <input className={styles.inputbotao}></input>

                        <label className={styles.titulo}>Numero de Pessoas</label>
                        <input type="number" className={styles.valor}></input>
                    </div>

                </div>

                <div className={styles.item}>

                    <div className={styles.segundaParte}>
                        <div className={styles.texto}>
                            <h1>Tip Amount</h1>
                            <h2>/Person</h2>
                            <h1>Total</h1>
                            <h2>/Person</h2>
                        </div>

                        <div className={styles.gorjetaValor}>
                            <h1 id='resultado'>$0,00</h1>
                            <h1>$0,00</h1>
                        </div>

                        <button className={styles.reset}>Reset</button>

                    </div>

                </div>
            </section>
        </>
    )
}

let valor = document.querySelector('#valor');
let gorjeta = document.querySelectorAll('#gorjeta')
console.log(gorjeta)

function gorjetada () {
    for(let i = 0; i < gorjeta.length; i++){
        console.log(gorjeta[i].value * valor.value)
    }
}

export default Template