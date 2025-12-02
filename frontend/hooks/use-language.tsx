"use client"

import { useState, useEffect } from "react"

const translations = {
  fr: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    booking: "Réservation",
    contact: "Contact",

    heroTitle: "Colab Office - Espace de coworking moderne à Ariana",
    heroSubtitle: "Travaillez, collaborez, réussissez dans notre espace professionnel",
    heroDescription:
      "Espace de coworking moderne à Ariana offrant assistance administrative, création d'entreprises, domiciliation et services aux entreprises dans un environnement collaboratif.",
    getStarted: "Réserver maintenant",
    learnMore: "En savoir plus",

    locationTitle: "Notre espace à Ariana",
    locationSubtitle: "Un environnement professionnel moderne pour votre réussite",
    locationName: "Colab Office Ariana",
    locationCity: "Ariana",
    locationAddress: "14 Rue Ibn Elheni (Rond-point Borj Louzir), Ariana",
    locationDescription:
      "Découvrez notre espace de coworking moderne à Ariana. Un lieu parfait pour travailler, collaborer et développer votre activité avec nos services d'assistance administrative et de domiciliation.",
    advantages: "Avantages",
    available: "Disponible",
    startingFrom: "À partir de",
    perMonth: "/mois",
    perHour: "/heure",

    // Features
    studyZones: "Espaces de travail silencieux",
    coworkingSpace: "Espace de coworking collaboratif",
    meetingRooms: "Salles de réunion équipées",
    highSpeedWifi: "WiFi haut débit",
    parkingAvailable: "Parking disponible",
    publicTransport: "Transport public accessible",
    modernOffices: "Bureaux modernes",
    reception: "Service d'accueil professionnel",
    quietEnvironment: "Environnement calme et productif",
    adminServices: "Assistance administrative",
    companyCreation: "Création d'entreprises",
    domiciliation: "Services de domiciliation",

    // Booking
    bookingTitle: "Réservez votre espace",
    selectSpace: "Sélectionnez votre espace",
    availableSpaces: "Espaces disponibles",
    reservedSpaces: "Espaces réservés",
    room1: "Salle 1 - Espace Collaboratif",
    room2: "Salle 2 - Zone Silencieuse",
    selectRoom: "Choisir la salle",

    // Services
    servicesTitle: "Nos Services",
    servicesSubtitle: "Solutions complètes pour votre activité professionnelle",
    coworkingService: "Espace de coworking moderne",
    coworkingDesc: "Espaces de travail flexibles dans un environnement collaboratif et inspirant",
    adminService: "Assistance administrative",
    adminDesc: "Support complet pour vos démarches administratives et gestion d'entreprise",
    domiciliationService: "Domiciliation d'entreprise",
    domiciliationDesc: "Adresse professionnelle prestigieuse pour votre société à Ariana",
    companyService: "Création d'entreprises",
    companyDesc: "Accompagnement personnalisé dans toutes vos démarches de création d'entreprise",

    whatsapp: {
      online: "En ligne",
      welcome: "Bonjour! Comment pouvons-nous vous aider aujourd'hui?",
      quickMessages: "Messages rapides",
      placeholder: "Tapez votre message...",
      message1: "Je souhaite réserver un espace de travail",
      message2: "Quels sont vos tarifs et services?",
      message3: "Je veux visiter l'espace",
    },
  },
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    booking: "Booking",
    contact: "Contact",

    // Hero Section
    heroTitle: "Colab Office - Modern coworking space in Ariana",
    heroSubtitle: "Work, collaborate, succeed in our professional environment",
    heroDescription:
      "Modern coworking space in Ariana offering administrative assistance, company creation, domiciliation and business services in a collaborative environment.",
    getStarted: "Book Now",
    learnMore: "Learn More",

    // Location Section
    locationTitle: "Our space in Ariana",
    locationSubtitle: "A modern professional environment for your success",
    locationName: "Colab Office Ariana",
    locationCity: "Ariana",
    locationAddress: "14 Rue Ibn Elheni (Rond-point Borj Louzir), Ariana",
    locationDescription:
      "Discover our modern coworking space in Ariana. A perfect place to work, collaborate and develop your business with our administrative assistance and domiciliation services.",
    advantages: "Advantages",
    available: "Available",
    startingFrom: "Starting from",
    perMonth: "/month",
    perHour: "/hour",

    // Features
    studyZones: "Quiet work spaces",
    coworkingSpace: "Collaborative coworking space",
    meetingRooms: "Equipped meeting rooms",
    highSpeedWifi: "High-speed WiFi",
    parkingAvailable: "Parking available",
    publicTransport: "Public transport accessible",
    modernOffices: "Modern offices",
    reception: "Professional reception service",
    quietEnvironment: "Calm and productive environment",
    adminServices: "Administrative assistance",
    companyCreation: "Company creation",
    domiciliation: "Domiciliation services",

    // Booking
    bookingTitle: "Book your space",
    selectSpace: "Select your space",
    availableSpaces: "Available spaces",
    reservedSpaces: "Reserved spaces",
    room1: "Room 1 - Collaborative Space",
    room2: "Room 2 - Quiet Zone",
    selectRoom: "Choose room",

    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "Complete solutions for your professional activity",
    coworkingService: "Modern coworking space",
    coworkingDesc: "Flexible workspaces in a collaborative and inspiring environment",
    adminService: "Administrative assistance",
    adminDesc: "Complete support for your administrative procedures and business management",
    domiciliationService: "Business domiciliation",
    domiciliationDesc: "Prestigious professional address for your company in Ariana",
    companyService: "Company creation",
    companyDesc: "Personalized support in all your company creation procedures",

    // WhatsApp translations
    whatsapp: {
      online: "Online",
      welcome: "Hello! How can we help you today?",
      quickMessages: "Quick messages",
      placeholder: "Type your message...",
      message1: "I want to book a workspace",
      message2: "What are your rates and services?",
      message3: "I want to visit the space",
    },
  },
  ar: {
    home: "الرئيسية",
    about: "حولنا",
    services: "الخدمات",
    booking: "الحجز",
    contact: "اتصل بنا",

    heroTitle: "كولاب أوفيس - مساحة عمل مشتركة حديثة في أريانة",
    heroSubtitle: "اعمل، تعاون، انجح في بيئتنا المهنية",
    heroDescription:
      "مساحة عمل مشتركة حديثة في أريانة تقدم المساعدة الإدارية وإنشاء الشركات والتسكين وخدمات الأعمال في بيئة تعاونية.",
    getStarted: "احجز الآن",
    learnMore: "اعرف المزيد",

    locationTitle: "مساحتنا في أريانة",
    locationSubtitle: "بيئة مهنية حديثة لنجاحك",
    locationName: "كولاب أوفيس أريانة",
    locationCity: "أريانة",
    locationAddress: "14 شارع ابن الهاني (دوار برج لوزير)، أريانة",
    locationDescription:
      "اكتشف مساحة العمل المشتركة الحديثة في أريانة. مكان مثالي للعمل والتعاون وتطوير أعمالك مع خدمات المساعدة الإدارية والتسكين.",
    advantages: "المزايا",
    available: "متاح",
    startingFrom: "ابتداء من",
    perMonth: "/شهر",
    perHour: "/ساعة",

    studyZones: "مساحات عمل هادئة",
    coworkingSpace: "مساحة عمل مشتركة تعاونية",
    meetingRooms: "قاعات اجتماعات مجهزة",
    highSpeedWifi: "إنترنت عالي السرعة",
    parkingAvailable: "موقف سيارات متاح",
    publicTransport: "النقل العام متاح",
    modernOffices: "مكاتب حديثة",
    reception: "خدمة استقبال مهنية",
    quietEnvironment: "بيئة هادئة ومنتجة",
    adminServices: "المساعدة الإدارية",
    companyCreation: "إنشاء الشركات",
    domiciliation: "خدمات التسكين",

    bookingTitle: "احجز مساحتك",
    selectSpace: "اختر مساحتك",
    availableSpaces: "المساحات المتاحة",
    reservedSpaces: "المساحات المحجوزة",
    room1: "القاعة 1 - مساحة تعاونية",
    room2: "القاعة 2 - منطقة هادئة",
    selectRoom: "اختر القاعة",

    servicesTitle: "خدماتنا",
    servicesSubtitle: "حلول شاملة لنشاطك المهني",
    coworkingService: "مساحة عمل مشتركة حديثة",
    coworkingDesc: "مساحات عمل مرنة في بيئة تعاونية وملهمة",
    adminService: "المساعدة الإدارية",
    adminDesc: "دعم كامل لإجراءاتك الإدارية وإدارة الأعمال",
    domiciliationService: "تسكين الشركات",
    domiciliationDesc: "عنوان مهني مرموق لشركتك في أريانة",
    companyService: "إنشاء الشركات",
    companyDesc: "مرافقة شخصية في جميع إجراءات إنشاء شركتك",

    whatsapp: {
      online: "متصل",
      welcome: "مرحبا! كيف يمكننا مساعدتك اليوم؟",
      quickMessages: "رسائل سريعة",
      placeholder: "اكتب رسالتك...",
      message1: "أريد حجز مساحة عمل",
      message2: "ما هي أسعاركم وخدماتكم؟",
      message3: "أريد زيارة المكان",
    },
  },
}

export function useLanguage() {
  const [currentLang, setCurrentLang] = useState("fr")

  useEffect(() => {
    // Load saved language preference
    const savedLang = localStorage.getItem("preferred-language") || "fr"
    setCurrentLang(savedLang)

    // Listen for language change events
    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLang(event.detail)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener)
    }
  }, [])

  const t = (key: string) => {
    return translations[currentLang as keyof typeof translations]?.[key as keyof (typeof translations)["fr"]] || key
  }

  return { currentLang, t }
}
