'use client';
import { UsergroupAddOutlined, SmileOutlined, HistoryOutlined } from "@ant-design/icons";

const stats = [
  { icon: <UsergroupAddOutlined className="text-blue-600 text-3xl" />, value: "1,000+", label: "Advisors Working" },
  { icon: <SmileOutlined className="text-green-600 text-3xl" />, value: "200,000+", label: "Happy Customers" },
  { icon: <HistoryOutlined className="text-orange-600 text-3xl" />, value: "45+ years", label: "of Trust" },
];

const ArogyamStats = () => {
  return (
    <div className="w-full bg-gray-100 p-5 pb-24 rounded-lg shadow-md md:hidden">
      <h2 className="text-2xl font-bold text-green-500 mb-4">Largest Arogyam Advisor Network</h2>
      <div className="flex flex-col gap-4">
        {stats.map((item, index) => (
          <div key={index} className="flex items-center justify-start gap-3">
            {item.icon}
            <div className="px-2">
              <p className="text-xl font-semibold text-gray-800">{item.value}</p>
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ArogyamStats;
