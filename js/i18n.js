const i18n = (() => {
    let currentLang = 'he';

    const translations = {
        he: {
            meta: {
                title: 'המטבח הסורי — מתכונים אותנטיים',
                description: 'המטבח הסורי — מתכונים אותנטיים מחלב ומדמשק, בעברית.'
            },
            header: {
                logo: 'המטבח הסורי',
                backToRecipes: 'חזרה למתכונים'
            },
            hero: {
                title: 'המטבח הסורי',
                subtitle: 'מתכונים אותנטיים מהשולחן היהודי של חלב',
                searchPlaceholder: 'חיפוש מתכון...'
            },
            categories: {
                all: 'הכל',
                'קובה חלבּית': 'קובה חלבּית',
                'מחשי ויברק': 'מחשי ויברק',
                'בשרים וכבאב': 'בשרים וכבאב',
                'ממרחים וסלטים': 'ממרחים וסלטים',
                'מאפים וקינוחים': 'מאפים וקינוחים'
            },
            difficulty: {
                'קל': 'קל',
                'בינוני': 'בינוני',
                'מאתגר': 'מאתגר'
            },
            detail: {
                prepTime: 'זמן הכנה',
                cookTime: 'זמן בישול',
                servings: 'מנות',
                difficulty: 'רמת קושי',
                kosher: 'כשרות',
                ingredients: 'מצרכים',
                instructions: 'הוראות הכנה',
                categories: 'קטגוריות',
                whatsappShare: 'שלח רשימת קניות ב-WhatsApp',
                minutes: 'דקות'
            },
            search: {
                noResults: 'לא נמצאו מתכונים',
                tryAgain: 'נסו לשנות את מילות החיפוש או לבחור קטגוריה אחרת',
                clearFilters: 'נקה חיפוש',
                resultsCount: 'נמצאו {count} מתכונים'
            },
            loading: 'טוען מתכונים...',
            footer: {
                tagline: 'המטבח הסורי — מתכונים אותנטיים מחלב ומדמשק, בעברית',
                backToHub: 'לעוד מתכוני עולם — חזרה לרכזת המתכונים'
            }
        },
        en: {
            meta: {
                title: 'Syrian Cuisine — Authentic Recipes',
                description: 'Syrian Cuisine — 50 authentic Syrian Jewish recipes, all kosher, in English.'
            },
            header: {
                logo: 'Syrian Cuisine',
                backToRecipes: 'Back to Recipes'
            },
            hero: {
                title: 'Syrian Cuisine',
                subtitle: 'Authentic recipes from the Jewish table of Aleppo',
                searchPlaceholder: 'Search recipe...'
            },
            categories: {
                all: 'All',
                'קובה חלבּית': 'Aleppo Kibbeh',
                'מחשי ויברק': 'Stuffed Vegetables',
                'בשרים וכבאב': 'Meats & Kebab',
                'ממרחים וסלטים': 'Dips & Salads',
                'מאפים וקינוחים': 'Pastries & Sweets',
                'Aleppo Kibbeh': 'Aleppo Kibbeh',
                'Stuffed Vegetables': 'Stuffed Vegetables',
                'Meats & Kebab': 'Meats & Kebab',
                'Dips & Salads': 'Dips & Salads',
                'Pastries & Sweets': 'Pastries & Sweets'
            },
            difficulty: {
                'קל': 'Easy',
                'בינוני': 'Medium',
                'מאתגר': 'Hard',
                'Easy': 'Easy',
                'Medium': 'Medium',
                'Hard': 'Hard'
            },
            detail: {
                prepTime: 'Prep Time',
                cookTime: 'Cook Time',
                servings: 'Servings',
                difficulty: 'Difficulty',
                kosher: 'Kosher',
                ingredients: 'Ingredients',
                instructions: 'Instructions',
                categories: 'Categories',
                whatsappShare: 'Share shopping list on WhatsApp',
                minutes: 'minutes'
            },
            search: {
                noResults: 'No recipes found',
                tryAgain: 'Try different search terms or select another category',
                clearFilters: 'Clear search',
                resultsCount: 'Found {count} recipes'
            },
            loading: 'Loading recipes...',
            footer: {
                tagline: 'Syrian Cuisine — Authentic kosher Syrian Jewish recipes',
                backToHub: 'More world recipes — Back to Recipe Hub'
            }
        }
    };

    function t(key) {
        const keys = key.split('.');
        let value = translations[currentLang];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }

        return value || key;
    }

    function setLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language not supported: ${lang}`);
            return;
        }
        currentLang = lang;
    }

    function getLanguage() {
        return currentLang;
    }

    function detectLanguage() {
        const saved = localStorage.getItem('lang');
        if (saved && translations[saved]) {
            return saved;
        }

        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('he')) return 'he';
        return 'en';
    }

    function init() {
        const detectedLang = detectLanguage();
        setLanguage(detectedLang);
        return detectedLang;
    }

    return {
        t,
        setLanguage,
        getLanguage,
        detectLanguage,
        init
    };
})();
