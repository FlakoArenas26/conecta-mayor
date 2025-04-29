
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Check, Globe, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const VerifyLinksPage = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<null | {safe: boolean, reason?: string}>(null);
  const { toast } = useToast();

  const handleVerify = () => {
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Por favor ingresa un enlace para verificar",
        variant: "destructive",
      });
      return;
    }
    
    // Mock verification - in real app, this would call an API
    const mockResults = [
      { url: "banco.com", safe: true },
      { url: "facebook.com", safe: true },
      { url: "google.com", safe: true },
      { url: "banco-seguro.xyz", safe: false, reason: "Dominio sospechoso, posible phishing" },
      { url: "ganepremios.club", safe: false, reason: "Sitio reportado como fraudulento" },
      { url: "descarga-gratis.net", safe: false, reason: "Contiene software malicioso" }
    ];
    
    // Simple check if URL contains any known bad domains
    const isSuspicious = mockResults.find(item => url.toLowerCase().includes(item.url) && !item.safe);
    const isSafe = mockResults.find(item => url.toLowerCase().includes(item.url) && item.safe);
    
    if (isSuspicious) {
      setResult({ safe: false, reason: isSuspicious.reason });
    } else if (isSafe || Math.random() > 0.3) {
      setResult({ safe: true });
    } else {
      setResult({ 
        safe: false, 
        reason: "El enlace no parece seguro. Evita compartir información personal."
      });
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col max-w-md mx-auto">
      <Header title="Verificar Enlaces" showBack showHome />
      
      <div className="container p-4 flex-1">
        <h2 className="section-title text-blue-700">Comprueba si un enlace es seguro</h2>
        
        <Card className="mb-6 border-l-4 border-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe size={20} className="text-blue-500" />
              Ingresa el enlace a verificar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input 
                placeholder="Ejemplo: www.banco.com" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="bg-white"
              />
              <Button onClick={handleVerify} className="bg-blue-600">
                Verificar
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {result && (
          <Card className={`mb-6 border-l-4 ${result.safe ? 'border-green-500' : 'border-red-500'}`}>
            <CardHeader className="pb-2">
              <CardTitle className={`text-lg flex items-center gap-2 ${result.safe ? 'text-green-600' : 'text-red-600'}`}>
                {result.safe ? (
                  <><Check size={20} /> Enlace Seguro</>
                ) : (
                  <><AlertTriangle size={20} /> Enlace Peligroso</>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={result.safe ? 'text-green-700' : 'text-red-700'}>
                {result.safe 
                  ? "Este enlace parece seguro. Aún así, siempre verifica la identidad del sitio web antes de ingresar información personal."
                  : result.reason
                }
              </p>
              
              {!result.safe && (
                <div className="mt-4 p-3 bg-red-100 rounded-lg">
                  <p className="text-red-800 text-sm">
                    <strong>Recomendación:</strong> No abras este enlace ni proporciones información personal o bancaria.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
        
        <Card className="mb-6 border-l-4 border-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Consejos de seguridad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex gap-2">
              <AlertTriangle size={18} className="text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-sm">Desconfía de ofertas que parecen demasiado buenas para ser verdad.</p>
            </div>
            <div className="flex gap-2">
              <AlertTriangle size={18} className="text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-sm">Los bancos nunca te pedirán claves o información personal por correo.</p>
            </div>
            <div className="flex gap-2">
              <AlertTriangle size={18} className="text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-sm">Verifica siempre la dirección web en la barra de navegación.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VerifyLinksPage;
