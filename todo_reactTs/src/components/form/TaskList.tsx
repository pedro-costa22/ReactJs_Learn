import { ITask } from '../../interfaces/Task';
import styles from './TaskList.module.css';
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface Props {
    taskList: ITask[],
    handleDelete(id: number): void,
    handleEdit(task: ITask): void
}

export const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
    return (
        <>
            {taskList.length > 0 ? (
                taskList.map((task) => (
                    <div key={task.id} className={styles.task}>

                        <div className={styles.details}>
                            <h4>{task.title}</h4>
                            <p>Dificuldade: {task.difficulty}</p>
                        </div>
                        <div className={styles.actions}>
                            <FiEdit className={styles.icons} onClick={() => handleEdit(task)}/>
                            <FiTrash2 className={styles.icons} onClick={() => handleDelete(task.id)}/>
                        </div>
                    </div>
                ))
            ) : (
                <p>Nãoi há tarefas cadastradas</p>
            )}
        
        </>
    )
}