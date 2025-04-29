
import { Book, Lightbulb, Phone, Shield, Users } from "lucide-react";
import MainButton from "../components/layout/MainButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50 max-w-md mx-auto">
      <header className="bg-blue-600 p-6 pb-14 text-white text-center">
        <h1 className="text-3xl font-bold">Conecta Mayor</h1>
        <p className="mt-2">Tu guía digital personalizada</p>
      </header>

      <div className="container px-6 -mt-8 pb-8">
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">
            ¿Qué te gustaría hacer hoy?
          </h2>

          <MainButton
            to="/learn"
            label="Aprender"
            icon={Book}
            color="bg-blue-600"
          />

          <MainButton
            to="/assistance"
            label="Asistencia"
            icon={Phone}
            color="bg-blue-500"
          />

          <MainButton
            to="/security"
            label="Seguridad"
            icon={Shield}
            color="bg-blue-700"
          />

          <MainButton
            to="/services"
            label="Consejos Prácticos"
            icon={Lightbulb}
            color="bg-blue-800"
          />

        </div>
      </div>

      <footer className="mt-auto py-4 text-center text-sm text-blue-600">
        <p>Conecta Mayor © 2025</p>
        <p className="text-xs">Inclusión Digital para Adultos Mayores</p>
      </footer>
    </div>
  );
};

export default Index;
