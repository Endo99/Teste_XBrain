import React from 'react';
import { Button, Card, CardContent, CardMedia, Collapse, Fab, Grid, Input } from "@mui/material";
import { Typography } from "@mui/material/Typography";
import Typography from "@mui/material";
import { AddIcon, RemoveIcon}from '@material-ui/icons';

const AddComponent = (props) => {

    function changeAmountValue(event, op) {
        event.stopPropagation();
        event.preventDefault();
        if (op === 'sum') plusCounter();
        else if (op === 'subtraction') subtractionCounter();
    }

    function plusCounter() {
        if (counter < 100) setCounter(counter + 1);
    }

    function subtractionCounter() {
        if (counter > 0) setCounter(counter - 1);
    }

    function clearCount() {
        setCounter(0);
    }

    const [counter, setCounter] = React.useState(0);

    function onAction() {
        props.onAction(counter);
        clearCount();
    }

    return (

        <Grid container spacing={3} >
            <Grid item xs={3}>
                <Fab aria-label="remove" size="small" onClick={(event) => changeAmountValue(event, 'subtraction')}>
                    <RemoveIcon />
                </Fab>
            </Grid>
            <Grid item xs={6}>
                <Input inputProps={{ style: { textAlign: 'center' } }} type='number' value={counter} fullWidth readOnly onChange={value => console.log(value)} />
            </Grid>
            <Grid item xs={3}>
                <Fab aria-label="add" size="small" onClick={(event) => changeAmountValue(event, 'sum')}>
                    <AddIcon />
                </Fab>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth onClick={onAction} disabled={counter === 0} >
                    Adicionar
                </Button>
            </Grid>
        </Grid>
    )
}

const CardComponent = (props) => {
    const classes = useStyles();
    const { img, description, price, method } = props.product;
    const [showAdd, setAddProducts] = React.useState(false);
    const { enqueueSnackbar } = useSnackbar();

    function handleExpandClick() {
        setAddProducts(showAdd => !showAdd);
    }

    function onSelectProduct(amount) {
        props.dispatch(addProductToCard(props.product,amount));
        showMessage(`${amount} ${amount > 1 ?  'produtos' : 'produto' } adicionados com sucesso`, { variant: "success" })
    }

    function showMessage(message, options) {
        enqueueSnackbar(message, options)
    }

    return (
        <Card className={classes.card} onMouseLeave={handleExpandClick} onMouseEnter={handleExpandClick} >
            <CardContent>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="auto"
                    image={img}
                    title="Contemplative Reptile"
                />
                <Typography gutterBottom variant="subtitle2" component="h2">
                    {description}
                </Typography>
                <Typography className={classes.price}>
                    R$ {price.toFixed(2)}
                </Typography>
                <Typography className={classes.method}>
                    Em até {method.howManyTimes}x de {(price / method.howManyTimes).toFixed(2)}
                </Typography>
                <Typography className={classes.method}>
                    R$ {method.inCash.toFixed(2)} à vista (10% de desconto)
                    </Typography>
                <Collapse in={showAdd} >
                    <AddComponent onAction={onSelectProduct} show={showAdd} ></AddComponent>
                </Collapse>
            </CardContent>

        </Card>
    );
}

export default connect()(CardComponent);