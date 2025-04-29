import Header from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Film, Music, BookOpen, Info } from "lucide-react";

const EntertainmentPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col max-w-md mx-auto">
      <Header title="Entretenimiento" showBack showHome />

      <div className="container p-4 flex-1">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Cómo disfrutar contenido digital</h2>

        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
          <p className="text-blue-800 text-center italic">
            "Descubre nuevas formas de entretenimiento adaptadas a ti"
          </p>
        </div>

        {/* Sección de Consejos */}
        <Card className="mb-6 border-l-4 border-cyan-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Info size={20} className="text-cyan-600" />
              Consejos Prácticos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-cyan-50 p-3 rounded-lg">
              <p className="font-medium">1. Ajusta el tamaño del texto</p>
              <p className="text-sm text-gray-600">Ve a Configuración → Accesibilidad → Tamaño de texto</p>
            </div>
            <div className="bg-cyan-50 p-3 rounded-lg">
              <p className="font-medium">2. Activa subtítulos automáticos</p>
              <p className="text-sm text-gray-600">En YouTube: Toca el icono CC → Configuración</p>
            </div>
            <div className="bg-cyan-50 p-3 rounded-lg">
              <p className="font-medium">3. Usa controles de voz</p>
              <p className="text-sm text-gray-600">Di "Ok Google, reproducir música relajante"</p>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Videos Recomendados */}
        <Card className="mb-6 border-l-4 border-cyan-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Film size={20} className="text-cyan-600" />
              Videos recomendados
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-cyan-100 h-12 w-12 rounded-md flex items-center justify-center mt-1">
                <Film size={20} className="text-cyan-600" />
              </div>
              <div>
                <p className="font-medium">Tutorial de jardinería básica</p>
                <p className="text-sm text-gray-600">15 min • Subtítulos disponibles</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-cyan-100 h-12 w-12 rounded-md flex items-center justify-center mt-1">
                <Film size={20} className="text-cyan-600" />
              </div>
              <div>
                <p className="font-medium">Recetas fáciles para principiantes</p>
                <p className="text-sm text-gray-600">22 min • Audio descriptivo</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Audiolibros */}
        <Card className="mb-6 border-l-4 border-cyan-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen size={20} className="text-cyan-600" />
              Audiolibros recomendados
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-cyan-100 h-12 w-12 rounded-md flex items-center justify-center mt-1">
                <BookOpen size={20} className="text-cyan-600" />
              </div>
              <div>
                <p className="font-medium">Cuentos clásicos narrados</p>
                <p className="text-sm text-gray-600">3 horas 15 min • Voz clara</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-cyan-100 h-12 w-12 rounded-md flex items-center justify-center mt-1">
                <BookOpen size={20} className="text-cyan-600" />
              </div>
              <div>
                <p className="font-medium">Historia del arte para todos</p>
                <p className="text-sm text-gray-600">5 horas • Con explicaciones</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Música */}
        <Card className="border-l-4 border-cyan-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Music size={20} className="text-cyan-600" />
              Listas de música
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-cyan-100 h-12 w-12 rounded-md flex items-center justify-center mt-1">
                <Music size={20} className="text-cyan-600" />
              </div>
              <div>
                <p className="font-medium">Boleros de los 60s</p>
                <p className="text-sm text-gray-600">2 horas • 25 canciones</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-cyan-100 h-12 w-12 rounded-md flex items-center justify-center mt-1">
                <Music size={20} className="text-cyan-600" />
              </div>
              <div>
                <p className="font-medium">Música clásica relajante</p>
                <p className="text-sm text-gray-600">3 horas • Para leer o dormir</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EntertainmentPage;