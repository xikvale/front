import React from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
import { useNavigate } from 'react-router-dom';

const TeacherDashboard = () => {
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
        <h1 className="text-lg font-semibold">Portal Educativo - Profesores</h1>
        <div className="flex items-center">
          <span>Bienvenido, Profesor</span>
          <button className="ml-4 text-white hover:underline" onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">Dashboard de Profesores</h2>

        {/* Navigation Tabs */}
        <nav className="bg-gray-200 p-2 rounded-lg mb-6">
          <ul className="flex space-x-4">
            <li className="font-semibold bg-white px-4 py-2 rounded-lg">Inicio</li>
            <li className="px-4 py-2 hover:bg-white rounded-lg">Gestión Académica</li>
            <li className="px-4 py-2 hover:bg-white rounded-lg">Administración de Alumnos</li>
            <li className="px-4 py-2 hover:bg-white rounded-lg">Comunicaciones</li>
            <li className="px-4 py-2 hover:bg-white rounded-lg">Recursos Administrativos</li>
            <li className="px-4 py-2 hover:bg-white rounded-lg">Documentos y Políticas</li>
            <li className="px-4 py-2 hover:bg-white rounded-lg">Soporte Técnico</li>
          </ul>
        </nav>

        {/* Dashboard Content */}
        <div className="grid grid-cols-2 gap-6">
          {/* Noticias y Comunicados Internos */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Noticias y Comunicados Internos</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Reunión general de profesores - 20/11</li>
              <li>Actualización de políticas de evaluación</li>
              <li>Nuevo material didáctico disponible</li>
            </ul>
          </section>

          {/* Calendario de Actividades */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Calendario de Actividades</h3>
            {/* Aquí se podría agregar un componente de calendario */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <button>&lt;</button>
                <span>Noviembre 2024</span>
                <button>&gt;</button>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center">
                <div>Do</div>
                <div>Lu</div>
                <div>Ma</div>
                <div>Mi</div>
                <div>Ju</div>
                <div>Vi</div>
                <div>Sá</div>
                {Array.from({ length: 30 }, (_, i) => (
                  <div
                    key={i}
                    className={`p-2 ${i === 10 ? 'bg-black text-white rounded-full' : ''}`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;
