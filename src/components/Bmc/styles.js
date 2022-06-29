import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme)=>
({
    title:{
        color:'inherit'
    },
    paper:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}))