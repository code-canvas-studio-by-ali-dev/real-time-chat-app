import { montserrat } from '@/fonts/fonts'
import { FormControl, FormLabel, Input, LinearProgress, Typography } from '@mui/joy'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PasswordCheck: React.FC<PasswordCheckProps> = ({ value, handleChange, errors }) => {
    const [visibility, setVisibility] = React.useState<boolean>(false);
    const minLength = 8;

    const handleVisibleClick = () => {
        setVisibility(!visibility);
    }

    // Function to determine password strength
    const getPasswordStrength = (password: string) => {
        let strength = 0;
        if (password.length >= minLength) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[a-z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[\W_]/.test(password)) strength += 1; // Special character check
        return (strength / 5) * 100; // Return percentage
    }

    const strengthValue = getPasswordStrength(value.password);

    return (
        <FormControl
            className='-space-y-1'
            error={errors?.password ? true : false}
        >
            <FormLabel
                sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontSize: '12px'
                }}>
                Password
            </FormLabel>
            <Input
                type={!visibility ? 'password' : 'text'}
                size='sm'
                className='w-full'
                name='password'
                value={value.password}
                onChange={(e) => handleChange(e)}
                endDecorator={!visibility ?
                    <VisibilityIcon
                        sx={{ cursor: 'pointer' }}
                        onClick={handleVisibleClick}
                    />
                    : <VisibilityOffIcon
                        sx={{ cursor: 'pointer' }}
                        onClick={handleVisibleClick}
                    />}
            />
            <div className={value.password === '' ? '!hidden' : '!mt-1'}>
                <LinearProgress
                    determinate
                    size='sm'
                    value={strengthValue}
                    sx={{
                        bgcolor: 'background.level3',
                        color: strengthValue < 50 ? '#E52020' : 'hsl(var(--hue) 80% 49%)',
                    }}
                />
                <Typography className='text-end !text-xs !font-medium' sx={{ mt: 0.5 }}>
                    {strengthValue < 50 ? 'Weak' : strengthValue < 90 ? 'Medium' : 'Strong'}
                </Typography>
            </div>
        </FormControl>
    )
}

export default PasswordCheck;