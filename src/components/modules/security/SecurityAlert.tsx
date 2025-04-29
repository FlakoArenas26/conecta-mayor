
import { AlertTriangle } from "lucide-react";

interface SecurityAlertProps {
  title: string;
  description: string;
  date: string;
}

const SecurityAlert = ({ title, description, date }: SecurityAlertProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mb-4 border-l-4 border-red-500">
      <div className="flex items-start">
        <AlertTriangle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={24} />
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-blue-800">{title}</h3>
            <span className="text-xs text-gray-500">{date}</span>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SecurityAlert;
