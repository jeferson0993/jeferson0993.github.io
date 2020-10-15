const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const aboutMeTitleEl = document.querySelector('.about-me-title');
const aboutMeDescrEl = document.querySelector('.about-me-description');

const featuredProjectEl = document.querySelector('.featured-project');
const featuredProjectTitleEl = document.querySelector('.featured-project-title');
const featuredProjectSubtitleEl = document.querySelector('.featured-project-subtitle');
const featuredProjectUpFlagEl = document.querySelector('.featured-project-up-flag');
const featuredProjectDescrEl = document.querySelector('.featured-project-description');
const featuredProjectButtonEl = document.querySelector('.featured-project-button');

const p1TitleEl = document.querySelector('.p1-title');
const p1DescrEl = document.querySelector('.p1-desc');
const p1LinkEl = document.querySelector('.p1-link');

const p2TitleEl = document.querySelector('.p2-title');
const p2DescrEl = document.querySelector('.p2-desc');
const p2LinkEl = document.querySelector('.p2-link');

const p3TitleEl = document.querySelector('.p3-title');
const p3DescrEl = document.querySelector('.p3-desc');
const p3LinkEl = document.querySelector('.p3-link');

const p4TitleEl = document.querySelector('.p4-title');
const p4DescrEl = document.querySelector('.p4-desc');
const p4LinkEl = document.querySelector('.p4-link');

const p5TitleEl = document.querySelector('.p5-title');
const p5DescrEl = document.querySelector('.p5-desc');
const p5LinkEl = document.querySelector('.p5-link');

const p6TitleEl = document.querySelector('.p6-title');
const p6DescrEl = document.querySelector('.p6-desc');
const p6LinkEl = document.querySelector('.p6-link');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        aboutMeTitleEl.textContent = data[attr].about_me_title;
        aboutMeDescrEl.textContent = data[attr].about_me_description;

        featuredProjectEl.textContent = data[attr].feature_project;
        featuredProjectTitleEl.textContent = data[attr].featured_project_title;
        featuredProjectSubtitleEl.textContent = data[attr].featured_project_subtitle;
        featuredProjectUpFlagEl.textContent = data[attr].featured_project_up_flag;
        featuredProjectDescrEl.textContent = data[attr].featured_project_description;
        featuredProjectButtonEl.textContent = data[attr].featured_project_button;

        p1TitleEl.textContent = data[attr].p1_title;
        p1DescrEl.textContent = data[attr].p1_descripiton;
        p1LinkEl.textContent = data[attr].p1_link;

        p2TitleEl.textContent = data[attr].p2_title;
        p2DescrEl.textContent = data[attr].p2_descripiton;
        p2LinkEl.textContent = data[attr].p2_link;

        p3TitleEl.textContent = data[attr].p3_title;
        p3DescrEl.textContent = data[attr].p3_descripiton;
        p3LinkEl.textContent = data[attr].p3_link;

        p4TitleEl.textContent = data[attr].p4_title;
        p4DescrEl.textContent = data[attr].p4_descripiton;
        p4LinkEl.textContent = data[attr].p4_link;
        
        p5TitleEl.textContent = data[attr].p5_title;
        p5DescrEl.textContent = data[attr].p5_descripiton;
        p5LinkEl.textContent = data[attr].p5_link;

        p6TitleEl.textContent = data[attr].p6_title;
        p6DescrEl.textContent = data[attr].p6_descripiton;
        p6LinkEl.textContent = data[attr].p6_link;        
    });
});

