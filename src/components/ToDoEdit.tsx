// In ToDoEdit.tsx
import { Button, Stack, TextField } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { Task } from './Todo.tsx';
import { useEffect } from "react";

interface Props {
    editTask: (value: string, id: string) => void;
    task: Task;
    keyValue: string;
}

function ToDoEdit({ editTask, task, keyValue }: Props) {
    const { register, handleSubmit, setValue } = useForm<{ updatedTask: string }>();

    const handleForm = (data: FieldValues) => editTask(data.updatedTask, task.id);

    useEffect(() => setValue('updatedTask', task.task));

    return (
        <form key={keyValue} onSubmit={handleSubmit(handleForm)}>
            <Stack position={'relative'} spacing='1rem' maxWidth={600} sx={{ marginBottom: '0.5rem' }}>
                <TextField
                    {...register('updatedTask')}
                    style={{ minWidth: 650, maxHeight: '50px' }}
                    color='primary'
                    label="Please edit task"
                    variant="filled"
                    sx={{ backgroundColor: '#eeeeee', borderRadius: '5px' }}
                />
                <Button
                    type='submit'
                    color='secondary'
                    style={{ maxHeight: '3rem' }}
                    sx={{ position: 'absolute', bottom: '0.5rem', right: '-2.5rem' }}
                    variant='contained'
                >
                    Update
                </Button>
            </Stack>
        </form>
    );
}

export default ToDoEdit;
