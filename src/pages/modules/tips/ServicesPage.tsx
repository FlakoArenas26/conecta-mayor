
import Header from "@/components/layout/Header";
import ServiceCard from "@/components/modules/services/ServiceCard";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Smartphone, MessageCircle, Film } from "lucide-react";

const ServicesPage = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col max-w-md mx-auto">
      <Header title="Recomendaciones" showBack showHome />

      <div className="container p-4 flex-1">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Consejos Tecnológicos</h2>

        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm">
          <p className="text-blue-800 text-center italic">
            "La tecnología puede abrirnos un mundo de posibilidades a cualquier edad"
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <ServiceCard
            title="Lectura Digital"
            icon={BookOpen}
            to="/services/health"
            color="bg-blue-100"
            description="Cómo ajustar el texto para leer cómodamente"
          />

          <ServiceCard
            title="Uso de Celular"
            icon={Smartphone}
            to="/services/finances"
            color="bg-sky-100"
            description="Consejos para usar su teléfono sin dificultad"
          />

          <ServiceCard
            title="Comunicación"
            icon={MessageCircle}
            to="/services/communication"
            color="bg-indigo-100"
            description="Cómo comunicarse fácilmente con familiares y amigos"
          />

          <ServiceCard
            title="Entretenimiento"
            icon={Film}
            to="/services/entertainment"
            color="bg-cyan-100"
            description="Cómo disfrutar contenido digital de forma accesible"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
