import { Project, Experience, Education, Certification, SocialLink, Language, Stat } from '@/types/portfolio';

export const personalInfo = {
  name: "JHOAM SEBASTIAN MUÑOZ BETANCOURT",
  title: "Full Stack Developer",
  subtitle: "React · Node.js · TypeScript · SQL · Azure",
  location: "Montenegro, Quindío",
  phone: "+57 311 695 7990",
  email: "jhoamsebastian68@gmail.com",
  github: "https://github.com/JhoamSebastianMunoz",
  linkedin: "https://www.linkedin.com/in/jhoam-sebastian-mu%C3%B1oz-betancourt",
  profile: "Desarrollador de Software con experiencia construyendo aplicaciones web full-stack con React, Node.js y TypeScript. Experiencia diseñando APIs RESTful, microservicios y arquitecturas limpias, optimizando consultas SQL y desplegando en la nube (Azure, Vercel, Railway, Supabase) con pipelines CI/CD en producción. Enfoque en código mantenible, separación de capas (Controllers, Services, Repositories) y uso de herramientas de IA para acelerar el ciclo de desarrollo."
};

export const stats: Stat[] = [
  { label: "Años de Experiencia", value: "3+" },
  { label: "Proyectos en Producción", value: "12+" },
  { label: "Tecnologías Dominadas", value: "45+" },
  { label: "Certificaciones", value: "29+" },
];

export const techStack = [
  "React", "TypeScript", "JavaScript", "TailwindCSS", "Boostrap", "CSS", "HTML5",
  "Next.js", "Node.js", "Express", "NestJS", "Java", "Spring Boot", "Spring Security",
  "PostgreSQL", "MySQL", "SQLite", "TypeORM", "JPA",
  "Docker", "Azure", "Vercel", "Railway", "Supabase", "Azure Functions",
  "JWT", "Vite", "i18next", "Chart.js", "lucide-react", "React Router", "Axios",
  "Leaflet", "Recharts", "Context API", "Framer Motion", "Cloudinary", "PDFKit",
  "Swagger", "Scalar", "Jest", "Supertest", "Clean Architecture", "DDD",
  "Hexagonal Architecture", "Saga Pattern", "Event Sourcing", "Power BI", "Git", "GitHub",
];

