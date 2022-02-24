import { Divider, Grid, Card, Typography, TextField, MenuItem} from "@mui/material"; // Fab
// import RemoveIcon from '@mui/icons-material/Remove';
import React from "react";
import './style.css';

 const Products = (props) => {


    // const [amount, setAmount] = React.useState(0);

    // function clearAmount() {
    //     setAmount(0);
    // }

    // // function onAction() {
    // //     props.onAction(amount);
    // //     clearAmount();
    // // }

    // function changeAmountValue(event, op){
    //     event.stopPropagation();
    //     event.preventDefault();
    //     if (op === 'sum') plusAmount();
    //     else if (op === 'subtraction') subtractionAmount();
    // }

    // function plusAmount() {
    //     if (amount < 100) setAmount(amount + 1);
    //     }
        
    // function subtractionAmount() {
    //     if (amount > 0) setAmount(amount - 1);
    // }

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


    const currencies = [
        {
          label: 'Masculino',
          value: 'Masculino',
        },
        {
            label: 'Feminino',
            value: 'Feminino',
        },
    ];

    const [currency, setCurrency] = React.useState("");

    const handleChange = (event) => {
    setCurrency(event.target.value);
    };

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
                                            <img className="img" src={imgs.img} alt="imagens"  width='100%'></img> {/*maxHeight='auto'*/}
                                        </Card>
                                            
                                    {/* <div>
                                        <Grid container spacing={3} >
                                        <Grid item xs={3}>
                                            <Fab aria-label="remove" size="small" onClick={(event) => changeAmountValue(event, 'subtraction')}>
                                                <RemoveIcon />
                                            </Fab>
                                        </Grid>
                                        </Grid>
                                    </div> */}
                                </Grid>
                                

                                

                        })
                    }
                </Grid>
       
                <div className="products"> 
                    <div className='title'>
                        <Typography variant='h5'>Dados dos Clientes</Typography>
                        <Divider></Divider>
                    </div>
                    <div className="text-field">
                        <Grid className="grid-client" container spacing={3} item lg={3} columnSpacing={{ xs: 10, sm: 10, md: 4 }} >
                        <TextField
                        id="outlined"
                        label="Nome"
                        type="string"
                        defaultValue="Nome do Cliente"
                        InputLabelProps={{
                            shrink: true,
                        }}>

                        </TextField>

                        <TextField
                        id="outlined"
                        label="Email"
                        type="string"
                        defaultValue="Digite o seu email aqui"
                        InputLabelProps={{
                            shrink: true,
                        }}>

                        </TextField>

                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Sexo"
                            value={currency}
                            onChange={handleChange}
                            helperText="Por favor selecione o sexo"
                        >
                        {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                        ))}
                        </TextField>
                        </Grid>
                    </div>
                </div>

                <div className="button">
                    <button></button>
                </div>
            </div>
            
    )
}

export default Products;