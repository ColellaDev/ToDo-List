import styles from "./Tarefa.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
//import { FaCheckCircle } from "react-icons/fa";

interface TarefaProps {
    content: string;
}

export function Tarefa({content}:TarefaProps) {
    return (
        <div className={styles.tarefa}>

            <button className={styles.checkTarefa}>
                <FaRegCircle/>
            </button>

           <p>{content}</p> 

           <button className={styles.deletarTarefa} title="Deletar tarefa">
                <FaRegTrashAlt />
           </button>

         </div>
    )
}