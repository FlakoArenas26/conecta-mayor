
import { LucideIcon } from "lucide-react";

interface AssistanceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

const AssistanceCard = ({ title, description, icon: Icon, onClick }: AssistanceCardProps) => {
  return (
    <button 
      onClick={onClick}
      className="w-full bg-white rounded-xl shadow-md p-5 mb-4 flex items-center hover:bg-blue-50 transition-colors text-left"
    >
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        <Icon size={32} className="text-blue-600" />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1 text-blue-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </button>
  );
};

export default AssistanceCard;
