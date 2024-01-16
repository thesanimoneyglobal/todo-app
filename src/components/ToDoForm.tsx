import {Button, Stack, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {Task} from './Todo.tsx'

interface Props {
    onSubmit: (data: Task) => void;
}
function ToDoForm({onSubmit}: Props) {
    const {register, handleSubmit, reset} = useForm<Task>()
    const handleForm = (data: Task)=> {
        onSubmit(data);
        reset();
    }

    return <>
        <form onSubmit={handleSubmit(handleForm)}>
            <Stack justifyContent='center' useFlexGap flexWrap='wrap' direction='row' spacing='1rem' maxWidth={800} >
                    <TextField inputProps={{minLength: 3}} required={true}  {...register('task')}
                               style={{minWidth: 500}} color='primary' label="What is the task today?"
                               variant="filled" sx={{backgroundColor: '#eeeeee', borderRadius: '5px'}}/>
                <Button type='submit' style={{maxHeight: '3.5rem'}} variant='contained'>Create task</Button>
            </Stack>
        </form>
    </>
}

export default ToDoForm;