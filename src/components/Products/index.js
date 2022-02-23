import { Divider,Grid, Card, Typography} from "@mui/material";
import React from "react";
import './style.css';

const Products = (props) => {

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
                <Grid container spacing={3}>
                    {
                        images.map((imgs) => {
                            return <Grid key={imgs.img} item lg={3}><Card sx={{minWidth:300}}><img src={imgs.img} alt="imagens"></img></Card></Grid>
                        })
                    }
                </Grid>
            </div>
            
    )
}

export default Products;