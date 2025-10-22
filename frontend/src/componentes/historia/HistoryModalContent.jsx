import { TrendingUp, Award, Lightbulb, Globe, ChevronRight } from "lucide-react";
import logoACB from "../../assets/images/logo-alianza.jpg";
import logoUPTC from "../../assets/images/Logo-UPTC.jpg";
import logoSENA from "../../assets/images/logo-sena.jpg";
import logoTecnoparque from "../../assets/images/logo_Tecnoparque.jpg";

export const HistoryModalContent = {
  1: (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-0">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Nacimiento y Desarrollo ACB</h3>
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base lg:text-lg">
          <strong className="text-blue-700">En el año 2008 el SENA CIMM</strong> llevó a cabo un trabajo de integración del sector carrocero de Duitama con empresas afectadas por las tendencias del mercado y algunas disposiciones sobre la fabricación de buses.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-gradient-to-br from-blue-700 to-blue-800 p-4 sm:p-6 rounded-xl text-white shadow-lg">
          <div className="flex items-center mb-3">
            <TrendingUp className="mr-2 sm:mr-3 flex-shrink-0" size={20} />
            <h4 className="font-bold text-base sm:text-lg">2011 - Fundación</h4>
          </div>
          <p className="text-sm sm:text-base leading-relaxed">Cómo resultado nació en el año 2011 la empresa <strong>ALIANZA CARROCERA DE BOYACA SAS</strong>, integrando 10 empresas proveedoras y fabricantes de carrocería para bus.</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 sm:p-6 rounded-xl text-white shadow-lg">
          <h4 className="font-bold text-base sm:text-lg mb-3">2013 - Producción</h4>
          <p className="text-sm sm:text-base leading-relaxed">Fué así cómo a partir del año 2013 se fabricaron carrocerías para bus ensambladas bajo un esquema de cooperación en el que las empresas socias proveían según sus fortalezas y la ACB se encargó del ensamble de los buses.</p>
        </div>
      </div>

      <div className="flex justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
        <img src={logoACB} alt="ACB" className="h-12 sm:h-16 object-contain opacity-90" />
      </div>
    </div>
  ),
  2: (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-0">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Inteligencia Competitiva</h3>
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base lg:text-lg">
          <strong className="text-blue-700">En convenio con la UPTC sede Duitama</strong> se llevó a cabo este estudio iniciado en el año 2016 y culminado en el año 2018.
        </p>
      </div>

      <div className="bg-white border border-blue-200 rounded-xl p-4 sm:p-6 shadow-lg">
        <h4 className="font-bold text-blue-800 text-lg sm:text-xl mb-4 flex items-center">
          <Lightbulb className="mr-2 sm:mr-3 flex-shrink-0" size={20} />
          <span className="text-sm sm:text-base lg:text-xl">Hallazgos del Estudio de Mercado UPTC - DITMAV</span>
        </h4>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h5 className="font-semibold text-blue-700 mb-3 sm:mb-4 text-base sm:text-lg">📈 Tendencias Identificadas</h5>
            <ul className="text-gray-700 space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 sm:mr-3 mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span><strong>Ecoturismo:</strong> Crecimiento sostenible con mínimo impacto ambiental</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 sm:mr-3 mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span><strong>Glamping:</strong> Alternativa ecológica con materiales naturales</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 sm:mr-3 mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span><strong>Transporte fluvial:</strong> Potencial crecimiento del 473.53% (Plan Maestro Fluvial)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 sm:mr-3 mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span><strong>Construcción modular:</strong> Casas portátiles y aulas móviles</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-blue-700 mb-3 sm:mb-4 text-base sm:text-lg">🎯 Oportunidades de Mercado</h5>
            <ul className="text-gray-700 space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 sm:mr-3 mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span>59 áreas naturales en sistema de parques nacionales</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 sm:mr-3 mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span>8 destinos naturales favoritos identificados</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 sm:mr-3 mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span>Crecimiento sostenido del turismo internacional</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 sm:mr-3 mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span>Mercado chino como oportunidad emergente</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-4 sm:p-6 lg:p-8 rounded-xl text-white shadow-xl">
        <h4 className="font-bold text-lg sm:text-xl mb-4 flex items-center">
          <Globe className="mr-2 sm:mr-3 flex-shrink-0" size={20} />
          <span>Perspectivas Colombia</span>
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 text-sm sm:text-base">
          <ul className="space-y-2">
            <li className="flex items-start">
              <ChevronRight size={16} className="mr-2 flex-shrink-0 mt-0.5" />
              <span>Bogotá capta el 50% del turista internacional</span>
            </li>
            <li className="flex items-start">
              <ChevronRight size={16} className="mr-2 flex-shrink-0 mt-0.5" />
              <span>Turismo crece anualmente en aporte al PIB</span>
            </li>
            <li className="flex items-start">
              <ChevronRight size={16} className="mr-2 flex-shrink-0 mt-0.5" />
              <span>Duplicación de pasajeros aéreos nacionales</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <ChevronRight size={16} className="mr-2 flex-shrink-0 mt-0.5" />
              <span>Oportunidad en turismo de posconflicto</span>
            </li>
            <li className="flex items-start">
              <ChevronRight size={16} className="mr-2 flex-shrink-0 mt-0.5" />
              <span>Segmentos emergentes: LGTB, Backpackers, tercera edad</span>
            </li>
            <li className="flex items-start">
              <ChevronRight size={16} className="mr-2 flex-shrink-0 mt-0.5" />
              <span>Mejora en conectividad vial necesaria</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mt-6">
        <img src={logoUPTC} alt="UPTC" className="h-10 sm:h-12 lg:h-14 object-contain opacity-90" />
        <div className="bg-blue-100 px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-blue-200 shadow-sm">
          <span className="text-blue-800 text-xs sm:text-sm lg:text-base font-semibold">DITMAV - Grupo de Investigación</span>
        </div>
      </div>
    </div>
  ),
  3: (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-0">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Diseño Embarcación Turística</h3>
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base lg:text-lg">
          <strong className="text-blue-700">En el año 2019 fué seleccionado nuestro proyecto</strong> para la fabricación de una embarcación para el transporte fluvial de pasajeros denominado: <strong>"Diseño de embarcación propulsada mediante energías alternativas para el sector turístico de Boyacá"</strong> para ser ejecutado en el año 2020 por el SENA y su Sistema de Investigación, Desarrollo Tecnológico e investigación SENNOVA en la sede del centro industrial de mantenimiento y manufactura CIMM Sogamoso.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 sm:p-5 rounded-xl border border-blue-300 text-center shadow-md">
          <span className="text-blue-800 font-bold text-lg sm:text-xl">2019</span>
          <p className="text-sm sm:text-base mt-2 sm:mt-3 text-gray-700 font-medium">Selección del proyecto innovador</p>
        </div>
        <div className="bg-gradient-to-br from-blue-200 to-blue-300 p-4 sm:p-5 rounded-xl border border-blue-400 text-center shadow-md">
          <span className="text-blue-900 font-bold text-lg sm:text-xl">2020</span>
          <p className="text-sm sm:text-base mt-2 sm:mt-3 text-gray-800 font-medium">Ejecución con SENA SENNOVA</p>
        </div>
        <div className="bg-gradient-to-br from-blue-300 to-blue-400 p-4 sm:p-5 rounded-xl border border-blue-500 text-center shadow-md">
          <span className="text-white font-bold text-lg sm:text-xl">2022</span>
          <p className="text-sm sm:text-base mt-2 sm:mt-3 text-white font-medium">Registro diseño industrial</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-4 sm:p-6 lg:p-8 rounded-xl text-white shadow-xl text-center">
        <Award className="mx-auto mb-3 sm:mb-4" size={36} />
        <h4 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3">Registro de Diseño Industrial No. 16742</h4>
        <p className="text-base sm:text-lg mt-2 opacity-95">CATAMARÁN - Vigente desde 26 de diciembre de 2022 hasta 26 de diciembre de 2032</p>
        <p className="text-xs sm:text-sm mt-2 sm:mt-3 opacity-80">Superintendencia de Industria y Comercio</p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-6">
        <img src={logoSENA} alt="SENA" className="h-12 sm:h-14 lg:h-16 object-contain opacity-90" />
        <div className="bg-blue-100 px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-blue-200 shadow-sm">
          <span className="text-blue-800 text-xs sm:text-sm lg:text-base font-semibold">SENNOVA</span>
        </div>
        <div className="bg-blue-100 px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-blue-200 shadow-sm">
          <span className="text-blue-800 text-xs sm:text-sm lg:text-base font-semibold">CIMM Sogamoso</span>
        </div>
      </div>
    </div>
  ),
  4: (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-0">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Puesta a Punto Manta Fluvial</h3>
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base lg:text-lg">
          <strong className="text-blue-700">El año 2023 un equipo Integrado por personal profesional del SENA y estudiantes de la facultad de Administración Industrial de la UPTC</strong> avanzaron en el análisis de costos de fabricación, despiece y matrices para la fabricación de la embarcación, trabajo que sirvió de base para los cálculos definitivos de diseño y proceso de fabricación.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 sm:p-6 rounded-xl text-white shadow-lg">
          <h4 className="font-bold text-lg sm:text-xl mb-4">✅ Avances 2023</h4>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-white rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0"></div>
              <span>Análisis detallado de costos de fabricación</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-white rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0"></div>
              <span>Despiece técnico completo de la embarcación</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-white rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0"></div>
              <span>Matrices para procesos de fabricación optimizados</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-white rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0"></div>
              <span>Base para cálculos definitivos de diseño</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white border-2 border-blue-200 rounded-xl p-4 sm:p-6 shadow-lg">
          <h4 className="font-bold text-blue-700 text-lg sm:text-xl mb-4">🔧 Proceso de Fabricación</h4>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            El trabajo sirvió de base fundamental para los cálculos definitivos de diseño y proceso de fabricación de la embarcación Manta Fluvial, estableciendo los parámetros técnicos y económicos para su producción.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4 sm:p-6 lg:p-8 rounded-xl text-white shadow-xl">
        <h4 className="font-bold text-xl sm:text-2xl mb-4">🚀 Estado Actual - Desarrollo Tecnológico</h4>
        <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-95">
          <strong>En la actualidad bajo la colaboración del TECNOPARQUE del SENA en la ciudad de Sogamoso</strong> se avanza en el cálculo definitivo del sistema de propulsión de la embarcación.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 text-sm sm:text-base">
          <div>
            <h5 className="font-semibold text-base sm:text-lg mb-3">🏗️ TECNOPARQUE SENA</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ChevronRight size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                <span>Cálculo definitivo del sistema de propulsión</span>
              </li>
              <li className="flex items-start">
                <ChevronRight size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                <span>Optimización para eficiencia energética</span>
              </li>
              <li className="flex items-start">
                <ChevronRight size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                <span>Implementación de energías alternativas</span>
              </li>
              <li className="flex items-start">
                <ChevronRight size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                <span>Análisis de sostenibilidad ambiental</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-base sm:text-lg mb-3">🎯 Próximos Objetivos</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ChevronRight size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                <span>Prototipo funcional de la embarcación</span>
              </li>
              <li className="flex items-start">
                <ChevronRight size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                <span>Pruebas de navegación en condiciones reales</span>
              </li>
              <li className="flex items-start">
                <ChevronRight size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                <span>Certificación y homologación final</span>
              </li>
              <li className="flex items-start">
                <ChevronRight size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                <span>Producción a escala comercial</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mt-6">
        <img src={logoTecnoparque} alt="Tecnoparque" className="h-10 sm:h-12 lg:h-14 object-contain opacity-90" />
        <img src={logoSENA} alt="SENA" className="h-10 sm:h-12 lg:h-14 object-contain opacity-90" />
        <img src={logoUPTC} alt="UPTC" className="h-10 sm:h-12 lg:h-14 object-contain opacity-90" />
      </div>
    </div>
  )
};