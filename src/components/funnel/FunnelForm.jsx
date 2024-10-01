import React from 'react'
import FunnelInformation from './FunnelInformation'
import ShippingInformation from '../shipping/ShipingInformation'
import ThirdpartyInformation from '../thirdpartyprovider/ThirdpartyInformation'
import BinblockingInformation from '../binblocking/BinblockingInformation'
import PostbackProfileInformation from '../postbackprofile/PostbackProfileInformation'

const FunnelForm = () => {
    return (
        <>
            <FunnelInformation />
            <ShippingInformation />
            <ThirdpartyInformation/>
            <BinblockingInformation/>
            {/* <PostbackProfileInformation/> */}
        </>
    )
}

export default FunnelForm
