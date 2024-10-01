import React from 'react';
import { CustomCard, DropDown } from '../../common';

const dropDownData = [
    {
        DropDownName: 'Fulfillment',
        options: [
            { label: 'At Cost Fulfillment', value: 'At Cost Fulfillment' },

        ],
    },
    {
        DropDownName: 'Risk Mitigation',
        options: [
            { label: 'Kount Provider 4249', value: 'Kount Provider_4249' },
        ],
    },
    {
        DropDownName: 'Prospect',
        options: [
            { label: 'Tris Sprinkless', value: 'Tris Sprinkless' },
        ],
    },
    {
        DropDownName: 'Order Confirmation',
        options: [
            { label: 'Justin Test', value: 'Justin Test' },
        ],
    },
    {
        DropDownName: 'Chargeback',
        options: [
            { label: 'MM Kount 2', value: 'MM Kount 2' },
        ],
    },
    {
        DropDownName: 'Auto Responder',
        options: [
            { label: 'Justin Test', value: 'Justin Test' },
        ],
    },
    {
        DropDownName: 'Tax',
        options: [
            { label: 'MM Kount 2', value: 'MM Kount 2' },
        ],
    },
    {
        DropDownName: 'Data Verification',
        options: [
            { label: 'Test insureship product ID', value: 'Test insureship product ID' },
        ],
    },
    {
        DropDownName: 'Collection',
        options: [
            { label: 'Test insureship product ID', value: 'Test insureship product ID' },
        ],
    },
    {
        DropDownName: 'Account Updater',
        options: [
            { label: 'Test insureship product ID', value: 'Test insureship product ID' },
        ],
    },
    {
        DropDownName: 'Loyalty',
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
                        key={dropDown.DropDownName}
                        DropDownName={dropDown.DropDownName}
                        options={dropDown.options}
                    />
                ))}
            </CustomCard>
        </div>
    );
};

export default ThirdpartyInformation;
