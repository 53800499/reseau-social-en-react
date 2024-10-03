import { Stack, Typography, Box, TextField, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

export default function Connexion() { 
  //const navigate = useForm();
  useEffect(()=>{

    if (localStorage.getItem("utilisateur")) {
      navigate('/');
    }
  }
  )
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }} = useForm();
        const onSubmit  = (data) => {
                axios.get(`http://localhost:3000/utilisateur?mail=${data.mail}&motDePasse=${data.motDePasse}`).then(res=>{
                if (res.data.length > 0) {
                  localStorage.setItem("utilisateur",JSON.stringify(res.data[0]));
                   navigate('/');
                    toast.success('Connexion reussit avec succè')
                  }else{
                        toast.error("Mot de passe erronné")
                  }
                
            })
        } 
      return (
    <div>
      <Stack 
      alignItems={"center"}
       justifyContent={"center"} 
       width={"100%"} height={"100vh"} 
       backgroundColor={"#f5f5f5"}>
        <Box width={"400"} sx={{ 
            backgroundColor: "#fff",
            padding:3,

         }}>
        <Typography variant='h5'>
            Connexion
        </Typography>
        <form action="" 
        style={{ 
            marginTop:4,
         }}
         onSubmit={handleSubmit(onSubmit)}
         >
            <Stack direction={"column"} gap={2}>

                <TextField id="filled-basic" name ='mail' label="Veillez entrer votre mail" variant="outlined" fullWidth size='small' {...register("mail",{required:"veillez saisr un mail correct"})} aria-invalid={errors.mail ? "true" : "false"}/>

                <TextField id="filled-basic" name='motDePasse' label="Veillez saisir un mot de passe" variant="outlined" fullWidth size='small' {...register("motDePasse",{required:"veillez saisr un mot de passe de plus de 6 caractères"})}/>

            </Stack>
            <Button variant="contained" type='submit' sx={{ 
                marginTop:2
             }}>Connexion</Button>
            <Typography paddingTop={2}>
              Voulez-vous créer un compte ??? <Link to= "/inscription">Cliquez ici</Link>
            </Typography>

        </form>
        </Box>
      </Stack>
    </div>
  )
}
