
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface MainButtonProps {
  to: string;
  label: string;
  icon: LucideIcon;
  color?: string;
}

const MainButton = ({ to, label, icon: Icon, color = "bg-blue-600" }: MainButtonProps) => {
  return (
    <Link to={to} className={`btn-main ${color}`}>
      <Icon size={32} />
      <span>{label}</span>
    </Link>
  );
};

export default MainButton;
