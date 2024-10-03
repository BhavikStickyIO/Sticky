import { Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';
import { couponList } from '../../constant/funnel';
import { CustomCard } from '../../common';

const CouponInformation = () => {
    const [selectedCoupon, setSelectedCoupon] = React.useState('');

    const handleChange = (event) => {
        setSelectedCoupon(event.target.value);
    };
    return (
        <CustomCard title="Coupon">
            <CardContent>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={4}>
                        <Typography variant="body1">
                            Coupon Profile
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <FormControl fullWidth>
                            <InputLabel id="coupon-label">Coupon Profile</InputLabel>
                            <Select
                                labelId="coupon-label"
                                id="coupon-select"
                                value={selectedCoupon}
                                label="Coupon Profile"
                                onChange={handleChange}
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            maxHeight: 140,
                                        },
                                    },
                                }}
                            >
                                {couponList.map((coupon) => (
                                    <MenuItem key={coupon.value} value={coupon.value}>
                                        {coupon.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </CardContent>
        </CustomCard>
    );
};

export default CouponInformation;
