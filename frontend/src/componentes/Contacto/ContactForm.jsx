import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    hasBoat: "",
    location: "",
    company: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // ✅ REEMPLAZA ESTAS CREDENCIALES CON LAS NUEVAS DE EMAILJS
    emailjs
      .send(
        "service_4rdisjm",      // ← Reemplazar con tu Service ID
        "template_5y9ycqq",     // ← Reemplazar con tu Template ID
        formData,
        "8VKsiQwRypdpG-PCy"             // ← Reemplazar con tu Public Key
      )
      .then((result) => {
        console.log('Email enviado exitosamente:', result);
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Nos pondremos en contacto contigo lo antes posible.",
          confirmButtonColor: "#1e3a8a",
          background: "#ffffff",
          color: "#1e3a8a",
          confirmButtonText: "Entendido"
        });
        
        // Resetear formulario
        setFormData({
          name: "",
          phone: "",
          email: "",
          hasBoat: "",
          location: "",
          company: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error('Error enviando email:', error);
        Swal.fire({
          icon: "error",
          title: "Error al enviar",
          text: "Hubo un problema al enviar el mensaje. Por favor intenta nuevamente o contáctanos directamente.",
          confirmButtonColor: "#1e3a8a",
          background: "#ffffff",
          color: "#1e3a8a",
          confirmButtonText: "Reintentar"
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all space-y-4 border border-blue-100"
    >
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Formulario de Contacto
        </h2>
        <p className="text-gray-600 text-sm">
          Completa el formulario y nos pondremos en contacto contigo
        </p>
      </div>

      {/* Campos del formulario */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nombre Completo *"
            value={formData.name}
            onChange={handleChange}
            className="border border-blue-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Teléfono *"
            value={formData.phone}
            onChange={handleChange}
            className="border border-blue-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          />
        </div>
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico *"
          value={formData.email}
          onChange={handleChange}
          className="border border-blue-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required
        />
      </div>

      {/* Radio buttons para embarcación */}
      <div className="space-y-2">
        <label className="text-gray-700 text-sm font-medium">
          ¿Tiene embarcación actualmente? *
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="hasBoat"
              value="Si"
              checked={formData.hasBoat === "Si"}
              onChange={handleChange}
              className="text-blue-600 focus:ring-blue-500"
              required
            />
            <span className="text-gray-700">Sí</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="hasBoat"
              value="No"
              checked={formData.hasBoat === "No"}
              onChange={handleChange}
              className="text-blue-600 focus:ring-blue-500"
              required
            />
            <span className="text-gray-700">No</span>
          </label>
        </div>
      </div>

      {/* Select de ubicación */}
      <div>
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="border border-blue-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
          required
        >
          <option value="">Sitio de Posible Operación *</option>
          <option value="Caribe">Caribe</option>
          <option value="Pacífico">Pacífico</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      {/* Empresa opcional */}
      <div>
        <input
          type="text"
          name="company"
          placeholder="Empresa donde estaría afiliada (opcional)"
          value={formData.company}
          onChange={handleChange}
          className="border border-blue-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      {/* Mensaje adicional */}
      <div>
        <textarea
          name="message"
          placeholder="Mensaje adicional... (opcional)"
          value={formData.message}
          onChange={handleChange}
          className="border border-blue-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          rows="4"
        ></textarea>
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all w-full font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Enviando...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Enviar Mensaje
          </>
        )}
      </button>

      {/* Información de contacto adicional */}
      <div className="text-center pt-4 border-t border-blue-100">
        <p className="text-sm text-gray-600">
          También puedes contactarnos directamente a:<br />
          <span className="font-semibold text-blue-600">alianzacarroceradeboyaca@hotmail.com</span>
        </p>
      </div>
    </form>
  );
};

export default ContactForm;