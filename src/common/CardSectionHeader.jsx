import { CardHeader, Typography } from '@mui/material'
import React from 'react'

const CardSectionHeader = ({ title, subTitle, marginLeft = "0rem" }) => {
    return (
        <>
            {title && (
                <CardHeader
                    title={title}
                    titleTypographyProps={{
                        sx: {
                            textAlign: 'start',
                            color: 'rgba(27, 1, 111, 1)',
                            lineHeight: '30px',
                            fontWeight: 600, 
                        },
                    }}
                />
            )}
            {subTitle && (
                <Typography
                    sx={{
                        color: '#1B3E6F',
                        mb: 1.5,
                        textAlign: 'start',
                        marginLeft: marginLeft, 
                        fontSize: '20px',
                        fontWeight: 400, 
                        lineHeight: '30px'
                    }}
                >
                    {subTitle}
                </Typography>
            )}
        </>
    );
}

export default CardSectionHeader;
