
import Header from "@/components/layout/Header";
import SecurityAlert from "@/components/modules/security/SecurityAlert";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Lock, Bell } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SecurityPage = () => {
  const navigate = useNavigate();
  // Demo alerts
  const [alerts] = useState([
    {
      id: 1,
      title: "Mensaje de banco falso",
      description: "Están circulando mensajes falsos que se hacen pasar por bancos pidiendo datos personales. Nunca comparta sus claves o códigos.",
      date: "Hoy"
    },
    {
      id: 2,
      title: "Estafa en redes sociales",
      description: "Cuidado con ofertas demasiado buenas para ser verdad en redes sociales. Verifique siempre la autenticidad del vendedor.",
      date: "Ayer"
    },
    {
      id: 3,
      title: "Aplicación maliciosa",
      description: "Se ha detectado una aplicación que roba datos personales. No instale aplicaciones fuera de tiendas oficiales.",
      date: "2 días atrás"
    }
  ]);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col max-w-md mx-auto">
      <Header title="Seguridad" showBack showHome />
      
      <div className="container p-4 flex-1">
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
          <div className="flex items-center gap-3">
            <Shield className="text-blue-600" size={28} />
            <h2 className="text-xl font-bold text-blue-800">Tu protección digital</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col gap-2"
              onClick={() => navigate("/security/verify-links")}
            >
              <AlertTriangle className="text-blue-600" size={24} />
              <span>Verificar Enlaces</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col gap-2"
              onClick={() => navigate("/security/passwords")}
            >
              <Lock className="text-blue-600" size={24} />
              <span>Contraseñas</span>
            </Button>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-blue-800">Alertas de Seguridad</h2>
            <Bell className="text-blue-600" size={24} />
          </div>
          
          {alerts.map(alert => (
            <SecurityAlert
              key={alert.id}
              title={alert.title}
              description={alert.description}
              date={alert.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
