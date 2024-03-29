import { useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { isEmail } from '../../utils'
import { AuthLayout } from '../../components/layouts/AuthLayout'

type FormData = {
    email: string
    password: string
}

const LoginAdmin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        mode: 'onChange'
    })
    const [loading, setLoading] = useState<boolean>(false)

    const onLoginUser: SubmitHandler<FormData> = async ({
        email,
        password
    }: FormData) => {
        try {
            setLoading(true)
            console.log('loading ', loading)

            await fetch('/login', { method: 'POST' })
            setTimeout(() => {
                setLoading(false)
            }, 3000)
            console.log('loading ', loading)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <AuthLayout>
            <form onSubmit={handleSubmit(onLoginUser)} noValidate>
                <Box sx={{ width: '100%' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ my: 4 }}>
                            <Typography
                                variant="h5"
                                textAlign={'center'}
                                fontWeight={'bold'}
                            >
                                Iniciar Sesión Administrador
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                label="Correo"
                                fullWidth
                                {...register('email', {
                                    required: 'Este campo es requerido',
                                    validate: isEmail
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="password"
                                label="Contraseña"
                                fullWidth
                                type="password"
                                {...register('password', {
                                    required: 'Este campo es requerido',
                                    minLength: {
                                        value: 6,
                                        message: 'Mínimo 6 caracteres'
                                    }
                                })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                        </Grid>
                    </Grid>

                    <Box height={40} />

                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            className="circular-btn"
                            size="large"
                            disabled={loading}
                            fullWidth
                        >
                            {/* { !loading ? 'Ingresar' : 'Ingresando...' } */}
                            Ingresar
                        </Button>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}

export default LoginAdmin
