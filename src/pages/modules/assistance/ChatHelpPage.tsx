
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ChatHelpPage = () => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  // Sample chat messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "assistant",
      text: "¡Hola! Soy tu asistente digital. ¿En qué puedo ayudarte hoy? Por favor, selecciona una de estas consultas frecuentes:",
      time: "10:30"
    },
    {
      id: 2,
      sender: "assistant",
      text: "1. ¿Cómo puedo aumentar el tamaño del texto en la pantalla?\n2. ¿Cómo conecto mi teléfono al WiFi?\n3. ¿Cómo puedo hacer una videollamada?\n4. ¿Cómo protejo mis datos personales?\n5. Tengo otra consulta...",
      time: "10:30"
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      sender: "user",
      text: message,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };
    
    setMessages([...messages, newUserMessage]);
    setMessage("");
    
    // Simulate response after a short delay
    setTimeout(() => {
      let responseText = "";
      
      // Check if message contains keywords or numbers from the frequent questions
      if (message.includes("1") || message.toLowerCase().includes("tamaño") || message.toLowerCase().includes("texto")) {
        responseText = "Para aumentar el tamaño del texto, ve a Configuración > Pantalla > Tamaño de fuente. Allí puedes deslizar la barra para hacer el texto más grande. ¿Te gustaría un tutorial paso a paso?";
      } else if (message.includes("2") || message.toLowerCase().includes("wifi") || message.toLowerCase().includes("internet")) {
        responseText = "Para conectar tu teléfono al WiFi, ve a Configuración > WiFi, activa el WiFi si está desactivado, y selecciona tu red de la lista. Te pedirá una contraseña si la red está protegida. ¿Necesitas más ayuda con esto?";
      } else if (message.includes("3") || message.toLowerCase().includes("video") || message.toLowerCase().includes("llamada")) {
        responseText = "Para hacer una videollamada, puedes usar la sección de Comunicación en Mis Servicios. Selecciona el contacto y presiona el botón de videollamada. ¿Quieres que te explique más detalles?";
      } else if (message.includes("4") || message.toLowerCase().includes("proteg") || message.toLowerCase().includes("datos") || message.toLowerCase().includes("seguridad")) {
        responseText = "Para proteger tus datos personales, es importante usar contraseñas seguras y no compartirlas con nadie. También debes tener cuidado con los enlaces que abres. ¿Te gustaría más consejos de seguridad?";
      } else {
        responseText = "Gracias por tu consulta. Permíteme revisar la información y te responderé lo antes posible. ¿Hay algo específico que quieras saber sobre este tema?";
      }
      
      const newAssistantMessage = {
        id: messages.length + 2,
        sender: "assistant",
        text: responseText,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      };
      
      setMessages(prev => [...prev, newAssistantMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col max-w-md mx-auto">
      <Header title="Chat de Ayuda" showBack showHome />
      
      <div className="container p-4 flex-1 flex flex-col">
        <h2 className="section-title text-blue-700">Conversación de Soporte</h2>
        
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((msg) => (
            <div 
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <Avatar className={`h-8 w-8 flex items-center justify-center ${msg.sender === 'user' ? 'bg-blue-600' : 'bg-blue-200'}`}>
                  <span className="text-center text-xs">{msg.sender === 'user' ? 'Yo' : 'A'}</span>
                </Avatar>
                <div>
                  <Card className={`p-3 ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white'}`}>
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </Card>
                  <p className="text-xs text-gray-500 mt-1 px-1">{msg.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="sticky bottom-0 bg-blue-50 pt-2">
          <div className="flex gap-2">
            <Input
              placeholder="Escribe tu mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-white"
            />
            <Button 
              size="icon" 
              onClick={handleSendMessage}
              className="bg-blue-600"
            >
              <Send size={18} />
            </Button>
          </div>
          <p className="text-xs text-center text-gray-500 mt-2">
            Tiempo de respuesta aproximado: 2 minutos
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatHelpPage;
