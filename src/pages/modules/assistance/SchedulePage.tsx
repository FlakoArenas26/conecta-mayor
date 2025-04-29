
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock, User, Check } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const SchedulePage = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | null>(null);
  const [instructor, setInstructor] = useState<string | null>(null);
  const { toast } = useToast();

  const timeSlots = ["09:00", "11:00", "15:00", "17:00"];
  const instructors = ["María López", "Juan Gómez", "Ana Torres"];

  const handleSchedule = () => {
    if (!date || !timeSlot || !instructor) {
      toast({
        title: "Faltan datos",
        description: "Por favor selecciona fecha, hora e instructor",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    toast({
      title: "¡Capacitación agendada!",
      description: `Tu sesión con ${instructor} está programada para el ${format(date, "PPP", { locale: es })} a las ${timeSlot}`,
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col max-w-md mx-auto">
      <Header title="Agendar Capacitación" showBack showHome />
      
      <div className="container p-4 flex-1">
        <h2 className="section-title text-blue-700">Programa tu Capacitación</h2>
        
        <Card className="mb-6 border-l-4 border-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <CalendarIcon size={20} className="text-blue-500" />
              Selecciona una Fecha
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="border-none"
                disabled={(date) => {
                  const today = new Date();
                  return date < today || date > new Date(today.setMonth(today.getMonth() + 1));
                }}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-6 border-l-4 border-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock size={20} className="text-blue-500" />
              Selecciona una Hora
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
                <Button 
                  key={time} 
                  variant={timeSlot === time ? "default" : "outline"}
                  className={timeSlot === time ? "bg-blue-600" : ""}
                  onClick={() => setTimeSlot(time)}
                >
                  {timeSlot === time && <Check size={16} className="mr-2" />}
                  {time}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-6 border-l-4 border-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <User size={20} className="text-blue-500" />
              Selecciona un Instructor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {instructors.map((name) => (
                <button
                  key={name}
                  className={`w-full p-3 rounded-lg flex items-center gap-3 border ${
                    instructor === name ? "bg-blue-100 border-blue-500" : "bg-white"
                  }`}
                  onClick={() => setInstructor(name)}
                >
                  <div className={`rounded-full p-2 ${
                    instructor === name ? "bg-blue-200" : "bg-gray-100"
                  }`}>
                    <User size={16} className={instructor === name ? "text-blue-600" : "text-gray-600"} />
                  </div>
                  <span>{name}</span>
                  {instructor === name && <Check className="ml-auto text-blue-600" size={18} />}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Button 
          className="w-full py-6 text-lg bg-blue-600" 
          onClick={handleSchedule}
          disabled={!date || !timeSlot || !instructor}
        >
          Agendar Capacitación
        </Button>
      </div>
    </div>
  );
};

export default SchedulePage;
