import styles from "./Tarefa.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

export interface TarefaProps {
    content: String
    onDelete: () => void
    onComplete: () => void
    completed: Boolean
}

export function Tarefa({content, onDelete, onComplete, completed=false}:TarefaProps) {
    return (
        <div className={`${styles.tarefa} ${completed ? styles.completed : ''}`}>

            <button className={styles.checkTarefa} onClick={onComplete}>
            {completed ? <FaCheckCircle /> : <FaRegCircle />}
            </button>

           <p>{content}</p> 

           <button className={styles.deletarTarefa} onClick={onDelete} title="Deletar tarefa">
                <FaRegTrashAlt />
           </button>

         </div>
    )
}