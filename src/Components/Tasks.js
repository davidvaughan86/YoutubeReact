
import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle}) => {
    
    
    return (
        
        <div className='taskList'>
        
            {tasks.map((task) => 
            (
            <Task key={task.id} task={task} onDelete={ () => onDelete(task.id)} onToggle={onToggle} />
            ))}
        </div>
    )

}
export default Tasks
