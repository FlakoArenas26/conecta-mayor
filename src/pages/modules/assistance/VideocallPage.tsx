
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Users, Video, Phone, Mic, MicOff, PhoneOff, Share } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const VideocallPage = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { toast } = useToast();

  const handleStartCall = () => {
    setIsCallActive(true);
    toast({
      title: "Videollamada iniciada",
      description: "Conectando con el asistente...",
      duration: 3000,
    });
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    toast({
      title: "Videollamada finalizada",
      description: "Gracias por usar nuestra asistencia",
      duration: 3000,
    });
  };

  const handleShareScreen = () => {
    toast({
      title: "Compartir pantalla",
      description: "Se ha iniciado la compartición de pantalla",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col max-w-md mx-auto">
      <Header title="Videollamada de Asistencia" showBack showHome />
      
      <div className="container p-4 flex-1">
        <h2 className="section-title text-blue-700">Asistencia por Video</h2>
        
        {isCallActive ? (
          <div className="mb-6">
            <div className="aspect-video bg-blue-900 rounded-xl flex items-center justify-center mb-4 relative">
              <Users size={48} className="text-blue-300" />
              <div className="absolute bottom-4 right-4 bg-blue-600 rounded-lg p-1">
                <Avatar className="h-20 w-20 flex items-center justify-center">
                  <span className="text-center">Yo</span>
                </Avatar>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mb-6">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-14 w-14 rounded-full bg-white border-blue-200"
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <MicOff size={24} className="text-red-500" /> : <Mic size={24} className="text-blue-600" />}
              </Button>
              
              <Button 
                variant="destructive" 
                size="icon" 
                className="h-14 w-14 rounded-full"
                onClick={handleEndCall}
              >
                <PhoneOff size={24} />
              </Button>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="h-14 w-14 rounded-full bg-white border-blue-200"
                onClick={handleShareScreen}
              >
                <Share size={24} className="text-blue-600" />
              </Button>
            </div>
            
            <Card className="border-l-4 border-blue-500">
              <CardContent className="p-4">
                <p className="text-center">
                  <span className="font-medium">Asistente:</span> Carlos Méndez
                </p>
                <p className="text-center text-sm text-blue-500 animate-pulse">
                  Estableciendo conexión...
                </p>
              </CardContent>
            </Card>
          </div>
        ) : (
          <>
            <Card className="mb-6 border-l-4 border-blue-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Video size={20} className="text-blue-500" />
                  Iniciar Videollamada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Un asistente te ayudará con tus dudas tecnológicas. Podrás compartir tu pantalla
                  para recibir ayuda guiada.
                </p>
                <Button 
                  className="w-full bg-blue-600"
                  onClick={handleStartCall}
                >
                  <Video size={20} className="mr-2" /> Iniciar Videollamada
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-blue-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Asistentes Disponibles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Carlos Méndez", role: "Especialista en Smartphones" },
                  { name: "Ana Torres", role: "Asistente de Aplicaciones" },
                  { name: "Miguel Sánchez", role: "Soporte Técnico General" }
                ].map((assistant) => (
                  <div key={assistant.name} className="p-3 bg-blue-100 rounded-lg flex gap-3 items-center">
                    <Avatar className="bg-blue-200 h-10 w-10 flex items-center justify-center">
                      <span className="text-center">{assistant.name[0]}</span>
                    </Avatar>
                    <div>
                      <p className="font-medium">{assistant.name}</p>
                      <p className="text-xs text-gray-600">{assistant.role}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default VideocallPage;
