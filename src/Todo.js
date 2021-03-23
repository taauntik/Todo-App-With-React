import { Avatar, List, ListItem, ListItemAvatar, ListItemText, ImageIcon } from '@material-ui/core'
import "./Todo.css"
import React from 'react'

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Todo" />
            </ListItem>
        </List>
    )
}

export default Todo
