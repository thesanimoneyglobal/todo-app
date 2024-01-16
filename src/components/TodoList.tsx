import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import {Task} from "./Todo.tsx";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {ListItemText} from "@mui/material";
import ToDoEdit from "./ToDoEdit.tsx";
interface TaskList {
    tasks: Task[];
    onDelete: (id: string) => void;
    onChecked: (value: string)=> void;
    handleEdit: (value: string)=> void;
    editTask: (value: string, id: string)=> void;
}

export default function TodoList({tasks, onDelete, onChecked, handleEdit, editTask}: TaskList) {
    const handleIcon = (value: string)=> onChecked(value)

    return (
        <List sx={{
            paddingTop: 0, width: '100%', marginTop: '2rem', maxWidth: 650,
        }}>
            {tasks.map((value) => {
                const labelId = `checkbox-list-label-${value.id}`;

                return <div key={value.id}> {value.isEditing ? <ToDoEdit keyValue={value.id} editTask={editTask} task={value}></ToDoEdit> :
                    <ListItem sx={{borderRadius: '5px', bgcolor: value.checked ? '#C3E2C2' : '#eeeeee', marginBottom: '0.5rem'}}
                          key={value.id}
                          secondaryAction={
                              <div>
                                  <IconButton onClick={()=> handleEdit(value.id)} aria-label="edit">
                                      <EditIcon></EditIcon>
                                  </IconButton>
                                  <IconButton aria-label="delete" onClick={() => onDelete(value.id)}>
                                      <DeleteIcon></DeleteIcon>
                                  </IconButton>
                              </div>
                          }
                          disablePadding>
                <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                        <Checkbox
                            onClick={()=>handleIcon(value.id)}
                            color='success'
                            edge="start"
                            checked={value.checked}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{'aria-labelledby': labelId}}
                        />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={<span
                        style={{textDecoration: value.checked ? 'line-through' : 'none'}}>{value.task}</span>}/>
                </ListItemButton>
                </ListItem>}

                </div>
            })}
        </List>

    );
}