export const projects: Project[] = [
  // ===================== FRONTEND =====================
  {
    id: "1",
    title: "Portafolio Personal",
    description: "Portafolio profesional con Next.js 16, TypeScript y optimización avanzada de rendimiento y SEO.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "React"],
    period: "2026",
    category: "frontend",
    features: [
      "Arquitectura App Router con Server Components",
      "Optimización de imágenes con Next.js Image",
      "SEO avanzado con structured data JSON-LD",
      "Animaciones 60fps con Framer Motion",
      "Filtrado de proyectos por categoría"
    ],
    impact: [
      "Implementación full performance con compresión y optimización de assets",
      "SEO estructurado con datos semánticos y Open Graph",
      "Diseño responsivo con métricas Core Web Vitals optimizadas"
    ],
    liveUrl: "https://portafolio-gamma-beryl.vercel.app",
    githubUrl: "https://github.com/JhoamSebastianMunoz/portafolio"
  },
  {
    id: "2",
    title: "Tremendo Territorio",
    description: "Plataforma web para visibilizar y comercializar productos agrícolas colombianos, con enfoque en escalabilidad y experiencia de usuario.",
    technologies: ["React", "Vite", "TailwindCSS", "JavaScript", "Node.js", "Express", "MySQL", "i18next", "Chart.js", "Cloudinary"],
    period: "May 2025 – Ene 2026",
    category: "frontend",
    features: [
      "Arquitectura de componentes reutilizables con React + Vite",
      "Diseño responsive con TailwindCSS optimizado para móviles",
      "Integración de APIs REST con manejo de estado global (Context API)",
      "Despliegue en Vercel con CI/CD automatizado",
      "Internacionalización multi-idioma (Español/Inglés) con i18next",
      "Autenticación de usuarios con AuthContext",
      "Dashboard de analytics con gráficos de oferta y demanda"
    ],
    impact: [
      "- Diseñé 30+ componentes reutilizables en React + Vite, reduciendo el tiempo de desarrollo de nuevas vistas mediante un sistema de diseño consistente.",
      "- Reduje llamadas API redundantes implementando gestión centralizada de estado con Context API.",
      "- Desarrollé servicios RESTful y modelos de datos en TypeScript y PostgreSQL, aplicando arquitectura limpia y manejo centralizado de errores con middlewares.",
      "- Integré almacenamiento remoto de archivos con Cloudinary, agilizando la gestión de contenido multimedia.",
      "- Mantuve historial de commits organizado colaborando en equipo con GitFlow en GitHub."
    ],
    liveUrl: "https://tremendoterritoriofrontend.vercel.app/",
    githubUrl: "https://github.com/tremendoterritorio/tremendoterritorio-frontend.git",
    technicalNotice: {
      type: "warning",
      title: "Servicios Backend Temporalmente No Disponibles",
      message: "Ciertos servicios del backend están deshabilitados por falta de renovación de pago de servicios de despliegue. La interfaz frontal permanece funcional."
    }
  },
  {
    id: "3",
    title: "TATSoft — Frontend de Gestión Empresarial",
    description: "Frontend de una plataforma empresarial de gestión comercial (preventas, ventas, devoluciones, inventario, clientes y zonas) construida con React + Vite bajo el patrón Atomic Design y consumiendo cinco microservicios en Azure.",
    technologies: ["React", "Vite", "TailwindCSS", "React Router", "Axios", "Leaflet", "Recharts", "Azure", "RBAC"],
    period: "Jul 2023 – Abr 2025",
    category: "frontend",
    features: [
      "Arquitectura Atomic Design (átomos, moléculas, organismos, páginas)",
      "11 módulos funcionales: autenticación, usuarios, zonas, clientes, productos, inventario, preventas, ventas, devoluciones, estadísticas y colaborador",
      "Control de acceso basado en roles (RBAC): ADMINISTRADOR y COLABORADOR",
      "Consumo de cinco microservicios en Azure con interceptor de token JWT",
      "Mapas geográficos con Leaflet y dashboards con Recharts"
    ],
    impact: [
      "Diseñé la arquitectura de componentes siguiendo Atomic Design, facilitando la reutilización y el mantenimiento.",
      "Implementé rutas protegidas y AuthContext con inyección automática del token Bearer en cada cliente Axios.",
      "Integré mapas geográficos (Leaflet) y dashboards de estadísticas (Recharts) para la gestión de zonas y ventas."
    ],
    liveUrl: "frontend-tatsoft.vercel.app/",
    githubUrl: "https://github.com/JhoamSebastianMunoz/tatsoft-frontend.git",
    technicalNotice: {
      type: "warning",
      title: "Despliegue Temporalmente Offline (Azure)",
      message: "La infraestructura de microservicios está completamente funcional. El despliegue está offline por expiración de créditos de Azure; los servicios v2 migraron a Vercel y Railway."
    }
  },
  {
    id: "4",
    title: "React Fundamentals Workshop",
    description: "Aplicación de práctica con Vite + React que demuestra los usos más comunes del hook useState mediante cinco ejercicios independientes enrutados.",
    technologies: ["React", "Vite", "React Router", "SweetAlert2", "JavaScript"],
    period: "2025",
    category: "frontend",
    features: [
      "Cinco ejercicios de useState: inputs controlados, calculadora, fondo aleatorio, formulario con validación y captura de tareas",
      "Enrutamiento cliente con React Router v6 y página 404 personalizada",
      "Manejo de formularios con detección de duplicados usando SweetAlert2",
      "Despliegue estático en Vercel"
    ],
    impact: [
      "Consolidé el dominio del hook useState aplicado a inputs, arrays, objetos y estilos dinámicos.",
      "Documenté cada ejercicio con su enunciado original para repaso."
    ],
    liveUrl: "https://react-use-state-ten.vercel.app",
    githubUrl: "https://github.com/JhoamSebastianMunoz/react-fundamentals-workshop.git"
  },
  {
    id: "5",
    title: "My Day",
    description: "Aplicación de tareas (to-do) para organizar el día con filtros por ruta y persistencia en localStorage, sin backend.",
    technologies: ["React", "Vite", "React Router", "CSS", "JavaScript"],
    period: "2025",
    category: "frontend",
    features: [
      "CRUD de tareas: agregar, editar (doble clic), completar y eliminar",
      "Filtros All/Pending/Completed basados en rutas de React Router",
      "Contador de pendientes y limpieza de completadas",
      "Persistencia automática en localStorage"
    ],
    impact: [
      "Implementé persistencia local bajo la clave mydayapp-reactjs, conservando la lista entre sesiones.",
      "Diseñé una interfaz tipo agenda responsive con foco accesible y respeto por prefers-reduced-motion."
    ],
    liveUrl: "https://my-day-app-mu.vercel.app",
    githubUrl: "https://github.com/JhoamSebastianMunoz/my-day-react.git"
  },
  {
    id: "6",
    title: "React Tasks Manager",
    description: "Aplicación de gestión de tareas de una sola página con estado global mediante la API de Contexto de React.",
    technologies: ["React", "Vite", "Context API", "uuid", "ESLint"],
    period: "2025",
    category: "frontend",
    features: [
      "Crear tareas con título y descripción desde un formulario simple",
      "Marcar como hechas y filtrar por estado (todas/pendientes/terminadas)",
      "Contadores en vivo de tareas pendientes y terminadas",
      "Estado global compartido con un único TasksProvider"
    ],
    impact: [
      "Centralicé el estado (tareas, filtros y contadores) en un Context Provider reutilizable.",
      "Demostré el patrón de flujo de estado con contenedores y componentes desacoplados."
    ],
    liveUrl: "https://tasks-manager-six.vercel.app",
    githubUrl: "https://github.com/JhoamSebastianMunoz/react-tasks-manager.git"
  },
  {
    id: "7",
    title: "Rock Paper Scissors",
    description: "Juego web clásico de piedra, papel o tijeras contra la máquina al mejor de cinco rondas, con HTML, CSS y JavaScript sin build.",
    technologies: ["HTML5", "CSS3", "JavaScript", "SweetAlert2"],
    period: "2025",
    category: "frontend",
    features: [
      "Duelo usuario vs CPU al primero en llegar a 3 puntos",
      "Selección aleatoria uniforme de la CPU y veredicto con la regla aplicada",
      "Diálogo de fin de partida con marcador y reinicio",
      "Accesibilidad con aria-live y prefers-reduced-motion"
    ],
    impact: [
      "Implementé la lógica del juego con funciones puras (getCpuChoice, determineWinner, resetGame).",
      "Diseñé una interfaz responsive con paleta derivada de los iconos del juego."
    ],
    liveUrl: "https://rock-paper-scissor-puce-eight.vercel.app",
    githubUrl: "https://github.com/JhoamSebastianMunoz/rock-paper-scissors.git"
  },

  // ===================== BACKEND MICROSERVICES =====================
  {
    id: "8",
    title: "TATSoft Area Service v2",
    description: "Microservicio REST v2 para gestión de zonas de trabajo y clientes, con Arquitectura Limpia, SOLID, paginación, caché en memoria y Swagger, desplegado en Railway.",
    technologies: ["Node.js", "TypeScript", "Express", "MySQL", "JWT", "Swagger", "Railway", "Clean Architecture", "Docker"],
    period: "2026",
    category: "backend-microservices",
    features: [
      "API versionada /api/v2 (areas, clients, client-requests, internal)",
      "Arquitectura Limpia con inyección de dependencias (DependencyContainer)",
      "Paginación flexible (page o limit/offset), caché en memoria TTL 5 min y DTOs inmutables",
      "Flujo de aprobación de solicitudes de clientes (Pendiente → Activo)"
    ],
    impact: [
      "Migré la v1 a Clean Architecture con Repository Pattern e inversión de dependencias.",
      "Optimicé respuestas con caché en memoria e invalidación automática en escrituras.",
      "Desplegué en Railway con auto-deploy desde la rama main."
    ],
    liveUrl: "https://microservicebackendareasclientsv2-production.up.railway.app",
    githubUrl: "https://github.com/JhoamSebastianMunoz/tatsoft-area-service-v2",
    technicalNotice: {
      type: "info",
      title: "Versión Actual (v2)",
      message: "Reemplaza por completo los endpoints de la v1 (legacy en Azure). API RESTful versionada, paginación, caché en memoria y despliegue activo en Railway."
    }
  },
  {
    id: "9",
    title: "TATSoft Products Service v2",
    description: "API REST v2 para e-commerce (productos, categorías, imágenes, stock y reportes) con Supabase (PostgreSQL + Storage), caché, rate limiting y despliegue serverless en Vercel.",
    technologies: ["Node.js", "TypeScript", "Express", "Supabase", "PostgreSQL", "JWT", "Jest", "Scalar", "Vercel Serverless"],
    period: "2026",
    category: "backend-microservices",
    features: [
      "Arquitectura Repositorio–Servicio–Controlador con principios SOLID y DTOs",
      "Supabase Storage para imágenes y PostgreSQL con relaciones en cascada",
      "Caché (TTL 5 min) con invalidación automática y rate limiting (100 req/min)",
      "Documentación interactiva con Scalar y pruebas con Jest + Supertest"
    ],
    impact: [
      "Desplegué un backend serverless en Vercel con Supabase como plataforma (BaaS).",
      "Estandaricé respuestas de error y mapeé códigos de Supabase a HTTP.",
      "Reduje latencia con caché inteligente de respuestas GET."
    ],
    liveUrl: "https://microservice-backend-products-v2.vercel.app",
    githubUrl: "https://github.com/JhoamSebastianMunoz/tatsoft-products-service-v2",
    technicalNotice: {
      type: "info",
      title: "Versión Actual (v2)",
      message: "Reescritura de la v1 sobre Supabase + Vercel Serverless, con caché, rate limiting y pruebas automatizadas. La v1 permanece como referencia legacy en Azure."
    }
  },
  {
    id: "10",
    title: "E-commerce Backend — DDD + Hexagonal",
    description: "Sistema de e-commerce tipo Amazon implementado como monolito modular con Domain-Driven Design, Arquitectura Hexagonal, Saga orquestada, Event Sourcing, Outbox Pattern y Pub/Sub.",
    technologies: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL", "Docker", "DDD", "Hexagonal Architecture", "Saga Pattern", "Event Sourcing", "Correlation ID"],
    period: "2026",
    category: "backend-microservices",
    features: [
      "Siete Bounded Contexts: Catálogo, Carrito, Promociones, Checkout, Pagos, Envíos y Devoluciones",
      "Saga orquestada para el flujo de checkout y Outbox Pattern para entrega garantizada",
      "Event Sourcing en Pagos y Devoluciones; Pub/Sub interno con EventEmitter2",
      "Idempotency Keys, Correlation ID transversal y health checks"
    ],
    impact: [
      "Modelé el dominio siguiendo DDD con Aggregate Roots, Value Objects y Domain Events.",
      "Apliqué Arquitectura Hexagonal con puertos y adaptadores, aislando el dominio de la infraestructura.",
      "Documenté 11 ADRs y el diseño de dominio como evidencia arquitectónica."
    ]
  },
  {
    id: "11",
    title: "TATSoft Sales Service",
    description: "Microservicio backend en TypeScript + Express que centraliza el ciclo comercial de TatSoft: preventas, ventas, devoluciones, facturación en PDF y reportes, sobre MySQL.",
    technologies: ["Node.js", "TypeScript", "Express", "MySQL", "JWT", "Swagger", "PDFKit"],
    period: "2024 – 2025",
    category: "backend-microservices",
    features: [
      "Flujo completo de preventas: crear, confirmar como venta, cancelar y eliminar",
      "Gestión de devoluciones y facturación en PDF con PDFKit",
      "Reportes: ventas por colaborador, top clientes y productos más/menos vendidos",
      "Documentación OpenAPI 3.0 + Swagger UI"
    ],
    impact: [
      "Diseñé la orquestación entre microservicios (clientes, productos, usuarios) vía HTTP.",
      "Implementé generación de facturas en PDF y endpoints de reportes de negocio."
    ],
    githubUrl: "https://github.com/JhoamSebastianMunoz/tatsoft-sales-service",
    technicalNotice: {
      type: "warning",
      title: "Despliegue en Pausa (Azure)",
      message: "El pipeline de CI/CD está implementado y funcional, pero el servicio está suspendido temporalmente por el estado de los créditos de Azure."
    }
  },
  {
    id: "12",
    title: "TATSoft Products Service (v1)",
    description: "Microservicio RESTful en Express + TypeScript para productos, inventario, categorías e imágenes, con JWT por roles y almacenamiento en Azure Blob Storage.",
    technologies: ["Node.js", "TypeScript", "Express", "MySQL", "JWT", "Azure Blob Storage", "Swagger"],
    period: "2024 – 2025",
    category: "backend-microservices",
    features: [
      "CRUD de productos y categorías con arquitectura por capas (routes, controllers, services, repositories, DTOs)",
      "Gestión de imágenes en Azure Blob Storage con multer",
      "Reportes de bajo stock y trazabilidad del historial de inventario",
      "Integración con el microservicio de preventa"
    ],
    impact: [
      "Implementé autenticación JWT y autorización por roles (ADMINISTRADOR, COLABORADOR).",
      "Integré almacenamiento cloud (Azure Blob Storage) para imágenes de productos."
    ],
    githubUrl: "https://github.com/JhoamSebastianMunoz/tatsoft-products-service",
    technicalNotice: {
      type: "warning",
      title: "Versión Legacy (v1) — Azure en Pausa",
      message: "Despliegue de Azure detenido temporalmente por créditos. Existe la v2 con Supabase + Vercel Serverless como versión actual."
    }
  },
  {
    id: "13",
    title: "TATSoft Area Service (v1)",
    description: "API REST en Express + TypeScript para gestión de zonas de trabajo y clientes, con asignación usuario-zona y flujo de solicitudes de creación de clientes.",
    technologies: ["Node.js", "TypeScript", "Express", "MySQL", "JWT", "Swagger", "Azure"],
    period: "2024 – 2025",
    category: "backend-microservices",
    features: [
      "CRUD de zonas de trabajo y clientes",
      "Flujo de solicitudes de creación de clientes con aprobación del administrador",
      "Asignación de zonas a usuarios (tabla usuario_zona)",
      "Endpoints de integración para otros microservicios"
    ],
    impact: [
      "Implementé control de acceso por roles y validación con express-validator.",
      "Expuse endpoints internos para consumo entre microservicios."
    ],
    githubUrl: "https://github.com/JhoamSebastianMunoz/tatsoft-area-service",
    technicalNotice: {
      type: "warning",
      title: "Versión Legacy (v1) — Azure en Pausa",
      message: "Servicio suspendido temporalmente por créditos de Azure. La v2 en Railway introduce Clean Architecture y endpoints versionados /api/v2."
    }
  },
  {
    id: "14",
    title: "TATSoft User Service (Java)",
    description: "Microservicio REST de gestión de usuarios construido con Spring Boot 3.4, Spring Security y Spring Data JPA sobre MySQL, con autenticación stateless JWT.",
    technologies: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "MySQL", "JWT", "Maven", "Swagger"],
    period: "2024 – 2025",
    category: "backend-microservices",
    features: [
      "CRUD completo de usuarios con validación y hash BCrypt",
      "Autenticación stateless con JWT (HMAC256) y control de acceso por roles",
      "Endpoints públicos de consulta por cédula/correo para otros microservicios",
      "Documentación con springdoc-openapi (Swagger UI)"
    ],
    impact: [
      "Implementé la única pieza del stack en Java/Spring Boot, ampliando el backend a un stack políglota.",
      "Apliqué Spring Security con filtro JWT personalizado y autoridad ROLE_<rol>."
    ],
    githubUrl: "https://github.com/JhoamSebastianMunoz/tatsoft-user-service",
    technicalNotice: {
      type: "warning",
      title: "Despliegue en Pausa (Azure)",
      message: "Workflow de GitHub Actions funcional, pero Azure App Service está suspendido temporalmente por el estado de los créditos."
    }
  },
  {
    id: "15",
    title: "Azure Functions Email Service",
    description: "Función serverless (Azure Functions v4) que envía correos transaccionales usando Azure Communication Services y plantillas HTML con Handlebars.",
    technologies: ["Azure Functions", "Node.js", "Azure Communication Services", "Handlebars"],
    period: "2025",
    category: "backend-microservices",
    features: [
      "Disparador HTTP POST /api/httpTrigger1 con modelo de programación v4",
      "Plantillas HTML compiladas con Handlebars e interpolación de datos",
      "Envío gestionado con @azure/communication-email, sin servidores propios",
      "Configuración ligera con despliegue directo desde VS Code"
    ],
    impact: [
      "Implementé una solución serverless event-driven con Azure Functions.",
      "Separé el contenido del correo en plantillas reutilizables."
    ],
    githubUrl: "https://github.com/JhoamSebastianMunoz/azure-functions-email-service.git"
  },

  // ===================== BACKEND APIs REST =====================
  {
    id: "16",
    title: "SENA Management API",
    description: "API REST en Node.js, TypeScript y Express para gestionar instructores y aprendices del SENA, con autenticación JWT y persistencia en MySQL.",
    technologies: ["Node.js", "TypeScript", "Express", "MySQL", "JWT", "bcryptjs"],
    period: "2025",
    category: "backend-api",
    features: [
      "Autenticación de instructores con JWT y expiración configurable",
      "CRUD completo de instructores (directores de grupo) y aprendices",
      "Protección de rutas con middleware VerifyToken y validación con express-validator",
      "Hash de contraseñas con bcryptjs y pool de conexiones MySQL"
    ],
    impact: [
      "Apliqué separación en capas (controllers, services, repositories, DTOs).",
      "Implementé un sistema de roles para instructores y aprendices."
    ],
    githubUrl: "https://github.com/JhoamSebastianMunoz/sena-management-api.git"
  },
  {
    id: "17",
    title: "Express SQLite API — Biblioteca",
    description: "API REST para el catálogo de una biblioteca (libros y autores) construida con Express, TypeScript y SQLite embebida, lista para consumir desde cualquier frontend.",
    technologies: ["Node.js", "TypeScript", "Express", "SQLite", "CORS"],
    period: "2025",
    category: "backend-api",
    features: [
      "CRUD completo de libros con consulta combinada (INNER JOIN con autores)",
      "SQLite embebida: cero configuración de servidor de base de datos",
      "TypeScript estricto y CORS habilitado",
      "Datos de ejemplo de autores clásicos incluidos"
    ],
    impact: [
      "Demostré una API auto-contenida sin dependencia de un servidor de base de datos externo.",
      "Implementé eliminación protegida que valida la categoría vía header de autorización."
    ],
    githubUrl: "https://github.com/JhoamSebastianMunoz/express-sqlite-api.git"
  },
  {
    id: "18",
    title: "Node REST Client",
    description: "Servidor de práctica con Express y TypeScript para consumir APIs REST, demostrando el manejo de parámetros de ruta, query, cuerpo JSON y cabeceras.",
    technologies: ["Node.js", "TypeScript", "Express", "dotenv"],
    period: "2024",
    category: "backend-api",
    features: [
      "Endpoints que demuestran recepción de parámetros por ruta, query, body y headers",
      "Métodos HTTP GET, POST, PUT y DELETE",
      "Configuración de puerto por variable de entorno con dotenv",
      "Estructura mínima de un servidor TypeScript compilado a dist/"
    ],
    impact: [
      "Practiqué el contrato HTTP completo desde el punto de vista del servidor.",
      "Establecí una base reutilizable para pruebas de consumo de APIs."
    ],
    githubUrl: "https://github.com/JhoamSebastianMunoz/node-rest-client.git"
  },
  {
    id: "19",
    title: "Student API",
    description: "API REST para la gestión de estudiantes con Node.js, Express y MySQL, con operaciones CRUD y consultas SQL parametrizadas.",
    technologies: ["Node.js", "JavaScript", "Express", "MySQL"],
    period: "2024",
    category: "backend-api",
    features: [
      "CRUD completo de estudiantes (nombre, email, teléfono)",
      "Consultas parametrizadas que evitan inyección SQL",
      "Arquitectura por capas: rutas, controladores y configuración",
      "Servidor ligero sin dependencias de build"
    ],
    impact: [
      "Implementé la base de una API REST con acceso a MySQL mediante mysql2.",
      "Documenté limitaciones y mejoras pendientes como ejercicio de autoaprendizaje."
    ],
    githubUrl: "https://github.com/JhoamSebastianMunoz/student-api.git"
  },

  // ===================== STATIC / EDUCATIONAL =====================
  {
    id: "20",
    title: "HTML Fundamentals — Tags HTML",
    description: "Página web estática y educativa que documenta 37 etiquetas de HTML5 con definición, código y ejemplo renderizado.",
    technologies: ["HTML5", "CSS3"],
    period: "2025",
    category: "static-educational",
    features: [
      "37 etiquetas de HTML5 agrupadas por tipo con definición, código y resultado",
      "Índice fijo con resaltado activo mediante IntersectionObserver",
      "Diseño adaptable con índice plegable en móvil y accesibilidad",
      "Sin dependencias: solo HTML y CSS"
    ],
    impact: [
      "Creé una guía visual de referencia para el aprendizaje de HTML semántico.",
      "Implementé navegación accesible con foco visible y prefers-reduced-motion."
    ],
    liveUrl: "https://html-fundamentals-ochre.vercel.app",
    githubUrl: "https://github.com/JhoamSebastianMunoz/html-fundamentals"
  },
  {
    id: "21",
    title: "Diario de Estudio",
    description: "Web estática para registrar sesiones de estudio y mantener la motivación viendo la racha de días consecutivos.",
    technologies: ["HTML5", "CSS3", "JavaScript", "localStorage"],
    period: "2025",
    category: "static-educational",
    features: [
      "Formulario para registrar sesiones (fecha, tema y minutos)",
      "Cálculo de racha actual y mejor racha en días consecutivos",
      "Lista de sesiones ordenada de la más reciente a la más antigua",
      "Persistencia en localStorage, sin servidor ni frameworks"
    ],
    impact: [
      "Implementé lógica de fechas en hora local evitando desfases de UTC.",
      "Mantuve un proyecto didáctico sin dependencias, ejecutable con doble clic."
    ],
    githubUrl: "https://github.com/JhoamSebastianMunoz/study-productivity-apps"
  },
  {
    id: "22",
    title: "Model Canvas",
    description: "Sitio web estático e interactivo para recorrer los nueve bloques del Modelo Canvas como experiencia navegable.",
    technologies: ["HTML5", "CSS3"],
    period: "2024",
    category: "static-educational",
    features: [
      "Portada con el lienzo de los nueve bloques clicables",
      "Una página propia por bloque con descripción e ilustración",
      "Mapa de imagen accesible y sistema de color por bloque (--b1..--b9)",
      "Sin build, frameworks ni dependencias"
    ],
    impact: [
      "Transformé un marco de negocio en una experiencia web navegable y accesible.",
      "Diseñé un sistema visual con paleta cálida y tipografía del sistema."
    ],
    liveUrl: "https://modelocanvas.vercel.app/",
    githubUrl: "https://github.com/JhoamSebastianMunoz/model-canvas"
  },
  {
    id: "23",
    title: "El León y el Ratón",
    description: "Página web estática que narra la fábula 'El león y el ratón' con maquetación semántica en HTML5 y CSS3.",
    technologies: ["HTML5", "CSS3"],
    period: "2024",
    category: "static-educational",
    features: [
      "Cuento completo con título, párrafos y moraleja",
      "Contenido semántico con header, article, section y footer",
      "Diseño responsivo e imagen ilustrativa con favicon propios",
      "Sin dependencias ni compilación"
    ],
    impact: [
      "Practiqué la maquetación semántica y el diseño responsivo.",
      "Publicado automáticamente con GitHub Pages."
    ],
    liveUrl: "https://jhoamsebastianmunoz.github.io/cuento-2801206/",
    githubUrl: "https://github.com/JhoamSebastianMunoz/cuento-2801206"
  },
  {
    id: "24",
    title: "Exercise Array Object",
    description: "Colección de ejercicios prácticos en JavaScript para dominar arreglos y objetos, con dos simulaciones aplicadas (cajero automático y reservas de hotel).",
    technologies: ["JavaScript", "Node.js"],
    period: "2024",
    category: "static-educational",
    features: [
      "11 ejercicios de fundamentos: filter, reduce, find, spread y más",
      "2 simulaciones aplicadas con arrays de objetos y lógica de negocio",
      "Ejecutable tanto en navegador como con Node.js, sin dependencias",
      "Código comentado con el enunciado de cada ejercicio"
    ],
    impact: [
      "Consolidé el manejo de arrays y objetos aplicado a casos reales.",
      "Practiqué lógica de negocio mediante simuladores interactivos."
    ],
    githubUrl: "https://github.com/JhoamSebastianMunoz/exercise-array-object"
  }
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Tremendo Territorio",
    position: "Desarrollador Frontend",
    period: "May 2025 – Ene 2026",
    description: "Plataforma web para visibilizar el trabajo de agricultores colombianos, conectando el campo con consumidores a través de tecnología moderna.",
    achievements: [
      "Construí 30+ componentes reutilizables en React + Vite + TailwindCSS, reduciendo el tiempo de desarrollo de nuevas vistas mediante un sistema de diseño consistente",
      "Implementé arquitectura limpia con manejo centralizado de estado global (Context API), optimizando el consumo de APIs REST y reduciendo llamadas redundantes",
      "Colaboré en equipo con GitFlow en GitHub, manteniendo un historial de commits organizado y entregas continuas",
      "Implementé internacionalización multi-idioma (Español/Inglés) con i18next y detección automática de idioma",
      "Desarrollé sistema de autenticación de usuarios con AuthContext y restricción de acceso a páginas protegidas",
      "Creé dashboard de analytics con gráficos de oferta y demanda y métricas de conexiones realizadas"
    ],
    technologies: ["React", "Vite", "TailwindCSS", "TypeScript", "Node.js", "Express", "MySQL", "Vercel", "Railway", "i18next", "AuthContext"]
  },
  {
    id: "2",
    company: "TATSOFT",
    position: "Desarrollador Full Stack",
    period: "Jul 2023 – Abr 2025",
    description: "Aplicativo web de gestión de preventas para distribuidoras, optimizando procesos comerciales con arquitectura de microservicios.",
    achievements: [
      "Reduje el tiempo de ejecución de procesos clave de preventas optimizando consultas SQL en MySQL, mejorando la velocidad de respuesta del equipo comercial",
      "Desarrollé y mantuve APIs REST para operaciones CRUD, integradas con un backend basado en microservicios",
      "Configuré pipelines de CI/CD en Azure para frontend y backend, garantizando despliegues continuos sin downtime"
    ],
    technologies: ["React", "Vite", "CSS3", "Node.js", "Express", "MySQL", "Azure"]
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "SENA – Centro de Comercio y Turismo (Galán)",
    title: "Tecnólogo en Análisis y Desarrollo de Software",
    period: "2023 – 2025",
    location: "Armenia"
  },
  {
    id: "2",
    institution: "SENA Agroindustrial",
    title: "Tecnólogo en Sistemas de Gestión Integrada",
    period: "2015 – 2018",
    location: "Armenia"
  }
];

