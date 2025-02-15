import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCar } from 'react-icons/fa';

function App() {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg my-8">
      {/* En-tête */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Sylvain</h1>
        <h2 className="text-2xl text-secondary mb-4">Ingénieur DevOps</h2>
        <div className="flex flex-wrap gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>65777 paris</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>+33 (0)777777777</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>sylvain.pham@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCar />
            <span>Permis B</span>
          </div>
        </div>
      </header>

      {/* Reste du CV... */}
    </div>
  );
}

export default App;
