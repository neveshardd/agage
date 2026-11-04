import { privacyEs } from "./privacy/es";
import type { Dictionary } from "./pt";

export const es: Dictionary = {
  meta: {
    description:
      "Construcción civil, infraestructura y montaje industrial en todo Brasil: obras civiles, pavimentación, movimiento de tierras, drenaje, obras de arte especiales y mano de obra especializada para la industria.",
  },
  common: {
    home: "Inicio",
    services: "Servicios",
    close: "Cerrar",
    back: "Volver",
    breadcrumb: "Ruta de navegación",
  },
  navbar: {
    logoLabel: "AGAGE — Página de inicio",
    utilityNav: "Accesos rápidos",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mainNav: "Principal",
    language: "Idioma",
    openLanguages: "Abrir opciones de idioma",
    agage: {
      label: "AGAGE",
      institutional: "Institucional",
      missionVisionValues: "Misión, visión y valores",
      ombudsman: "Canal de Denuncias",
    },
  },
  hero: {
    previous: "Diapositiva anterior",
    next: "Diapositiva siguiente",
    mute: "Silenciar",
    unmute: "Activar sonido",
    volume: "Volumen",
    slides: [
      {
        alt: "Reasentamiento residencial ejecutado por AGAGE",
        heading: "Obras civiles de pequeña a gran escala",
        before: "El Grupo ",
        after:
          " ejecuta cada obra con el mismo nivel de eficiencia, calidad y responsabilidad",
        cta: "Ver obras",
      },
      {
        alt: "Terminal de autobuses en construcción",
        heading: "Infraestructura para la movilidad urbana",
        before: "",
        after:
          " ejecuta terminales, aceras y obras civiles para sistemas de transporte",
        cta: "Conozca las obras",
      },
      {
        alt: "Obra de terminal en curso",
        heading: "Naves metálicas y prefabricadas",
        before: "Soluciones completas de ",
        after: " para proyectos pequeños y grandes en todo el país",
        cta: "Nuestros servicios",
      },
      {
        alt: "Viaducto en construcción",
        heading: "Obras de arte especiales",
        before: "",
        after:
          " ejecuta puentes, viaductos y estructuras de hormigón armado con seguridad",
        cta: "Más información",
      },
      {
        alt: "Viaducto urbano en obra",
        heading: "Ingeniería de alta complejidad",
        before:
          "Ejecuciones precisas y seguras, guiadas por la excelencia técnica de ",
        after: "",
        cta: "Quiénes somos",
      },
      {
        alt: "Equipo de AGAGE en una fábrica de cemento",
        heading: "Referencia en grandes paradas industriales",
        before: "Mano de obra especializada de ",
        after: " con foco en cero retrabajo y cumplimiento de plazos",
        cta: "Descubra",
      },
    ],
  },
  about: {
    imageAlt: "Equipo del Grupo AGAGE en campo",
    title: "Quiénes somos",
    text: "El Grupo AGAGE actúa en los segmentos de construcción civil y montaje industrial y, desde 2019, se destaca por su participación en contratos relevantes en todo Brasil. Su actuación se basa en una gestión moderna, alineada con las mejores prácticas del mercado y rigurosos estándares de compliance y seguridad.",
  },
  clients: {
    previous: "Clientes anteriores",
    next: "Clientes siguientes",
    title: "Nuestros clientes",
  },
  certifications: {
    imageAlt: "Vista aérea de una obra ejecutada por AGAGE",
    title: "Nuestra calidad está certificada",
    text: "Trabajamos con los más altos estándares de seguridad, sostenibilidad y eficiencia técnica, garantizando resultados excepcionales en cada proyecto.",
    badges: [
      "Sello CLT — Cumplimiento Laboral",
      "Sello ESG — Environmental, Social and Corporate Governance",
      "Sello Legal — Empresa Legal",
      "Sello LGPD — Ley General de Protección de Datos de Brasil",
      "Sello Safety — Salud y Seguridad Ocupacional",
      "Sello Mujer — Buenas Prácticas de Igualdad",
    ],
  },
  coverage: {
    title: "Dónde actuamos",
    paragraphs: [
      "Con sede en el Distrito Federal, ya hemos actuado en diversos estados, como Goiás, Minas Gerais, Mato Grosso, Bahía y Río de Janeiro. El Grupo AGAGE está preparado para actuar en todo el territorio brasileño.",
      "La flexibilidad es uno de nuestros pilares: ejecutamos obras de pequeña, mediana y gran escala con el mismo nivel de eficiencia, calidad y responsabilidad.",
    ],
    cta: "Ver obras",
    viewDetails: "Ver detalles",
  },
  gallery: {
    title: "Obras destacadas",
    previous: "Obra anterior",
    next: "Obra siguiente",
    viewLarger: "Ver foto en mayor resolución",
    client: "Cliente",
    service: "Servicio",
  },
  projects: {
    "parque-eolico-novo-horizonte": {
      title: "Parque Eólico Novo Horizonte",
      description: "Infraestructura vial para el parque eólico.",
    },
    "reassentamento-bento-rodrigues": {
      title: "Reasentamiento de Bento Rodrigues",
      description:
        "Construcción de viviendas para el reasentamiento de la comunidad de Bento Rodrigues.",
    },
    "rio-piracicaba": {
      title: "Rio Piracicaba",
      description: "Obra de drenaje.",
    },
    "viaduto-perimetral": {
      title: "Viaducto Perimetral",
      description: "Ejecución de estructura de hormigón armado.",
    },
    "pavimentacao-anapolis": {
      title: "Pavimentación en Anápolis",
      description: "Pavimentación asfáltica y drenaje pluvial.",
    },
    "residencia-oficial-cni": {
      title: "Residencia Oficial CNI",
      description: "Ejecución de obras civiles.",
    },
    "fabrica-de-cimentos": {
      title: "Fábrica de Cemento",
      description: "Ejecución de obras industriales.",
    },
    "uhe-queimados": {
      title: "Central Hidroeléctrica de Queimados",
      description: "Ejecución de obras civiles y represas.",
    },
    "aeroporto-de-macae": {
      title: "Aeropuerto de Macaé",
      description: "Ejecución de pavimentación y alquiler de equipos.",
    },
  },
  skilledLabor: {
    imageAlt: "Equipo de AGAGE en un frente de pavimentación",
    titleLine1: "Mano de obra",
    titleLine2: "especializada",
    text: "Referencia en grandes paradas industriales y gestión de activos. Nuestro equipo altamente calificado ofrece soluciones completas para industrias de alta demanda, como calderería, mantenimiento de hornos, cintas transportadoras, soldadura especializada, tanques de almacenamiento y silos de semillas.",
  },
  servicesSection: {
    title: "Nuestros servicios",
  },
  ombudsman: {
    logoAlt: "Canal de Denuncias",
    qrLabel: "Acceder al Canal de Denuncias",
    qrAlt: "Código QR del Canal de Denuncias",
    title: "Canal de Denuncias",
    text: "Canal directo con la dirección de la empresa, protegido por cifrado de extremo a extremo, que garantiza el anonimato de quien denuncia.",
    cardText:
      "Accede por el enlace o apunta la cámara del celular al código QR. El anonimato de quien denuncia está garantizado.",
    button: "Acceder al canal",
  },
  footer: {
    quickAccess: "Acceso rápido",
    contact: "Contacto",
    agage: "AGAGE",
    aboutUs: "Quiénes somos",
    missionVisionValues: "Misión, visión y valores",
    whereWeWork: "Dónde actuamos",
    certifications: "Certificaciones",
    ombudsman: "Canal de Denuncias",
    rights: "AGAGE. Todos los derechos reservados",
    privacy: "Política de Privacidad",
    developedBy: "Desarrollado por",
    backToTop: "Volver arriba",
  },
  mvv: {
    title: "Misión, visión y valores",
    agage: "AGAGE",
    mission: "Misión",
    missionText:
      "Proveer soluciones de ingeniería de alta complejidad, impulsando el progreso nacional mediante ejecuciones precisas, seguras y guiadas por la excelencia técnica.",
    vision: "Visión",
    visionText:
      "Ser reconocida como una referencia de excelencia y confianza en ingeniería, destacándose por la calidad técnica, la seguridad y el compromiso con el éxito de nuestros clientes y socios.",
    valuesTitle: "Nuestros valores",
    values: [
      "Seguridad absoluta",
      "Foco en resultados",
      "Ética y compliance",
      "Trabajo colaborativo",
      "Respeto al cliente",
    ],
  },
  collaborator: {
    menu: "Colaborador",
    menuHeading: "Área del colaborador",
    links: {
      onboarding: "Integración",
      safety: "Seguridad laboral",
      documents: "Documentos institucionales",
    },
    video: {
      heading: "Mira el video",
      unavailable: "El video estará disponible pronto.",
      unsupported: "Tu navegador no puede reproducir este video.",
    },
    documents: {
      heading: "Documentos",
      empty: "No hay documentos publicados en este momento.",
      emptyHint:
        "En cuanto se publique un documento, aparecerá aquí para consultarlo y descargarlo.",
      open: "Abrir",
      download: "Descargar",
      revision: "Revisión",
      updated: "Actualizado el",
      unavailable:
        "No fue posible cargar el contenido ahora. Inténtalo de nuevo en unos minutos.",
    },
    onboarding: {
      title: "Integración",
      metaDescription:
        "Integración de nuevos colaboradores de AGAGE: reglamento interno, deberes, jornada, prohibiciones y sanciones.",
      intro:
        "Bienvenido a AGAGE. Esta página reúne lo que necesitas saber en tu primer día: las reglas que hacen que nuestro equipo funcione bien y que valen para todos, del ayudante al director.",
      pillars: ["Respeto", "Responsabilidad", "Seguridad"],
      sections: [
        {
          title: "Reglamento Interno",
          text: "El Reglamento Interno forma parte de tu contrato de trabajo. No es un papel cualquiera: es un compromiso asumido y vale para todos, sin distinción de cargo.",
          items: [],
        },
        {
          title: "Tus deberes",
          text: "Lo que se espera de ti en el día a día:",
          items: [
            "Cumplir el trabajo con esmero y atención y seguir las indicaciones de los superiores.",
            "Mantener el lugar de trabajo organizado, disciplinado y limpio.",
            "Comer solo en los lugares habilitados por la empresa.",
            "Dejar las pertenencias personales en el guardarropa antes de marcar la entrada.",
            "Usar correctamente los EPP, respetar las protecciones colectivas y participar en las capacitaciones de seguridad.",
            "Responder por los perjuicios causados a la empresa, incluidos daños a equipos, vehículos y multas de tránsito.",
          ],
        },
        {
          title: "Jornada y registro de asistencia",
          text: "La jornada estándar es de 44 horas semanales. El registro de asistencia es personal y debe hacerlo rigurosamente cada uno: marcar por un compañero es falta grave.",
          items: [],
        },
        {
          title: "Lo que está prohibido",
          text: "Prohibiciones expresas del reglamento:",
          items: [
            "Cualquier forma de discriminación o acoso.",
            "Usar información confidencial en beneficio propio o divulgar salarios.",
            "Aceptar u ofrecer sobornos, regalos o cualquier ventaja indebida.",
            "Faltar sin justificación o promover paralizaciones sin respaldo legal.",
            "Usar celular, dispositivos electrónicos o memorias USB sin autorización.",
            "Hacer trabajos particulares con el tiempo, las herramientas o los materiales de la empresa.",
          ],
        },
        {
          title: "Relaciones en el trabajo",
          text: "Las relaciones afectivas entre compañeros deben comunicarse a la empresa, para evitar conflictos de interés, sobre todo cuando hay relación jerárquica o trabajan en el mismo equipo.",
          items: [],
        },
        {
          title: "Sanciones",
          text: "Se aplican según la gravedad de la infracción:",
          items: [
            "Amonestación verbal.",
            "Amonestación escrita.",
            "Suspensión de 1 o 2 días.",
            "Despido por causa justificada, en los casos más graves.",
          ],
        },
      ],
      closing:
        "¿Tienes alguna duda? Habla con tu encargado o con RR. HH. Haciendo tu parte, el resto lo construimos juntos. ¡Bienvenido al equipo!",
    },
    safety: {
      title: "Seguridad laboral",
      metaDescription:
        "Programas de seguridad y salud en el trabajo de AGAGE: PGR, PCMSO, PCA, PPR, AET, EPP y actividades críticas.",
      intro:
        "En AGAGE, la meta que más importa, por encima de plazos y producción, es una sola: que todos vuelvan a casa sanos y salvos. Por eso la seguridad y la salud en el trabajo se organizan en programas obligatorios, según las Normas Reglamentarias (NR) del Ministerio de Trabajo y Empleo de Brasil.",
      programsTitle: "Nuestros programas",
      programs: [
        {
          acronym: "PGR",
          name: "Programa de Gestión de Riesgos",
          norm: "NR-1",
          text: "Inventaría los riesgos de cada función, caracteriza los ambientes de trabajo y define el plan de acción para eliminar o controlar cada riesgo.",
        },
        {
          acronym: "PCMSO",
          name: "Programa de Control Médico de Salud Ocupacional",
          norm: "NR-7",
          text: "Previene enfermedades y detecta problemas a tiempo, con exámenes de ingreso, periódicos, de reincorporación, de cambio de riesgo y de egreso.",
        },
        {
          acronym: "PCA",
          name: "Programa de Conservación Auditiva",
          norm: "",
          text: "Evalúa el ruido con dosímetro y acompaña tu audición con audiometrías. Usa el protector auditivo siempre que se indique, bien colocado, durante toda la exposición.",
        },
        {
          acronym: "PPR",
          name: "Programa de Protección Respiratoria",
          norm: "NR-6, NR-9, NR-15 y NR-18",
          text: "Define el respirador adecuado para cada actividad, como PFF2 y PFF3, y la capacitación para su uso correcto. La mascarilla en el mentón no protege; cambia la que esté sucia, arrugada o vencida.",
        },
        {
          acronym: "AET",
          name: "Análisis Ergonómico del Trabajo",
          norm: "NR-17",
          text: "Adapta el trabajo al cuerpo y a la mente del trabajador para evitar lumbalgias, distensiones y fatiga. Dobla las rodillas para levantar peso, pide ayuda con cargas pesadas y respeta las pausas.",
        },
      ],
      sections: [
        {
          title: "EPP y protecciones colectivas",
          text: "Usar correctamente los Equipos de Protección Personal y respetar las protecciones colectivas es obligación de todos. Cada EPP recibido queda registrado en tu ficha: si se daña, se pierde o vence, pide el cambio. Nunca retires una protección colectiva sin autorización.",
          items: [],
        },
        {
          title: "Actividades críticas",
          text: "Antes de cualquier actividad de riesgo, el equipo realiza el Análisis Preliminar de Riesgos (APR) y tú recibes la Orden de Servicio de tu función. Tres tipos de trabajo exigen capacitación y autorización formal, sin excepción:",
          items: [
            "Trabajo con electricidad (NR-10).",
            "Trabajo en espacios confinados (NR-33).",
            "Trabajo en altura (NR-35).",
          ],
        },
        {
          title: "Andamios",
          text: "Los andamios y pisos metálicos se montan según manuales técnicos y con la responsabilidad técnica registrada (ART) de un ingeniero. ¿Viste un andamio sin identificación, incompleto o modificado sin autorización? No subas y avisa de inmediato.",
          items: [],
        },
      ],
      closing:
        "¿Viste una situación de riesgo? Habla con el técnico de seguridad o con tu encargado. Avisar no es delatar: es cuidar a quien trabaja a tu lado.",
    },
    institutional: {
      title: "Documentos institucionales",
      metaDescription:
        "Reglamento interno, políticas y demás documentos institucionales vigentes de AGAGE.",
      intro:
        "Reglamento interno, políticas y demás documentos institucionales vigentes de AGAGE, disponibles para consulta y descarga.",
    },
  },
  services: {
    "obras-civis": {
      title: "Obras civiles",
      description:
        "Edificaciones industriales, comerciales y residenciales, desde las fundaciones hasta las terminaciones.",
    },
    pavimentacao: {
      title: "Pavimentación y conservación de carreteras",
      description:
        "Pavimentación asfáltica y de hormigón para vías urbanas, carreteras, patios y aeropuertos. Mantenimiento rutinario de carreteras: reparación del pavimento, desbroce, limpieza del drenaje y señalización.",
    },
    escavacao: {
      title: "Excavación",
      description:
        "Excavación mecánica y manual para fundaciones, zanjas, redes y movimiento de suelo.",
    },
    impermeabilizacao: {
      title: "Impermeabilización",
      description:
        "Sistemas de impermeabilización para losas, fundaciones, depósitos y estructuras enterradas.",
    },
    terraplenagem: {
      title: "Movimiento de tierras",
      description:
        "Corte, relleno, compactación y nivelación de terrenos para obras de cualquier escala.",
    },
    "obras-de-infraestrutura": {
      title: "Obras de infraestructura",
      description:
        "Implantación de infraestructura urbana y vial, incluidas redes, accesos y urbanización.",
    },
    "obras-de-contencao": {
      title: "Obras de contención",
      description:
        "Muros de contención, pantallas y soluciones para la estabilización de taludes y laderas.",
    },
    "fornecimento-de-mao-de-obra": {
      title: "Suministro de mano de obra civil y mecánica",
      description:
        "Suministro de mano de obra civil y mecánica para la atención de paradas industriales.",
    },
    "obras-de-drenagem": {
      title: "Obras de drenaje",
      description:
        "Drenaje pluvial, alcantarillas, cunetas y obras de drenaje menores para vías y ferrocarriles.",
    },
    "obras-industriais": {
      title: "Obras industriales",
      description:
        "Obras civiles y de apoyo al montaje en plantas industriales, incluso con la operación en marcha.",
    },
    "obras-de-artes-especiais": {
      title: "Obras de arte especiales",
      description:
        "Puentes, viaductos y estructuras de hormigón armado de gran porte.",
    },
    "tratamento-de-estrutura": {
      title: "Tratamiento de estructuras",
      description:
        "Recuperación, refuerzo y protección de estructuras de hormigón y metálicas.",
    },
  },
  privacy: privacyEs,
};
