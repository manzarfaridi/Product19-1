document.addEventListener("DOMContentLoaded", function () {
        const hamburgerBtn = document.getElementById("bdaHamburgerBtn");
        const navMenu = document.getElementById("bdaNavMenu");
        const searchTrigger = document.getElementById("bdaMobileSearchTrigger");
        const searchForm = document.getElementById("bdaSearchForm");

        // 1. HEMBURG BUTTON CLICK(TO OPEN/CLOSE MOBILE MENU)
        if (hamburgerBtn && navMenu) {
            hamburgerBtn.addEventListener("click", function (event) {
                event.stopPropagation(); // TO STOP CLICK OUT
                
                // ON/OFF MENU 
                navMenu.classList.toggle("bda-menu-open");
                // ALL TREE LINE TO BE 'X' MARK
                hamburgerBtn.classList.toggle("bda-close-toggle");
                
                // SAFTY CHECK IF AT TIME OF PENING MENU SEARCH BOX IS OPEN THET IT WILL CLOSE THE SEARCH BOX 
                if (searchForm) {
                    searchForm.classList.remove("bda-search-open");
                }
            });
        }
             //====================ye bad me dala hua java script hai vajah thi loginbutton close karne pe search ka drop down notification khula mil rha tha================
            // 2. क्लोज (X) बटन पर क्लिक करने पर पॉप-अप बंद हो जाए (Updated with StopPropagation)
    if (closeAuthBtn) {
        closeAuthBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // सबसे ज़रूरी: यह क्लिक इवेंट को पीछे मौजूद सर्च कॉलम तक जाने से रोकेगा!
            
            authOverlay.classList.remove('open-popup');
        });
    }

    // 3. अगर यूज़र फॉर्म से बाहर खाली जगह (Overlay) पर क्लिक करे, तो बंद हो जाए
    if (authOverlay) {
        authOverlay.addEventListener('click', (e) => {
            if (e.target === authOverlay) {
                e.preventDefault();
                e.stopPropagation();
                authOverlay.classList.remove('open-popup');
            }
        });
    }


        // 2. SEARCH ICON CLIC सर्च आइकॉन क्लिक (MOBILE SEARCH BOX ON/OFF)
        if (searchTrigger && searchForm) {
            searchTrigger.addEventListener("click", function (event) {
                event.stopPropagation(); // TO STOP CLICK TO GO OUT
                
                // SEARCH BOX ON/OFF
                searchForm.classList.toggle("bda-search-open");
                
                // SAFTY CHECK: AT TIME OF OPENING SEARCH IF MENU IS OPEN THEN IT WILL COLSE THE MENU
                if (navMenu && hamburgerBtn) {
                    navMenu.classList.remove("bda-menu-open");
                    hamburgerBtn.classList.remove("bda-close-toggle");
                }
            });
        }

        // 3. ON ANY WHERE ON SCREEN IS CLICK OPENED MENU IS CLOSSED
        document.addEventListener("click", function (event) {
            // अगर क्लिक मेनू या हैमबर्गर बटन के अंदर नहीं हुआ है, तो मेनू बंद करें
            if (navMenu && !navMenu.contains(event.target) && hamburgerBtn && !hamburgerBtn.contains(event.target)) {
                navMenu.classList.remove("bda-menu-open");
                hamburgerBtn.classList.remove("bda-close-toggle");
            }
            
            // अगर क्लिक सर्च फॉर्म या सर्च आइकॉन के अंदर नहीं हुआ है, तो सर्च बंद करें
            if (searchForm && !searchForm.contains(event.target) && searchTrigger && !searchTrigger.contains(event.target)) {
                searchForm.classList.remove("bda-search-open");
            }
        });
    });
//===================Reach us page java starts====================//
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("premiumContactForm");
    const statusAlert = document.getElementById("formStatus");

    // Input Group Verification Dynamic Error Tracker system handler function
    const validateField = (inputEl, errorEl, verificationCondition) => {
        const groupContainer = inputEl.parentElement;
        if (verificationCondition) {
            groupContainer.classList.remove("invalid-trigger");
            return true;
        } else {
            groupContainer.classList.add("invalid-trigger");
            return false;
        }
    };

    // Form submission processing interface engine trigger logic
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Default tracking reloading process block override

        const name = document.getElementById("userName");
        const email = document.getElementById("userEmail");
        const phone = document.getElementById("userPhone");
        const message = document.getElementById("userMessage");

        // Advanced regular expression templates testing validations checks arrays
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/; // Indian standard 10 digit number checker filter rules

        // Fields dynamic processing validation execution steps arrays arrays
        const isNameValid = validateField(name, null, name.value.trim() !== "");
        const isEmailValid = validateField(email, null, emailRegex.test(email.value.trim()));
        const isPhoneValid = validateField(phone, null, phoneRegex.test(phone.value.trim()));
        const isMessageValid = validateField(message, null, message.value.trim() !== "");

        // Universal checking verification structural rules validation passes conditional logic
        if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
            
            // Premium Button dynamic loading state visual trigger simulation engine setup
            const btn = document.getElementById("submitBtn");
            const btnText = btn.querySelector(".btn-text");
            btn.style.pointerEvents = "none";
            btnText.textContent = "Sending Verification...";

            setTimeout(() => {
                // Return response success validation banner system alert message displays
                statusAlert.className = "status-alert success";
                statusAlert.textContent = "Thank you! Your inquiry message request has been sent successfully.";
                
                // Reset inputs parameters systems setup array clean clear methods
                form.reset();
                btn.style.pointerEvents = "auto";
                btnText.textContent = "Send Message";

                // Fade away system clear visual elements tracker timeout loop processes
                setTimeout(() => {
                    statusAlert.style.display = "none";
                }, 5000);

            }, 1500);

        } else {
            // Error alerts setup instructions parameters array notifications layers logic execution
            statusAlert.style.display = "none";
        }
    });

    // Realtime error removal on key stroke focus triggers handler configuration engine
    const inputsList = form.querySelectorAll("input, textarea");
    inputsList.forEach((element) => {
        element.addEventListener("input", () => {
            if (element.parentElement.classList.contains("invalid-trigger")) {
                element.parentElement.classList.remove("invalid-trigger");
            }
        });
    });
});
//===================Reach us page java ends=====================//
//===================Flaoting Map button Ke Liye Script============//
document.addEventListener("DOMContentLoaded", function() {
    const mapBtn = document.getElementById("openMapModal");
    const mapModal = document.getElementById("mapModal");
    const closeBtn = document.getElementById("closeMapModal");

    // बटन क्लिक करने पर मैप पॉपअप खोलें
    if(mapBtn && mapModal) {
        mapBtn.addEventListener("click", function(e) {
            e.preventDefault();
            mapModal.style.display = "flex";
        });
    }

    // X पर क्लिक करने पर बंद करें
    if(closeBtn && mapModal) {
        closeBtn.addEventListener("click", function() {
            mapModal.style.display = "none";
        });
    }

    // बाहर डार्क एरिया में क्लिक करने पर भी बंद करें
    window.addEventListener("click", function(e) {
        if (e.target === mapModal) {
            mapModal.style.display = "none";
        }
    });
});
//================Flaoting Map button Ke Liye Script khatam hua================//
//================testimonial/what clints says about us page starts============//
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const reviewCards = document.querySelectorAll(".review-card");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove active classes from other control filter action elements
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            
            // Inject current selected target button focus highlights
            button.classList.add("active");

            const filterValue = button.getAttribute("data-target");

            reviewCards.forEach((card) => {
                const cardCategory = card.getAttribute("data-category");

                // Check evaluation match parameters rules filters logic
                if (filterValue === "all" || filterValue === cardCategory) {
                    // Smooth delay entrance animation effect triggers setup
                    card.classList.remove("hide-card");
                    card.style.opacity = "0";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transition = "opacity 0.4s ease";
                    }, 50);
                } else {
                    // Hide other mismatched category structural box blocks rows
                    card.classList.add("hide-card");
                }
            });
        });
    });
});
//==================testimonial/what clints says about us page Ends============//
/**
 * 📊 BIHAR DRUGS AGENCY (BDA) - INTEGRATED ECOSYSTEM ARCHITECTURE
 * Core Features: Hamburger, Persistent Menu Tracker, and Direct-Hook Secure Modal Controller.
 */
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================================================
    // 🍔 SECTION 1: RESPONSIVE MOBILE HAMBURGER NAVIGATION SYSTEM
    // ==========================================================================
    const hamburgerBtn = document.getElementById('bdaHamburgerBtn');
    const navMenu = document.getElementById('bdaNavMenu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function (e) {
            e.stopPropagation(); 
            navMenu.classList.toggle('open');
        });
    }

    // ==========================================================================
    // 🔗 SECTION 2: WEB TRACKER FOR URL PERSISTENT ACTIVE MENU HIGHLIGHT
    // ==========================================================================
    const currentPage = window.location.pathname.split("/").pop();
    const menuLinks = document.querySelectorAll('#bdaNavMenu li a');

    menuLinks.forEach(link => {
        link.classList.remove('bda-active');
        const linkPage = link.getAttribute('href');

        if (currentPage === linkPage) {
            link.classList.add('bda-active');
        } else if ((currentPage === "" || currentPage === "index.html") && linkPage === "index.html") {
            link.classList.add('bda-active');
        }
    });

    // ==========================================================================
    // 🔒 SECTION 3: DIRECT-HOOK PREMIUM AUTH MODAL INTERACTION CONTROLLER
    // ==========================================================================
    const authOverlay = document.getElementById('authOverlay');
    const authCard = document.getElementById('authCard');
    const closeAuthBtn = document.getElementById('closeAuthBtn');
    const loginTriggers = document.querySelectorAll('.login-trigger');

    // 1. OPEN EVENT HOOK: Sabhi login triggers (Desktop + Mobile Layouts) par direct listener
    loginTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            if (authOverlay) {
                authOverlay.classList.add('open-modal');
                console.log("Modal opened via direct trigger hook.");
                
                // Mobile layout drawer auto-close logic
                if (navMenu) navMenu.classList.remove('open');
            }
        });
    });

    // 2. 🔥 FORCE CLOSE HOOK: Target layer bypass block karne ke liye direct hardware close check
    if (closeAuthBtn) {
        closeAuthBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation(); // Event bubble to overlay cards block
            if (authOverlay) {
                authOverlay.classList.remove('open-modal');
                console.log("Modal force-closed directly via 'X' element click.");
            }
        });
    }

    // 3. OUTER AREA AUTO DISMISS CONTROLLER
    if (authOverlay) {
        authOverlay.addEventListener('click', function (e) {
            // Agar click direct dark transparent backdrop screen par hua ho
            if (e.target === authOverlay) {
                authOverlay.classList.remove('open-modal');
            }
        });
    }

    // 4. SECURE IN-APP SLIDING VIEW SWITCHING ENGINE (Sign In <-> Sign Up Form)
    document.addEventListener('click', function (e) {
        
        // Action A: Switch logic from Login view state to Register Card fields
        if (e.target && e.target.id === 'toSignUp') {
            if (authCard) {
                authCard.classList.add('show-signup');
                console.log("Interface state updated: Displaying Sign-Up Form Panel.");
            }
        }

        // Action B: Switch logic from Registration page tracking panels back to Sign-In
        if (e.target && (e.target.id === 'toSignIn' || e.target.classList.contains('trigger-switch-back'))) {
            if (authCard) {
                authCard.classList.remove('show-signup');
                console.log("Interface state updated: Reverting to Log-In Form Panel.");
            }
        }
    });
});

//=============================on click get opent java section======================// 
          document.addEventListener("DOMContentLoaded", () => {
    const sectionLoginTrigger = document.querySelector('.section-login-trigger');
    const sectionSignupTrigger = document.querySelector('.section-signup-trigger');
    const dropZone = document.getElementById('dropZone');
    const docInput = document.getElementById('documentUploadInput');
    const fileListName = document.getElementById('fileListName');

    // मोबाइल व्यू फंक्शन को सुरक्षित कॉल करने के लिए चेक
    function syncMobileView() {
        if (typeof updateMobileFormVisibility === "function") {
            updateMobileFormVisibility();
        }
    }

    // निचले दोनों नए एक्शन बटन्स पर क्लिक करने पर सीधे पॉप-अप को सही फ़ॉर्म के साथ खोलना
    if (sectionLoginTrigger) {
        sectionLoginTrigger.addEventListener('click', () => {
            authCard.classList.remove('show-signup'); 
            authOverlay.classList.add('open-popup');
            if (brandTitle) brandTitle.innerText = "Premium Solutions For Global Medical Supply";
            if (brandDesc) brandDesc.innerText = "Access your secure executive dashboard to manage integrations.";
            syncMobileView();
        });
    }

    if (sectionSignupTrigger) {
        sectionSignupTrigger.addEventListener('click', () => {
            authCard.classList.add('show-signup'); 
            authOverlay.classList.add('open-popup');
            if (brandTitle) brandTitle.innerText = "Join Our Global Medical Supply Network";
            if (brandDesc) brandDesc.innerText = "Create your secure portal identity to unlock instant pricing.";
            syncMobileView();
        });
    }

    // ड्रैग-एंड-ड्रॉप और मोबाइल क्लिक फाइल अपलोडर कोर लॉजिक
    if (dropZone && docInput) {
        dropZone.addEventListener('click', () => docInput.click());

        docInput.addEventListener('change', () => {
            if (docInput.files.length > 0) {
                let names = Array.from(docInput.files).map(f => f.name).join(', ');
                fileListName.innerText = "Selected: " + names;
                fileListName.style.color = "var(--auth-navy)";
            } else {
                fileListName.innerText = "No file selected";
                fileListName.style.color = "var(--auth-orange)";
            }
        });

        // ड्रैग ओवर एनिमेशन इफेक्ट्स (डेस्कटॉप सपोर्ट)
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = "var(--auth-navy)";
            dropZone.style.background = "#f0f4f8";
        });

        dropZone.addEventListener('dragleave', () => {
            dropZone.style.borderColor = "var(--auth-border)";
            dropZone.style.background = "#f8fafc";
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = "var(--auth-border)";
            dropZone.style.background = "#f8fafc";
            
            if (e.dataTransfer.files.length > 0) {
                docInput.files = e.dataTransfer.files;
                let names = Array.from(docInput.files).map(f => f.name).join(', ');
                fileListName.innerText = "Dropped: " + names;
                fileListName.style.color = "var(--auth-navy)";
            }
        });
    }

    const authOverlay = document.getElementById('authOverlay');
    const authCard = document.getElementById('authCard');
    const closeAuthBtn = document.getElementById('closeAuthBtn');
    
    // वेबसाइट के Navbar वाले बटन की ID (जिससे लॉगिन फॉर्म खुलेगा)
    const navSignUpBtn = document.getElementById('navSignUpBtn'); 
    
    const toSignUp = document.getElementById('toSignUp');
    const toSignIn = document.getElementById('toSignIn');
    const brandTitle = document.getElementById('brandTitle');
    const brandDesc = document.getElementById('brandDesc');

    // 1. मोबाइल और डेस्कटॉप दोनों के लिए फॉर्म विज़िबिलिटी को मैनेज करने वाला फंक्शन
    function updateMobileFormVisibility() {
        // अगर स्क्रीन छोटी है (850px से कम)
        if (window.innerWidth <= 850) {
            const signInBox = document.querySelector('.auth-overlay .signin-box');
            const signUpBox = document.querySelector('.auth-overlay .sign-up-box');
            
            if (signInBox && signUpBox) {
                if (authCard.classList.contains('show-signup')) {
                    signInBox.style.setProperty('display', 'none', 'important');
                    signUpBox.style.setProperty('display', 'flex', 'important');
                } else {
                    signInBox.style.setProperty('display', 'flex', 'important');
                    signUpBox.style.setProperty('display', 'none', 'important');
                }
            }
        }
    }

    // 2. जब यूज़र Navbar के बटन पर क्लिक करे तो पॉप-अप खुले
    if (navSignUpBtn) {
        navSignUpBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            authOverlay.classList.add('open-popup');
            updateMobileFormVisibility(); // मोबाइल चेक रन करें
        });
    }

    // 3. क्लोज (X) बटन पर क्लिक करने पर पॉप-अप बंद हो जाए
    if (closeAuthBtn) {
        closeAuthBtn.addEventListener('click', () => {
            authOverlay.classList.remove('open-popup');
        });
    }

    // 4. अगर यूज़र फॉर्म से बाहर खाली जगह (Overlay) पर क्लिक करे, तो बंद हो जाए
    if (authOverlay) {
        authOverlay.addEventListener('click', (e) => {
            if (e.target === authOverlay) {
                authOverlay.classList.remove('open-popup');
            }
        });
    }

    // 5. साइन-अप फॉर्म पर स्विच करने का लॉजिक
    if (toSignUp) {
        toSignUp.addEventListener('click', () => {
            authCard.classList.add('show-signup');
            if (brandTitle) brandTitle.innerText = "Join Our Global Medical Supply Network";
            if (brandDesc) brandDesc.innerText = "Create your secure portal identity to unlock instant pricing.";
            updateMobileFormVisibility(); // मोबाइल व्यू को तुरंत अपडेट करें
        });
    }

    // 6. लॉगिन (Sign In) फॉर्म पर वापस आने का लॉजिक
    if (toSignIn) {
        toSignIn.addEventListener('click', () => {
            authCard.classList.remove('show-signup');
            if (brandTitle) brandTitle.innerText = "Premium Solutions For Global Medical Supply";
            if (brandDesc) brandDesc.innerText = "Access your secure executive dashboard to manage integrations.";
            updateMobileFormVisibility(); // मोबाइल व्यू को तुरंत अपडेट करें
        });
    }

    // स्क्रीन का साइज़ छोटा-बड़ा होने पर भी फॉर्म की विज़िबिलिटी चेक होती रहे
    window.addEventListener('resize', updateMobileFormVisibility);

    // 7. पासवर्ड शो/हाइड करने का लॉजिक
    const maskIcons = document.querySelectorAll('.toggle-mask');
    maskIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const pwdInput = this.parentElement.querySelector('.pwd-field');
            if (pwdInput) {
                if (pwdInput.type === 'password') {
                    pwdInput.type = 'text';
                    this.classList.remove('fa-eye-slash');
                    this.classList.add('fa-eye');
                } else {
                    pwdInput.type = 'password';
                    this.classList.remove('fa-eye');
                    this.classList.add('fa-eye-slash');
                }
            }
        });
    });
});

