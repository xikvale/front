import React, { useState } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
import { useNavigate } from 'react-router-dom';

const CreateUserForm = () => {
  const { createUser } = useGlobalContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tipoUsuario: '',
    rut: '',
    nombres: '',
    apellidos: '',
    correo: '',
    contraseña: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validar datos del formulario
    if (Object.values(formData).some(field => field === '')) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    try {
      const response = await createUser(formData);
      if (response.message === 'Usuario creado exitosamente') {
        alert(response.message);
        navigate('/admin-dashboard');
      }
    } catch (error) {
      alert('Error al crear el usuario.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Crear Usuario</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Tipo de Usuario</label>
            <select
              name="tipoUsuario"
              className="w-full border px-3 py-2 rounded-lg"
              value={formData.tipoUsuario}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione...</option>
              <option value="Admin">Administrador</option>
              <option value="Profesor">Profesor</option>
              <option value="Estudiante">Estudiante</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold">RUT</label>
            <input
              type="text"
              name="rut"
              className="w-full border px-3 py-2 rounded-lg"
              value={formData.rut}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Nombres</label>
            <input
              type="text"
              name="nombres"
              className="w-full border px-3 py-2 rounded-lg"
              value={formData.nombres}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Apellidos</label>
            <input
              type="text"
              name="apellidos"
              className="w-full border px-3 py-2 rounded-lg"
              value={formData.apellidos}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Correo</label>
            <input
              type="email"
              name="correo"
              className="w-full border px-3 py-2 rounded-lg"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Contraseña</label>
            <input
              type="password"
              name="contraseña"
              className="w-full border px-3 py-2 rounded-lg"
              value={formData.contraseña}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            Crear Usuario
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;
