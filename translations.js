// Traducciones del CV - Franco Sponton
const translations = {
    es: {
        // Navegación
        nav: {
            home: "Inicio",
            about: "Sobre Mí",
            experience: "Experiencia",
            projects: "Proyectos",
            skills: "Habilidades",
            clients: "Clientes",
            contact: "Contacto"
        },
        // Hero
        hero: {
            name: "Franco Sponton",
            title: "Desarrollador Full Stack & DevOps",
            subtitle: "Especialista en Automatización e IA Colaborativa",
            location: "📍 Mendoza, Argentina",
            btnProjects: "Ver Proyectos",
            btnContact: "Contactar"
        },
        // Sobre Mí
        about: {
            title: "Sobre Mí",
            subtitle: "16 años transformando ideas en soluciones tecnológicas innovadoras",
            text1: "Profesional con <strong>16 años de experiencia</strong> iniciando en diseño gráfico publicitario y especialización en UI/UX, evolucionando hacia el desarrollo full stack y DevOps. Formación técnica en diseño gráfico publicitario, seguida de 2 años de especialización en diseño UI/UX, complementada con certificaciones en testing de software (UTN Chaco). Reconocido como experto e invitado a impartir clases y conferencias sobre Marketing, Desarrollo e Inteligencia Artificial en instituciones de prestigio como ITU San Rafael, Ministerio de Desarrollo de Mendoza y Polo TIC Mendoza.",
            text2: "Especializado en la <strong>colaboración con IA</strong> para el desarrollo de aplicaciones completas, combinando conocimientos sólidos en diseño, tecnologías web, scripting, contenedores Docker y resolución de problemas complejos. Experto en <strong>desplegar sistemas complejos en entornos Docker</strong>, automatizar procesos, depurar aplicaciones y desarrollar soluciones completas desde cero.",
            text3: "He desarrollado e implementado sistemas ERP completos, plataformas de comunicación masiva, extractores de datos, sistemas de trazabilidad y aplicaciones web complejas para empresas líderes en Argentina, mejorando significativamente sus procesos operativos y medios de comunicación. Mi formación en diseño me permite crear interfaces intuitivas y atractivas, mientras que mi experiencia técnica asegura sistemas robustos y escalables.",
            stats: {
                years: "Años de Experiencia",
                companies: "Empresas que Confían en Mí",
                institutions: "Instituciones donde Enseño",
                commitment: "Comprometido con la Excelencia"
            }
        },
        // Experiencia
        experience: {
            title: "Experiencia Profesional",
            subtitle: "Una trayectoria de evolución constante y crecimiento profesional",
            position: "Desarrollador Full Stack & DevOps",
            company: "ideas DevOps",
            period: "2009 - Presente",
            evolution: "Evolución Profesional:",
            evolution1: "<strong>2009-2015:</strong> Especialización en diseño web y marketing online, desarrollando sitios web responsivos, campañas de marketing digital y optimización SEO.",
            evolution2: "<strong>2015-2020:</strong> Transición hacia desarrollo full stack, implementando sistemas web complejos con integraciones de APIs, bases de datos y automatizaciones.",
            evolution3: "<strong>2020-Presente:</strong> Especialización en desarrollo de sistemas empresariales, DevOps, contenedorización Docker y colaboración con IA para desarrollo acelerado.",
            achievements: "Logros Principales:",
            achievement1: "Desarrollo e implementación de <strong>más de 15 sistemas completos</strong> en producción para empresas de diversos sectores (energía, seguros, movilidad, agro, retail).",
            achievement2: "Arquitectura y despliegue de sistemas complejos en <strong>entornos Docker</strong> con alta disponibilidad y escalabilidad.",
            achievement3: "Automatización de procesos críticos que han mejorado la eficiencia operativa de clientes en más del 40%.",
            achievement4: "Implementación de sistemas de comunicación masiva procesando <strong>más de 100,000 mensajes</strong> mensuales.",
            achievement5: "Desarrollo de sistemas ERP completos con módulos de facturación electrónica, trazabilidad y gestión de inventario multi-almacén."
        },
        // Proyectos
        projects: {
            title: "Proyectos Destacados",
            subtitle: "Soluciones innovadoras que transforman negocios",
            sendera: {
                name: "Sendera v2",
                desc: "Sistema de Envío Masivo WhatsApp",
                text: "Sistema completo de gestión y envío masivo de mensajes WhatsApp con integración de bases de datos, gestión de contactos, plantillas, listas de envío, reportes y analytics."
            },
            trazaia: {
                name: "TrazaIA ERP",
                desc: "Sistema de Trazabilidad de Insumos Agrarios",
                text: "Sistema ERP completo para gestión de insumos agrícolas con trazabilidad integrada, control de lotes, integración con SENASA y facturación electrónica."
            },
            luber: {
                name: "Luber ERP",
                desc: "Sistema de Gestión para Lubrocentros",
                text: "Sistema ERP completo para gestión integral de lubrocentros con módulos de facturación, inventario, clientes, vehículos y servicios."
            },
            ventura: {
                name: "Ventura",
                desc: "Plataforma de Gestión de Viajes Turísticos",
                text: "Plataforma completa para agencias de viajes con gestión de viajes emisivos y receptivos, CRM de clientes, sistema de facturación y comunicación automatizada."
            },
            mailsink: {
                name: "Mailsink-shell",
                desc: "Sistema Web de Migración de Correos",
                text: "Sistema web completo para migración de correos electrónicos entre cualquier tipo de cuentas usando interfaz web moderna con sistema de suscripciones."
            },
            opensource: {
                title: "Implementaciones y Gestión de Sistemas Open Source",
                erp: "ERP & Gestión",
                automation: "Automatización",
                ecommerce: "E-commerce & CMS",
                panels: "Paneles de Control"
            }
        },
        // Habilidades
        skills: {
            title: "Habilidades Técnicas",
            subtitle: "Tecnologías y herramientas que domino",
            languages: "Lenguajes & Frameworks",
            databases: "Bases de Datos",
            devops: "DevOps & Infraestructura",
            design: "Diseño & UI/UX",
            integrations: "Integraciones & APIs",
            tools: "Herramientas & Metodologías"
        },
        // Clientes
        clients: {
            title: "Clientes & Empresas",
            subtitle: "Empresas líderes que confían en mis servicios",
            taker: "Desarrollo e implementación de sistemas de gestión y comunicación masiva",
            oeste: "Implementación de sistemas de gestión y comunicación",
            sumpetrol: "Desarrollo de sistemas especializados para el sector energético",
            delcampo: "Implementación de sistemas de gestión y comunicación",
            movilidad: "Desarrollo de sistemas especializados en gestión de movilidad",
            smda: "Implementación de sistemas de gestión empresarial"
        },
        // Educación
        education: {
            title: "Formación Académica",
            subtitle: "Base sólida y aprendizaje continuo",
            design: {
                title: "Tecnicatura en Diseño Gráfico Publicitario",
                text: "Formación técnica completa en diseño gráfico publicitario, proporcionando una base sólida en comunicación visual, composición, tipografía, identidad corporativa y diseño para medios impresos y digitales.",
                date: "Finalizada"
            },
            uiux: {
                title: "Diseño UI/UX - Especialización",
                text: "Formación especializada en diseño de interfaces de usuario (UI) y experiencia de usuario (UX), enfocada en la creación de productos digitales intuitivos, atractivos y funcionales.",
                date: "2 años de estudios"
            },
            testing: {
                title: "Certificación en Testing de Software",
                text: "Certificación profesional en testing de software, validando habilidades en pruebas de software, aseguramiento de calidad, metodologías de testing y gestión de defectos.",
                date: "UTN Chaco"
            },
            teaching: {
                title: "Docencia & Conferencias",
                text: "Reconocido como experto e invitado a impartir clases y conferencias sobre Marketing, Desarrollo e Inteligencia Artificial en:",
                date: "Invitado como docente"
            }
        },
        // Contacto
        contact: {
            title: "¿Trabajamos Juntos?",
            text: "Estoy disponible para nuevos proyectos y colaboraciones. Hablemos sobre cómo puedo ayudar a transformar tus ideas en realidad.",
            btnEmail: "Enviar Email",
            btnWeb: "Visitar Web"
        },
        // Footer
        footer: "© 2025 Franco Sponton - ideas DevOps. Todos los derechos reservados."
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            clients: "Clients",
            contact: "Contact"
        },
        hero: {
            name: "Franco Sponton",
            title: "Full Stack & DevOps Developer",
            subtitle: "Specialist in Automation & AI Collaboration",
            location: "📍 Mendoza, Argentina",
            btnProjects: "View Projects",
            btnContact: "Contact"
        },
        about: {
            title: "About Me",
            subtitle: "16 years transforming ideas into innovative technological solutions",
            text1: "Professional with <strong>16 years of experience</strong> starting in graphic design and advertising, specializing in UI/UX, evolving towards full stack development and DevOps. Technical training in graphic design and advertising, followed by 2 years of specialization in UI/UX design, complemented with certifications in software testing (UTN Chaco). Recognized as an expert and invited to teach classes and conferences on Marketing, Development and Artificial Intelligence at prestigious institutions such as ITU San Rafael, Ministry of Development of Mendoza and Polo TIC Mendoza.",
            text2: "Specialized in <strong>AI collaboration</strong> for the development of complete applications, combining solid knowledge in design, web technologies, scripting, Docker containers and complex problem solving. Expert in <strong>deploying complex systems in Docker environments</strong>, automating processes, debugging applications and developing complete solutions from scratch.",
            text3: "I have developed and implemented complete ERP systems, mass communication platforms, data extractors, traceability systems and complex web applications for leading companies in Argentina, significantly improving their operational processes and communication channels. My design training allows me to create intuitive and attractive interfaces, while my technical experience ensures robust and scalable systems.",
            stats: {
                years: "Years of Experience",
                companies: "Companies that Trust Me",
                institutions: "Institutions where I Teach",
                commitment: "Committed to Excellence"
            }
        },
        experience: {
            title: "Professional Experience",
            subtitle: "A trajectory of constant evolution and professional growth",
            position: "Full Stack & DevOps Developer",
            company: "ideas DevOps",
            period: "2009 - Present",
            evolution: "Professional Evolution:",
            evolution1: "<strong>2009-2015:</strong> Specialization in web design and online marketing, developing responsive websites, digital marketing campaigns and SEO optimization.",
            evolution2: "<strong>2015-2020:</strong> Transition to full stack development, implementing complex web systems with API integrations, databases and automations.",
            evolution3: "<strong>2020-Present:</strong> Specialization in enterprise systems development, DevOps, Docker containerization and AI collaboration for accelerated development.",
            achievements: "Main Achievements:",
            achievement1: "Development and implementation of <strong>more than 15 complete systems</strong> in production for companies in various sectors (energy, insurance, mobility, agriculture, retail).",
            achievement2: "Architecture and deployment of complex systems in <strong>Docker environments</strong> with high availability and scalability.",
            achievement3: "Automation of critical processes that have improved clients' operational efficiency by more than 40%.",
            achievement4: "Implementation of mass communication systems processing <strong>more than 100,000 messages</strong> monthly.",
            achievement5: "Development of complete ERP systems with electronic invoicing modules, traceability and multi-warehouse inventory management."
        },
        projects: {
            title: "Featured Projects",
            subtitle: "Innovative solutions that transform businesses",
            sendera: {
                name: "Sendera v2",
                desc: "WhatsApp Mass Messaging System",
                text: "Complete system for managing and mass sending WhatsApp messages with database integration, contact management, templates, mailing lists, reports and analytics."
            },
            trazaia: {
                name: "TrazaIA ERP",
                desc: "Agricultural Input Traceability System",
                text: "Complete ERP system for agricultural input management with integrated traceability, batch control, SENASA integration and electronic invoicing."
            },
            luber: {
                name: "Luber ERP",
                desc: "Lubrication Center Management System",
                text: "Complete ERP system for comprehensive lubrication center management with invoicing, inventory, customers, vehicles and services modules."
            },
            ventura: {
                name: "Ventura",
                desc: "Tourism Travel Management Platform",
                text: "Complete platform for travel agencies with outbound and inbound travel management, customer CRM, invoicing system and automated communication."
            },
            mailsink: {
                name: "Mailsink-shell",
                desc: "Email Migration Web System",
                text: "Complete web system for email migration between any type of accounts using a modern web interface with subscription system."
            },
            opensource: {
                title: "Open Source Systems Implementation and Management",
                erp: "ERP & Management",
                automation: "Automation",
                ecommerce: "E-commerce & CMS",
                panels: "Control Panels"
            }
        },
        skills: {
            title: "Technical Skills",
            subtitle: "Technologies and tools I master",
            languages: "Languages & Frameworks",
            databases: "Databases",
            devops: "DevOps & Infrastructure",
            design: "Design & UI/UX",
            integrations: "Integrations & APIs",
            tools: "Tools & Methodologies"
        },
        clients: {
            title: "Clients & Companies",
            subtitle: "Leading companies that trust my services",
            taker: "Development and implementation of management and mass communication systems",
            oeste: "Implementation of management and communication systems",
            sumpetrol: "Development of specialized systems for the energy sector",
            delcampo: "Implementation of management and communication systems",
            movilidad: "Development of specialized systems for mobility management",
            smda: "Implementation of business management systems"
        },
        education: {
            title: "Academic Education",
            subtitle: "Solid foundation and continuous learning",
            design: {
                title: "Technical Degree in Graphic Design and Advertising",
                text: "Complete technical training in graphic design and advertising, providing a solid foundation in visual communication, composition, typography, corporate identity and design for print and digital media.",
                date: "Completed"
            },
            uiux: {
                title: "UI/UX Design - Specialization",
                text: "Specialized training in user interface (UI) and user experience (UX) design, focused on creating intuitive, attractive and functional digital products.",
                date: "2 years of studies"
            },
            testing: {
                title: "Software Testing Certification",
                text: "Professional certification in software testing, validating skills in software testing, quality assurance, testing methodologies and defect management.",
                date: "UTN Chaco"
            },
            teaching: {
                title: "Teaching & Conferences",
                text: "Recognized as an expert and invited to teach classes and conferences on Marketing, Development and Artificial Intelligence at:",
                date: "Invited as lecturer"
            }
        },
        contact: {
            title: "Let's Work Together?",
            text: "I am available for new projects and collaborations. Let's talk about how I can help transform your ideas into reality.",
            btnEmail: "Send Email",
            btnWeb: "Visit Website"
        },
        footer: "© 2025 Franco Sponton - ideas DevOps. All rights reserved."
    },
    pt: {
        nav: {
            home: "Início",
            about: "Sobre Mim",
            experience: "Experiência",
            projects: "Projetos",
            skills: "Habilidades",
            clients: "Clientes",
            contact: "Contato"
        },
        hero: {
            name: "Franco Sponton",
            title: "Desenvolvedor Full Stack & DevOps",
            subtitle: "Especialista em Automação e Colaboração com IA",
            location: "📍 Mendoza, Argentina",
            btnProjects: "Ver Projetos",
            btnContact: "Contatar"
        },
        about: {
            title: "Sobre Mim",
            subtitle: "16 anos transformando ideias em soluções tecnológicas inovadoras",
            text1: "Profissional com <strong>16 anos de experiência</strong> iniciando em design gráfico publicitário e especialização em UI/UX, evoluindo para desenvolvimento full stack e DevOps. Formação técnica em design gráfico publicitário, seguida de 2 anos de especialização em design UI/UX, complementada com certificações em testes de software (UTN Chaco). Reconhecido como especialista e convidado a ministrar aulas e conferências sobre Marketing, Desenvolvimento e Inteligência Artificial em instituições de prestígio como ITU San Rafael, Ministério de Desenvolvimento de Mendoza e Polo TIC Mendoza.",
            text2: "Especializado em <strong>colaboração com IA</strong> para o desenvolvimento de aplicações completas, combinando conhecimentos sólidos em design, tecnologias web, scripting, contêineres Docker e resolução de problemas complexos. Especialista em <strong>implantar sistemas complexos em ambientes Docker</strong>, automatizar processos, depurar aplicações e desenvolver soluções completas do zero.",
            text3: "Desenvolvi e implementei sistemas ERP completos, plataformas de comunicação em massa, extratores de dados, sistemas de rastreabilidade e aplicações web complexas para empresas líderes na Argentina, melhorando significativamente seus processos operacionais e canais de comunicação. Minha formação em design me permite criar interfaces intuitivas e atraentes, enquanto minha experiência técnica garante sistemas robustos e escaláveis.",
            stats: {
                years: "Anos de Experiência",
                companies: "Empresas que Confiam em Mim",
                institutions: "Instituições onde Ensino",
                commitment: "Comprometido com a Excelência"
            }
        },
        experience: {
            title: "Experiência Profissional",
            subtitle: "Uma trajetória de evolução constante e crescimento profissional",
            position: "Desenvolvedor Full Stack & DevOps",
            company: "ideas DevOps",
            period: "2009 - Presente",
            evolution: "Evolução Profissional:",
            evolution1: "<strong>2009-2015:</strong> Especialização em design web e marketing online, desenvolvendo sites responsivos, campanhas de marketing digital e otimização SEO.",
            evolution2: "<strong>2015-2020:</strong> Transição para desenvolvimento full stack, implementando sistemas web complexos com integrações de APIs, bancos de dados e automações.",
            evolution3: "<strong>2020-Presente:</strong> Especialização em desenvolvimento de sistemas empresariais, DevOps, containerização Docker e colaboração com IA para desenvolvimento acelerado.",
            achievements: "Principais Conquistas:",
            achievement1: "Desenvolvimento e implementação de <strong>mais de 15 sistemas completos</strong> em produção para empresas de diversos setores (energia, seguros, mobilidade, agro, varejo).",
            achievement2: "Arquitetura e implantação de sistemas complexos em <strong>ambientes Docker</strong> com alta disponibilidade e escalabilidade.",
            achievement3: "Automação de processos críticos que melhoraram a eficiência operacional dos clientes em mais de 40%.",
            achievement4: "Implementação de sistemas de comunicação em massa processando <strong>mais de 100.000 mensagens</strong> mensais.",
            achievement5: "Desenvolvimento de sistemas ERP completos com módulos de faturamento eletrônico, rastreabilidade e gestão de inventário multi-armazém."
        },
        projects: {
            title: "Projetos em Destaque",
            subtitle: "Soluções inovadoras que transformam negócios",
            sendera: {
                name: "Sendera v2",
                desc: "Sistema de Envio em Massa WhatsApp",
                text: "Sistema completo de gestão e envio em massa de mensagens WhatsApp com integração de bancos de dados, gestão de contatos, modelos, listas de envio, relatórios e análises."
            },
            trazaia: {
                name: "TrazaIA ERP",
                desc: "Sistema de Rastreabilidade de Insumos Agrícolas",
                text: "Sistema ERP completo para gestão de insumos agrícolas com rastreabilidade integrada, controle de lotes, integração com SENASA e faturamento eletrônico."
            },
            luber: {
                name: "Luber ERP",
                desc: "Sistema de Gestão para Lubrificantes",
                text: "Sistema ERP completo para gestão integral de lubrificantes com módulos de faturamento, inventário, clientes, veículos e serviços."
            },
            ventura: {
                name: "Ventura",
                desc: "Plataforma de Gestão de Viagens Turísticas",
                text: "Plataforma completa para agências de viagens com gestão de viagens emissivas e receptivas, CRM de clientes, sistema de faturamento e comunicação automatizada."
            },
            mailsink: {
                name: "Mailsink-shell",
                desc: "Sistema Web de Migração de E-mails",
                text: "Sistema web completo para migração de e-mails entre qualquer tipo de contas usando interface web moderna com sistema de assinaturas."
            },
            opensource: {
                title: "Implementações e Gestão de Sistemas Open Source",
                erp: "ERP & Gestão",
                automation: "Automação",
                ecommerce: "E-commerce & CMS",
                panels: "Painéis de Controle"
            }
        },
        skills: {
            title: "Habilidades Técnicas",
            subtitle: "Tecnologias e ferramentas que domino",
            languages: "Linguagens & Frameworks",
            databases: "Bancos de Dados",
            devops: "DevOps & Infraestrutura",
            design: "Design & UI/UX",
            integrations: "Integrações & APIs",
            tools: "Ferramentas & Metodologias"
        },
        clients: {
            title: "Clientes & Empresas",
            subtitle: "Empresas líderes que confiam em meus serviços",
            taker: "Desenvolvimento e implementação de sistemas de gestão e comunicação em massa",
            oeste: "Implementação de sistemas de gestão e comunicação",
            sumpetrol: "Desenvolvimento de sistemas especializados para o setor energético",
            delcampo: "Implementação de sistemas de gestão e comunicação",
            movilidad: "Desenvolvimento de sistemas especializados em gestão de mobilidade",
            smda: "Implementação de sistemas de gestão empresarial"
        },
        education: {
            title: "Formação Acadêmica",
            subtitle: "Base sólida e aprendizado contínuo",
            design: {
                title: "Técnico em Design Gráfico Publicitário",
                text: "Formação técnica completa em design gráfico publicitário, proporcionando uma base sólida em comunicação visual, composição, tipografia, identidade corporativa e design para mídia impressa e digital.",
                date: "Concluída"
            },
            uiux: {
                title: "Design UI/UX - Especialização",
                text: "Formação especializada em design de interfaces de usuário (UI) e experiência do usuário (UX), focada na criação de produtos digitais intuitivos, atraentes e funcionais.",
                date: "2 anos de estudos"
            },
            testing: {
                title: "Certificação em Testes de Software",
                text: "Certificação profissional em testes de software, validando habilidades em testes de software, garantia de qualidade, metodologias de teste e gestão de defeitos.",
                date: "UTN Chaco"
            },
            teaching: {
                title: "Docência & Conferências",
                text: "Reconhecido como especialista e convidado a ministrar aulas e conferências sobre Marketing, Desenvolvimento e Inteligência Artificial em:",
                date: "Convidado como palestrante"
            }
        },
        contact: {
            title: "Vamos Trabalhar Juntos?",
            text: "Estou disponível para novos projetos e colaborações. Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade.",
            btnEmail: "Enviar E-mail",
            btnWeb: "Visitar Site"
        },
        footer: "© 2025 Franco Sponton - ideas DevOps. Todos os direitos reservados."
    }
};