//=================on click get open java======================//

//=================================================================================
//         BIHAR DRUGS AGENCY (BDA)- HEADER MENU BUTTON ON CLICK HOVER STARTS
//=================================================================================
 // 1. HAMBURGER LOGIC (Pure document par click trace karega)
document.addEventListener('click', function (e) {
    // Agar bdaHamburgerBtn par click ho ya uske andar ke <span> par
    if (e.target.closest('#bdaHamburgerBtn') || e.target.closest('.bda-hamburger')) {
        const navMenu = document.getElementById('bdaNavMenu');
        if (navMenu) {
            navMenu.classList.toggle('open');
            console.log("Menu Open/Close Toggle Hua!");
        }
    }
});

// 2. ACTIVE PAGE LOGIC (Page load hote hi highlight karega)
document.addEventListener("DOMContentLoaded", function () {
    // Current URL se page ka naam nikalega (e.g., aboutpage.html)
    const currentPage = window.location.pathname.split("/").pop();
    const menuLinks = document.querySelectorAll('#bdaNavMenu li a');

    menuLinks.forEach(link => {
        // Pehle se lagi active class hatayein
        link.classList.remove('bda-active');
        
        // Link ka href nikalen
        const linkPage = link.getAttribute('href');

        // Agar match kare toh active class laga dein
        if (currentPage === linkPage) {
            link.classList.add('bda-active');
        } 
        // Default home page ke liye condition
        else if ((currentPage === "" || currentPage === "index.html") && linkPage === "index.html") {
            link.classList.add('bda-active');
        }
    });
});

