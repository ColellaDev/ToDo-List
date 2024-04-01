import styles from './CriarTarefa.module.css';
import { FiPlusCircle } from "react-icons/fi";

export function CriarTarefa() {
    return (
        <div className={styles.criar}>
            <input className={styles.input} placeholder="Adicione uma nova tarefa" />
            <button className={styles.button}>Criar <FiPlusCircle/></button>
        </div>
        
    )
}