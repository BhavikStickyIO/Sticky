import React from 'react';
import { CustomCard, DropDown } from '../../common';

const dropDownData = [
    {
        label: 'Fulfillment',
        options: [
            { label: 'At Cost Fulfillment', value: 'At Cost Fulfillment' },
        ],
    },
    {
        label: 'Risk Mitigation',
        options: [
            { label: 'Kount Provider 4249', value: 'Kount Provider_4249' },
        ],
    },
    {
        label: 'Prospect',
        options: [
            { label: 'Tris Sprinkless', value: 'Tris Sprinkless' },
        ],
    },
    {
        label: 'Order Confirmation',
        options: [
            { label: 'Justin Test', value: 'Justin Test' },
        ],
    },
    {
        label: 'Chargeback',
        options: [
            { label: 'MM Kount 2', value: 'MM Kount 2' },
        ],
    },
    {
        label: 'Auto Responder',
        options: [
            { label: 'Justin Test', value: 'Justin Test' },
        ],
    },
    {
        label: 'Tax',
        options: [
            { label: 'MM Kount 2', value: 'MM Kount 2' },
        ],
    },
    {
        label: 'Data Verification',
        options: [
            { label: 'Test insureship product ID', value: 'Test insureship product ID' },
        ],
    },
    {
        label: 'Collection',
        options: [
            { label: 'Test insureship product ID', value: 'Test insureship product ID' },
        ],
    },
    {
        label: 'Account Updater',
        options: [
            { label: 'Test insureship product ID', value: 'Test insureship product ID' },
        ],
    },
    {
        label: 'Loyalty',
        options: [
            { label: 'Test insureship product ID', value: 'Test insureship product ID' },
        ],
    },
];

const ThirdpartyInformation = () => {
    return (
        <div>
            <CustomCard title="Third-Party Providers">
                {dropDownData.map((dropDown) => (
                    <DropDown
                        key={dropDown.label}
                        label={dropDown.label}
                        options={dropDown.options}
                    />
                ))}
            </CustomCard>
        </div>
    );
};

export default ThirdpartyInformation;
