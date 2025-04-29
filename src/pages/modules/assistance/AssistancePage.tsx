
import Header from "@/components/layout/Header";
import AssistanceCard from "@/components/modules/assistance/AssistanceCard";
import { Calendar, MessageSquare, Phone, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AssistancePage = () => {
  const navigate = useNavigate();

  const handleAssistanceClick = (type: string) => {
    switch (type) {
      case "SOS Digital":
        navigate("/assistance/sos");
        break;
      case "Videollamada de Asistencia":
        navigate("/assistance/videocall");
        break;
      case "Chat de Ayuda":
        navigate("/assistance/chat");
        break;
      case "Agendar Capacitación":
        navigate("/assistance/schedule");
        break;
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col max-w-md mx-auto">
      <Header title="Asistencia" showBack showHome />
      
      <div className="container p-4 flex-1">
        <h2 className="section-title text-blue-700">¿Cómo podemos ayudarte?</h2>
        
        <div className="space-y-4">
          <AssistanceCard
            title="SOS Digital"
            description="Contacta inmediatamente con un familiar registrado o voluntario"
            icon={Phone}
            onClick={() => handleAssistanceClick("SOS Digital")}
          />
          
          <AssistanceCard
            title="Videollamada de Asistencia"
            description="Comparte tu pantalla para recibir ayuda guiada"
            icon={Users}
            onClick={() => handleAssistanceClick("Videollamada de Asistencia")}
          />
          
          <AssistanceCard
            title="Chat de Ayuda"
            description="Envía mensajes para recibir soporte por escrito"
            icon={MessageSquare}
            onClick={() => handleAssistanceClick("Chat de Ayuda")}
          />
          
          <AssistanceCard
            title="Agendar Capacitación"
            description="Programa una sesión personalizada con un instructor"
            icon={Calendar}
            onClick={() => handleAssistanceClick("Agendar Capacitación")}
          />
        </div>
      </div>
    </div>
  );
};

export default AssistancePage;
