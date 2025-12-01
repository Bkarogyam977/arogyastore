import React, { useState, useEffect, useCallback } from "react";
import { Card, Table } from "antd";
import { WALLET_LEDGER } from "@/dataarrange/constants/api";
import { getAPI, interpolate } from "@/dataarrange/utils/common";

const LastPayout = ({ currentPatient }) => {
  const [payoutDetails, setPayoutDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadPayoutData = useCallback(() => {
    setLoading(true);

    const successFn = (data) => {
      setPayoutDetails(data.results);
      setLoading(false);
    };

    const errorFn = () => {
      setLoading(false);
    };

    getAPI(
      interpolate(WALLET_LEDGER, [currentPatient.id]),
      successFn,
      errorFn,
      {
        page_size: 5,
        page: 1,
        sort: "date",
        ledger_type: "Payout",
      }
    );
  }, [currentPatient.id]);

  useEffect(() => {
    loadPayoutData();
  }, [loadPayoutData]);

  const columns = [
    {
      title: "Date",
      dataIndex: "",
      key: "date",
      align: "center",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      align: "right",
    },
  ];

  return (
    <div>
      <Card
        bodyStyle={{ padding: 0 }}
        title={"Last 5 Payouts"}
        style={{ marginBottom: 20 }}
        loading={loading}
      >
        <Table columns={columns} dataSource={payoutDetails} />
      </Card>
    </div>
  );
};

export default LastPayout;
