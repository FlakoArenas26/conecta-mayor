
import Header from "@/components/layout/Header";
import TutorialCard from "@/components/modules/learn/TutorialCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LearnPage = () => {
  // Sample tutorial data
  const tutorials = {
    basic: [
      {
        id: "basic-1",
        title: "Usar tu teléfono",
        description: "Aprende a encender, apagar y ajustar el volumen de tu dispositivo.",
        difficulty: "basic" as const
      },
      {
        id: "basic-2",
        title: "Hacer llamadas",
        description: "Aprende a realizar y recibir llamadas telefónicas.",
        difficulty: "basic" as const
      },
      {
        id: "basic-3",
        title: "Enviar mensajes",
        description: "Aprende a enviar y recibir mensajes de texto y WhatsApp.",
        difficulty: "basic" as const
      }
    ],
    intermediate: [
      {
        id: "inter-1",
        title: "Usar el correo electrónico",
        description: "Cómo enviar, recibir y organizar tus correos electrónicos.",
        difficulty: "intermediate" as const
      },
      {
        id: "inter-2",
        title: "Navegar por internet",
        description: "Búsqueda de información y navegación segura en internet.",
        difficulty: "intermediate" as const
      },
      {
        id: "inter-3",
        title: "Instalar aplicaciones",
        description: "Cómo encontrar, instalar y usar aplicaciones útiles.",
        difficulty: "intermediate" as const
      }
    ],
    advanced: [
      {
        id: "adv-1",
        title: "Banca en línea",
        description: "Gestionar tus finanzas de forma segura desde tu dispositivo.",
        difficulty: "advanced" as const
      },
      {
        id: "adv-2",
        title: "Trámites gubernamentales",
        description: "Realizar gestiones oficiales en plataformas de gobierno.",
        difficulty: "advanced" as const
      },
      {
        id: "adv-3",
        title: "Compras en línea",
        description: "Aprender a comprar productos de forma segura por internet.",
        difficulty: "advanced" as const
      }
    ]
  };

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header title="Aprender" showBack showHome />
      
      <div className="container p-4 flex-1">
        <h2 className="section-title">Tutoriales</h2>
        
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="basic" className="text-base">Básicos</TabsTrigger>
            <TabsTrigger value="intermediate" className="text-base">Intermedios</TabsTrigger>
            <TabsTrigger value="advanced" className="text-base">Avanzados</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic">
            {tutorials.basic.map(tutorial => (
              <TutorialCard key={tutorial.id} {...tutorial} />
            ))}
          </TabsContent>
          
          <TabsContent value="intermediate">
            {tutorials.intermediate.map(tutorial => (
              <TutorialCard key={tutorial.id} {...tutorial} />
            ))}
          </TabsContent>
          
          <TabsContent value="advanced">
            {tutorials.advanced.map(tutorial => (
              <TutorialCard key={tutorial.id} {...tutorial} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LearnPage;
