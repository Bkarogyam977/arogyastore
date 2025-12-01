import { CheckCircleFilled, MedicineBoxFilled, HomeFilled, FileTextFilled } from '@ant-design/icons';


const LabFeaturesSection = () => {
  return (
    <div className="w-full p-6 bg-white ">
      <div className="grid grid-cols-4 gap-2 md:gap-6">
        {/* 1. Trusted and Accredited Labs */}
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm text-center border border-gray-500">
          <CheckCircleFilled className="text-green-500 text-3xl mb-3" />
          <h3 className="md:font-semibold text-gray-800 mb-1">Trusted and Accredited Labs</h3>
          <p className="text-xs text-gray-500 hidden md:block">NABL & CAP certified laboratories</p>
        </div>

        {/* 2. Doctor Curated Packages */}
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm text-center border border-gray-500">
          <MedicineBoxFilled className="text-red-500 text-3xl mb-3" />
          <h3 className="md:font-semibold text-gray-800 mb-1">Doctor Curated Packages</h3>
          <p className="text-xs text-gray-500 hidden md:block">Designed by medical experts</p>
        </div>

        {/* 3. Home Sample Collection */}
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm text-center border border-gray-500">
          <HomeFilled className="text-blue-500 text-3xl mb-3" />
          <h3 className="md:font-semibold text-gray-800 mb-1">Home Sample Collection</h3>
          <p className="text-xs text-gray-500 hidden md:block">Free sample pickup at your home</p>
        </div>

        {/* 4. Accurate and Fast Reports */}
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm text-center border border-gray-500">
          <FileTextFilled className="text-purple-500 text-3xl mb-3" />
          <h3 className="md:font-semibold text-gray-800 mb-1">Accurate and Fast Reports</h3>
          <p className="text-xs text-gray-500 hidden md:block">Digital reports within 24-48 hours</p>
        </div>
      </div>
    </div>
  );
};


export default LabFeaturesSection;