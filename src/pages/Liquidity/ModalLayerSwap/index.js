import 'antd/dist/antd.css';
import './style.scss';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Grid } from '@mui/material';
import { useCurrencies, useNetworks, useRate, useCreateSwap } from './hooks';
import styled from 'styled-components';

const WhiteBorderTextField = styled(TextField)`
    & label.Mui-focused {
        color: white;
    }
    & .MuiOutlinedInput-root {
        border: 1px solid white;
        &.Mui-focused fieldset {
            border-color: white;
        }
    }
`;

const ModalLayerSwap = (props) => {
    const { isShow, setIsShow } = props;
    const { sources, destinations } = useNetworks();
    const { rate, getRate } = useRate();
    const { currencies, updateCurrencies } = useCurrencies();
    const { createSwap } = useCreateSwap();
    const [destination, setDestination] = useState('STARKNET_MAINNET');
    const [source, setSource] = useState('');
    const [amount, setAmount] = useState('');
    const [sourceCurrency, setSourceCurrency] = useState('');
    const [destinationCurrency, setDestinationCurrency] = useState('');

    const [address, setAddress] = useState('0x03240D516052F7F9587719e20E91889FAb7417E115FDC778E9878A532212B27A');

    useEffect(() => {
        if (source && destination && sourceCurrency && destinationCurrency) {
            getRate({
                source: source,
                destination: destination,
                sourceAsset: sourceCurrency,
                destinationAsset: destinationCurrency,
                refuel: false,
            });
        }
    }, [source]);

    const handleSourceChange = (event) => {
        updateCurrencies({
            sourceFilterBy: event.target.value,
            destFilterBy: destination,
            sources,
            destinations,
        });
        setSource(event.target.value);
        if (event.target.value && destination && sourceCurrency && destinationCurrency) {
            getRate({
                source: event.target.value,
                destination,
                sourceAsset: sourceCurrency,
                destinationAsset: destinationCurrency,
                refuel: false,
            });
        }
    };

    const handleDestinationChange = (event) => {
        updateCurrencies({
            sourceFilterBy: source,
            destFilterBy: event.target.value,
            sources,
            destinations,
        });
        setDestination(event.target.value);
        if (source && event.target.value && sourceCurrency && destinationCurrency) {
            getRate({
                source: event.target.value,
                destination,
                sourceAsset: sourceCurrency,
                destinationAsset: destinationCurrency,
                refuel: false,
            });
        }
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const showMin = () => {
        setAmount(rate?.min_amount || 0);
    };

    const showMax = () => {
        setAmount(rate?.max_amount || 0);
    };

    const handleSourceCurrencyChange = (event) => {
        setSourceCurrency(event.target.value);
        if (source && destination && event.target.value && destinationCurrency) {
            getRate({
                source,
                // destination,
                sourceAsset: event.target.value,
                destinationAsset: destinationCurrency,
                refuel: false,
            });
        }
    };

    const handleDestinationCurrencyChange = (event) => {
        setDestinationCurrency(event.target.value);
        if (source && destination && event.target.value && sourceCurrency) {
            getRate({
                source,
                // destination,
                sourceAsset: sourceCurrency,
                destinationAsset: event.target.value,
                refuel: false,
            });
        }
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { id } = await createSwap({
            source,
            // destination,
            amount: +amount,
            // destinationAddress: address,
            sourceAsset: sourceCurrency,
            destinationAsset: destinationCurrency,
            refuel: false,
        });
    };

    return (
        <Modal
            open={isShow}
            footer={null}
            centered
            bodyStyle={{
                backgroundColor: '#000',
                overflow: 'auto',
                gap: 20,
            }}
            onCancel={() => {
                setIsShow(false);
            }}
        >
            <div className="select-token-modal">
                <div className="header-modal-wrapper">
                    <h3>Select a token</h3>
                </div>

                <div className="line"></div>

                <div style={{ padding: '30px' }}>
                    <>
                        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
                            <Grid item xs={3}>
                                <form onSubmit={handleSubmit}>
                                    <Grid container direction={'column'} spacing={2}>
                                        <Grid item>
                                            <FormControl fullWidth>
                                                <InputLabel id="source-label">Source</InputLabel>
                                                <Select
                                                    sx={{
                                                        color: 'white',
                                                        '.MuiOutlinedInput-notchedOutline': {
                                                            borderColor: 'rgba(228, 219, 233, 0.25)',
                                                        },
                                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                            borderColor: 'rgba(228, 219, 233, 0.25)',
                                                        },
                                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                                            borderColor: 'rgba(228, 219, 233, 0.25)',
                                                        },
                                                        '.MuiSvgIcon-root ': {
                                                            fill: 'white !important',
                                                        },
                                                    }}
                                                    labelId="source-label"
                                                    id="source"
                                                    value={source}
                                                    label="Source"
                                                    onChange={handleSourceChange}
                                                >
                                                    {sources
                                                        .filter((s) => s.name !== destination)
                                                        .map(({ logo, display_name, name }, index) => (
                                                            <MenuItem key={index} value={name}>
                                                                {display_name}
                                                            </MenuItem>
                                                        ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        {/* <Grid item>
                                            <FormControl fullWidth>
                                                <InputLabel id="destination-label">Destination</InputLabel>
                                                <Select
                                                    sx={{
                                                        color: 'white',
                                                        '.MuiOutlinedInput-notchedOutline': {
                                                            borderColor: 'rgba(228, 219, 233, 0.25)',
                                                        },
                                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                            borderColor: 'rgba(228, 219, 233, 0.25)',
                                                        },
                                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                                            borderColor: 'rgba(228, 219, 233, 0.25)',
                                                        },
                                                        '.MuiSvgIcon-root ': {
                                                            fill: 'white !important',
                                                        },
                                                    }}
                                                    labelId="destination-label"
                                                    id="destination"
                                                    value={destination}
                                                    label="Destination"
                                                    // onChange={handleDestinationChange}
                                                >
                                                    {destinations
                                                        .filter((d) => d.name === 'STARKNET_MAINNET')
                                                        .map(({ logo, display_name, name }, index) => (
                                                            <MenuItem key={index} value={name}>
                                                                {display_name}
                                                            </MenuItem>
                                                        ))}
                                                </Select>
                                            </FormControl>
                                        </Grid> */}
                                        <Grid item>
                                            <WhiteBorderTextField
                                                label="Amount"
                                                value={amount}
                                                onChange={handleAmountChange}
                                            />
                                            <FormControl style={{ minWidth: 80 }}>
                                                <InputLabel id="source-select-label">Source Currency</InputLabel>
                                                <Select
                                                    sx={{
                                                        color: 'white',
                                                        '.MuiOutlinedInput-notchedOutline': {
                                                            borderColor: 'rgba(228, 219, 233, 0.25)',
                                                        },
                                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                            borderColor: 'rgba(228, 219, 233, 0.25)',
                                                        },
                                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                                            borderColor: 'rgba(228, 219, 233, 0.25)',
                                                        },
                                                        '.MuiSvgIcon-root ': {
                                                            fill: 'white !important',
                                                        },
                                                    }}
                                                    labelId="source-select-label"
                                                    id="source-currency-select"
                                                    value={sourceCurrency}
                                                    onChange={handleSourceCurrencyChange}
                                                >
                                                    {currencies.map(({ asset }, index) => (
                                                        <MenuItem key={index} value={asset}>
                                                            {asset}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                            <FormControl style={{ minWidth: 80 }}>
                                                <InputLabel id="currency-select-label">Desination Currency</InputLabel>
                                                <Select
                                                    sx={{
                                                        color: 'white',
                                                        '.MuiOutlinedInput-notchedOutline': {
                                                            borderColor: 'rgba(228, 219, 233, 0.25)',
                                                        },
                                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                            borderColor: 'rgba(228, 219, 233, 0.25)',
                                                        },
                                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                                            borderColor: 'rgba(228, 219, 233, 0.25)',
                                                        },
                                                        '.MuiSvgIcon-root ': {
                                                            fill: 'white !important',
                                                        },
                                                    }}
                                                    labelId="destination-select-label"
                                                    id="destination-currency-select"
                                                    value={destinationCurrency}
                                                    onChange={handleDestinationCurrencyChange}
                                                >
                                                    {currencies.map(({ asset }, index) => (
                                                        <MenuItem key={index} value={asset}>
                                                            {asset}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    size="small"
                                                    onClick={showMin}
                                                >
                                                    min
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    size="small"
                                                    onClick={showMax}
                                                >
                                                    max
                                                </Button>
                                                {rate?.min_amount && rate?.max_amount && (
                                                    <p style={{ margin: '0 2px' }}>
                                                        Range: {rate.min_amount} - {rate.max_amount}
                                                    </p>
                                                )}
                                            </div>
                                            {rate?.fee_amount && <p>Fee: {rate.fee_amount}</p>}
                                        </Grid>
                                        <Grid item>
                                            <WhiteBorderTextField
                                                fullWidth
                                                label="Address"
                                                value={address}
                                                onChange={handleAddressChange}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Button fullWidth variant="contained" color="primary" type="submit">
                                                Swap
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </>
                </div>
            </div>
        </Modal>
    );
};

export default ModalLayerSwap;
