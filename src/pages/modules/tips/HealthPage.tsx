
import Header from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Eye, FileText } from "lucide-react";

const HealthPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col max-w-md mx-auto">
      <Header title="Lectura Digital" showBack showHome />
      
      <div className="container p-4 flex-1">
        <h2 className="section-title text-blue-700">Consejos de Lectura</h2>
        
        <Card className="mb-4 border-l-4 border-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Eye size={20} className="text-blue-500" />
              Cuidando su Vista
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-3 bg-blue-50 rounded-lg mb-2">
              <p className="font-medium">Ajustar el brillo de la pantalla</p>
              <p className="text-sm">Mantenga un brillo adecuado para no cansar la vista. Por lo general, el brillo debe ser similar a la luz ambiental de la habitación.</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="font-medium">Tome descansos regulares</p>
              <p className="text-sm">La regla 20-20-20: cada 20 minutos, mire algo a 20 pies (6 metros) durante 20 segundos.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText size={20} className="text-blue-500" />
              Aumentando la Legibilidad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-3 bg-blue-50 rounded-lg mb-2">
              <p className="font-medium">Aumentar el tamaño del texto</p>
              <p className="text-sm">En la mayoría de los dispositivos, puede ir a Configuración > Pantalla > Tamaño de texto para hacerlo más grande.</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="font-medium">Usar modo oscuro o luz</p>
              <p className="text-sm">Según la hora del día, puede cambiar entre modo oscuro (fondo negro) y modo luz (fondo blanco) para mayor comodidad.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HealthPage;
