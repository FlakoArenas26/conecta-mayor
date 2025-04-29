
import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showHome?: boolean;
}

const Header = ({ title, showBack = false, showHome = false }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-600 p-4 text-white flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
        {showBack && (
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 rounded-full hover:bg-blue-500"
            aria-label="Regresar"
          >
            <ArrowLeft size={28} />
          </button>
        )}
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      {showHome && (
        <button 
          onClick={() => navigate("/")} 
          className="p-2 rounded-full hover:bg-blue-500"
          aria-label="Inicio"
        >
          <Home size={28} />
        </button>
      )}
    </header>
  );
};

export default Header;
