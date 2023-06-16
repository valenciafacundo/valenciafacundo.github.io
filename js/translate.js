var textos = {
  home: {
    es: "inicio",
    en: "home",
  },
  about: {
    es: "sobre mí",
    en: "about",
  },
  about2: {
    es: "sobre mí",
    en: "about",
  },
  aboutTitle: {
    es: "Inspira Tus Soluciones Creativas",
    en: "Inspire Your Creative Solutions",
  },
  services: {
    es: "servicios",
    en: "services",
  },
  works: {
    es: "trabajos",
    en: "works",
  },
  contact: {
    es: "contacto",
    en: "contact",
  },
  developer: {
    es: "Desarrollador React",
    en: "React Developer",
  },
  homeDetail: {
    es: "Sólida experiencia en tecnologías de desarrollo web y móvil, y un amplio dominio de las últimas tendencias y herramientas de la industria",
    en: "Solid experience in web and mobile development technologies, and a broad mastery of the latest industry trends and tools.",
  },
  aboutSubTitle: {
    es: "Soy un desarrollador de React y React Native con residencia en Argentina, con más de 2 años de experiencia.",
    en: "A React & React Native Developer based in Argentina, with +2 Years of Experience.",
  },
  aboutDetail: {
    es: "Desarrollo código sólido y eficiente, colaboro en equipos ágiles para impulsar el éxito de los proyectos y siempre me esfuerzo por superar las expectativas. Mi compromiso con la calidad y la innovación me distingue en mi campo.",
    en: "I develop solid and efficient code, collaborate in agile teams to drive project success, and consistently strive to exceed expectations. My commitment to quality and innovation sets me apart in my field.",
  },
  cleanCode: {
    es: "Código Limpio",
    en: "Clean Code",
  },
  performance: {
    es: "Rendimiento",
    en: "Performance Optimization",
  },
  colaborationTeam: {
    es: "Colaboración en equipo",
    en: "Team Collaboration",
  },
  agile: {
    es: "Metodologías agiles",
    en: "Agile Methodologies",
  },
  curriculum: {
    es: "Descarga mi CV",
    en: "Download CV",
  },
  myServices: {
    es: "Mis servicios",
    en: "My Services",
  },
  doBest: {
    es: "En Que Me Destaco ?",
    en: "What Can I Do Best ?",
  },
  serviceExpo: {
    es: "Manejo este framework para el desarrollo eficiente de aplicaciones móviles multiplataforma, creando aplicaciones nativas utilizando JavaScript y React.",
    en: "I handle this framework for efficient cross-platform mobile development, creating native applications using JavaScript and React.",
  },
  serviceCli: {
    es: "La capacidad de React Native CLI me permite crear aplicaciones móviles sorprendentes y multiplataforma con capacidades nativas.",
    en: "The prowess of React Native CLI enables me to create remarkable cross-platform mobile applications with native capabilities.",
  },
  platform: {
    es: "Implemento aplicaciones en la App Store y Play Store, optimizando el rendimiento y proporcionando actualizaciones periódicas.",
    en: "I deploy apps on the App Store and Play Store, optimizing performance and providing regular updates.",
  },
  websiteApp: {
    es: "Aplicaciones Web",
    en: "Website App",
  },
  websiteDetail: {
    es: "Experto en desarrollo web, creando sitios web de alto rendimiento, optimizando la experiencia del usuario y la velocidad de carga.",
    en: "Skilled in web development, creating high-performance websites, optimizing user experience and loading speed.",
  },
  expertise: {
    es: "Conocimientos Especializados",
    en: "Expertise",
  },
  mySkill: {
    es: "Habilidades",
    en: "My Skills & Tools",
  },
  mySkillSubtitle: {
    es: "Cada día es un nuevo desafío",
    en: "Every Day is a New Challenge",
  },
  mySkillDetail: {
    es: "Cada día se presenta como una nueva oportunidad para aprender y crecer. Al aprovechar mi experiencia y utilizar las herramientas adecuadas, puedo adaptarme al entorno en constante evolución de mi profesión y ofrecer soluciones impactantes que marcan la diferencia.",
    en: "Every day presents a new opportunity to learn and grow. By harnessing my skills and leveraging the right tools, I am able to navigate the ever-changing landscape of my profession and deliver impactful solutions that make a difference.",
  },
  portfolio: {
    es: "Portafolio",
    en: "Portfolio",
  },
  myWork: {
    es: "Mis proyectos",
    en: "My Creative Work",
  },
  all: {
    es: "TODOS",
    en: "ALL",
  },
  gireDetail: {
    es: "Aplicación de utilidad para registrar el pesaje de las bolsas de cada reciclador ambiental.",
    en: "Utility application to record the weighing of each environmental recycler's bags.",
  },
  shoppingDetail: {
    es: "La app de ventas ofrece productos variados, calificaciones de usuarios y excelentes ofertas.",
    en: "The sales app offers a wide selection of products, user ratings, and great deals.",
  },
  flobiDetail: {
    es: "Flobi es una red social de tenis y pádel para encontrar jugadores de un nivel similar al tuyo.",
    en: "Flobi is a tennis and paddle social network to find players of a similar level to yours.",
  },
  btesDetail: {
    es: "Aplicación de ejercicio dedicada a la salud y el bienestar, disponible para todos los dispositivos.",
    en: "Exercise app dedicated to health and wellness, available for all devices.",
  },
  foodDetail: {
    es: "Aplicación de conveniencia para realizar pedidos de comida y entrega rápida al alcance de tus dedos.",
    en: "Convenience App for Seamless Food Ordering and Delivery at Your Fingertips.",
  },
  similarProject: {
    es: "¿Buscas diseñar un proyecto similar?",
    en: "Looking to Design Similar Project ?",
  },
  contactMe: {
    es: "Ponte en contacto conmigo en cualquier plataforma y estaré encantado de ayudarte.",
    en: "Contact me on any platform and i will happy to help you out ?",
  },
  callMe: {
    es: "Llámame :",
    en: "Call Me At:",
  },
  homeFoot: {
    es: "Inicio",
    en: "Home",
  }, //homeFootText
  aboutFoot: {
    es: "sobre mí",
    en: "about",
  },
  servicesFoot: {
    es: "servicios",
    en: "services",
  },
  worksFoot: {
    es: "trabajos",
    en: "works",
  },
  contactFoot: {
    es: "contacto",
    en: "contact",
  },
};
function cambiarIdioma(idioma) {
  var elementos = Object.keys(textos);
  elementos.forEach(function (elemento) {
    var texto = document.getElementById(elemento + "Text");
    texto.textContent = textos[elemento][idioma];
  });
}
