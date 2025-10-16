import { useNavigate } from 'react-router-dom'

const TerminosCondiciones = () => {
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
        <h1 className="text-lg font-medium">Términos y Condiciones</h1>
        <div className="w-6"></div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 py-6 pb-12">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            CONDICIONES DE USO DE LA APLICACIÓN "COBouzas"
          </h2>

          <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-4">
            <p>
              El presente documento tiene por objeto establecer las condiciones generales de uso de la aplicación "COBouzas" (en adelante, la Aplicación), titularidad de la CENTRO ODONTOLÓGICO BOUZAS, con CIF: R2802436B, con domicilio en Plaza de Johan Carballeira, N° 6 Bajo - 36208 BOUZAS (Vigo), y correo electrónico de contacto: admin@dentalbouzas.com.
            </p>

            <p>
              El uso de la Aplicación y el registro de usuario, requiere la aceptación previa por parte del usuario, de las condiciones generales de uso vigentes y la política de privacidad. "COBouzas" se reserva el derecho de modificar las presentes condiciones en cualquier momento, si bien, dichos cambios serán debidamente informados para el conocimiento por parte del usuario.
            </p>

            <p>
              La descarga y uso de la Aplicación, atribuye la condición de usuario de la misma (en adelante, el Usuario) e implica la lectura, entendimiento y aceptación de todos los términos y condiciones recogidos por el presente documento y en la política de privacidad.
            </p>

            <p>
              No obstante, el Usuario deberá revisar periódicamente las publicaciones relativas a los cambios efectuados en las condiciones de uso, y si aquel continúa utilizando la Aplicación, se entenderá que ello implica la aceptación y asunción de dichos cambios. Las presentes condiciones de uso, afectan a sus derechos y obligaciones legales respecto al uso de la Aplicación. Si usted no acepta los términos incluidos en las mismas, no debe registrarse, acceder ni utilizar la Aplicación.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              DERECHOS DE PROPIEDAD INTELECTUAL
            </h3>

            <p>
              La Aplicación es una obra compuesta de diversos elementos integrados e inseparables (texto, ilustraciones, fotografías, imágenes animadas, vídeos, programas de ordenador, logotipos, marcas, etc.), cuyos derechos de propiedad intelectual, en virtud de lo dispuesto por la normativa vigente en la materia, corresponden a "COBouzas", salvo en lo referente a aquellos materiales obtenidos bajo licencia, autorización o consentimiento de terceros.
            </p>

            <p>
              "COBouzas" y los terceros licenciantes, retendrán en todo momento los derechos de propiedad intelectual sobre la Aplicación, así como sobre los diferentes elementos que la componen, considerados de forma individual, en todas las copias que se realicen (cualquiera que sea el soporte al que se incorporen), concediendo sobre los mismos únicamente el derecho de uso.
            </p>

            <p>
              Cualquier derecho que no sea expresamente cedido, se entenderá reservado en favor de "COBouzas" y los licenciantes de contenidos o elementos individuales. No se puede usar el contenido de esta Aplicación si no se dispone de un consentimiento expreso del autor.
            </p>

            <p>
              "COBouzas" dispone de los derechos de propiedad intelectual y de explotación sobre el software empleado para el desarrollo y funcionamiento de la Aplicación, y estará habilitado para descargar e instalar nuevas versiones del software de la Aplicación, actualizaciones y mejoras, con el fin de perfeccionar las funcionalidades del servicio.
            </p>

            <p>
              El usuario no adquiere derecho alguno o licencia por el servicio contratado, sobre el software necesario para la prestación del servicio, ni tampoco sobre la información técnica de seguimiento del servicio, a excepción de los derechos y licencias necesarios para la utilización y correcto funcionamiento de la Aplicación.
            </p>

            <p>
              Además de lo anterior, "COBouzas" es responsable de la selección, diseño de la estructura y disposición de los contenidos de la Aplicación, así como quien ha tomado la iniciativa y asumido el riesgo de efectuar las inversiones sustanciales orientadas a la obtención, digitalización y presentación de la misma, correspondiéndole, por tanto, la protección que la Ley de Propiedad Intelectual (LPI) pueda conceder sobre dicha disposición y estructuración de datos como el cumplimiento de la GDPR.
            </p>

            <p>
              "COBouzas" es también el único titular del diseño e imagen gráfica de la Aplicación, reservándose las acciones que legalmente le correspondan contra las personas que pudieran realizar imitaciones o usos desleales de la misma.
            </p>

            <p>
              "COBouzas", y por consiguiente el Centro Odontológico Bouzas, como titular y propietario de la aplicación, no se hace responsable por el uso fraudulento de los datos de los usuarios que pudieran ser obtenidos bajo prácticas no legales y/o malintencionadas, a través del uso de software o código malicioso, con el fin de obtener de forma ilegal y fraudulenta los datos de los usuarios, para uso ilegítimo y distinto al fin de la aplicación. Habida cuenta de que "COBouzas" pone las herramientas necesarias para el cuidado y protección de los datos de sus usuarios, pero que no están exentas de cualquier posible ataque y/o vulneración de los mismos.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              DERECHOS DEL USUARIO
            </h3>

            <p>
              Respecto a los posibles contenidos generados por el Usuario, durante el uso de la Aplicación, aquel será el único titular de los derechos de propiedad intelectual sobre dichos contenidos.
            </p>

            <p>
              No obstante, cuando el Usuario comparta, difunda o publique contenidos en la Aplicación, está concediendo una licencia no exclusiva, transferible y gratuita, para poder almacenar, reproducir, distribuir, modificar, mantener o comunicar públicamente (difundir y publicar) el contenido generado por el Usuario.
            </p>

            <p>
              En el supuesto de que el Usuario, comparta o publique contenidos en la Aplicación, que no haya creado o generado él mismo, será el único responsable de haber obtenido previamente las correspondientes autorizaciones por parte de los legítimos autores de los citados contenidos.
            </p>

            <p>
              En cualquier caso, "COBouzas" informa al Usuario de que, aunque el contenido pueda ser eliminado de la interfaz de la Aplicación, este puede conservarse en las copias de seguridad de "COBouzas" durante un cierto tiempo, para después ser suprimido de forma efectiva.
            </p>

            <p>
              Asimismo, cabe mencionar que el contenido puede seguir siendo visible si se ha compartido con otros usuarios y estos han llegado a descargar o guardar dicho contenido, excediendo estas actuaciones del ámbito o entorno de la Aplicación.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              OBLIGACIONES DEL USUARIO
            </h3>

            <p>
              El Usuario se compromete a utilizar la presente Aplicación y todo su contenido de conformidad con la ley, la moral, el orden público y las presentes condiciones de uso. Asimismo, se compromete a hacer un uso adecuado de los servicios y/o contenidos de la aplicación.
            </p>

            <p className="font-medium">En particular, el Usuario se compromete a:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>No emplear la Aplicación para realizar actividades ilícitas o constitutivas de delito, que atenten contra los derechos de terceros y/o que infrinjan la regulación sobre propiedad intelectual e industrial, o cualesquiera otras normas del ordenamiento jurídico aplicable.</li>
              <li>No transmitir, introducir, difundir y poner a disposición de terceros, cualquier tipo de material e información (datos contenidos, mensajes, dibujos, archivos de sonido e imagen, fotografías, software, etc.), a través de la Aplicación, que sean contrarios a la ley, la moral, el orden público y las presentes condiciones de uso.</li>
              <li>No generar, compartir o subir contenidos a la Aplicación, si son ilegales, engañosos, o discriminatorios, o si vulneran los derechos de otra persona.</li>
              <li>La publicación o transmisión de cualquier contenido que resulte violento, obsceno, abusivo, racial, xenófobo o difamatorio.</li>
              <li>No introducir o subir virus o códigos maliciosos, o realizar actividades susceptibles de alterar el correcto funcionamiento de la Aplicación.</li>
              <li>No recoger ni utilizar datos personales (incluida la imagen física) de otros usuarios sin su consentimiento expreso o contraviniendo lo dispuesto en el Reglamento General de Protección de Datos.</li>
            </ul>

            <p>
              La infracción de cualquiera de las normas contenidas en este apartado, facultará al Propietario, para dar de baja de la Aplicación al usuario de manera inmediata, así como para eliminar contenidos generados por el usuario, que puedan atentar contra los derechos de terceros, resultar inadecuados o ser contrarios al orden jurídico.
            </p>

            <p>
              También está prohibido, excepto que se tenga consentimiento expreso de la marca, el uso de logotipos o creación de clones de aplicaciones en Google Play o iTunes para engañar o suplantar nuestra identidad.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              LIMITACIÓN DE RESPONSABILIDAD
            </h3>

            <p>
              "COBouzas" no garantiza que durante el uso de la Aplicación no puedan producirse fallos o errores que dificulten el uso del servicio que generen imperfecciones, problemas o retrasos en el sistema.
            </p>

            <p>
              Siempre que "COBouzas" haya actuado con la diligencia oportuna y necesaria, no asumirá responsabilidad alguna por: pérdidas no provocadas por infracción de lo dispuesto en las presentes condiciones; pérdidas no previsibles de forma razonable por ninguna de las partes; contenidos difundidos o publicados por otros usuarios cuando vulneren derechos de terceros o se trate de contenido ilegal, violento, ofensivo o inapropiado.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              PROTECCIÓN DE DATOS DE CARÁCTER PERSONAL
            </h3>

            <p>
              Está recogida en nuestra Política de privacidad, que debe ser aceptada con las condiciones de uso para poder usar la Aplicación. Si no está de acuerdo, puede desinstalar la Aplicación.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              MODIFICACIONES
            </h3>

            <p>
              "COBouzas" se reserva el derecho a efectuar, sin previo aviso, las modificaciones que considere oportunas para el correcto funcionamiento de la Aplicación, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se prestan a través de la misma, como la forma en la que estos aparecen presentados o localizados.
            </p>

            <p>
              "COBouzas" intentará, en la medida de lo posible, mantener actualizada y libre de fallos la información contenida en la presente Aplicación, si bien, en cualquier caso, el acceso y utilización de la misma es responsabilidad exclusiva del Usuario.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              ACCIONES LEGALES
            </h3>

            <p>
              En caso de incumplimiento por parte del Usuario de los términos incluidos en las presentes condiciones de uso, "COBouzas" estará habilitado para iniciar las acciones legales que, conforme a la legislación vigente, puedan resultar oportunas, así como a solicitar las indemnizaciones pertinentes por parte del Usuario.
            </p>

            <p>
              "COBouzas" perseguirá cualquier utilización indebida de la Aplicación o de sus contenidos, así como las infracciones de los derechos que le correspondan a él o a sus licenciantes, especialmente en lo relativo a los derechos de propiedad intelectual e industrial.
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

export default TerminosCondiciones

