"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "de" | "it" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.features": "Features",
    "nav.app": "App",
    "nav.testimonials": "Testimonials",
    "nav.download": "Download App",

    // Hero Section
    "hero.badge": "Powered by ChatGPT",
    "hero.title": "Transform Your Fridge into Recipes!",
    "hero.subtitle":
      "Your personal kitchen assistant powered by artificial intelligence. Scan ingredients and get personalized recipes instantly.",
    "hero.download": "Download Free",
    "hero.demo": "Watch Demo",
    "hero.discover": "Discover more",

    // Features
    "features.title": "Amazing Features",
    "features.subtitle": "Discover how FoodScan AI revolutionizes your culinary experience",
    "features.personalized.title": "Personalized Recipes",
    "features.personalized.description":
      "Whatever your cooking style or dietary restrictions, FoodScan AI adapts its recommendations to meet your personal needs and tastes.",
    "features.instructions.title": "Step-by-Step Instructions",
    "features.instructions.description":
      "Follow our detailed guides to easily prepare exquisite dishes, perfect for both novice and experienced chefs.",
    "features.ai.title": "Advanced AI",
    "features.ai.description":
      "Uses recipe generation algorithms to create unique and delicious dishes based on the ingredients you have available.",

    // Screenshots
    "screenshots.title": "Visual Experience",
    "screenshots.subtitle": "Intuitive and modern interface designed to make cooking easier",
    "screenshots.scan": "Scan Ingredients",
    "screenshots.scan.description": "Capture your ingredients with the camera",
    "screenshots.generate": "AI Generates Recipes",
    "screenshots.generate.description": "Get personalized recipes instantly",
    "screenshots.cook": "Cook Step by Step",
    "screenshots.cook.description": "Follow detailed instructions",
    "screenshots.try": "Try the App Now",

    // How it works
    "howto.title": "How It Works?",
    "howto.subtitle": "Three simple steps to transform your ingredients into delicious recipes",
    "howto.step1.title": "Scan Your Ingredients",
    "howto.step1.description": "Use your phone's camera to scan the ingredients you have available",
    "howto.step2.title": "AI Generates Recipes",
    "howto.step2.description": "Our AI algorithm analyzes your ingredients and creates personalized recipes",
    "howto.step3.title": "Cook and Enjoy",
    "howto.step3.description": "Follow step-by-step instructions and enjoy your delicious meal",

    // Testimonials
    "testimonials.title": "What Our Users Say",
    "testimonials.subtitle": "Thousands of people have already transformed their culinary experience",
    "testimonials.lina.text":
      "This function takes a list of ingredients and uses a recipe generation algorithm to create a unique and delicious recipe",
    "testimonials.lina.role": "Amateur Chef",
    "testimonials.maria.text":
      "Amazing how AI can create such creative recipes with the ingredients I have at home. I no longer waste food!",
    "testimonials.maria.role": "Family Mother",
    "testimonials.carlos.text":
      "The app is super easy to use and the recipes always turn out delicious. My friends can't believe I cook so well now.",
    "testimonials.carlos.role": "Student",

    // CTA
    "cta.title": "Download FoodScan AI Now!",
    "cta.subtitle": "Transform your kitchen into a culinary adventure and discover the chef within you",
    "cta.users": "+10,000 users",
    "cta.rating": "4.8 stars",
    "cta.free": "Free",

    // Footer
    "footer.description": "Your intelligent culinary assistant for more creative cooking",
    "footer.links": "Links",
    "footer.home": "Home",
    "footer.features": "Features",
    "footer.download": "Download",
    "footer.pricing": "Pricing",
    "footer.about": "About Us",
    "footer.legal": "Legal",
    "footer.terms": "Terms of Use",
    "footer.privacy": "Privacy Policy",
    "footer.cookies": "Cookies",
    "footer.contact": "Contact",
    "footer.rights": "© 2024 FoodScan AI. All rights reserved.",
  },
  de: {
    // Navigation
    "nav.features": "Funktionen",
    "nav.app": "App",
    "nav.testimonials": "Bewertungen",
    "nav.download": "App Herunterladen",

    // Hero Section
    "hero.badge": "Angetrieben von ChatGPT",
    "hero.title": "Verwandle deinen Kühlschrank in Rezepte!",
    "hero.subtitle":
      "Dein persönlicher Küchenassistent mit künstlicher Intelligenz. Scanne Zutaten und erhalte sofort personalisierte Rezepte.",
    "hero.download": "Kostenlos Herunterladen",
    "hero.demo": "Demo Ansehen",
    "hero.discover": "Mehr entdecken",

    // Features
    "features.title": "Erstaunliche Funktionen",
    "features.subtitle": "Entdecke, wie FoodScan AI dein kulinarisches Erlebnis revolutioniert",
    "features.personalized.title": "Personalisierte Rezepte",
    "features.personalized.description":
      "Egal welcher Kochstil oder welche Ernährungseinschränkungen, FoodScan AI passt seine Empfehlungen an deine persönlichen Bedürfnisse und Geschmäcker an.",
    "features.instructions.title": "Schritt-für-Schritt Anleitungen",
    "features.instructions.description":
      "Folge unseren detaillierten Anleitungen, um mühelos exquisite Gerichte zuzubereiten, perfekt für Anfänger und erfahrene Köche.",
    "features.ai.title": "Fortgeschrittene KI",
    "features.ai.description":
      "Verwendet Rezeptgenerierungsalgorithmen, um einzigartige und köstliche Gerichte basierend auf deinen verfügbaren Zutaten zu erstellen.",

    // Screenshots
    "screenshots.title": "Visuelle Erfahrung",
    "screenshots.subtitle": "Intuitive und moderne Benutzeroberfläche, die das Kochen einfacher macht",
    "screenshots.scan": "Zutaten Scannen",
    "screenshots.scan.description": "Erfasse deine Zutaten mit der Kamera",
    "screenshots.generate": "KI Generiert Rezepte",
    "screenshots.generate.description": "Erhalte sofort personalisierte Rezepte",
    "screenshots.cook": "Schritt für Schritt Kochen",
    "screenshots.cook.description": "Folge detaillierten Anweisungen",
    "screenshots.try": "App Jetzt Testen",

    // How it works
    "howto.title": "Wie funktioniert es?",
    "howto.subtitle": "Drei einfache Schritte, um deine Zutaten in köstliche Rezepte zu verwandeln",
    "howto.step1.title": "Scanne deine Zutaten",
    "howto.step1.description": "Verwende die Kamera deines Telefons, um die verfügbaren Zutaten zu scannen",
    "howto.step2.title": "KI Generiert Rezepte",
    "howto.step2.description": "Unser KI-Algorithmus analysiert deine Zutaten und erstellt personalisierte Rezepte",
    "howto.step3.title": "Kochen und Genießen",
    "howto.step3.description": "Folge den Schritt-für-Schritt-Anweisungen und genieße dein köstliches Essen",

    // Testimonials
    "testimonials.title": "Was unsere Nutzer sagen",
    "testimonials.subtitle": "Tausende von Menschen haben bereits ihr kulinarisches Erlebnis transformiert",
    "testimonials.lina.text":
      "Diese Funktion nimmt eine Liste von Zutaten und verwendet einen Rezeptgenerierungsalgorithmus, um ein einzigartiges und köstliches Rezept zu erstellen",
    "testimonials.lina.role": "Hobby-Köchin",
    "testimonials.maria.text":
      "Erstaunlich, wie die KI so kreative Rezepte mit den Zutaten erstellen kann, die ich zu Hause habe. Ich verschwende kein Essen mehr!",
    "testimonials.maria.role": "Familienmutter",
    "testimonials.carlos.text":
      "Die App ist super einfach zu bedienen und die Rezepte werden immer lecker. Meine Freunde können nicht glauben, dass ich jetzt so gut koche.",
    "testimonials.carlos.role": "Student",

    // CTA
    "cta.title": "Lade FoodScan AI jetzt herunter!",
    "cta.subtitle": "Verwandle deine Küche in ein kulinarisches Abenteuer und entdecke den Koch in dir",
    "cta.users": "+10.000 Nutzer",
    "cta.rating": "4,8 Sterne",
    "cta.free": "Kostenlos",

    // Footer
    "footer.description": "Dein intelligenter kulinarischer Assistent für kreativeres Kochen",
    "footer.links": "Links",
    "footer.home": "Startseite",
    "footer.features": "Funktionen",
    "footer.download": "Herunterladen",
    "footer.pricing": "Preise",
    "footer.about": "Über uns",
    "footer.legal": "Rechtliches",
    "footer.terms": "Nutzungsbedingungen",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.cookies": "Cookies",
    "footer.contact": "Kontakt",
    "footer.rights": "© 2024 FoodScan AI. Alle Rechte vorbehalten.",
  },
  it: {
    // Navigation
    "nav.features": "Caratteristiche",
    "nav.app": "App",
    "nav.testimonials": "Testimonianze",
    "nav.download": "Scarica App",

    // Hero Section
    "hero.badge": "Alimentato da ChatGPT",
    "hero.title": "Trasforma il tuo Frigo in Ricette!",
    "hero.subtitle":
      "Il tuo assistente personale da cucina alimentato dall'intelligenza artificiale. Scansiona gli ingredienti e ottieni ricette personalizzate all'istante.",
    "hero.download": "Scarica Gratis",
    "hero.demo": "Guarda Demo",
    "hero.discover": "Scopri di più",

    // Features
    "features.title": "Caratteristiche Incredibili",
    "features.subtitle": "Scopri come FoodScan AI rivoluziona la tua esperienza culinaria",
    "features.personalized.title": "Ricette Personalizzate",
    "features.personalized.description":
      "Qualunque sia il tuo stile di cucina o le tue restrizioni dietetiche, FoodScan AI adatta le sue raccomandazioni alle tue esigenze e gusti personali.",
    "features.instructions.title": "Istruzioni Passo dopo Passo",
    "features.instructions.description":
      "Segui le nostre guide dettagliate per preparare facilmente piatti squisiti, perfette sia per chef principianti che esperti.",
    "features.ai.title": "IA Avanzata",
    "features.ai.description":
      "Utilizza algoritmi di generazione di ricette per creare piatti unici e deliziosi basati sugli ingredienti che hai a disposizione.",

    // Screenshots
    "screenshots.title": "Esperienza Visiva",
    "screenshots.subtitle": "Interfaccia intuitiva e moderna progettata per rendere la cucina più facile",
    "screenshots.scan": "Scansiona Ingredienti",
    "screenshots.scan.description": "Cattura i tuoi ingredienti con la fotocamera",
    "screenshots.generate": "L'IA Genera Ricette",
    "screenshots.generate.description": "Ottieni ricette personalizzate all'istante",
    "screenshots.cook": "Cucina Passo dopo Passo",
    "screenshots.cook.description": "Segui le istruzioni dettagliate",
    "screenshots.try": "Prova l'App Ora",

    // How it works
    "howto.title": "Come Funziona?",
    "howto.subtitle": "Tre semplici passaggi per trasformare i tuoi ingredienti in ricette deliziose",
    "howto.step1.title": "Scansiona i tuoi Ingredienti",
    "howto.step1.description": "Usa la fotocamera del tuo telefono per scansionare gli ingredienti che hai disponibili",
    "howto.step2.title": "L'IA Genera Ricette",
    "howto.step2.description": "Il nostro algoritmo IA analizza i tuoi ingredienti e crea ricette personalizzate",
    "howto.step3.title": "Cucina e Goditi",
    "howto.step3.description": "Segui le istruzioni passo dopo passo e goditi il tuo pasto delizioso",

    // Testimonials
    "testimonials.title": "Cosa Dicono i Nostri Utenti",
    "testimonials.subtitle": "Migliaia di persone hanno già trasformato la loro esperienza culinaria",
    "testimonials.lina.text":
      "Questa funzione prende una lista di ingredienti e utilizza un algoritmo di generazione di ricette per creare una ricetta unica e deliziosa",
    "testimonials.lina.role": "Chef Amatoriale",
    "testimonials.maria.text":
      "Incredibile come l'IA possa creare ricette così creative con gli ingredienti che ho a casa. Non spreco più cibo!",
    "testimonials.maria.role": "Madre di Famiglia",
    "testimonials.carlos.text":
      "L'app è super facile da usare e le ricette vengono sempre deliziose. I miei amici non riescono a credere che ora cucino così bene.",
    "testimonials.carlos.role": "Studente",

    // CTA
    "cta.title": "Scarica FoodScan AI Ora!",
    "cta.subtitle": "Trasforma la tua cucina in un'avventura culinaria e scopri lo chef che è in te",
    "cta.users": "+10.000 utenti",
    "cta.rating": "4,8 stelle",
    "cta.free": "Gratis",

    // Footer
    "footer.description": "Il tuo assistente culinario intelligente per una cucina più creativa",
    "footer.links": "Collegamenti",
    "footer.home": "Home",
    "footer.features": "Caratteristiche",
    "footer.download": "Scarica",
    "footer.pricing": "Prezzi",
    "footer.about": "Chi Siamo",
    "footer.legal": "Legale",
    "footer.terms": "Termini di Utilizzo",
    "footer.privacy": "Politica sulla Privacy",
    "footer.cookies": "Cookie",
    "footer.contact": "Contatto",
    "footer.rights": "© 2024 FoodScan AI. Tutti i diritti riservati.",
  },
  fr: {
    // Navigation
    "nav.features": "Fonctionnalités",
    "nav.app": "App",
    "nav.testimonials": "Témoignages",
    "nav.download": "Télécharger l'App",

    // Hero Section
    "hero.badge": "Alimenté par ChatGPT",
    "hero.title": "Transformez votre Frigo en Recettes !",
    "hero.subtitle":
      "Votre assistant personnel de cuisine alimenté par l'intelligence artificielle. Scannez les ingrédients et obtenez des recettes personnalisées instantanément.",
    "hero.download": "Télécharger Gratuitement",
    "hero.demo": "Voir la Démo",
    "hero.discover": "Découvrir plus",

    // Features
    "features.title": "Fonctionnalités Incroyables",
    "features.subtitle": "Découvrez comment FoodScan AI révolutionne votre expérience culinaire",
    "features.personalized.title": "Recettes Personnalisées",
    "features.personalized.description":
      "Quel que soit votre style de cuisine ou vos restrictions alimentaires, FoodScan AI adapte ses recommandations à vos besoins et goûts personnels.",
    "features.instructions.title": "Instructions Étape par Étape",
    "features.instructions.description":
      "Suivez nos guides détaillés pour préparer facilement des plats exquis, parfaits pour les chefs novices et expérimentés.",
    "features.ai.title": "IA Avancée",
    "features.ai.description":
      "Utilise des algorithmes de génération de recettes pour créer des plats uniques et délicieux basés sur les ingrédients que vous avez disponibles.",

    // Screenshots
    "screenshots.title": "Expérience Visuelle",
    "screenshots.subtitle": "Interface intuitive et moderne conçue pour faciliter la cuisine",
    "screenshots.scan": "Scanner les Ingrédients",
    "screenshots.scan.description": "Capturez vos ingrédients avec l'appareil photo",
    "screenshots.generate": "L'IA Génère des Recettes",
    "screenshots.generate.description": "Obtenez des recettes personnalisées instantanément",
    "screenshots.cook": "Cuisiner Étape par Étape",
    "screenshots.cook.description": "Suivez les instructions détaillées",
    "screenshots.try": "Essayer l'App Maintenant",

    // How it works
    "howto.title": "Comment ça Marche ?",
    "howto.subtitle": "Trois étapes simples pour transformer vos ingrédients en recettes délicieuses",
    "howto.step1.title": "Scannez vos Ingrédients",
    "howto.step1.description":
      "Utilisez l'appareil photo de votre téléphone pour scanner les ingrédients que vous avez disponibles",
    "howto.step2.title": "L'IA Génère des Recettes",
    "howto.step2.description": "Notre algorithme IA analyse vos ingrédients et crée des recettes personnalisées",
    "howto.step3.title": "Cuisinez et Savourez",
    "howto.step3.description": "Suivez les instructions étape par étape et savourez votre repas délicieux",

    // Testimonials
    "testimonials.title": "Ce que Disent nos Utilisateurs",
    "testimonials.subtitle": "Des milliers de personnes ont déjà transformé leur expérience culinaire",
    "testimonials.lina.text":
      "Cette fonction prend une liste d'ingrédients et utilise un algorithme de génération de recettes pour créer une recette unique et délicieuse",
    "testimonials.lina.role": "Chef Amateur",
    "testimonials.maria.text":
      "Incroyable comment l'IA peut créer des recettes si créatives avec les ingrédients que j'ai à la maison. Je ne gaspille plus de nourriture !",
    "testimonials.maria.role": "Mère de Famille",
    "testimonials.carlos.text":
      "L'app est super facile à utiliser et les recettes sont toujours délicieuses. Mes amis n'arrivent pas à croire que je cuisine si bien maintenant.",
    "testimonials.carlos.role": "Étudiant",

    // CTA
    "cta.title": "Téléchargez FoodScan AI Maintenant !",
    "cta.subtitle": "Transformez votre cuisine en aventure culinaire et découvrez le chef qui est en vous",
    "cta.users": "+10 000 utilisateurs",
    "cta.rating": "4,8 étoiles",
    "cta.free": "Gratuit",

    // Footer
    "footer.description": "Votre assistant culinaire intelligent pour une cuisine plus créative",
    "footer.links": "Liens",
    "footer.home": "Accueil",
    "footer.features": "Fonctionnalités",
    "footer.download": "Télécharger",
    "footer.pricing": "Tarifs",
    "footer.about": "À Propos",
    "footer.legal": "Légal",
    "footer.terms": "Conditions d'Utilisation",
    "footer.privacy": "Politique de Confidentialité",
    "footer.cookies": "Cookies",
    "footer.contact": "Contact",
    "footer.rights": "© 2024 FoodScan AI. Tous droits réservés.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("foodscan-language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("foodscan-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
