
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, User, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const SOSPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCall = (contact: string) => {
    toast({
      title: "Llamando...",
      description: `Iniciando llamada a ${contact}`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col max-w-md mx-auto">
      <Header title="SOS Digital" showBack showHome />
      
      <div className="container p-4 flex-1">
        <h2 className="section-title text-blue-700">Contacto de Emergencia</h2>
        
        <Card className="mb-6 border-l-4 border-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Users size={20} className="text-blue-500" />
              Contactos de Emergencia
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "María García (Hija)", phone: "555-123-4567" },
              { name: "Carlos López (Hijo)", phone: "555-987-6543" },
              { name: "Dr. Rodríguez", phone: "555-456-7890" }
            ].map((contact) => (
              <div key={contact.name} className="p-3 bg-blue-100 rounded-lg flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="bg-blue-200 p-2 rounded-full">
                    <User size={16} className="text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-xs text-gray-600">{contact.phone}</p>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  onClick={() => handleCall(contact.name)}
                  className="bg-blue-600"
                >
                  <Phone size={16} className="mr-1" /> Llamar
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Button 
          className="w-full py-8 mb-4 bg-red-600 hover:bg-red-700 text-xl font-bold"
          onClick={() => {
            toast({
              title: "Alerta Enviada",
              description: "Se ha enviado una alerta a todos tus contactos",
              duration: 3000,
            });
          }}
        >
          <Phone size={28} className="mr-2" /> EMERGENCIA SOS
        </Button>
        
        <Card className="border-l-4 border-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Instrucciones</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Presiona el botón rojo para enviar una alerta a todos tus contactos de emergencia.
              Ellos recibirán tu ubicación y podrán llamarte inmediatamente.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SOSPage;
