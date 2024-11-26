import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { resetContext, fetchUsers } = useGlobalContext();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };
    getUsers();
  }, [fetchUsers]);

  const handleLogout = () => {
    resetContext();
    navigate('/');
  };

  const handleCreateUser = () => {
    navigate('/create-user'); // Redirige al formulario de creación de usuario
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <header className="bg-black text-white px-6 py-3 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Portal Educativo - Administrador</h1>
        <div className="flex items-center">
          <span>Bienvenido, NOMBRE</span>
          <button className="ml-4 text-white hover:underline" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-gray-200 p-2 rounded-lg mb-6">
        <ul className="flex space-x-4">
          <li className="font-semibold bg-white px-4 py-2 rounded-lg">Gestión de Usuarios</li>
          <li className="px-4 py-2 hover:bg-white rounded-lg">Docentes</li>
          <li className="px-4 py-2 hover:bg-white rounded-lg">Estudiantes</li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Gestión de Usuarios</h2>
          <button
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
            onClick={handleCreateUser}
          >
            CREAR USUARIO
          </button>
        </div>

        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Buscar usuario..."
            className="border border-gray-300 rounded-l-lg p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800">
            BUSCAR
          </button>
        </div>

        <table className="w-full text-left border-t border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 font-semibold">RUT</th>
              <th className="py-2 px-4 font-semibold">NOMBRE</th>
              <th className="py-2 px-4 font-semibold">ROL</th>
              <th className="py-2 px-4 font-semibold">CORREO</th>
              <th className="py-2 px-4 font-semibold">ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr key={user.usuarioid} className="border-t border-gray-200">
                <td className="py-2 px-4">{user.rut}</td>
                <td className="py-2 px-4">{`${user.nombres} ${user.apellidos}`}</td>
                <td className="py-2 px-4">{user.tipousuario}</td>
                <td className="py-2 px-4">{user.correo}</td>
                <td className="py-2 px-4">
                  <button className="mr-2 text-blue-600 hover:underline">[Icon]</button>
                  <button className="text-blue-600 hover:underline">[Icon]</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default AdminDashboard;