//=================================================================================
//          BIHAR DRUGS AGENCY (BDA)- HEADER MENU BUTTON ON CLICK HOVER ENDS
//=================================================================================


///-===============================================================//
//                    LIST VIEW POP SCRIPT STARTS
//=================================================================//
document.addEventListener("DOMContentLoaded", function () {
    // 1. Element selectors
    const listViewBtn = document.getElementById('btn-grid-view'); 
    const alertToast = document.getElementById("orientationAlert");
    const closeBtn = document.getElementById("closeToastBtn");
    
    // Pura URL nikalne ke liye
    const currentUrl = window.location.href;

    // Shuru me pop-up ko hidden rakhein
    if (alertToast) {
        alertToast.style.display = "none";
    }

    // 2. Agar button page par maujood hai (URL strict check hata diya taaki testing aasan ho)
    if (listViewBtn) {
        
        // Jab user List View button par click karega
        listViewBtn.addEventListener("click", function() {
            
            // 3. SAFE CONDITION: Agar screen choti hai YA mobile device hai
            const isMobileScreen = window.innerWidth <= 768;
            const isMobileDevice = /Mobi|Android|iPhone/i.test(navigator.userAgent);

            if ((isMobileScreen || isMobileDevice) && alertToast) {
                
                // Pop-up ko display block/flex karke dikhayein
                alertToast.style.display = "flex";
                
                // Smooth animation ke liye chota sa delay
                setTimeout(() => {
                    alertToast.classList.add("show");
                }, 50);

                // 10 seconds baad automatic close karne ka timer
                const autoCloseTimeout = setTimeout(closeToast, 10500);

                // Manually 'x' click par close logic
                if (closeBtn) {
                    closeBtn.addEventListener("click", () => {
                        clearTimeout(autoCloseTimeout);
                        closeToast();
                    });
                }
            }
        });
    }

    function closeToast() {
        if (alertToast) {
            alertToast.classList.remove("show");
            setTimeout(() => {
                alertToast.style.display = "none";
            }, 500);
        }
    }
});

//=================================================================//
//                    LIST VIEW POP SCRIPT ENDS
//=================================================================//

//=================================================================//
//                     BUTTON SELECTION SCRIPT STARTS
//=================================================================//

document.addEventListener("DOMContentLoaded", function () {
    const btnList = document.getElementById("btn-list-view");
    const btnGrid = document.getElementById("btn-grid-view");
    
    const listSection = document.getElementById("bda-list-view-section");
    const gridSection = document.getElementById("bda-grid-view-section");

    // 📝 लिस्ट व्यू पर क्लिक करने पर
    btnList.addEventListener("click", function () {
        btnList.classList.add("active");
        btnGrid.classList.remove("active");
        
        listSection.classList.replace("display-off", "display-on");
        gridSection.classList.replace("display-on", "display-off");
    });

    // 📊 ग्रिड व्यू पर क्लिक करने पर
    btnGrid.addEventListener("click", function () {
        btnGrid.classList.add("active");
        btnList.classList.remove("active");
        
        gridSection.classList.replace("display-off", "display-on");
        listSection.classList.replace("display-on", "display-off");
    });
});
//=================================================================//
//                   BUTTON SELECTION SCRIPT ENDS
//=================================================================//

