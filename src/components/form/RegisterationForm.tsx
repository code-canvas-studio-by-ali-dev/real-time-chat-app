import React, { FC } from 'react'
import PasswordCheck from '@/components/form/PasswordCheck'
import { Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Stack } from '@mui/joy'
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import { formateZodError } from '@/lib/utils'
import { user_validation } from '@/lib/zod'
import { ZodError } from 'zod'
import Link from 'next/link';
import axios from 'axios';

interface RegisterationFormProps {
    params: string
}

const RegisterationForm: FC<RegisterationFormProps> = ({ params }) => {
    const [value, setValue] = React.useState<UserFrontend>({
        fullname: '',
        email: '',
        password: ''
    })
    const [errors, setError] = React.useState<ErrorsType | undefined>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        try {
            const validateData = user_validation.parse(value);
            if (validateData) {
                const response = await axios.post('/api/signup', { fullname: value.fullname, email: value.email, password: value.password })
                console.log(response)
            }
            setValue({
                fullname: '',
                email: '',
                password: ''
            })
            setError(undefined);
        } catch (error) {
            if (error instanceof ZodError) {
                const formattedError = formateZodError(error);
                setError(formattedError);
            }
        }
    };


    return (
        <form>
            <Stack spacing={1} sx={{ '--hue': Math.min(value.password.length * 10, 120) }}>
                <FormControl className={params === 'login' ? '!hidden' : '!block'} error={errors?.fullname ? true : false} >
                    <FormLabel className='!text-xs'>
                        Full Name
                    </FormLabel>
                    <Input
                        type='text'
                        size='sm'
                        className='w-full'
                        name='fullname'
                        value={value.fullname}
                        onChange={(e) => handleChange(e)}
                    />
                    <FormHelperText className={!errors?.fullname ? '!hidden' : '!mt-1 !text-xs !flex !items-start'}>
                        <InfoOutlined className='!text-sm' />
                        {errors?.fullname && errors?.fullname}
                    </FormHelperText>
                </FormControl>
                <FormControl error={errors?.email ? true : false}>
                    <FormLabel className='!text-xs'>
                        Email
                    </FormLabel>
                    <Input
                        type='email'
                        size='sm'
                        className='w-full'
                        name='email'
                        value={value.email}
                        onChange={(e) => handleChange(e)}
                    />
                    <FormHelperText className={!errors?.email ? '!hidden' : '!mt-1 !text-xs !flex !items-start'}>
                        <InfoOutlined className='!text-sm' />
                        {errors?.email && errors?.email}
                    </FormHelperText>
                </FormControl>
                <PasswordCheck
                    value={value}
                    handleChange={handleChange}
                    errors={errors}
                />
                <div className={params === 'login' ? '!hidden' : '!block'}>
                    <p className='text-[11px]'>The <Link href='/about-me' className='link-style'>Fast-Connect</Link> may keep me informed with personalized email about services. See our Privacy Policy for more details at any time.</p>
                    <Checkbox label='Please Contact me via email' className='flex items-center' sx={{ "& .MuiCheckbox-checkbox": { width: "14px", height: "14px", borderRadius: '3px' }, "& .MuiCheckbox-label": { fontSize: '11px' } }} />
                    <p className='text-[11px]'>By clicking Create account, I agree that I have read and accepted the <Link href='/terms' className='link-style'>Terms of Use</Link> and <Link href='/policy' className='link-style'>Privacy Policy</Link>.</p>
                </div>
                <Button
                    type="button"
                    className='rounded-full w-fit self-end text-xs'
                    size='sm'
                    onClick={handleSubmit}
                >
                    Create Account
                </Button>
            </Stack>
        </form>
    )
}

export default RegisterationForm