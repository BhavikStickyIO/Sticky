import React from 'react'
import { CustomCard, DropDown, SecondaryDropdown } from '../../common'
import { CardContent, Grid, Typography } from '@mui/material'
import { ReturnList } from '../../constant/funnel';

const IncludeReturnInformation = () => {
    return (
        <CustomCard title="Include Returns">
            <CardContent>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={4}>
                        <Typography variant="body1">
                            Returns Profile(s)*
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <SecondaryDropdown
                            label="Include Returns"
                            options={ReturnList}
                            MenuProps={{
                                PaperProps: {
                                    style: {
                                        maxHeight: 140,

                                    },
                                },
                            }}
                            isReturn={true}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </CustomCard>
    )
}

export default IncludeReturnInformation
