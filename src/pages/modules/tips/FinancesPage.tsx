
import Header from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Settings, ZoomIn, Bell } from "lucide-react";

const FinancesPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col max-w-md mx-auto">
      <Header title="Uso del Celular" showBack showHome />
      
      <div className="container p-4 flex-1">
        <h2 className="section-title text-blue-700">Consejos para usar su teléfono</h2>
        
        <Card className="mb-4 border-l-4 border-blue-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <ZoomIn size={20} className="text-blue-600" />
              Personalizar la Pantalla
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-3 bg-blue-50 rounded-lg mb-2">
              <p className="font-medium">Iconos más grandes</p>
              <p className="text-sm">Mantenga presionada la pantalla inicial y busque la opción de "Configuración de la pantalla" para aumentar el tamaño de los iconos.</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="font-medium">Teclado más grande</p>
              <p className="text-sm">En la configuración del teclado puede activar un teclado más grande para escribir con mayor facilidad.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-4 border-l-4 border-blue-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Settings size={20} className="text-blue-600" />
              Opciones de Accesibilidad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-3 bg-blue-50 rounded-lg mb-2">
              <p className="font-medium">Lupa integrada</p>
              <p className="text-sm">La mayoría de los teléfonos tienen una opción de lupa en el menú de accesibilidad para ayudarle a leer textos pequeños.</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="font-medium">Asistente de voz</p>
              <p className="text-sm">Active el asistente de voz para que pueda dar comandos hablados sin necesidad de escribir.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-blue-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell size={20} className="text-blue-600" />
              Notificaciones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="font-medium">Personalice sus alertas</p>
              <p className="text-sm">Ajuste el volumen de las notificaciones o active la vibración para no perderse llamadas o mensajes importantes.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinancesPage;
