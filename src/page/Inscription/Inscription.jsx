import { Stack, Typography, Box, TextField, Button } from '@mui/material'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

export default function Inscription() { 
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }} = useForm();
        const onSubmit  = (data) => {
            if (data.motDePasse === data.motDePasseConfirmation) {
                axios.get(`http://localhost:3000/utilisateur?mail=${data.mail}`).then(res=>{

                if (res.data.length > 0) {
                    console.log(res);
                    toast.error("Un compte a été creer avec ce mail");
                }else{
                    axios.post("http://localhost:3000/utilisateur",data).then(res=>{
                        console.log(res);
                        toast.success('Mot de passe valide')
                        navigate("/connexion");
                    }).catch((error)=>{
                        console.log(error);
                        toast.error("Mot de passe erronné")
                    })

                }
                
            })
            }
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
            Inscription
        </Typography>
        <form action="" 
        style={{ 
            marginTop:4,
         }}
         onSubmit={handleSubmit(onSubmit)}
         >
            <Stack direction={"column"} gap={2}>

                <TextField id="filled-basic" name='nomUtilisateur' label="Veillez saisir votre nom" variant="outlined" fullWidth size='small'{...register("nomUtilisateur",{required:"veillez saisr un nom de plus de 2 caractères", minLength:{value:5,message:"veillez saisr un nom de plus de 2 caractères"}} )}/>

                <TextField id="filled-basic" name='motDePasse' label="Veillez saisir un mot de passe" variant="outlined" fullWidth size='small' {...register("motDePasse",{required:"veillez saisr un mot de passe de plus de 6 caractères"})}/>

                <TextField id="filled-basic" label="Veillez confirmer mot de passe" variant="outlined" fullWidth size='small' {...register("motDePasseConfirmation",{required:"veillez saisr un mot de passe de plus de 6 caractères"})}/>

                <TextField id="filled-basic" name ='mail' label="Veillez entrer votre mail" variant="outlined" fullWidth size='small' {...register("mail",{required:"veillez saisr un mail correct"})} aria-invalid={errors.mail ? "true" : "false"}/>
            </Stack>
            <Button variant="contained" type='submit' sx={{ 
                marginTop:2
             }}>Inscription</Button>
            <Typography>
              Voulez-vous connecter a un compte ??? <Link to= "/connexion">Cliquez ici</Link>
            </Typography>

        </form>
        </Box>
      </Stack>
    </div>
  )
}
