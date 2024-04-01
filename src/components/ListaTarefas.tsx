import styles from './ListaTarefas.module.css';
import { Tarefa } from "./Tarefa";

export function ListaTarefas() {
    return (
        <div className={styles.listaTarefas}>

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

            <div className={styles.tarefas}>
            <Tarefa content="teste"/>
            
            </div>
            

        </div>
    )
}