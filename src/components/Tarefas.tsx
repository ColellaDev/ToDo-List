import styles from './Tarefas.module.css';

export function Tarefas() {
    return (
        <div className={styles.tarefas}>

             <div className={styles.contadores}>
                <div className={styles.tarefasCriadas}>
                     <h3>Tarefas criadas</h3>
                     <span>5</span>
                </div>
                <div className={styles.tarefasConcluidas}>
                     <h3>Concluídas</h3>
                     <span>2 de 5</span>
                </div>
            </div>

        </div>
    )
}