export const languages: Language[] = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "A2 (en desarrollo activo)" }
];

export const certifications: Certification[] = [
  { id: "1", name: "Práctico Frontend Developer", issuer: "Platzi", year: "2026", month: "Febrero", category: "Frontend", status: "completed" },
  { id: "2", name: "Backend con Node.js - API Rest con Express.js", issuer: "Platzi", year: "2026", month: "Enero", category: "Backend", status: "completed" },
  { id: "3", name: "TypeScript", issuer: "Platzi", year: "2026", month: "Enero", category: "Frontend", status: "completed" },
  { id: "4", name: "Curso de PostgreSQL", issuer: "Platzi", year: "2026", month: "Enero", category: "Bases de Datos", status: "completed" },
  { id: "5", name: "Supabase", issuer: "Platzi", year: "2026", month: "Enero", category: "Backend", status: "completed" },
  { id: "6", name: "Windsurf AI", issuer: "Cascade", year: "2026", month: "Febrero", category: "Herramientas", status: "completed" },
  { id: "7", name: "Cursor AI Code Editor", issuer: "Platzi", year: "2025", month: "Octubre", category: "Herramientas", status: "completed" },
  { id: "8", name: "Next.js Avanzado", issuer: "Platzi", year: "2025", month: "Julio", category: "Frontend", status: "completed" },
  { id: "9", name: "React.js E-commerce Profesional", issuer: "Platzi", year: "2025", month: "Julio", category: "Frontend", status: "completed" },
  { id: "10", name: "React.js con TypeScript", issuer: "Platzi", year: "2025", month: "Julio", category: "Frontend", status: "completed" },
  { id: "11", name: "TailwindCSS", issuer: "Platzi", year: "2025", month: "Julio", category: "Frontend", status: "completed" },
  { id: "12", name: "React.js Avanzado", issuer: "Platzi", year: "2025", month: "Junio", category: "Frontend", status: "completed" },
  { id: "13", name: "Docker: Fundamentos", issuer: "Platzi", year: "2025", month: "Junio", category: "Herramientas", status: "completed" },
  { id: "14", name: "Pensamiento Lógico", issuer: "Platzi", year: "2025", month: "Junio", category: "Metodologías", status: "completed" },
  { id: "15", name: "N8N", issuer: "Platzi", year: "2025", month: "Junio", category: "Herramientas", status: "completed" },
  { id: "16", name: "React.js", issuer: "Platzi", year: "2025", month: "Mayo", category: "Frontend", status: "completed" },
  { id: "17", name: "Elements of Agile in Miro", issuer: "Miro", year: "2025", month: "Mayo", category: "Metodologías", status: "completed" },
  { id: "18", name: "Technical Diagramming", issuer: "Miro", year: "2025", month: "Mayo", category: "Metodologías", status: "completed" },
  { id: "19", name: "Miro Essentials", issuer: "Miro", year: "2025", month: "Mayo", category: "Metodologías", status: "completed" },
  { id: "20", name: "Miro Users Support", issuer: "Miro", year: "2025", month: "Mayo", category: "Metodologías", status: "completed" },
  { id: "21", name: "Innovation Essentials", issuer: "Miro", year: "2025", month: "Mayo", category: "Metodologías", status: "completed" },
  { id: "22", name: "Curso Básico RPA", issuer: "PIX Robotics", year: "2024", month: "Noviembre", category: "Herramientas", status: "completed" },
  { id: "23", name: "Databases Fundamentals", issuer: "SoftServe", year: "2024", month: "Mayo", category: "Bases de Datos", status: "completed" },
  { id: "24", name: "JavaScript Essentials 2", issuer: "Cisco", year: "2024", month: "Abril", category: "Frontend", status: "completed" },
  { id: "25", name: "PostgreSQL", issuer: "Cisco", year: "2024", month: "Mayo", category: "Bases de Datos", status: "completed" },
  { id: "26", name: "JavaScript Essentials 1", issuer: "Cisco", year: "2023", month: "Diciembre", category: "Frontend", status: "completed" },
  { id: "27", name: "Scrum Fundamentals", issuer: "ScrumStudy", year: "2023", month: "Septiembre", category: "Metodologías", status: "completed" },
  { id: "28", name: "Next.js 14", issuer: "Platzi", year: "2025", category: "Frontend", status: "in_progress" },
  { id: "29", name: "Curso de Desarrollo con IA - El Nuevo Programador", issuer: "BIG school", year: "2026", month: "Octubre", category: "Herramientas / IA", status: "completed" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/JhoamSebastianMunoz",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jhoam-sebastian-muñoz-betancourt",
    icon: "linkedin"
  },
  {
    name: "Email",
    url: "mailto:jhoamsebastian68@gmail.com",
    icon: "envelope"
  }
];
