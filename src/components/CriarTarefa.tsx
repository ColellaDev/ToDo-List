import styles from './CriarTarefa.module.css';

export function CriarTarefa() {
    return (
        <div className={styles.criar}>
            <input className={styles.input}/>
            <button>Criar</button>
        </div>
        
    )
}