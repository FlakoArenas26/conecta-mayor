
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TutorialCompleted = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-off-white flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-lg text-center">
        <div className="bg-green-100 mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6">
          <Check size={48} className="text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">¡Felicidades!</h1>
        <p className="text-lg mb-6">
          Has completado exitosamente este tutorial.
        </p>
        
        <div className="space-y-4">
          <Button 
            onClick={() => navigate("/learn")} 
            className="w-full py-6 text-lg bg-primary hover:bg-primary/90"
          >
            Volver a Tutoriales
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => navigate("/")}
            className="w-full py-6 text-lg"
          >
            Ir al Inicio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TutorialCompleted;
