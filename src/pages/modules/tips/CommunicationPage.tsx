import Header from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Video, Phone, Users, Info } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

const CommunicationPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col max-w-md mx-auto">
      <Header title="Comunicación" showBack showHome />

      <div className="container p-4 flex-1">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Cómo comunicarte fácilmente</h2>

        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
          <p className="text-blue-800 text-center italic">
            "Mantente conectado con tus seres queridos de forma sencilla"
          </p>
        </div>

        {/* Sección de Consejos */}
        <Card className="mb-4 border-l-4 border-indigo-400">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Info size={20} className="text-indigo-500" />
              Consejos Básicos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-indigo-50 p-3 rounded-lg">
              <p className="font-medium">1. Agrega contactos importantes</p>
              <p className="text-sm text-gray-600">Guarda los números de familiares en tu lista de contactos</p>
            </div>
            <div className="bg-indigo-50 p-3 rounded-lg">
              <p className="font-medium">2. Usa mensajes de voz</p>
              <p className="text-sm text-gray-600">Si te cuesta escribir, graba un mensaje de audio</p>
            </div>
            <div className="bg-indigo-50 p-3 rounded-lg">
              <p className="font-medium">3. Configura contactos favoritos</p>
              <p className="text-sm text-gray-600">Marca a tus familiares como favoritos para llamarlos más fácil</p>
            </div>
          </CardContent>
        </Card>

        {/* Opciones de Comunicación */}
        <Card className="mb-4 border-l-4 border-indigo-400">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageCircle size={20} className="text-indigo-500" />
              Formas de comunicarte
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Button className="flex flex-col h-auto py-4 gap-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
              <Phone size={24} />
              <span>Llamada</span>
              <span className="text-xs font-normal">Simple y directo</span>
            </Button>
            <Button className="flex flex-col h-auto py-4 gap-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
              <Video size={24} />
              <span>Videollamada</span>
              <span className="text-xs font-normal">Ver a tus seres queridos</span>
            </Button>
            <Button className="flex flex-col h-auto py-4 gap-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
              <MessageCircle size={24} />
              <span>Mensaje</span>
              <span className="text-xs font-normal">Texto o audio</span>
            </Button>
            <Button className="flex flex-col h-auto py-4 gap-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
              <Users size={24} />
              <span>Grupo</span>
              <span className="text-xs font-normal">Habla con varios</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CommunicationPage;