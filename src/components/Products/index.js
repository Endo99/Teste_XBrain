import { Divider,Grid , Card, Typography, Fab, Button, Input} from "@mui/material";
import AddIcon from '@mui/icons-material/AddIcon'; 
import RemoveIcon from '@mui/icons-material/Remove';
import React from "react";
import './style.css';

 const Products = (props) => {


    const [amount, setAmount] = React.useState(0);

    function clearAmount() {
        setAmount(0);
    }

    function onAction() {
        props.onAction(amount);
        clearAmount();
    }

    function changeAmountValue(event, op){
        event.stopPropagation();
        event.preventDefault();
        if (op === 'sum') plusAmount();
        else if (op === 'subtraction') subtractionAmount();
    }

    function plusAmount() {
        if (amount < 100) setAmount(amount + 1);
        }
        
    function subtractionAmount() {
        if (amount > 0) setAmount(amount - 1);
    }

    const images = [
            {
                img:"/assets/produto-01.jpeg",
                description:"AirPods Apple Fones de ouvido",
                price: 1499.00,
                method: {
                    howManyTimes: 12,
                    inCash: 1349.00
                }
            },
            { 
                img:"/assets/produto-02.jpeg",
                description:"Capa de silicone para iPhone 8/7 cor Areia - rosa",
                price:299.00,
                method: {
                    howManyTimes: 12,
                    inCash: 269.10
                    }
            },
            { 
                img:"/assets/produto-03.jpeg",
                description:"Apple Pencil",
                price:729.00,
                method: {
                    howManyTimes: 12,
                    inCash: 656.10
                }
            },
            { 
                img:"/assets/produto-04.jpeg",
                description:"Magic Mouse 2 - Prateado",
                price:549.00,
                method: {
                    howManyTimes: 12,
                    inCash: 494.10
                }
            },
            { 
                img:"/assets/produto-05.jpeg",
                description:"Caixa prateada de alumínio com pulseira esportiva branca",
                price:2899.00,
                method: {
                    howManyTimes: 12,
                    inCash: 2609.10
                }
            },
            { 
                img:"/assets/produto-06.jpeg",
                description:"Cabo de lightning para USB (1m)",
                price:149.00,
                method: {
                    howManyTimes: 12,
                    inCash: 134.10
                }
            },
            { 
                img:"/assets/produto-07.jpeg",
                description:"Smart keyboard para iPad Pro 12,9 polegadas - inglês (EUA)",
                price:1099.00,
                method: {
                    howManyTimes: 12,
                    inCash: 989.10
                }
            },
            { 
                img:"/assets/produto-08.jpeg",
                description:"Carregador USB de 5W Apple",
                price: 149.00,
                method: {
                    howManyTimes: 12,
                    inCash: 134.10
                }
            },
    ]



    return (
            
            <div className='produts'>
                <div className='title'>
                    <Typography variant='h5'>Produtos</Typography>
                    <Divider></Divider>
                </div>
                <Grid className="grid-main" container spacing={3} justify="center" align="center">
                    {
                        images.map((imgs) => {
                            return <Grid className="grid" key={imgs.img} item lg={3}>
                                        <Card className="card" sx={{width: 272, height: 272}}>
                                            <img className="img" src={imgs.img} alt="imagens" maxHeight='auto' width='100%'></img>
                                        </Card>
                                    <div>
                                        <Grid container spacing={3} >
                                        <Grid item xs={3}>
                                            <Fab aria-label="remove" size="small" onClick={(event) => changeAmountValue(event, 'subtraction')}>
                                                <RemoveIcon />
                                            </Fab>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Input inputProps={{ style: { textAlign: 'center' } }} type='number' value={amount} fullWidth readOnly onChange={value => console.log(value)} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Fab aria-label="add" size="small" onClick={(event) => changeAmountValue(event, 'sum')}>
                                                <AddIcon />
                                            </Fab>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button variant="contained" color="primary" fullWidth onClick={onAction} disabled={amount === 0} >
                                                Adicionar
                                            </Button>
                                        </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                        })
                    }
                </Grid>
            </div>
            
    )
}

export default Products;