var data = {
    "portuguese":
    {
        "about_me_title": "Sobre Mim",
        "about_me_description": "Estudante Universitário, sistemas para internet, usuário de linux e autodidata.",
        "featured_project": "Projeto em destaque",
        "featured_project_title": "JF Automação Residencial",
        "featured_project_subtitle": "Meu sistema de monitoramento e controle de 'coisas' pela internet.",
        "featured_project_up_flag": "Confira!",
        "featured_project_description": "Com o aplicativo é possível acionar remotamente lâmpadas, máquinas, aparelhos de ar condicionado entre outros. Tudo pelo seu PC ou pelo seu celular.",
        "featured_project_button": "Página do projeto",
        "p1_title": "Sistema de monitoramento eletrônico",
        "p1_descripiton": "Com o Simemap é possível acompanhar de perto e com qualidade o consumo de energia elétrica de qualquer equipamento de uma casa, seja apenas alguns circuitos (seu quarto ou cozinha por exemplo) ou sua casa como um todo. É possível também, com poucos ajustes, medir outras coisas, como o consumo de água e a temperatura ambiente. As ferramentas IoT (Internet of Things ou Internet das Coisas) utilizadas, também vão permitir acionar remotamente lâmpadas, máquinas, aparelhos de ar condicionado entre outros. Tudo pelo seu PC ou pelo seu celular.",
        "p1_link": "Demonstração",
        "p2_title": "Sistema de Controle de vagas de trabalho",
        "p2_descripiton": "Uma aplicação WEB usando ANGULAR, na arquitetura MVC para complementar apresentação para a disciplina de Novas Tecnologias em Desenvolvimento Web, ministrada pelo professor Marinaldo Oliveira Santos, do curso Tecnólogo em Sistemas para Internet.",
        "p2_link": "Demonstração",
        "p3_title": "CRUD com Svelte3 e Firebase",
        "p3_descripiton": "Um aplicativo CRUD de demonstração para um sistema de gerenciamento de registros de estudantes, construído com <b>Svelte3</b> e o banco de dados NoSQL em nuvem Firebase Real-time.",
        "p3_link": "Demonstração",
        "p4_title": "CRUD com Angular8 e Firebase RealTime Database",
        "p4_descripiton": "Um aplicativo CRUD de demonstração para um sistema de gerenciamento de registros de estudantes, construído com <b>Angular 8</b> e o banco de dados NoSQL em nuvem Firebase Real-time.",
        "p4_link": "Demonstração",
        "p5_title": "",
        "p5_descripiton": "",
        "p5_link": "Demonstração",
        "p6_title": "",
        "p6_descripiton": "",
        "p6_link": "Demonstração",
        "p7_title": "",
        "p7_descripiton": "",
        "p7_link": "Demonstração",
        "p8_title": "",
        "p8_descripiton": "",
        "p8_link": "Demonstração",                        
    },
    "english":
    {
        "about_me_title": "About me",
        "about_me_description": "University student, internet systems, linux user and self-taught.",
        "featured_project": "Featured project",
        "featured_project_title": "JF Home Automation",
        "featured_project_subtitle": "My system for monitoring and controlling 'things' over the internet.",
        "featured_project_up_flag": "Check out!",
        "featured_project_description": "With the application it is possible to remotely activate lamps, machines, air conditioners and others. All from your PC or your cell phone.",
        "featured_project_button": "Project website",
        "p1_title": "Electronic monitoring system",
        "p1_descripiton": "With Simemap it is possible to monitor closely and with quality the electricity consumption of any equipment in a house, be it just a few circuits (your room or kitchen for example) or your home as a whole. It is also possible, with few adjustments, to measure other things, such as water consumption and room temperature. The IoT tools (Internet of Things or Internet of Things) used, will also allow you to remotely activate lamps, machines, air conditioning devices, among others. All from your PC or your cell phone.",
        "p1_link": "Demonstration",
        "p2_title": "Control system of job vacancies",
        "p2_descripiton": "A WEB application using ANGULAR, in the MVC architecture to complement the presentation for the discipline of New Technologies in Web Development, taught by Professor Marinaldo Oliveira Santos, from the Technologist in Systems for Internet course.",
        "p2_link": "Demonstration",     
        "p3_title": "CRUD with Svelte3 and Firebase",
        "p3_descripiton": "A demonstration CRUD application for a student records management system, built with <b> Svelte3 </b> and the NoSQL database in the Firebase Real-time cloud.",
        "p3_link": "Demonstration",
        "p4_title": "CRUD with Angular8 and Firebase RealTime Database",
        "p4_descripiton": "A demonstration CRUD application for a student record management system, built with <b> Angular 8 </b> and the NoSQL database in the Firebase Real-time cloud.",
        "p4_link": "Demonstration",
        "p5_title": "",
        "p5_descripiton": "",
        "p5_link": "Demonstration",
        "p6_title": "",
        "p6_descripiton": "",
        "p6_link": "Demonstration", 
        "p7_title": "",
        "p7_descripiton": "",
        "p7_link": "Demonstration",
        "p8_title": "",
        "p8_descripiton": "",
        "p8_link": "Demonstration",                    
    },
    "chinese":
    {
        "about_me_title": "关于我",
        "about_me_description": "大学生，互联网系统，Linux用户和自学成才。",
        "featured_project": "特色项目",
        "featured_project_title": "JF家庭自动化",
        "featured_project_subtitle": "我的系统，用于通过Internet监视和控制“事物”。",
        "featured_project_up_flag": "退房！",
        "featured_project_description": "通过该应用程序，可以远程激活灯，机器，空调等。 全部来自您的PC或手机。",
        "featured_project_button": "项目网站",
        "p1_title": "电子监控系统",
        "p1_descripiton": "使用Simemap，可以密切监控房屋中任何设备的电能消耗，无论是几条电路（例如您的房间或厨房）还是整个房屋。 只需少量调整，也可以测量其他事物，例如水消耗和室温。 使用的物联网工具（物联网或物联网）还将使您能够远程激活灯，机器，空调设备等。 全部来自您的PC或手机。",
        "p1_link": "示范",
        "p2_title": "职位空缺控制系统",
        "p2_descripiton": "MVC架构中使用ANGULAR的WEB应用程序，用于补充Web开发中的新技术学科的演示，该课程由Internet系统技术专家Marinaldo Oliveira Santos教授教授。",
        "p2_link": "示范",  
        "p3_title": "带Svelte3和Firebase的CRUD",
        "p3_descripiton": "一个用于学生记录管理系统的CRUD演示应用程序，它由<b> Svelte3 </ b>和Firebase实时云中的NoSQL数据库构建。",
        "p3_link": "示范",
        "p4_title": "带有Angular8和Firebase RealTime数据库的CRUD",
        "p4_descripiton": "一个用于学生记录管理系统的CRUD演示应用程序，它使用<b> Angular 8 </ b>和Firebase实时云中的NoSQL数据库构建。",
        "p4_link": "示范",
        "p5_title": "",
        "p5_descripiton": "",
        "p5_link": "示范",
        "p6_title": "",
        "p6_descripiton": "",
        "p6_link": "示范",    
        "p7_title": "",
        "p7_descripiton": "",
        "p7_link": "示范",
        "p8_title": "",
        "p8_descripiton": "",
        "p8_link": "示范",                       
    }
}