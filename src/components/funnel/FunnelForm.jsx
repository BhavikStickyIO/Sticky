import React, { useContext, useEffect, useRef } from 'react'
import FunnelInformation from './FunnelInformation'
import ShippingInformation from '../shipping/ShipingInformation'
import ThirdpartyInformation from '../thirdpartyprovider/ThirdpartyInformation'
import BinblockingInformation from '../binblocking/BinblockingInformation'
import PostbackProfileInformation from '../postbackprofile/PostbackProfileInformation'
import { useFunnelContext } from '../../context/funnelContext'

const FunnelForm = () => {
    const { value } = useFunnelContext();
    const shippingInfoRef = useRef();

    useEffect(() => {
        if (value.sliderFunnel === 0) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const offset = 20; // Change this value to adjust the space between the two forms
            const top =
                shippingInfoRef?.current?.getBoundingClientRect().top +
                window.scrollY -
                offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }, [value.sliderFunnel]);

    return (
        <>
            <FunnelInformation />
            <div ref={shippingInfoRef}>
                <ShippingInformation />
            </div>
            {value && value?.checkBoxFunnel?.third_Party_Providers &&
                <ThirdpartyInformation />
            }
                {value && value?.checkBoxFunnel?.bIN_Blocking &&
                <BinblockingInformation />
            }
            <PostbackProfileInformation />
        </>
    )
}

export default FunnelForm;
