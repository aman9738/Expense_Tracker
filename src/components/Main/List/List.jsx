import React,{useContext} from 'react'
import {List as MUIList,ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction,IconButton,Slide} from "@material-ui/core"
import useStyles from "./styles" ;
import { Delete, MoneyOff } from '@material-ui/icons';
import { ExpenseTrackerContext } from '../../../context/context';

const List = () => {
    const {transactions,deleteTransaction} = useContext(ExpenseTrackerContext);
    
    const classes = useStyles();
  return (
    <div>
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction)=>(
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type==="Income" ? classes.avatarIncome:classes.avatarExpense} >
                                <MoneyOff/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label='delete' onClick={()=>deleteTransaction(transaction.id)}>
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    </div>
  )
}

export default List