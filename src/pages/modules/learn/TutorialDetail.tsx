
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, HelpCircle, BookOpen, Smartphone, Mail, CreditCard, Globe, Settings } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const tutorialLibrary = {
  "basic-1": {
    title: "Usar tu teléfono",
    totalSteps: 3,
    steps: [
      {
        title: "Encender tu dispositivo",
        content: "Mantén presionado el botón de encendido ubicado en el lateral de tu teléfono durante 3 segundos hasta que veas el logo aparecer en pantalla.",
        icon: <Smartphone size={48} className="text-blue-500" />
      },
      {
        title: "Ajustar el volumen",
        content: "Utiliza los botones de volumen en el lateral de tu teléfono para subir o bajar el sonido. Presiona arriba para subir y abajo para bajar.",
        icon: <Smartphone size={48} className="text-blue-500" />
      },
      {
        title: "Apagar tu dispositivo",
        content: "Mantén presionado el botón de encendido y, cuando aparezca el menú en pantalla, desliza donde dice 'Apagar'.",
        icon: <Smartphone size={48} className="text-blue-500" />
      }
    ]
  },
  "basic-2": {
    title: "Hacer llamadas",
    totalSteps: 3,
    steps: [
      {
        title: "Abrir la aplicación de teléfono",
        content: "Busca en tu pantalla principal el ícono de teléfono y púlsalo para abrir la aplicación.",
        icon: <Smartphone size={48} className="text-blue-500" />
      },
      {
        title: "Marcar un número",
        content: "Utiliza el teclado numérico para introducir el número de teléfono que deseas llamar.",
        icon: <Smartphone size={48} className="text-blue-500" />
      },
      {
        title: "Finalizar una llamada",
        content: "Para terminar la llamada, presiona el botón rojo con el ícono de teléfono.",
        icon: <Smartphone size={48} className="text-blue-500" />
      }
    ]
  },
  "basic-3": {
    title: "Enviar mensajes",
    totalSteps: 3,
    steps: [
      {
        title: "Abrir la aplicación de mensajes",
        content: "Busca en tu pantalla principal el ícono de mensajes y púlsalo para abrir la aplicación.",
        icon: <Mail size={48} className="text-blue-500" />
      },
      {
        title: "Crear un nuevo mensaje",
        content: "Pulsa el botón con el símbolo '+' o 'Nuevo mensaje' para comenzar a escribir un mensaje.",
        icon: <Mail size={48} className="text-blue-500" />
      },
      {
        title: "Enviar el mensaje",
        content: "Cuando hayas terminado de escribir, pulsa el botón de enviar (generalmente una flecha o avión de papel).",
        icon: <Mail size={48} className="text-blue-500" />
      }
    ]
  },
  "inter-1": {
    title: "Usar el correo electrónico",
    totalSteps: 3,
    steps: [
      {
        title: "Configurar tu cuenta",
        content: "Abre la aplicación de correo y sigue las instrucciones para añadir tu cuenta de correo electrónico.",
        icon: <Mail size={48} className="text-blue-500" />
      },
      {
        title: "Revisar bandeja de entrada",
        content: "Pulsa en 'Bandeja de entrada' para ver todos los correos electrónicos recibidos.",
        icon: <Mail size={48} className="text-blue-500" />
      },
      {
        title: "Escribir un nuevo correo",
        content: "Pulsa el botón de 'Nuevo correo' o '+' para comenzar a escribir un correo electrónico nuevo.",
        icon: <Mail size={48} className="text-blue-500" />
      }
    ]
  },
  "inter-2": {
    title: "Navegar por internet",
    totalSteps: 3,
    steps: [
      {
        title: "Abrir el navegador",
        content: "Busca en tu pantalla principal el ícono del navegador (Chrome, Safari) y púlsalo para abrir.",
        icon: <Globe size={48} className="text-blue-500" />
      },
      {
        title: "Buscar información",
        content: "Toca la barra de búsqueda en la parte superior y escribe lo que quieres buscar.",
        icon: <Globe size={48} className="text-blue-500" />
      },
      {
        title: "Navegar entre páginas",
        content: "Utiliza los botones de atrás y adelante para moverte entre las páginas que has visitado.",
        icon: <Globe size={48} className="text-blue-500" />
      }
    ]
  },
  "inter-3": {
    title: "Instalar aplicaciones",
    totalSteps: 3,
    steps: [
      {
        title: "Abrir la tienda de aplicaciones",
        content: "Busca en tu pantalla principal el ícono de la tienda de aplicaciones (Play Store o App Store).",
        icon: <Settings size={48} className="text-blue-500" />
      },
      {
        title: "Buscar una aplicación",
        content: "Utiliza la barra de búsqueda para encontrar la aplicación que deseas instalar.",
        icon: <Settings size={48} className="text-blue-500" />
      },
      {
        title: "Descargar e instalar",
        content: "Pulsa el botón 'Instalar' o 'Obtener' y espera a que la aplicación se descargue e instale.",
        icon: <Settings size={48} className="text-blue-500" />
      }
    ]
  },
  "adv-1": {
    title: "Banca en línea",
    totalSteps: 3,
    steps: [
      {
        title: "Configurar la aplicación bancaria",
        content: "Descarga la aplicación de tu banco e inicia sesión con las credenciales proporcionadas por tu banco.",
        icon: <CreditCard size={48} className="text-blue-500" />
      },
      {
        title: "Consultar saldos",
        content: "En la pantalla principal, podrás ver tus cuentas y el saldo disponible en cada una.",
        icon: <CreditCard size={48} className="text-blue-500" />
      },
      {
        title: "Realizar transferencias",
        content: "Busca la opción de 'Transferencias' y sigue las instrucciones para enviar dinero a otra cuenta.",
        icon: <CreditCard size={48} className="text-blue-500" />
      }
    ]
  },
  "adv-2": {
    title: "Trámites gubernamentales",
    totalSteps: 3,
    steps: [
      {
        title: "Acceder al portal",
        content: "Busca el sitio web oficial del gobierno o la aplicación correspondiente e inicia sesión.",
        icon: <BookOpen size={48} className="text-blue-500" />
      },
      {
        title: "Buscar el trámite",
        content: "Navega por las categorías o utiliza el buscador para encontrar el trámite que necesitas.",
        icon: <BookOpen size={48} className="text-blue-500" />
      },
      {
        title: "Completar formularios",
        content: "Sigue las instrucciones y completa todos los campos requeridos para realizar el trámite.",
        icon: <BookOpen size={48} className="text-blue-500" />
      }
    ]
  },
  "adv-3": {
    title: "Compras en línea",
    totalSteps: 3,
    steps: [
      {
        title: "Elegir productos",
        content: "Navega por la tienda en línea y añade los productos que deseas comprar al carrito.",
        icon: <CreditCard size={48} className="text-blue-500" />
      },
      {
        title: "Proceso de pago",
        content: "Revisa tu carrito, confirma los productos y procede al pago introduciendo tus datos.",
        icon: <CreditCard size={48} className="text-blue-500" />
      },
      {
        title: "Seguimiento de pedido",
        content: "Una vez realizada la compra, podrás seguir el estado de tu pedido desde la sección 'Mis pedidos'.",
        icon: <CreditCard size={48} className="text-blue-500" />
      }
    ]
  }
};

const TutorialDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [tutorialContent, setTutorialContent] = useState<any>(null);

  useEffect(() => {
    // Get tutorial content based on ID
    if (id && tutorialLibrary[id as keyof typeof tutorialLibrary]) {
      setTutorialContent(tutorialLibrary[id as keyof typeof tutorialLibrary]);
      setCurrentStep(0); // Reset to first step when tutorial changes
    } else {
      navigate("/learn"); // Redirect if invalid ID
    }
  }, [id, navigate]);

  if (!tutorialContent) {
    return <div className="p-4 text-center">Cargando tutorial...</div>;
  }

  const handleNext = () => {
    if (currentStep < tutorialContent.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/learn/tutorial/completed");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / tutorialContent.totalSteps) * 100;
  const currentContent = tutorialContent.steps[currentStep];

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col max-w-md mx-auto">
      <Header title={tutorialContent.title} showBack showHome />
      
      <div className="container p-4 flex-1">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Paso {currentStep + 1} de {tutorialContent.totalSteps}
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-1 text-blue-600"
              onClick={() => {}}
            >
              <HelpCircle size={16} />
              <span>Ayuda</span>
            </Button>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <Card className="p-6 mb-6 border-l-4 border-blue-500">
          <h2 className="text-xl font-bold mb-4 text-blue-800">{currentContent.title}</h2>
          
          <div className="mb-6 rounded-lg overflow-hidden flex justify-center items-center bg-blue-100 p-6">
            {currentContent.icon}
          </div>
          
          <p className="text-lg">{currentContent.content}</p>
        </Card>
        
        <div className="flex justify-between gap-4">
          <Button 
            variant="outline" 
            className="flex-1 text-lg py-6 border-blue-300 text-blue-700" 
            disabled={currentStep === 0}
            onClick={handlePrevious}
          >
            Anterior
          </Button>
          
          <Button 
            className="flex-1 text-lg py-6 bg-blue-600 hover:bg-blue-700"
            onClick={handleNext}
          >
            {currentStep === tutorialContent.steps.length - 1 ? (
              <span className="flex items-center gap-2">
                <Check size={20} />
                Completar
              </span>
            ) : "Siguiente"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TutorialDetail;
