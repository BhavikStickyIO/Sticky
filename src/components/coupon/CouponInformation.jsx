import React from 'react';
import { Box, CardContent, Chip, Grid, Typography } from '@mui/material';
import { couponList } from '../../constant/funnel';
import { CustomCard, DropDown, SecondaryDropdown } from '../../common';
import { Margin } from '@mui/icons-material';

const CouponInformation = () => {
    return (
        <CustomCard title="Coupon">
            <CardContent>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={4}>
                        <Typography variant="body1">
                            Coupon Profile*
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <SecondaryDropdown
                            label="Coupon Profile"
                            options={couponList}
                            MenuProps={{
                                PaperProps: {
                                    style: {
                                        maxHeight: 140,
                                        
                                    },
                                },
                            }}
                            isCoupon={true}
                        />                      
                    </Grid>
                </Grid>
            </CardContent>
        </CustomCard>
    );
};

export default CouponInformation;
