import { useNavigate } from 'react-router-dom'

const PoliticaPrivacidad = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-500 text-white p-4 pt-safe flex items-center justify-between sticky top-0 z-10">
        <button 
          onClick={() => navigate('/')}
          className="text-white text-xl"
        >
          ✕
        </button>
        <h1 className="text-lg font-medium">Política de Privacidad</h1>
        <div className="w-6"></div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 py-6 pb-12">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            POLÍTICA DE PRIVACIDAD PARA LA APLICACIÓN "COBouzas - CENTRO ODONTOLÓGICO BOUZAS"
          </h2>

          <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Política de privacidad
            </h3>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Información básica sobre protección de datos</h4>
              <ul className="text-sm space-y-1">
                <li><strong>Responsable:</strong> Centro Odontológico Bouzas</li>
                <li><strong>Finalidad:</strong> Gestión de la aplicación móvil "COBouzas – Centro Odontológico Bouzas". Facilitar la prestación de los servicios solicitados.</li>
                <li><strong>Legitimación:</strong> Consentimiento expreso del interesado.</li>
                <li><strong>Destinatarios:</strong> No se ceden a terceros, salvo consentimiento expreso del interesado.</li>
                <li><strong>Derechos:</strong> Derechos de acceso, rectificación, cancelación, limitación del tratamiento, portabilidad, así como otros derechos detallados en la información adicional sobre protección de datos personales.</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              Protección de datos personales
            </h3>

            <p>
              A continuación, le damos más información sobre el tratamiento de los datos de carácter personal que usted comparte con el CENTRO ODONTOLÓGICO BOUZAS. El 25 de mayo de 2018, el Reglamento General de Protección de Datos (GDPR) de la UE reemplazará a la Directiva de Protección de Datos de la UE de 1995 y para cumplir con la legislación ponemos la información necesaria para el tratamiento de datos. Siguiendo los principios de licitud, lealtad y transparencia, ponemos a su disposición la presente Política de Privacidad.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              ¿Quién es el responsable del tratamiento de sus datos personales?
            </h3>

            <p>
              El CENTRO ODONTOLÓGICO BOUZAS de Rodriguez Gonzalez Maria Mercedes, con NIF: 54505514E, con domicilio en Plaza de Johan Carballeira, N° 6 Bajo - 36208 BOUZAS (Vigo), y correo electrónico de contacto: admin@dentalbouzas.com es responsable y tiene los derechos de todo el contenido de la Aplicación. No se puede usar este contenido sin consentimiento expreso del titular.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              ¿Por qué nos importa la protección de sus datos personales?
            </h3>

            <p>
              La privacidad de los datos personales de sus usuarios y demás personas interesadas en sus servicios es fundamental. Por ello, nuestro compromiso es poner la mayor diligencia posible en la protección de los datos personales y la seguridad de la información facilitada, para contribuir a mejorar en lo posible la atención a nuestros usuarios.
            </p>

            <p>
              Igualmente, resulta vital ofrecer servicios de la mayor calidad que avalen la confianza depositada por nuestros usuarios, por lo que, para conseguir un mayor grado de satisfacción y confianza, tenemos implantado un sistema de gestión de protección de datos personales que garantiza el cumplimiento de la legislación vigente en esta materia, buscando siempre la mejora continua.
            </p>

            <div className="bg-gray-100 p-4 rounded-lg my-4">
              <p className="font-medium mb-2">Las categorías de datos que se tratan son:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Datos de identificación.</li>
                <li>Direcciones postales o electrónicas.</li>
                <li>IP de navegación.</li>
                <li>Imágenes, videos</li>
                <li>Cualesquiera otros datos facilitados por los usuarios para la prestación del servicio solicitado.</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              ¿Con qué finalidad se van a tratar los datos personales que usted nos facilita a través de la Aplicación o página web?
            </h3>

            <p>
              Tratamos la información facilitada a través de la página de la Aplicación con el fin de facilitar la gestión: usuarios y servicios, proporcionar información sobre actividades, productos y servicios, remisión de comunicaciones, así como facilitar la contratación de los servicios. Por último, hacemos uso de servicios de analítica como Firebase de Google cuya política de privacidad puede consultar en <a href="https://firebase.google.com/support/privacy?hl=es-419" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">https://firebase.google.com/support/privacy?hl=es-419</a>.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              ¿Por cuánto tiempo conservaremos sus datos personales?
            </h3>

            <p>
              Los datos personales proporcionados se conservarán durante toda la vigencia y permanencia de la relación que el interesado mantenga y mientras no se solicite su supresión. El plazo de conservación de la información se extenderá por un plazo máximo de 5 años, computados desde que haya finalizado la relación, y siempre que no se solicite su supresión por parte del interesado con anterioridad a dicho plazo, sin perjuicio de los plazos legalmente establecidos por las distintas normas que puedan resultar de aplicación.
            </p>

            <p>
              Cuando no medie relación mercantil, el plazo de conservación de la información será del tiempo mínimo necesario para la correcta prestación del servicio ofrecido, así como para atender las responsabilidades que se pudieran derivar del mismo y de cualquier otra exigencia legal o hasta que indique su negativa a que continuemos tratándolo.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              ¿Cuál es la base que nos legitima para tratar sus datos personales?
            </h3>

            <p>
              El tratamiento de sus datos personales se encuentra basado en su consentimiento expreso, mediante la selección de la casilla incluida en el registro de la Aplicación. La base legal para el tratamiento de sus datos personales es la correcta ejecución de los servicios prestados por el Centro Odontológico Bouzas, consistentes en el seguimiento, control y gestión de las actividades y eventos en el margen de su actividad. Las informaciones comerciales sobre actividades o servicios están basadas en el consentimiento que ha prestado, sin que en ningún caso la retirada de este consentimiento condicione la ejecución de los servicios principales.
            </p>

            <p>
              Se le podrá solicitar su consentimiento para tratar sus datos personales con el fin de enviarle información comercial sobre los servicios ofrecidos que puedan resultar de su interés.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              ¿A qué destinatarios se comunicarán sus datos?
            </h3>

            <p>
              No se cederá a terceros los datos de su titular sin su consentimiento expreso.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              ¿Cuáles son sus derechos cuando nos facilita sus datos?
            </h3>

            <p>
              Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o imprecisos, o, en su caso, a solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines para los que fueron recogidos.
            </p>

            <p>
              Por motivos relacionados con su situación particular, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de eventuales reclamaciones. De igual modo, los interesados podrán solicitar la oposición al tratamiento de sus datos, en cuyo caso, dejará de tratar la información, salvo que fuera necesario por motivos legítimos, o el ejercicio o la defensa ante posibles reclamaciones.
            </p>

            <p>
              Los interesados también podrán solicitar su derecho a la portabilidad de sus datos personales en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable del tratamiento sin que lo impida el responsable al que se los hubiera facilitado.
            </p>

            <p>
              Podrán dirigir sus solicitudes a la CENTRO ODONTOLÓGICO BOUZAS, Plaza de Johan Carballeira, N° 6 Bajo - 36208 BOUZAS (Vigo), o al siguiente correo electrónico de contacto: admin@dentalbouzas.com acreditando debidamente su identidad mediante fotocopia de su DNI o pasaporte.
            </p>

            <p>
              En cumplimiento de la Ley 34/2002 sobre servicios de la sociedad de la información y de comercio electrónico, le comunicamos que el Centro Odontológico Bouzas podrá remitirles comunicaciones comerciales electrónicas a las direcciones de correo electrónico proporcionadas. Los usuarios y/o interesados prestan su consentimiento expreso a tales efectos. Le informamos que podrá revocar dicho consentimiento en cualquier momento enviándonos un correo electrónico o comunicación postal a la dirección arriba indicada.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              ¿Cómo hemos obtenido sus datos personales?
            </h3>

            <p>
              Los datos personales que tratamos proceden del propio interesado o los recogidos por la analítica.
            </p>

            <p>
              De igual forma que usted nos ha facilitado su consentimiento para tratar datos personales, usted podrá revocar su consentimiento en cualquier momento.
            </p>

            <p>
              Usted tendrá, asimismo, el derecho a presentar una reclamación ante la Agencia Española de Protección de Datos. Los modelos, formularios y demás información disponible sobre sus derechos, los puede encontrar en la página web de la autoridad de control nacional, Agencia Española de Protección de Datos, en adelante, AEPD, <a href="http://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">www.aepd.es</a>.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              Cambios en nuestra política de privacidad
            </h3>

            <p>
              Nos reservamos el derecho de modificar o actualizar esta Política de privacidad periódicamente. Si cambiamos nuestras prácticas con respecto a su información, se lo notificaremos publicando una Política de privacidad actualizada en este sitio web con una nueva fecha de vigencia.
            </p>
          </div>

          {/* Botón volver */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => navigate('/')}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoliticaPrivacidad

