document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const body = document.body;

  let theme = localStorage.getItem("theme") || "light";

  function setTheme(mode) {
    if (mode === "dark") {
      body.classList.add("dark-mode");
      themeIcon.classList.remove("bi-brightness-high");
      themeIcon.classList.add("bi-moon-stars");
    } else {
      body.classList.remove("dark-mode");
      themeIcon.classList.remove("bi-moon-stars");
      themeIcon.classList.add("bi-brightness-high");
    }
    localStorage.setItem("theme", mode);
  }

  setTheme(theme);

  themeToggle.addEventListener("click", () => {
    theme = theme === "light" ? "dark" : "light";
    setTheme(theme);
  });

  const mainNav = document.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  const navbarToggler = document.querySelector(".navbar-toggler");
  const responsiveNavItems = document.querySelectorAll(
    "#navbarResponsive .nav-link"
  );
  responsiveNavItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Error sending the message.");
      }
    });
  }

  // Language Switcher JS
  const translations = {
    en: {
      "nav-home": "Home",
      "nav-how-it-works": "How It Works",
      "nav-why-it-matters": "What You Gain",
      "nav-team": "Our Team",
      "nav-contact": "Book a Demo",
      "masthead-slogan":
        'Make energy usage <span style="color: #ff6d2e;">Smart</span> | <span style="color: #ff6d2e;">Cost-efficient</span> | <span style="color: #ff6d2e;">User-friendly</span>',
      "masthead-description":
        "We help businesses and households reduce electricity bill expenses and gain full control by easily and automatically scheduling appliances when energy is cheapest.",
      "quote-text":
        '<span style="color: #ff6d2e;">"</span>Understand your <span style="color: #ff6d2e;">Usage</span> without needing to understand <span style="color: #ff6d2e;">Energy</span><span style="color: #ff6d2e;">"</span>',
      "how-it-works-title": "How It Works",
      "how-it-works-optimize-title": "Optimization",
      "how-it-works-optimize-text":
        "Omnio creates a cost-effective weekly schedule tailored to your preferences and device availability, maximizing savings by using electricity when prices are lowest.",
      "how-it-works-adapt-title": "Real-Time Adaptation",
      "how-it-works-adapt-text":
        "Omnio dynamically adjusts your schedule as energy prices and conditions change, ensuring continuous savings.",
      "why-it-matters-title": "What You Gain",
      "how-it-works-simple-title": "Simple & Accessible",
      "how-it-works-simple-text":
        "No technical skills required. Enter your preferences, and Omnio handles everything, delivering maximum results.",
      "how-it-works-report-title": "Reports",
      "how-it-works-report-text":
        "Omnio provides clear insights into energy usage, cost savings, and environmental impact through reports, enabling better decisions.",
      "why-it-matters-save-title": "Save Money",
      "why-it-matters-save-text":
        "Electricity prices fluctuate. Appliances now run when costs are lowest, saving you money effortlessly.",
      "why-it-matters-control-title": "Stay in Control",
      "why-it-matters-control-text":
        "Monitor everything in real time, keeping you informed and in charge.",
      "why-it-matters-costs-title": "View Your Costs",
      "why-it-matters-costs-text":
        "Track energy usage and savings continuously with full clarity.",
      "timeline-title": "Our Journey",
      "timeline-founded-title": "Founded Omnio",
      "timeline-founded-time": "May 2025",
      "timeline-founded-text":
        "We built our first prototype to demonstrate dynamic scheduling based on real-time electricity prices.",
      "timeline-milestone-title": "First Steps",
      "timeline-milestone-time": "June 2025",
      "timeline-milestone-text":
        "We target more types of businesses in other European countries and engage with potential clients for improvements.",
      "timeline-evolution-title": "Product Evolution",
      "timeline-evolution-time": "Summer 2025",
      "timeline-evolution-text":
        "We aim beyond the initial MVP to create a more comprehensive platform and strengthen our corporate identity.",
      "timeline-next-title": "What’s Next",
      "timeline-next-time": "Winter 2025",
      "timeline-next-text":
        "Expanding across the EU, enhancing our platform through pilots, and becoming a reliable decision-making tool for energy consumption.",
      "team-title": "Our Team",
      "team-panos-role": "Software Engineering",
      "team-panos-text":
        "Leads the development of Omnio’s core platform, ensuring seamless integration and robust performance for energy optimization.",
      "team-dionisia-role": "Business Development",
      "team-dionisia-text":
        "Drives Omnio’s market strategy, forging partnerships and expanding our reach to households and businesses.",
      "team-christos-role": "Product Development",
      "team-christos-text":
        "Designs Omnio’s AI algorithms, optimizing energy schedules for efficiency and real-time adaptability.",
      "contact-title": "Book a Demo",
      "contact-description": "Contact us for more information.",
      "contact-name-label": "Full Name",
      "contact-name-placeholder": "Enter your name...",
      "contact-email-label": "Email Address",
      "contact-email-placeholder": "name@example.com",
      "contact-phone-label": "Phone Number",
      "contact-phone-placeholder": "(123) 456-7890",
      "contact-message-label": "Message",
      "contact-message-placeholder": "Enter your message here...",
      "contact-submit": "Submit",
      "footer-copyright": "© Omnio Website 2025. All Rights Reserved.",
      "footer-faq": "FAQ",
    },
    el: {
      "nav-home": "Αρχική",
      "nav-how-it-works": "Πώς Λειτουργεί",
      "nav-why-it-matters": "Τι κερδίζετε",
      "nav-team": "Η Ομάδα Μας",
      "nav-contact": "Book a Demo",
      "masthead-slogan":
        'Κάντε τη χρήση ενέργειας <span style="color: #ff6d2e;">Έξυπνη</span> | <span style="color: #ff6d2e;">Οικονομική</span> | <span style="color: #ff6d2e;">Φιλική προς τον χρήστη</span>',
      "masthead-description":
        "Βοηθάμε επιχειρήσεις και νοικοκυριά να μειώσουν τα έξοδα από τους λογαριασμούς ρεύματος και να αποκτήσουν πλήρη έλεγχο, προγραμματίζοντας εύκολα και αυτόματα τις συσκευές όταν η ενέργεια είναι φθηνότερη.",
      "quote-text":
        '<span style="color: #ff6d2e;">"</span>Κατανοήστε τη <span style="color: #ff6d2e;">Χρήση</span> σας χωρίς να χρειάζεται να κατανοήσετε την <span style="color: #ff6d2e;">Ενέργεια</span><span style="color: #ff6d2e;">"</span>',
      "how-it-works-title": "Πώς Λειτουργεί",
      "how-it-works-optimize-title": "Βελτιστοποίηση",
      "how-it-works-optimize-text":
        "Το Omnio δημιουργεί ένα οικονομικό εβδομαδιαίο πρόγραμμα προσαρμοσμένο στις προτιμήσεις και τη διαθεσιμότητα των συσκευών σας, μεγιστοποιώντας την εξοικονόμηση χρησιμοποιώντας ηλεκτρική ενέργεια όταν οι τιμές είναι χαμηλότερες.",
      "how-it-works-adapt-title": "Προσαρμογή σε Πραγματικό Χρόνο",
      "how-it-works-adapt-text":
        "Το Omnio προσαρμόζει δυναμικά το πρόγραμμά σας καθώς οι τιμές ενέργειας και οι συνθήθιες αλλάζουν, εξασφαλίζοντας συνεχή εξοικονόμηση.",
      "why-it-matters-title": "Τι κερδίζετε",
      "how-it-works-simple-title": "Απλό & Προσιτό",
      "how-it-works-simple-text":
        "Δεν απαιτούνται τεχνικές δεξιότητες. Εισάγετε τις προτιμήσεις σας και το Omnio αναλαμβάνει τα πάντα, παίρνωντας το μέγιστο αποτέλεσμα.",
      "how-it-works-report-title": "Αναφορές",
      "how-it-works-report-text":
        "Το Omnio παρέχει σαφείς πληροφορίες για τη χρήση ενέργειας, την εξοικονόμηση κόστους και τον περιβαλλοντικό αντίκτυπο μέσω των αναφορών, παράγωντας καλύτερες αποφάσεις.",
      "why-it-matters-save-title": "Εξοικονόμηση Χρημάτων",
      "why-it-matters-save-text":
        "Οι τιμές του ηλεκτρικού ρεύματος κυμαίνονται. Τώρα λειτουργούν όταν το κόστος είναι χαμηλότερο, εξοικονομώντας σας χρήματα χωρίς κόπο",
      "why-it-matters-control-title": "Διατήρηση Ελέγχου",
      "why-it-matters-control-text":
        "Παρακολουθήστε τα πάντα σε πραγματικό χρόνο που σας κρατούν ενήμερους και υπεύθυνους.",
      "why-it-matters-costs-title": "Προβολή Κόστους",
      "why-it-matters-costs-text":
        "Παρακολουθήστε τη χρήση ενέργειας και την εξοικονόμηση σας συνεχώς με πλήρη σαφήνεια.",
      "timeline-title": "Το Ταξίδι Μας",
      "timeline-founded-title": "Ίδρυση της Omnio",
      "timeline-founded-time": "Μάιος 2025",
      "timeline-founded-text":
        "Κατασκευάσαμε το πρώτο μας πρωτότυπο για να παρουσιάσουμε τον δυναμικό προγραμματισμό βασισμένο στις τιμές της ηλεκτρικής ενέργειας σε πραγματικό χρόνο",
      "timeline-milestone-title": "Πρώτα Βήματα",
      "timeline-milestone-time": "Ιούνιος 2025",
      "timeline-milestone-text":
        "Στοχεύουμε σε περισσότερους τύπους επιχειρήσεων σε άλλες ευρωπαϊκές χώρες. Συνομιλούμε με πιθανούς πελάτες για βελτιώσεις",
      "timeline-evolution-title": "Εξέλιξη Προϊόντος",
      "timeline-evolution-time": "Καλοκαίρι 2025",
      "timeline-evolution-text":
        "Στοχεύουμε πέρα από το αρχικό MVP, για να δημιουργήσουμε μια πιο ολοκληρωμένη πλατφόρμα. Ενίσχυση της Εταιρικής μας Ταυτότητας",
      "timeline-next-title": "Τι Ακολουθεί",
      "timeline-next-time": "Χειμώνας 2025",
      "timeline-next-text":
        "Επέκταση στην ΕΕ, βελτίωση της πλατφόρμας μας μέσω πιλοτικών προγραμμάτων και εξέλιξη σε ένα αξιόπιστο εργαλείο λήψης αποφάσεων για την κατανάλωση ενέργειας.",
      "team-title": "Η Ομάδα Μας",
      "team-panos-role": "Software Engineering",
      "team-panos-text":
        "Ηγείται της ανάπτυξης της βασικής πλατφόρμας της Omnio, εξασφαλίζοντας απρόσκοπτη ενσωμάτωση και robυστή απόδοση για τη βελτιστοποίηση ενέργειας.",
      "team-dionisia-role": "Business Development",
      "team-dionisia-text":
        "Οδηγεί τη στρατηγική της αγοράς της Omnio, δημιουργώντας συνεργασίες και επεκτείνοντας την εμβέλειά μας σε νοικοκυριά και επιχειρήσεις.",
      "team-christos-role": "Product Development",
      "team-christos-text":
        "Σχεδιάζει τους αλγορίθμους AI της Omnio, βελτιστοποιώντας τα προγράμματα ενέργειας για αποδοτικότητα και προσαρμοστικότητα σε πραγματικό χρόνο.",
      "contact-title": "Κλείστε ένα demo",
      "contact-description":
        "Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες.",
      "contact-name-label": "Πλήρες όνομα",
      "contact-name-placeholder": "Εισάγετε το όνομά σας...",
      "contact-email-label": "Διεύθυνση email",
      "contact-email-placeholder": "name@example.com",
      "contact-phone-label": "Αριθμός τηλεφώνου",
      "contact-phone-placeholder": "(123) 456-7890",
      "contact-message-label": "Μήνυμα",
      "contact-message-placeholder": "Εισάγετε το μήνυμά σας εδώ...",
      "contact-submit": "Υποβολή",
      "footer-copyright": "© Omnio Website 2025. All Rights Reserved",
      "footer-faq": "Συχνές Ερωτήσεις",
    },
  };

  function switchLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (translations[lang][key]) {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.setAttribute("placeholder", translations[lang][key]);
        } else {
          element.innerHTML = translations[lang][key];
        }
      }
    });
    document.getElementById("languageText").textContent =
      lang === "en" ? "EN" : "EL";
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  }

  document.getElementById("languageToggle").addEventListener("click", () => {
    const currentLang = localStorage.getItem("language") || "en";
    const newLang = currentLang === "en" ? "el" : "en";
    switchLanguage(newLang);
  });

  // Load saved language or default to English
  const savedLang = localStorage.getItem("language") || "en";
  switchLanguage(savedLang);
});