//=================================================================//
//                     GRID VIEW SCRIPT STARTS
//=================================================================//

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".bda-input-search");
    const allCompaniesCheckbox = document.getElementById("company-all");
    const singleCompaniesCheckboxes = document.querySelectorAll(".company-single");
    const allCategoriesCheckbox = document.getElementById("category-all");
    const singleCategoriesCheckboxes = document.querySelectorAll(".category-single");
    const productCards = document.querySelectorAll(".bda-product-card");
    const btnExcel = document.getElementById("btn-download-excel");
    const btnWhatsapp = document.getElementById("btn-share-whatsapp");

    allCompaniesCheckbox.addEventListener("change", function() {
        if (this.checked) singleCompaniesCheckboxes.forEach(cb => cb.checked = false);
        filterProducts();
    });
    singleCompaniesCheckboxes.forEach(cb => {
        cb.addEventListener("change", function() {
            if (this.checked) allCompaniesCheckbox.checked = false;
            if (!Array.from(singleCompaniesCheckboxes).some(c => c.checked)) allCompaniesCheckbox.checked = true;
            filterProducts();
        });
    });

    allCategoriesCheckbox.addEventListener("change", function() {
        if (this.checked) singleCategoriesCheckboxes.forEach(cb => cb.checked = false);
        filterProducts();
    });
    singleCategoriesCheckboxes.forEach(cb => {
        cb.addEventListener("change", function() {
            if (this.checked) allCategoriesCheckbox.checked = false;
            if (!Array.from(singleCategoriesCheckboxes).some(c => c.checked)) allCategoriesCheckbox.checked = true;
            filterProducts();
        });
    });

    function filterProducts() {
        const searchText = searchInput.value.toLowerCase().trim();
        const isAllCompanySelected = allCompaniesCheckbox.checked;
        const activeCompanies = [];
        singleCompaniesCheckboxes.forEach(cb => { if (cb.checked) activeCompanies.push(cb.value); });

        const isAllCategorySelected = allCategoriesCheckbox.checked;
        const activeCategories = [];
        singleCategoriesCheckboxes.forEach(cb => { if (cb.checked) activeCategories.push(cb.value); });

        productCards.forEach(card => {
            const brandName = card.getAttribute("data-brand").toLowerCase();
            const cardCompany = card.getAttribute("data-company");
            const cardCategory = card.getAttribute("data-category");

            const matchesSearch = brandName.includes(searchText);
            const matchesCompany = isAllCompanySelected || activeCompanies.includes(cardCompany);
            const matchesCategory = isAllCategorySelected || activeCategories.includes(cardCategory);

            if (matchesSearch && matchesCompany && matchesCategory) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    }
    searchInput.addEventListener("input", filterProducts);

    function getSelectedProductsData() {
        const selectedData = [];
        productCards.forEach(card => {
            const isChecked = card.querySelector(".bda-product-select-check").checked;
            if (isChecked && card.style.display !== "none") {
                selectedData.push({
                    Brand: card.getAttribute("data-brand"),
                    Company: card.getAttribute("data-company").toUpperCase(),
                    Category: card.querySelector(".bda-cat-val").innerText,
                    Needle_Profile: card.querySelector(".bda-needle-val").innerText,
                    Suture_Profile: card.querySelector(".bda-suture-val").innerText,
                    MRP: card.querySelector(".bda-mrp-val").innerText
                });
            }
        });
        return selectedData;
    }

    btnExcel.addEventListener("click", function() {
        const data = getSelectedProductsData();
        if (data.length === 0) {
            alert("कृपया एक्सपोर्ट करने के लिए पहले 'चुनें (Select)' चेकबॉक्स पर टिक करें!");
            return;
        }
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Selected Products");
        XLSX.writeFile(workbook, "Product_Matrix_Report.xlsx");
    });

    btnWhatsapp.addEventListener("click", function() {
        const data = getSelectedProductsData();
        if (data.length === 0) {
            alert("कृपया व्हाट्सएप पर भेजने के लिए पहले किसी उत्पाद को सेलेक्ट करें!");
            return;
        }
        let messageText = "*📦 Selected Products Report *\n\n";
        data.forEach((prod, index) => {
            messageText += `${index + 1}. *${prod.Brand}* (${prod.Company})\n`;
            messageText += `   • Cat: ${prod.Category}\n`;
            messageText += `   • Price: ${prod.MRP}\n\n`;
        });
        const whatsappUrl = `https://whatsapp.com{encodeURIComponent(messageText)}`;
        window.open(whatsappUrl, "_blank");
    });
});
//=================================================================//
//                      GRID VIEW SCRIPT STARTS
//=================================================================//
//===========================================================================
//        BIHAR DRUGS AGENCY (BDA) - PRODUCTS MATRIX PAGE SCRIPT STARTS
//===========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("pharmaLiveSearchInput");
    const tableBody = document.getElementById("pharmaTableBodyRows");
    const noResultsMsg = document.getElementById("noPharmaResultsMessage");
    
    // Actions Targets
    const selectAllCheckbox = document.getElementById("selectAllPharmaRows");
    const exportExcelBtn = document.getElementById("exportExcelBtn");
    const shareWhatsappBtn = document.getElementById("shareWhatsappBtn");
    const checkedRowsCount = document.getElementById("checkedRowsCount");
    
    const categoryItems = document.querySelectorAll(".category-item");
    const companyCheckboxes = document.querySelectorAll(".company-filter-checkbox");

    if (!tableBody) return;

    // 1. रो-डेटा को क्रैश होने से बचाने के लिए सेफ सेलेक्टर फंक्शन
    function getTableRowData(row) {
        if (!row || !row.cells || row.cells.length < 7) {
            return { brand: "", needle: "", suture: "", comp: "", mrp: "" };
        }
        return {
            brand: row.cells[1] ? row.cells[1].innerText.trim() : "",
            needle: row.cells[2] ? row.cells[2].innerText.trim() : "",
            suture: row.cells[3] ? row.cells[3].innerText.trim() : "",
            comp: row.cells[4] ? row.cells[4].innerText.trim() : "",
            mrp: row.cells[5] ? row.cells[5].innerText.trim() : ""
        };
    }

    // 2. 3-लेवल हाइब्रिड मास्टर फ़िल्टर इंजन (खोज + श्रेणी + कंपनी)
    function filterDashboardInventory() {
        const rows = tableBody.getElementsByTagName("tr");
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
        
        const activeCatItem = document.querySelector(".category-item.active-cat");
        const activeCategory = activeCatItem ? activeCatItem.getAttribute("data-category") : "all";

        const selectedCompanies = [];
        companyCheckboxes.forEach(cb => {
            if (cb.checked) selectedCompanies.push(cb.value);
        });

        let matchCount = 0;

        Array.from(rows).forEach(row => {
            const rowCategory = row.getAttribute("data-prod-cat") || "";
            const rowCompany = row.getAttribute("data-company") || "";
            const data = getTableRowData(row);

            const categoryMatches = (activeCategory === "all" || rowCategory === activeCategory);
            const companyMatches = selectedCompanies.includes(rowCompany);
            
            // पूरे रो के किसी भी अक्षर को टाइप करके खोजने की सुविधा
            const rowFullText = `${data.brand} ${data.needle} ${data.suture} ${data.comp}`.toLowerCase();
            const searchMatches = rowFullText.includes(searchTerm);

            if (categoryMatches && companyMatches && searchMatches) {
                row.style.display = "";
                matchCount++;
            } else {
                row.style.display = "none";
                
                // छिपे हुए रो को अनचेक करना ताकि गलत एक्सपोर्ट न हो
                const cb = row.querySelector(".row-select-input");
                if (cb) {
                    cb.checked = false;
                    row.classList.remove("row-is-selected");
                }
            }
        });

        if (noResultsMsg) {
            noResultsMsg.style.display = (matchCount === 0) ? "block" : "none";
        }

        syncActionControls();
    }

    // 3. काउंटर और इनेबल/डिसेबल लॉजिक कंट्रोलर
    function syncActionControls() {
        const allInputs = tableBody.querySelectorAll(".row-select-input");
        const checkedInputs = tableBody.querySelectorAll(".row-select-input:checked");
        const visibleInputs = tableBody.querySelectorAll("tr:not([style*='display: none']) .row-select-input");
        const visibleChecked = tableBody.querySelectorAll("tr:not([style*='display: none']) .row-select-input:checked");

        const count = checkedInputs.length;
        if (checkedRowsCount) checkedRowsCount.innerText = count;

        const isBtnDisabled = (count === 0);
        if (exportExcelBtn) exportExcelBtn.disabled = isBtnDisabled;
        if (shareWhatsappBtn) shareWhatsappBtn.disabled = isBtnDisabled;

        if (selectAllCheckbox) {
            selectAllCheckbox.checked = (visibleInputs.length === visibleChecked.length && visibleInputs.length > 0);
        }
    }

    // 4. 'Select All' चेकबॉक्स पर क्लिक इवेंट
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener("change", function () {
            const isChecked = this.checked;
            const rows = tableBody.getElementsByTagName("tr");
            
            Array.from(rows).forEach(row => {
                if (row.style.display !== "none") {
                    const cb = row.querySelector(".row-select-input");
                    if (cb) {
                        cb.checked = isChecked;
                        if (isChecked) row.classList.add("row-is-selected");
                        else row.classList.remove("row-is-selected");
                    }
                }
            });
            syncActionControls();
        });
    }

    // 5. सिंगल चेकबॉक्स क्लिक इवेंट (डेलिगेटेड मोड - सेफ)
    tableBody.addEventListener("change", function (e) {
        if (e.target && e.target.classList.contains("row-select-input")) {
            const tr = e.target.closest("tr");
            if (tr) {
                if (e.target.checked) tr.classList.add("row-is-selected");
                else tr.classList.remove("row-is-selected");
            }
            syncActionControls();
        }
    });

    // फ़िल्टर लिसनर्स बाइंडिंग
    companyCheckboxes.forEach(cb => cb.addEventListener("change", filterDashboardInventory));
    if (searchInput) searchInput.addEventListener("input", filterDashboardInventory);
    
    categoryItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            categoryItems.forEach(cat => cat.classList.remove("active-cat"));
            this.classList.add("active-cat");
            filterDashboardInventory();
        });
    });

    // 6. माइक्रोसॉफ्ट एक्सेल एक्सपोर्ट इंजन (.xlsx)
    if (exportExcelBtn) {
        exportExcelBtn.addEventListener("click", () => {
            const checkedBoxes = tableBody.querySelectorAll(".row-select-input:checked");
            const exportData = [];
            
            // एक्सेल के लिए बिल्कुल सटीक 5 हेडर कॉलम्स
            exportData.push(["BRAND", "NEEDLE'S PROFILE", "SUTURE'S PROFILE", "COMPOSITION", "MRP (BOX/12PCS)"]);

            checkedBoxes.forEach(cb => {
                const tr = cb.closest("tr");
                if (tr) {
                    const data = getTableRowData(tr);
                    exportData.push([data.brand, data.needle, data.suture, data.comp, data.mrp]);
                }
            });

            if (typeof XLSX !== "undefined") {
                const wb = XLSX.utils.book_new();
                const ws = XLSX.utils.aoa_to_sheet(exportData);
                XLSX.utils.book_append_sheet(wb, ws, "Surgical Profiles");
                XLSX.writeFile(wb, "BDA_Surgical_Profiles_Matrix.xlsx");
            } else {
                alert("Excel Engine error: Please check your internet connection to load SheetJS.");
            }
        });
    }

    // 7. एडवांस व्हाट्सएप शेयरिंग मैसेज इंजन
    if (shareWhatsappBtn) {
        shareWhatsappBtn.addEventListener("click", () => {
            const checkedBoxes = tableBody.querySelectorAll(".row-select-input:checked");
            let textMessage = "*BDA GLOBAL MATRIX - SURGICAL PROFILES*\n";
            textMessage += "========================================\n\n";

            let idx = 1;
            checkedBoxes.forEach(cb => {
                const tr = cb.closest("tr");
                if (tr) {
                    const data = getTableRowData(tr);
                    textMessage += `${idx}. *${data.brand}*\n`;
                    textMessage += `   • *Needle:* ${data.needle}\n`;
                    textMessage += `   • *Suture:* ${data.suture}\n`;
                    textMessage += `   • *Composition:* ${data.comp}\n`;
                    textMessage += `   • *MRP:* ${data.mrp}\n`;
                    textMessage += "----------------------------------------\n";
                    idx++;
                }
            });

            textMessage += "\n_Generated via BDA Global System Matrix_";
            window.open(`https://whatsapp.com{encodeURIComponent(textMessage)}`, "_blank");
        });
    }

    // 8. "View More" बटन क्लिक इवेंट
    tableBody.addEventListener("click", function (e) {
        if (e.target && e.target.classList.contains("row-view-details")) {
            e.preventDefault();
            const tr = e.target.closest("tr");
            const data = getTableRowData(tr);
            
            // अगर लॉगिन ब्लॉक पहले से मौजूद है, तो उसे खोलें वरना सेफ अलर्ट दिखाएँ
            alert(`Opening detailed specification metrics for *${data.brand}*.\n\nNeedle Profile: ${data.needle}\nSuture Profile: ${data.suture}`);
        }
    });
});
//=================================================================================
//            BIHAR DRUGS AGENCY (BDA)- PRODUCTS MATRIX PAGE SCRIPT ENDS
//=================================================================================

