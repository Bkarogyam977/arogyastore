import React, { useState, useEffect, useCallback } from 'react';
import { Card, DatePicker } from 'antd';
import moment from 'moment';
import { Bar, Cell, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { WALLET_LEDGER_TOP_ADVISOR } from '@/dataarrange/constants/api';
import { getAPI, interpolate } from '@/dataarrange/utils/common';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);


const { RangePicker } = DatePicker;

const TopAdvisors = ({ currentPatient }) => {
  const [advisorDetails, setAdvisorDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(dayjs().startOf('month'));
  const [endDate, setEndDate] = useState(dayjs().endOf('month'));




  const loadAdvisors = useCallback(() => {
    setLoading(true);

    const successFn = (data) => {
      setAdvisorDetails(data);
      setLoading(false);
    };

    const errorFn = () => {
      setLoading(false);
    };

    getAPI(
      interpolate(WALLET_LEDGER_TOP_ADVISOR, [currentPatient.id]),
      successFn,
      errorFn,
      {
        start: startDate.format(),
        end: endDate.format(),
        agent_id: currentPatient.id,
      }
    );
  }, [startDate, endDate, currentPatient.id]);


  useEffect(() => {
    loadAdvisors();
  }, [loadAdvisors]);
  const changeRange = (dates) => {
    console.log(dates)
    if (dates && dates.length === 2) {
      setStartDate(dayjs(dates[0]));
      setEndDate(dayjs(dates[1]));

    }
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  console.log(startDate.format('YYYY-MM-DD'))
  return (

    <div>
      <Card bodyStyle={{ width: '100%', height: 250 }} style={{ marginBottom: 20 }} loading={loading}>
        <h2 style={{ marginBottom: 10 }}>
          Top 5 Advisors
          <RangePicker

            style={{ float: 'right' }}
            onChange={changeRange}
            allowClear={false}
            value={[startDate, endDate]}
          />
        </h2>
        <ResponsiveContainer>
          <ComposedChart data={advisorDetails}>
            <YAxis dataKey="total" type="number" />
            <XAxis dataKey="advisor.user.first_name" type="category" />
            <Tooltip />
            <Bar dataKey="total" barSize={50} fill="#413ea0">
              {advisorDetails.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default TopAdvisors;
