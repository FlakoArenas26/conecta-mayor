
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  to: string;
  color?: string;
  description?: string;
}

const ServiceCard = ({ 
  title, 
  icon: Icon, 
  to, 
  color = "bg-blue-100", 
  description 
}: ServiceCardProps) => {
  return (
    <Link to={to} className="card-button">
      <div className={`${color} p-4 rounded-full mb-2`}>
        <Icon size={32} className="text-blue-600" />
      </div>
      <span className="font-medium text-center">{title}</span>
      {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
    </Link>
  );
};

export default ServiceCard;
