import React from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const { resetContext } = useGlobalContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    resetContext();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <header className="bg-black text-white px-6 py-3 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Portal Educativo - Estudiantes</h1>
        <div className="flex items-center">
          <span>Bienvenido, Estudiante</span>
          <button className="ml-4 text-white hover:underline" onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">Dashboard de Estudiantes</h2>

        {/* Navigation Tabs */}
        <nav className="bg-gray-200 p-2 rounded-lg mb-6">
          <ul className="flex space-x-4">
            <li className="font-semibold bg-white px-4 py-2 rounded-lg">Inicio</li>
            <li className="px-4 py-2 hover:bg-white rounded-lg">Área Académica</li>
            <li className="px-4 py-2 hover:bg-white rounded-lg">Comunicaciones</li>
            <li className="px-4 py-2 hover:bg-white rounded-lg">Perfil Estudiantil</li>
            <li className="px-4 py-2 hover:bg-white rounded-lg">Recursos Adicionales</li>
            <li className="px-4 py-2 hover:bg-white rounded-lg">Soporte Técnico</li>
          </ul>
        </nav>

        {/* Dashboard Content */}
        <div className="grid grid-cols-2 gap-6">
          {/* Asignaturas */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Asignaturas</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Matemáticas</li>
              <li>Lenguaje</li>
              <li>Ciencias</li>
              <li>Historia</li>
            </ul>
          </section>

          {/* Material de Estudio */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Material de Estudio</h3>
            <div className="space-y-4">
              <button className="w-full bg-black text-white py-2 px-4 rounded flex items-center justify-center space-x-2">
                <span>&#8681;</span> <span>Descargar Documentos</span>
              </button>
              <button className="w-full bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300">
                Ver Videos
              </button>
            </div>
          </section>

          {/* Evaluaciones */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Evaluaciones</h3>
            <div className="space-y-4">
              <button className="w-full bg-black text-white py-2 px-4 rounded">
                Realizar Examen en Línea
              </button>
              <button className="w-full bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300">
                Ver Resultados
              </button>
            </div>
          </section>

          {/* Tareas */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Tareas</h3>
            <div className="space-y-4">
              <button className="w-full bg-black text-white py-2 px-4 rounded">
                Subir Tarea
              </button>
              <button className="w-full bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300">
                Ver Fechas de Entrega
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
