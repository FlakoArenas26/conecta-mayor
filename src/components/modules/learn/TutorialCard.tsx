
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TutorialCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: "basic" | "intermediate" | "advanced";
}

const TutorialCard = ({ id, title, description, difficulty }: TutorialCardProps) => {
  const difficultyMap = {
    basic: "Básico",
    intermediate: "Intermedio",
    advanced: "Avanzado"
  };
  
  const difficultyColorMap = {
    basic: "bg-green-100 text-green-800",
    intermediate: "bg-blue-100 text-blue-800",
    advanced: "bg-purple-100 text-purple-800"
  };

  return (
    <Link to={`/learn/tutorial/${id}`} className="tutorial-card block hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-blue-800">{title}</h3>
        <ChevronRight className="text-blue-600" />
      </div>
      <p className="text-gray-600 mb-3">{description}</p>
      <div className={`inline-block px-3 py-1 rounded-full text-sm ${difficultyColorMap[difficulty]}`}>
        {difficultyMap[difficulty]}
      </div>
    </Link>
  );
};

export default TutorialCard;
