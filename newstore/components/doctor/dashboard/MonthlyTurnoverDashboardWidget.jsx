'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { Card, Col, DatePicker, Row, Statistic } from "antd";


import dayjs from 'dayjs'
import {
    Bar, Cell,
    ComposedChart,
    ResponsiveContainer, Tooltip, XAxis, YAxis
} from 'recharts';
import { WALLET_LEDGER_SUM } from '@/dataarrange/constants/api';
import { getAPI, interpolate } from '@/dataarrange/utils/common';

const { MonthPicker } = DatePicker;

const MonthlyTurnoverDashboardWidget = ({ currentPatient }) => {
    const [ledgerDetails, setLedgerDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(dayjs());


    const loadSumData = useCallback((page = 1) => {
        setLoading(true);

        const successFn = (data) => {
            setLedgerDetails(data);
            setLoading(false);
        };

        const errorFn = () => {
            setLoading(false);
        };

        const params = {
            page,
            start: selectedStartDate.startOf('month').format(),
            end: selectedStartDate.endOf('month').format(),
        };

        getAPI(interpolate(WALLET_LEDGER_SUM, [currentPatient.id]), successFn, errorFn, params);
    }, [selectedStartDate, currentPatient.id]);

    useEffect(() => {
        loadSumData();
    }, [selectedStartDate, loadSumData]);


    const changeExpenseFilters = (type, value) => {
        setSelectedStartDate(value);
    };

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const data = [
        { name: 'Credit', value: ledgerDetails.credit },
        { name: 'Debit', value: ledgerDetails.debit },
        { name: 'Profit', value: ledgerDetails.credit - ledgerDetails.debit },
        { name: 'Payout', value: ledgerDetails.payout },
    ];

    return (
        <div>
            <Card loading={loading} style={{ marginBottom: 20 }}>
                <h3>
                    Monthly Turnover
                    <span style={{ float: 'right' }}>
                        <MonthPicker
                            size={'small'}
                            placeholder="Select Month"
                            value={selectedStartDate}
                            allowClear={false}
                            onChange={(e) => changeExpenseFilters('selectedStartDate', e)}
                        />
                    </span>
                </h3>
                <Row className='grid grid-cols-2  md:flex w-full ' style={{ textAlign: 'center' }}>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Statistic title={"Credit"} value={ledgerDetails.credit} precision={2}
                            prefix={'Rs.'} />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Statistic title={"Debit"} value={ledgerDetails.debit} precision={2} prefix={'Rs.'} />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Statistic title={"Profit"}
                            value={ledgerDetails.credit - ledgerDetails.debit}
                            prefix={'Rs.'}
                            precision={2} />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Statistic title={"Payout"} value={ledgerDetails.payout} precision={2}
                            prefix={'Rs.'} />
                    </Col>
                </Row>
                <Row>

                    <Col className='hidden md:block' span={24} style={{ width: '100%', height: 180 }}>
                        <ResponsiveContainer>
                            <ComposedChart
                                layout="vertical"
                                width={500}
                                height={400}
                                data={data}
                            >
                                {/* ... XAxis, YAxis, Tooltip, Bar components */}
                                <XAxis type="number" />
                                <YAxis dataKey="name" type="category" />
                                <Tooltip />
                                <Bar dataKey="value" barSize={20} fill="#413ea0">
                                    {
                                        data.map((entry, index) => <Cell key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]} />)
                                    }
                                </Bar>
                            </ComposedChart>
                        </ResponsiveContainer>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default MonthlyTurnoverDashboardWidget;
