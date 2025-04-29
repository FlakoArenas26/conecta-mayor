
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Lock, Eye, EyeOff, Check, RefreshCw, Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PasswordsPage = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const { toast } = useToast();

  // Mock function to evaluate password strength
  const evaluatePassword = (pwd: string) => {
    if (!pwd) return { score: 0, feedback: "Ingresa una contraseña" };
    
    let score = 0;
    let feedback = "";
    
    if (pwd.length >= 8) score += 20;
    if (pwd.length >= 12) score += 10;
    if (/[A-Z]/.test(pwd)) score += 20;
    if (/[a-z]/.test(pwd)) score += 10;
    if (/[0-9]/.test(pwd)) score += 20;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 20;
    
    if (score < 30) feedback = "Muy débil";
    else if (score < 50) feedback = "Débil";
    else if (score < 70) feedback = "Moderada";
    else if (score < 90) feedback = "Fuerte";
    else feedback = "Muy fuerte";
    
    return { score, feedback };
  };

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let result = "";
    for (let i = 0; i < 12; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedPassword(result);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copiado al portapapeles",
        description: "La contraseña ha sido copiada",
        duration: 2000,
      });
    });
  };

  const passwordStrength = evaluatePassword(password);
  
  const getScoreColor = (score: number) => {
    if (score < 30) return "bg-red-500";
    if (score < 50) return "bg-orange-500";
    if (score < 70) return "bg-yellow-500";
    if (score < 90) return "bg-lime-500";
    return "bg-green-500";
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col max-w-md mx-auto">
      <Header title="Contraseñas" showBack showHome />
      
      <div className="container p-4 flex-1">
        <h2 className="section-title text-blue-700">Gestión de Contraseñas</h2>
        
        <Card className="mb-6 border-l-4 border-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Lock size={20} className="text-blue-500" />
              Evaluador de Contraseñas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative mb-2">
              <Input 
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa una contraseña" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10 bg-white"
              />
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            {password && (
              <div className="mt-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Seguridad:</span>
                  <span className="text-sm font-medium">{passwordStrength.feedback}</span>
                </div>
                <Progress value={passwordStrength.score} className={`h-2 ${getScoreColor(passwordStrength.score)}`} />
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card className="mb-6 border-l-4 border-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <RefreshCw size={20} className="text-blue-500" />
              Generador de Contraseñas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={generatePassword} 
              className="w-full mb-4 bg-blue-600"
            >
              Generar Contraseña Segura
            </Button>
            
            {generatedPassword && (
              <div className="relative">
                <div className="p-3 bg-blue-100 rounded-lg break-all pr-10">
                  {generatedPassword}
                </div>
                <button 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600"
                  onClick={() => copyToClipboard(generatedPassword)}
                >
                  <Copy size={18} />
                </button>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card className="mb-6 border-l-4 border-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Consejos para contraseñas seguras</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex gap-2">
              <Check size={18} className="text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-sm">Utiliza al menos 12 caracteres</p>
            </div>
            <div className="flex gap-2">
              <Check size={18} className="text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-sm">Combina mayúsculas, minúsculas, números y símbolos</p>
            </div>
            <div className="flex gap-2">
              <Check size={18} className="text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-sm">Evita información personal como nombres o fechas</p>
            </div>
            <div className="flex gap-2">
              <Check size={18} className="text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-sm">Utiliza contraseñas diferentes para cada servicio</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PasswordsPage;
