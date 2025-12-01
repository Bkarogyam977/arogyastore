'use client'
import React, { useState, useEffect } from "react";
import { Button, Col, Row, Table } from "antd";
import dayjs from "dayjs";
import { exportToExcel, exportToPDF } from "@/dataarrange/utils/export";
import { ExportOutlined, FilePdfOutlined } from "@ant-design/icons";

const CustomizedTable = (props) => {
  const [state, setState] = useState({ ...props });

  const pdfExport = () => {
    const excelColumns = state.columns.map((item) => ({ title: item.title, dataKey: item.title }));
    const dataArrayForExcel = state.dataSource.map((dataRow) => {
      const dataObjectToPush = {};
      state.columns.forEach((column) => {
        if (column.export) {
          dataObjectToPush[column.title] = column.export(dataRow[column.dataIndex], dataRow);
        } else {
          dataObjectToPush[column.title] = dataRow[column.dataIndex];
        }
      });
      return dataObjectToPush;
    });
    exportToPDF(excelColumns, dataArrayForExcel, "Export" + dayjs(), true);
  };

  const excelExport = () => {
    const excelColumns = state.columns.map((item) => item.title);
    const dataArrayForExcel = state.dataSource.map((dataRow) => {
      const dataObjectToPush = {};
      state.columns.forEach((column) => {
        if (column.export) {
          dataObjectToPush[column.title] = column.export(dataRow[column.dataIndex], dataRow);
        } else {
          dataObjectToPush[column.title] = dataRow[column.dataIndex];
        }
      });
      return dataObjectToPush;
    });
    exportToExcel(excelColumns, dataArrayForExcel, "Export" + dayjs());
  };

  useEffect(() => {
    if (props.columns !== state.columns || props.dataSource !== state.dataSource || props.loading !== state.loading) {
      setState({ ...props });
    }
  }, [props, state.columns, state.dataSource, state.loading]);
  return (
    <div>
      {props.hideReport ? null : (
        <Row style={{ marginBottom: "5px" }}>
          <Col>
            <Button.Group size="small">
              <Button
                className="border border-blue-500 shadow-md text-black"
                disabled={state.loading}
                type="primary"
                onClick={excelExport}
              >
                <ExportOutlined /> Excel
              </Button>
              <Button
                className="border border-blue-500 shadow-md text-black"
                disabled={state.loading}
                type="primary"
                onClick={pdfExport}
              >
                <FilePdfOutlined /> PDF
              </Button>
            </Button.Group>
          </Col>
        </Row>
      )}
      <Row>
        <Table className="w-full" {...state} />
      </Row>
    </div>
  );
};

export default CustomizedTable;
