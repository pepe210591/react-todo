import React from 'react';
import List from '@material-ui/core/List';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';

const TodoList = ({todos, deleteTodo}) => {
    return (

<List> 
            {todos.map((todo, index) => {
            return (
            <ListItem button key={index}>
                <Checkbox/>
                <ListItemText primary={todo} />
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => deleteTodo(index)}>
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>   
            </ListItem>
                         

);
            })}
</List>
    )}

export default TodoList