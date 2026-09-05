const projectViewer = document.querySelector("#projectViewer");
const closeButton = document.querySelector(".viewer-close-button");
const caseStudyLinks = document.querySelectorAll(".project-view-button");
const viewerTitle = document.querySelector("#viewerTitle");
const menuButton = document.querySelector(".viewer-menu-button");
const viewerContent = document.querySelector("#viewerContent");
const drawerHandle = document.querySelector(".drawer-handle");
const projectDrawer = document.querySelector(".project-drawer");
const drawerProjectCards = document.querySelectorAll(".drawer-project-card");
const viewAllProjects = document.querySelector(".projects-link");


caseStudyLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const projectName = link.dataset.project;

        openProject(projectName);

        projectViewer.classList.add("open");
        document.body.style.overflow = "hidden";

    });

});


closeButton.addEventListener("click", function() {

    projectViewer.classList.remove("open");

    projectDrawer.classList.remove("open");
    drawerHandle.classList.remove("open");

    document.body.style.overflow = "";

});


menuButton.addEventListener("click", function() {

    showProjects();

});


drawerHandle.addEventListener("click", function() {

    projectDrawer.classList.toggle("open");
    drawerHandle.classList.toggle("open");

});


drawerProjectCards.forEach(function(card) {

    card.addEventListener("click", function() {

        openProject(card.dataset.project);

    });

});


function openProject(projectName) {

    viewerTitle.textContent = projectName;

    drawerHandle.style.display = "flex";

    projectDrawer.classList.remove("open");
    drawerHandle.classList.remove("open");

    viewerContent.innerHTML = "";
    viewerContent.scrollTop = 0;


    // Remove LootRush section navigator
    const oldCaseNav = document.querySelector(".case-section-nav");

    if (oldCaseNav) {
        oldCaseNav.remove();
    }


    if (projectName === "LootRush") {
        showLootRush();
    }

    else if (projectName === "Habitu") {
        showHabitu();
    }
    else if (projectName === "Tropical Bites"){
        showTropicalBites();
    }
    else if (projectName === "FORM") {
        showForm();
    }

}
const navItems = document.querySelectorAll(".nav-item");

const sections = document.querySelectorAll(
    "#home, #projects, #about-me, #contact"
);

let navScrolling = false;
let navScrollTimer;


navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        navScrolling = true;

        navItems.forEach(function(navItem) {
            navItem.classList.remove("active");
        });

        item.classList.add("active");

        clearTimeout(navScrollTimer);

        const isContact =
            item.getAttribute("href") === "#contact";


        if (isContact) {

            function waitForContact() {

                const isAtBottom =
                    window.scrollY + window.innerHeight
                    >= document.documentElement.scrollHeight - 5;

                if (isAtBottom) {

                    navScrolling = false;
                    updateActiveNav();

                } else {

                    requestAnimationFrame(waitForContact);

                }

            }

            requestAnimationFrame(waitForContact);

        } else {

            navScrollTimer = setTimeout(function() {

                navScrolling = false;
                updateActiveNav();

            }, 700);

        }

    });

});


function updateActiveNav() {

    if (navScrolling) {
        return;
    }

    let activeSection = sections[0];

    const triggerPoint = window.innerHeight * 0.45;

    const isAtBottom =
        window.scrollY + window.innerHeight
        >= document.documentElement.scrollHeight - 5;


    // At bottom → Contact is active
    if (isAtBottom) {

        activeSection = document.querySelector("#contact");

    } else {

        sections.forEach(function(section) {

            const rect = section.getBoundingClientRect();

            if (rect.top <= triggerPoint) {
                activeSection = section;
            }

        });

    }


    navItems.forEach(function(item) {

        item.classList.remove("active");

        if (item.getAttribute("href") === "#" + activeSection.id) {
            item.classList.add("active");
        }

    });

}


window.addEventListener("scroll", updateActiveNav);

updateActiveNav();

function animateViewerContent() {

    const content = viewerContent.firstElementChild;

    if (!content) return;

    content.classList.remove("viewer-content-enter");

    void content.offsetWidth;

    content.classList.add("viewer-content-enter");
}


function showLootRush() {

    viewerContent.innerHTML = `
    
        <div class="lootrush-case-study">




            <!-- =========================================
                 HERO
            ========================================== -->

            <section id="case-top" class="lootrush-hero">

                <div class="lootrush-hero-text">

                    <p class="lootrush-subtitle">
                        Gaming equipment comparison and upgrade planning platform
                        that helps gamer chose their equipment based on budget and
                        compitability.
                    </p>

                </div>


                <div class="lootrush-hero-image">
                    <img src="images/hero.png" alt="LootRush project overview">
                </div>


                <div class="lootrush-project-details">

                    <div class="lootrush-detail">
                        <span class="lootrush-detail-label">Role</span>
                        <span class="lootrush-detail-value">UX/UI Designer</span>
                    </div>

                    <div class="lootrush-detail">
                        <span class="lootrush-detail-label">Duration</span>
                        <span class="lootrush-detail-value">8 weeks</span>
                    </div>

                    <div class="lootrush-detail">
                        <span class="lootrush-detail-label">Platform</span>
                        <span class="lootrush-detail-value">Mobile</span>
                    </div>

                </div>


                <div class="lootrush-process">

                    <h2 class="lootrush-small-heading">
                        Design Process
                    </h2>

                    <div class="lootrush-process-list">

                        <span>Research</span>
                        <span>Wireframes</span>
                        <span>Low-fi Prototype</span>
                        <span>Usability Study .1</span>
                        <span>Hi-fi Wireframes</span>
                        <span>Hi-fi Prototype</span>
                        <span>Usability Study .2</span>

                    </div>

                </div>

            </section>



            <!-- =========================================
                 OVERVIEW
            ========================================== -->

            <section id="case-overview" class="lootrush-section lootrush-overview">

                <h2 class="lootrush-section-title">
                    Overview
                </h2>


                <div class="lootrush-overview-content">

                    <div class="lootrush-overview-image">
                        <img src="images/overview.png" alt="LootRush project overview">
                    </div>


                    <div class="lootrush-overview-text">

                        <p class="lootrush-body-text">
                            LootRush is a concept mobile shopping application designed
                            to simplify the process of discovering and purchasing gaming
                            peripherals. Buying gaming gear often requires users to switch
                            between multiple retailer websites, reviews, comparison tools,
                            and community discussions before feeling confident in a purchase.
                        </p>

                        <p class="lootrush-body-text">
                            This project explores how a more streamlined shopping experience
                            can reduce that friction by combining product discovery,
                            side-by-side comparison, advanced filtering, budget-based
                            recommendations, and accessible explanations of technical
                            specifications into a single, intuitive platform. The result is
                            an experience that helps gamers make informed purchasing
                            decisions without leaving the app.
                        </p>

                    </div>

                </div>

            </section>



            <!-- =========================================
                 UNDERSTANDING THE PROBLEM
            ========================================== -->

            <section class="lootrush-section lootrush-problem">

                <h2 class="lootrush-section-title">
                    Understanding The Problem
                </h2>

                <p class="lootrush-body-text lootrush-centered-text">
                    Buying gaming peripherals often requires users to navigate multiple
                    sources before making a confident purchasing decision. To better
                    understand the challenges behind this experience, I initially planned
                    to conduct user interviews and surveys. Due to participant recruitment
                    limitations, I adapted my research approach and conducted secondary
                    research instead, analyzing community discussions, product reviews,
                    buying guides, and existing shopping experiences. By identifying
                    recurring patterns across these sources, I established the key user
                    needs, frustrations, and opportunities that guided the design process.
                </p>

            </section>



            <!-- =========================================
                 RESEARCH METHODS
            ========================================== -->

            <section id="case-research" class="lootrush-section lootrush-research-methods">
                <h2 class="lootrush-section-title">
                    Research Methods
                </h2>


                <div class="lootrush-methods">

                    <article class="lootrush-method-card">

                        <h3>Secondary research</h3>

                        <p>
                            Analysis of community discussions, buying guides,
                            product overview videos and existing shopping
                            experiences to identify recuring behaviors and pain points.
                        </p>

                    </article>


                    <article class="lootrush-method-card">

                        <h3>Competitive Audit</h3>

                        <p>
                            Explored existing gaming shopping platforms to understand
                            their strengths, weaknesses, and opportunities for improvement.
                        </p>

                    </article>


                    <article class="lootrush-method-card">

                        <h3>Persona Development</h3>

                        <p>
                            Created a primary persona based on recurring patterns
                            identified during research to represent the target audience.
                        </p>

                    </article>


                    <article class="lootrush-method-card">

                        <h3>User Journey Map</h3>

                        <p>
                            Mapped the user journey to identify friction points and
                            opportunities throughout the shopping experience.
                        </p>

                    </article>

                </div>

            </section>


<!-- =========================================
     SECONDARY RESEARCH
========================================== -->

<section class="lootrush-section lootrush-secondary-research">

    <h2 class="lootrush-section-title">
        Secondary research
    </h2>


   <!-- DESKTOP VERSION -->
<div class="lootrush-secondary-research-image case-desktop-only">
    <img src="images/sr.png" alt="LootRush secondary research">
</div>


<!-- MOBILE VERSION -->
<div class="case-mobile-only">

    <div class="secondary-research-slider">

        <div class="secondary-slides">


            <!-- =========================================
                 SLIDE 1 — THEMES
            ========================================== -->

            <div class="secondary-slide active">

                <h3 class="secondary-slide-title">Themes</h3>

                <div class="secondary-theme-list">

                    <div class="secondary-theme-item">
                        <span class="secondary-theme-arrow"></span>
                        <p>Information Overload</p>
                    </div>

                    <div class="secondary-theme-item">
                        <span class="secondary-theme-arrow"></span>
                        <p>Product Comparison</p>
                    </div>

                    <div class="secondary-theme-item">
                        <span class="secondary-theme-arrow"></span>
                        <p>Budget Consideration</p>
                    </div>

                    <div class="secondary-theme-item">
                        <span class="secondary-theme-arrow"></span>
                        <p>Technical Knowledge Gap</p>
                    </div>

                </div>

            </div>


            <!-- =========================================
                 SLIDE 2 — EVIDENCE
            ========================================== -->

            <div class="secondary-slide">

                <h3 class="secondary-slide-title">Evidence</h3>

                <div class="secondary-evidence-list">

                    <div class="secondary-evidence-item">
                        <span class="secondary-theme-arrow"></span>

                        <p>
                            Gaming brands promote different specifications and features
                            as their primary selling points, exposing users to inconsistent
                            marketing messages during the purchasing process.
                        </p>
                    </div>

                    <div class="secondary-evidence-item">
                        <span class="secondary-theme-arrow"></span>

                        <p>
                            Many users compare multiple products before making a final
                            decision, often relying on separate browser tabs, reviews,
                            and community recommendations to evaluate differences.
                        </p>
                    </div>

                    <div class="secondary-evidence-item">
                        <span class="secondary-theme-arrow"></span>

                        <p>
                            Many purchasing decisions begin with a predefined budget,
                            with users actively searching for the best products within
                            a specific price range.
                        </p>
                    </div>

                    <div class="secondary-evidence-item">
                        <span class="secondary-theme-arrow"></span>

                        <p>
                            Users frequently seek explanations for technical specifications
                            such as DPI, polling rate, switch types, and response time
                            before making a purchase.
                        </p>
                    </div>

                </div>

            </div>


            <!-- =========================================
                 SLIDE 3 — INSIGHTS
            ========================================== -->

            <div class="secondary-slide">

                <h3 class="secondary-slide-title">Insights</h3>

                <div class="secondary-insights-list">

                    <div class="secondary-insights-item">
                        <span class="secondary-theme-arrow"></span>

                        <p>
                            Users need product information presented in a consistent and
                            understandable way to make confident purchasing decisions.
                        </p>
                    </div>

                    <div class="secondary-insights-item">
                        <span class="secondary-theme-arrow"></span>

                        <p>
                            Comparing gaming peripherals is a time-consuming process due
                            to the lack of a centralized experience that presents product
                            information in a clear and consistent way.
                        </p>
                    </div>

                    <div class="secondary-insights-item">
                        <span class="secondary-theme-arrow"></span>

                        <p>
                            Budget is one of the primary factors influencing purchase
                            decisions, highlighting the need for intuitive filtering and
                            recommendations that align with users' spending limits.
                        </p>
                    </div>

                    <div class="secondary-insights-item">
                        <span class="secondary-theme-arrow"></span>

                        <p>
                            Technical specifications often create uncertainty during the
                            decision-making process, indicating a need for accessible
                            explanations that help users understand how these specifications
                            impact real-world use.
                        </p>
                    </div>

                </div>

            </div>


        </div>


        <!-- =========================================
             SLIDE INDICATORS
        ========================================== -->

        <div class="secondary-slider-dots">

            <button
                class="secondary-slider-dot active"
                data-slide="0"
                type="button">
            </button>

            <button
                class="secondary-slider-dot"
                data-slide="1"
                type="button">
            </button>

            <button
                class="secondary-slider-dot"
                data-slide="2"
                type="button">
            </button>

        </div>

    </div>

</div>

</section>


   


            <!-- =========================================
                 PERSONA
            ========================================== -->

            <section id="case-persona" class="lootrush-section lootrush-persona">

                <h2 class="lootrush-section-title">
                    Persona Development
                </h2>

                <p class="lootrush-section-intro">
                    The research findings were synthesized into a primary persona
                    to guide design decisions throughout the project.
                </p>


                <div class="lootrush-persona-top">

                    <div class="lootrush-persona-image">
                        <img src="images/ps1.png" alt="LootRush project overview">
                    </div>


                    <div class="lootrush-persona-details">

                        <span>Luka Novak</span>
                        <span>Age: 24</span>
                        <span>Occupation: Software Developer</span>
                        <span>Location: Zagreb, Croatia</span>

                    </div>

                </div>


                <div class="lootrush-persona-info">

                    <div class="lootrush-persona-block">

                        <h3>Bio:</h3>

                        <p>
                            Alex enjoys competitive games and regularly upgrades gaming
                            peripherals to improve comfort and performance. Before making
                            a purchase, he spends considerable time comparing products,
                            reading reviews, watching YouTube videos, and browsing
                            community discussions to ensure he s making the right decision.
                            While he understands basic hardware concepts, technical
                            specifications and conflicting recommendations often make
                            the buying process overwhelming.
                        </p>

                    </div>


                    <div class="lootrush-persona-block">

                        <h3>Frustrations:</h3>

                        <ul>
                            <li>Product information is scattered across multiple platforms.</li>
                            <li>Technical specifications are difficult to interpret.</li>
                            <li>Comparing several products is time-consuming.</li>
                            <li>Conflicting opinions make purchase decisions less certain.</li>
                        </ul>

                    </div>


                    <div class="lootrush-persona-block">

                        <h3>Needs:</h3>

                        <ul>
                            <li>A centralized shopping experience.</li>
                            <li>Clear product comparisons.</li>
                            <li>Easy-to-understand specification explanations.</li>
                            <li>Efficient filtering based on budget and preferences.</li>
                        </ul>

                    </div>

                </div>

            </section>



            <!-- =========================================
                 USER JOURNEY MAP
            ========================================== -->

            <section id="case-journey" class="lootrush-section lootrush-journey">

                <h2 class="lootrush-section-title">
                    User Journey Map
                </h2>

                <p class="lootrush-section-intro">
                    The user journey map was created to visualize the purchasing
                    process and identify where users experience the greatest friction
                    before making a buying decision.
                </p>


                <!-- DESKTOP VERSION -->
<div class="lootrush-journey-image case-desktop-only">
    <img src="images/jm.png" alt="LootRush user journey map">
</div>


<!-- MOBILE VERSION -->
<div class="case-mobile-only">

    <div class="journey-slider">

        <div class="journey-slides">


            <!-- DISCOVER -->

            <div class="journey-slide active">

                <h3 class="journey-stage">Discover</h3>

                <div class="journey-info">

                    <div class="journey-block">
                        <h4>Goal:</h4>
                        <p>Find gaming peripheral.</p>
                    </div>

                    <div class="journey-block">
                        <h4>Pain Points:</h4>
                        <p>Too many similar products.</p>
                    </div>

                </div>

            </div>


            <!-- RESEARCH -->

            <div class="journey-slide">

                <h3 class="journey-stage">Research</h3>

                <div class="journey-info">

                    <div class="journey-block">
                        <h4>Goal:</h4>
                        <p>Understand products.</p>
                    </div>

                    <div class="journey-block">
                        <h4>Pain Points:</h4>
                        <p>Technical specifications are difficult to understand.</p>
                    </div>

                </div>

            </div>


            <!-- COMPARE -->

            <div class="journey-slide">

                <h3 class="journey-stage">Compare</h3>

                <div class="journey-info">

                    <div class="journey-block">
                        <h4>Goal:</h4>
                        <p>Evaluate products.</p>
                    </div>

                    <div class="journey-block">
                        <h4>Pain Points:</h4>
                        <p>Information is spread across multiple sources.</p>
                    </div>

                </div>

            </div>


            <!-- DECIDE -->

            <div class="journey-slide">

                <h3 class="journey-stage">Decide</h3>

                <div class="journey-info">

                    <div class="journey-block">
                        <h4>Goal:</h4>
                        <p>Choose the right product.</p>
                    </div>

                    <div class="journey-block">
                        <h4>Pain Points:</h4>
                        <p>Conflicting recommendations.</p>
                    </div>

                </div>

            </div>


            <!-- PURCHASE -->

            <div class="journey-slide">

                <h3 class="journey-stage">Purchase</h3>

                <div class="journey-info">

                    <div class="journey-block">
                        <h4>Goal:</h4>
                        <p>Complete the purchase.</p>
                    </div>

                    <div class="journey-block">
                        <h4>Pain Points:</h4>
                        <p>Lack of confidence.</p>
                    </div>

                </div>

            </div>

        </div>


        <!-- SLIDER DOTS -->

        <div class="journey-slider-dots">
            <button class="journey-slider-dot active" data-slide="0" type="button"></button>
            <button class="journey-slider-dot" data-slide="1" type="button"></button>
            <button class="journey-slider-dot" data-slide="2" type="button"></button>
            <button class="journey-slider-dot" data-slide="3" type="button"></button>
            <button class="journey-slider-dot" data-slide="4" type="button"></button>
        </div>

    </div>

</div>
            </section>



            <!-- =========================================
                 COMPETITIVE AUDIT
            ========================================== -->

            <section id="case-audit" class="lootrush-section lootrush-competitive-audit">

                <h2 class="lootrush-section-title">
                    Competitive Audit
                </h2>


                <p class="lootrush-section-intro">
                    To better understand the current market, I first analyzed the
                    core capabilities offered by existing shopping platforms,
                    identifying which features support the gaming peripheral
                    purchasing experience and where opportunities for improvement exist.
                </p>


               <!-- DESKTOP VERSION -->
<div class="lootrush-audit-image case-desktop-only">
    <img src="images/ca1.png" alt="LootRush competitive audit">
</div>


<!-- MOBILE VERSION -->
<div class="case-mobile-only">

    <div class="audit-slider">

        <div class="audit-slides">


            <!-- AMAZON -->

            <div class="audit-slide active">

                <h3 class="audit-slide-title">Amazon</h3>

                <div class="audit-table">

                    <div class="audit-row">
                        <span>Product<br>Discovery</span>
                        <span class="audit-status filled"></span>
                    </div>

                    <div class="audit-row">
                        <span>Product<br>Comparison</span>
                        <span class="audit-status"></span>
                    </div>

                    <div class="audit-row">
                        <span>Budget<br>Filtering</span>
                        <span class="audit-status filled"></span>
                    </div>

                    <div class="audit-row">
                        <span>Spec<br>Explanations</span>
                        <span class="audit-status"></span>
                    </div>

                    <div class="audit-row">
                        <span>Gaming<br>Experience</span>
                        <span class="audit-status"></span>
                    </div>

                </div>

            </div>


            <!-- RAZER -->

            <div class="audit-slide">

                <h3 class="audit-slide-title">Razer</h3>

                <div class="audit-table">

                    <div class="audit-row">
                        <span>Product<br>Discovery</span>
                        <span class="audit-status filled"></span>
                    </div>

                    <div class="audit-row">
                        <span>Product<br>Comparison</span>
                        <span class="audit-status filled"></span>
                    </div>

                    <div class="audit-row">
                        <span>Budget<br>Filtering</span>
                        <span class="audit-status"></span>
                    </div>

                    <div class="audit-row">
                        <span>Spec<br>Explanations</span>
                        <span class="audit-status"></span>
                    </div>

                    <div class="audit-row">
                        <span>Gaming<br>Experience</span>
                        <span class="audit-status filled"></span>
                    </div>

                </div>

            </div>


            <!-- BEST BUY -->

            <div class="audit-slide">

                <h3 class="audit-slide-title">Best Buy</h3>

                <div class="audit-table">

                    <div class="audit-row">
                        <span>Product<br>Discovery</span>
                        <span class="audit-status filled"></span>
                    </div>

                    <div class="audit-row">
                        <span>Product<br>Comparison</span>
                        <span class="audit-status"></span>
                    </div>

                    <div class="audit-row">
                        <span>Budget<br>Filtering</span>
                        <span class="audit-status filled"></span>
                    </div>

                    <div class="audit-row">
                        <span>Spec<br>Explanations</span>
                        <span class="audit-status"></span>
                    </div>

                    <div class="audit-row">
                        <span>Gaming<br>Experience</span>
                        <span class="audit-status"></span>
                    </div>

                </div>

            </div>


            <!-- LOGITECH -->

            <div class="audit-slide">

                <h3 class="audit-slide-title">Logitech</h3>

                <div class="audit-table">

                    <div class="audit-row">
                        <span>Product<br>Discovery</span>
                        <span class="audit-status filled"></span>
                    </div>

                    <div class="audit-row">
                        <span>Product<br>Comparison</span>
                        <span class="audit-status"></span>
                    </div>

                    <div class="audit-row">
                        <span>Budget<br>Filtering</span>
                        <span class="audit-status filled"></span>
                    </div>

                    <div class="audit-row">
                        <span>Spec<br>Explanations</span>
                        <span class="audit-status"></span>
                    </div>

                    <div class="audit-row">
                        <span>Gaming<br>Experience</span>
                        <span class="audit-status filled"></span>
                    </div>

                </div>

            </div>


            <!-- LOOTRUSH -->

            <div class="audit-slide">

                <h3 class="audit-slide-title">LootRush</h3>

                <div class="audit-table">

                    <div class="audit-row">
                        <span>Product<br>Discovery</span>
                        <span class="audit-status filled"></span>
                    </div>

                    <div class="audit-row">
                        <span>Product<br>Comparison</span>
                        <span class="audit-status filled"></span>
                    </div>

                    <div class="audit-row">
                        <span>Budget<br>Filtering</span>
                        <span class="audit-status filled"></span>
                    </div>

                    <div class="audit-row">
                        <span>Spec<br>Explanations</span>
                        <span class="audit-status filled"></span>
                    </div>

                    <div class="audit-row">
                        <span>Gaming<br>Experience</span>
                        <span class="audit-status filled"></span>
                    </div>

                </div>

            </div>


        </div>


        <div class="audit-slider-dots">

            <button class="audit-slider-dot active" data-slide="0" type="button"></button>
            <button class="audit-slider-dot" data-slide="1" type="button"></button>
            <button class="audit-slider-dot" data-slide="2" type="button"></button>
            <button class="audit-slider-dot" data-slide="3" type="button"></button>
            <button class="audit-slider-dot" data-slide="4" type="button"></button>

        </div>

    </div>

</div>


<p class="lootrush-section-intro">
    To complement the capability analysis, I evaluated the overall
    user experience of each platform, focusing on navigation,
    user flow, content, visual design, and accessibility.
</p>


              <!-- =========================================
     COMPETITIVE AUDIT — EXPERIENCE
========================================== -->
<!-- DESKTOP VERSION -->
<div class="lootrush-audit-image case-desktop-only">
    <img src="images/ca2.png" alt="LootRush competitive audit experience">
</div>


<!-- MOBILE VERSION -->
<div class="case-mobile-only">

    <div class="audit-experience-slider">

        <div class="audit-experience-slides">


            <!-- AMAZON -->

            <div class="audit-experience-slide active">

                <h3 class="audit-experience-title">Amazon</h3>

                <div class="audit-experience-table">

                    <div class="audit-experience-row">
                        <span>Accessibility</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                    <div class="audit-experience-row">
                        <span>User Flow</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                    <div class="audit-experience-row">
                        <span>Navigation</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                    <div class="audit-experience-row">
                        <span>Brand Identity</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                    <div class="audit-experience-row">
                        <span>Content</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                </div>

            </div>


            <!-- RAZER -->

            <div class="audit-experience-slide">

                <h3 class="audit-experience-title">Razer</h3>

                <div class="audit-experience-table">

                    <div class="audit-experience-row">
                        <span>Accessibility</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                    <div class="audit-experience-row">
                        <span>User Flow</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                    <div class="audit-experience-row">
                        <span>Navigation</span>

                        <div class="audit-rating">
                            <span></span>
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                    <div class="audit-experience-row">
                        <span>Brand Identity</span>

                        <div class="audit-rating">
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                    <div class="audit-experience-row">
                        <span>Content</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                </div>

            </div>


            <!-- BEST BUY -->

            <div class="audit-experience-slide">

                <h3 class="audit-experience-title">Best Buy</h3>

                <div class="audit-experience-table">

                    <div class="audit-experience-row">
                        <span>Accessibility</span>

                        <div class="audit-rating">
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                    <div class="audit-experience-row">
                        <span>User Flow</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                    <div class="audit-experience-row">
                        <span>Navigation</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                    <div class="audit-experience-row">
                        <span>Brand Identity</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                    <div class="audit-experience-row">
                        <span>Content</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                </div>

            </div>


            <!-- LOGITECH -->

            <div class="audit-experience-slide">

                <h3 class="audit-experience-title">Logitech</h3>

                <div class="audit-experience-table">

                    <div class="audit-experience-row">
                        <span>Accessibility</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                    <div class="audit-experience-row">
                        <span>User Flow</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                    <div class="audit-experience-row">
                        <span>Navigation</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                    <div class="audit-experience-row">
                        <span>Brand Identity</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                    <div class="audit-experience-row">
                        <span>Content</span>

                        <div class="audit-rating">
                            <span></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                            <span class="filled"></span>
                        </div>
                    </div>

                </div>

            </div>

        </div>


        <!-- 4 DOTS -->

        <div class="audit-experience-dots">
            <button class="audit-experience-dot active" data-slide="0" type="button"></button>
            <button class="audit-experience-dot" data-slide="1" type="button"></button>
            <button class="audit-experience-dot" data-slide="2" type="button"></button>
            <button class="audit-experience-dot" data-slide="3" type="button"></button>
        </div>

    </div>

</div>
            </section>



            <!-- =========================================
                 KEY FINDINGS
            ========================================== -->

            <section class="lootrush-section lootrush-key-findings">

                <h2 class="lootrush-section-title">
                    Key Findings
                </h2>

                <p class="lootrush-section-intro">
                    Research revealed four recurring challenges that shaped
                    the direction of the product.
                </p>


                <div class="lootrush-findings-list">

                    <article class="lootrush-finding">

                        <h3>Difficult Product Comparison:</h3>

                        <p>
                            Users often rely on multiple sources to compare products,
                            making the decision-making process fragmented and time-consuming.
                        </p>

                    </article>


                    <article class="lootrush-finding">

                        <h3>Inconsistent Product Communication:</h3>

                        <p>
                            Brands emphasize different specifications and features,
                            making it difficult to determine which information actually
                            matters when comparing products.
                        </p>

                    </article>


                    <article class="lootrush-finding">

                        <h3>Technical Knowledge Gap:</h3>

                        <p>
                            Technical specifications are not always easy to understand,
                            requiring users to seek additional information before
                            making confident decisions.
                        </p>

                    </article>


                    <article class="lootrush-finding">

                        <h3>Budget-Driven Decisions:</h3>

                        <p>
                            Budget plays a significant role in product selection,
                            with users looking for the best options that meet their
                            needs within a defined price range.
                        </p>

                    </article>

                </div>

            </section>



            <!-- =========================================
                 DESIGN OPPORTUNITIES
            ========================================== -->

            <section class="lootrush-section lootrush-opportunities">

                <h2 class="lootrush-section-title">
                    Design Opportunities
                </h2>


                <div class="lootrush-opportunities-list">

                    <article class="lootrush-opportunity">

                        <h3>Difficult Product Comparison:</h3>

                        <p>
                            Users often rely on multiple sources to compare products,
                            making the decision-making process fragmented and time-consuming.
                        </p>

                    </article>


                    <article class="lootrush-opportunity">

                        <h3>Inconsistent Product Communication:</h3>

                        <p>
                            Present product information in a consistent structure
                            across brands.
                        </p>

                    </article>


                    <article class="lootrush-opportunity">

                        <h3>Technical Knowledge Gap:</h3>

                        <p>
                            Make technical specifications understandable without
                            requiring external research.
                        </p>

                    </article>


                    <article class="lootrush-opportunity">

                        <h3>Budget-Driven Decisions:</h3>

                        <p>
                            Help users discover suitable products based on both
                            their needs and available budget.
                        </p>

                    </article>

                </div>

            </section>



            <!-- =========================================
     USER FLOWS
========================================== -->

<section id="case-user-flows" class="lootrush-section lootrush-user-flows">

    <h2 class="lootrush-section-title">
        User Flows
    </h2>

    <p class="lootrush-section-intro">
        Key user flows were mapped to define how users move through
        LootRush's core shopping experiences.
    </p>


    <div class="user-flow-slider case-mobile-only">

        <div class="user-flow-slides">


<!-- FLOW 1 -->
<div class="user-flow-slide active">

    <h3 class="user-flow-title">
        Product Discovery
    </h3>

    <div class="user-flow-path">

        <div class="user-flow-step">
            Home
        </div>

        <div class="user-flow-arrow">
            <img src="icons/arrow-hover.svg" alt="">
        </div>

        <div class="user-flow-step">
            Product Filtering
        </div>

        <div class="user-flow-arrow">
            <img src="icons/arrow-hover.svg" alt="">
        </div>

        <div class="user-flow-step">
            Product Listing
        </div>

        <div class="user-flow-arrow">
            <img src="icons/arrow-hover.svg" alt="">
        </div>

        <div class="user-flow-step">
            Product Details
        </div>

    </div>

</div>


<!-- FLOW 2 -->
<div class="user-flow-slide">

    <h3 class="user-flow-title">
        Comparison
    </h3>

    <div class="user-flow-path">

        <div class="user-flow-step">
            Home
        </div>

        <div class="user-flow-arrow">
            <img src="icons/arrow-hover.svg" alt="">
        </div>

        <div class="user-flow-step">
            Compare
        </div>

        <div class="user-flow-arrow">
            <img src="icons/arrow-hover.svg" alt="">
        </div>

        <div class="user-flow-step">
            Choose
        </div>

    </div>

</div>


<!-- FLOW 3 -->
<div class="user-flow-slide">

    <h3 class="user-flow-title">
        Purchase
    </h3>

    <div class="user-flow-path">

        <div class="user-flow-step">
            Product Details
        </div>

        <div class="user-flow-arrow">
            <img src="icons/arrow-hover.svg" alt="">
        </div>

        <div class="user-flow-step">
            Add to Cart
        </div>

        <div class="user-flow-arrow">
            <img src="icons/arrow-hover.svg" alt="">
        </div>

        <div class="user-flow-step">
            Cart
        </div>

        <div class="user-flow-arrow">
            <img src="icons/arrow-hover.svg" alt="">
        </div>

        <div class="user-flow-step">
            Checkout
        </div>

        <div class="user-flow-arrow">
            <img src="icons/arrow-hover.svg" alt="">
        </div>

        <div class="user-flow-step">
            Confirmation
        </div>

    </div>

</div>



        <div class="user-flow-dots">

            <button
                class="user-flow-dot active"
                data-slide="0"
                type="button">
            </button>

            <button
                class="user-flow-dot"
                data-slide="1"
                type="button">
            </button>

            <button
                class="user-flow-dot"
                data-slide="2"
                type="button">
            </button>

        </div>

    </div>

</section>



<!-- =========================================
     INFORMATION ARCHITECTURE
========================================== -->

<section class="lootrush-section lootrush-information-architecture">

    <h2 class="lootrush-section-title">
        Information Architecture
    </h2>


    <!-- DESKTOP IA -->
    <div class="lootrush-ia-image case-desktop-only">
        <img src="images/ia.png" alt="LootRush information architecture">
    </div>


    <!-- MOBILE IA -->
    <div class="mobile-ia case-mobile-only">

        <div class="mobile-ia-root">
            Home
        </div>


        <div class="mobile-ia-connector">

            <div class="mobile-ia-line-vertical"></div>

            <div class="mobile-ia-line-horizontal"></div>

            <div class="mobile-ia-branches">
                <span></span>
                <span></span>
            </div>

        </div>


        <div class="mobile-ia-grid">


            <!-- SHOP -->
            <div class="mobile-ia-group">

                <div class="mobile-ia-node">
                    Shop
                </div>

                <div class="mobile-ia-subitems">

                    <span>
                        <img src="icons/arrow-hover.svg" alt="">
                        Monitors
                    </span>

                    <span>
                        <img src="icons/arrow-hover.svg" alt="">
                        Keyboards
                    </span>

                    <span>
                        <img src="icons/arrow-hover.svg" alt="">
                        Headsets
                    </span>

                    <span>
                        <img src="icons/arrow-hover.svg" alt="">
                        Mice
                    </span>

                </div>

            </div>


            <!-- COMPARE -->
            <div class="mobile-ia-group">

                <div class="mobile-ia-node">
                    Compare
                </div>

            </div>
            


            <!-- SAVED -->
            <div class="mobile-ia-group">

                <div class="mobile-ia-node">
                    Saved
                </div>

            </div>


            <!-- CART -->
            <div class="mobile-ia-group">

                <div class="mobile-ia-node">
                    Cart
                </div>

                <div class="mobile-ia-subitems">

                    <span>
                        <img src="icons/arrow-hover.svg" alt="">
                        Checkout
                    </span>

                </div>

            </div>


        </div>

    </div>

</section>



            <!-- =========================================
                 WIREFRAMES
            ========================================== -->

            <section id="case-wireframes" class="lootrush-section lootrush-wireframes">

                <h2 class="lootrush-section-title">
                    Wireframes
                </h2>

                <p class="lootrush-section-intro">
                    With the core structure and user flows defined, I translated
                    the ideas into wireframes to explore layout, information
                    hierarchy, and key interactions before moving into visual design.
                </p>

<!-- DESKTOP VERSION -->
<div class="lootrush-wireframes-image case-desktop-only">
    <img src="images/wf.png" alt="LootRush wireframes">
</div>


<!-- MOBILE VERSION -->
<div class="case-mobile-only">

    <div class="wireframe-slider">

        <div class="wireframe-slides">


            <!-- HOMEPAGE -->

            <div class="wireframe-slide active">

                <h3 class="wireframe-name">Homepage</h3>

                <img src="images/Homepage.png" alt="Homepage wireframe">

            </div>


            <!-- SHOP LIST -->

            <div class="wireframe-slide">

                <h3 class="wireframe-name">Shop List</h3>

                <img src="images/Shoplist.png" alt="Shop list wireframe">

            </div>


            <!-- CART -->

            <div class="wireframe-slide">

                <h3 class="wireframe-name">Cart</h3>

                <img src="images/Cart.png" alt="Cart wireframe">

            </div>


            <!-- COMPARISON -->

            <div class="wireframe-slide">

                <h3 class="wireframe-name">Comparison</h3>

                <img src="images/Comparison.png" alt="Comparison wireframe">

            </div>

        </div>


        <div class="wireframe-slider-dots">

            <button class="wireframe-slider-dot active" data-slide="0" type="button"></button>
            <button class="wireframe-slider-dot" data-slide="1" type="button"></button>
            <button class="wireframe-slider-dot" data-slide="2" type="button"></button>
            <button class="wireframe-slider-dot" data-slide="3" type="button"></button>

        </div>

    </div>

</div>

            </section>



            <!-- =========================================
                 LOW-FI PROTOTYPE
            ========================================== -->

            <section class="lootrush-section lootrush-lowfi">

                <h2 class="lootrush-section-title">
                    Low-Fi Prototype
                </h2>

                <p class="lootrush-section-intro">
                    The wireframes were connected into an interactive low-fidelity
                    prototype, allowing the core user flows and interactions to be
                    evaluated through usability testing.
                </p>


                <div class="lootrush-lowfi-image">
                    <!-- ADD LOW-FI PROTOTYPE HERE -->
                </div>

            </section>



            <!-- =========================================
                 USABILITY TESTING
            ========================================== -->

            <section id="case-testing" class="lootrush-section lootrush-usability-testing">

                <h2 class="lootrush-section-title">
                    Usability Testing
                </h2>

                <p class="lootrush-section-intro">
                    The low-fidelity prototype was tested with three participants
                    to evaluate the core shopping experience, identify usability
                    issues, and validate the proposed user flows.
                </p>


                <div class="lootrush-testing-details">

                    <span>3 Participants</span>
                    <span>Moderated</span>
                    <span>Low-Fi Prototype</span>

                </div>


                <div class="lootrush-testing-tasks">

                    <h3>Tasks</h3>

                    <ol>
                        <li>Find and setup the shopping list</li>
                        <li>Change the shopping filters</li>
                        <li>Compare 2 products</li>
                        <li>Add a product to saved/cart</li>
                        <li>Checkout</li>
                    </ol>

                </div>

            </section>



            <!-- =========================================
                 USABILITY KEY FINDINGS
            ========================================== -->

            <section class="lootrush-section lootrush-usability-findings">

                <h2 class="lootrush-section-title">
                    Key Findings
                </h2>


                <article class="lootrush-test-finding">

                    <h3>Navigation Accessibility</h3>

                    <p>
                        2 of 3 participants looked for an alternative to the
                        hamburger menu when navigating the app.
                    </p>

                    <blockquote>
                        Everything is done by hamburger menu, which makes it
                        a bit harder to navigate.
                    </blockquote>

                    <div class="lootrush-design-response">

                        <span>Design response:</span>

                        <p>
                            Introduced persistent bottom navigation for frequently
                            used destinations while keeping secondary options within
                            the hamburger menu.
                        </p>

                    </div>

                </article>


                <article class="lootrush-test-finding">

                    <h3>Filter Discoverability</h3>

                    <p>
                        3 of 3 participants experienced difficulty locating
                        the filter control.
                    </p>

                    <div class="lootrush-design-response">

                        <span>Design response:</span>

                        <p>
                            Increased the visibility and accessibility of filtering
                            within the product browsing experience.
                        </p>

                    </div>

                </article>


                <article class="lootrush-test-finding">

                    <h3>Save for Later</h3>

                    <p>
                        1 of 3 participants wanted the ability to save products
                        and return to them later.
                    </p>

                    <div class="lootrush-design-response">

                        <span>Design response:</span>

                        <p>
                            Introduced a wishlist for saving and reviewing products.
                        </p>

                    </div>

                </article>

            </section>



            <!-- =========================================
                 DESIGN ITERATIONS
            ========================================== -->

            <section class="lootrush-section lootrush-iterations">

    <h2 class="lootrush-section-title">
        Design Iterations
    </h2>

<!-- DESKTOP VERSION -->
<div class="lootrush-iteration-image case-desktop-only">
    <img src="images/di.png" alt="LootRush design iterations">
</div>


<!-- MOBILE VERSION -->
<div class="case-mobile-only">

    <div class="iteration-showcase">


        <!-- =========================================
             HOMEPAGE
        ========================================== -->

        <div class="iteration-block">

            <h3 class="iteration-name">Homepage</h3>

            <div class="iteration-slider">

                <div class="iteration-slides">

                    <div class="iteration-slide active">
                        <img src="images/Homepage1.png" alt="Homepage iteration one">
                    </div>

                    <div class="iteration-slide">
                        <img src="images/Homepage1.1.png" alt="Homepage iteration two">
                    </div>

                </div>


                <div class="iteration-slider-dots">

                    <button
                        class="iteration-slider-dot active"
                        data-slide="0"
                        type="button">
                    </button>

                    <button
                        class="iteration-slider-dot"
                        data-slide="1"
                        type="button">
                    </button>

                </div>

            </div>

        </div>


        <!-- =========================================
             SHOP LIST
        ========================================== -->

        <div class="iteration-block">

            <h3 class="iteration-name">Shop List</h3>

            <div class="iteration-slider">

                <div class="iteration-slides">

                    <div class="iteration-slide active">
                        <img src="images/Shoplist1.png" alt="Shop list iteration one">
                    </div>

                    <div class="iteration-slide">
                        <img src="images/Shoplist1.1.png" alt="Shop list iteration two">
                    </div>

                </div>


                <div class="iteration-slider-dots">

                    <button
                        class="iteration-slider-dot active"
                        data-slide="0"
                        type="button">
                    </button>

                    <button
                        class="iteration-slider-dot"
                        data-slide="1"
                        type="button">
                    </button>

                </div>

            </div>

        </div>


        <!-- =========================================
             WISHLIST
        ========================================== -->

        <div class="iteration-block">

            <h3 class="iteration-name">Wishlist</h3>

            <div class="iteration-single-image">
                <img src="images/Whishlist.png" alt="Wishlist iteration">
            </div>

        </div>


    </div>

</div>

</section>

            <!-- =========================================
     VISUAL DESIGN
========================================== -->

<section id="case-visual" class="lootrush-section lootrush-visual-design">
    <h2 class="lootrush-section-title">
        Visual Design
    </h2>


    <!-- TYPOGRAPHY -->

    <div class="lootrush-visual-block">

        <h3 class="lootrush-visual-heading">
            Typography
        </h3>

        <p class="lootrush-visual-description">
            Typography is used flexibly throughout the interface,
            combining different sizes and weights to create hierarchy
            while maintaining a bold, gaming-focused visual style.
            Geist is used for app content to ensure clarity and readability,
            while Audiowide is reserved for main headings to reinforce
            the gaming identity.
        </p>

        <!-- DESKTOP TYPOGRAPHY IMAGE -->
<div class="lootrush-visual-image case-desktop-only">
    <img
        src="images/tg.png"
        alt="LootRush typography using Geist and Audiowide"
    >
</div>


<!-- MOBILE TYPOGRAPHY -->
<div class="lootrush-mobile-typography case-mobile-only">

    <div class="mobile-type-group">

        <span class="mobile-type-font-name">
            Geist
        </span>

        <span class="mobile-type-geist-sample">
            Aa
        </span>

        <span class="mobile-type-weight">
            Light
        </span>

    </div>


    <div class="mobile-type-group">

        <span class="mobile-type-font-name mobile-type-audiowide-name">
            Audiowide
        </span>

        <span class="mobile-type-audiowide-sample">
            Aa
        </span>

        <span class="mobile-type-weight">
            Regular
        </span>

    </div>

</div>

    </div>


    <!-- COLOR PALETTE -->

    <div class="lootrush-visual-block">

        <h3 class="lootrush-visual-heading">
            Color Palette
        </h3>

        <p class="lootrush-visual-description">
            The color palette combines dark neutral tones with a vibrant
            orange accent to create a modern, gaming-focused aesthetic.
            High-contrast whites ensure clarity, while muted grays establish
            hierarchy and keep secondary information from competing with
            key content and actions.
        </p>

        <!-- DESKTOP COLOR PALETTE -->
<div class="lootrush-visual-image case-desktop-only">
    <img
        src="images/cp.png"
        alt="LootRush color palette"
    >
</div>


<!-- MOBILE COLOR PALETTE -->
<div class="lootrush-mobile-palette case-mobile-only">

    <div class="mobile-palette-item">
        <span class="mobile-color-circle color-dark"></span>
        <span class="mobile-color-code">#1E1F22</span>
    </div>

    <div class="mobile-palette-item">
        <span class="mobile-color-circle color-gray"></span>
        <span class="mobile-color-code">#9598A3</span>
    </div>

    <div class="mobile-palette-item">
        <span class="mobile-color-circle color-orange"></span>
        <span class="mobile-color-code">#F97316</span>
    </div>

    <div class="mobile-palette-item">
        <span class="mobile-color-circle color-white"></span>
        <span class="mobile-color-code">#FFFFFF</span>
    </div>

    <div class="mobile-palette-item mobile-palette-item-last">
        <span class="mobile-color-circle color-mid-gray"></span>
        <span class="mobile-color-code">#35363B</span>
    </div>

</div>

    </div>


    <!-- CORE COMPONENTS -->

    <div class="lootrush-visual-block">

        <h3 class="lootrush-visual-heading">
            Core Components
        </h3>

        <p class="lootrush-visual-description">
            Core components were designed to maintain consistency across
            the shopping experience while supporting LootRush's gaming-focused
            visual identity. Reusable elements simplify product discovery,
            comparison, filtering, and purchasing throughout the interface.
        </p>

        <!-- DESKTOP CORE COMPONENTS -->
<div class="lootrush-visual-image case-desktop-only">
    <img
        src="images/cc.png"
        alt="LootRush core interface components"
    >
</div>


<!-- MOBILE CORE COMPONENTS -->
<div class="core-components-mobile case-mobile-only">

    <div class="core-components-slider">

        <div class="core-components-slides">

            <div class="core-components-slide active">
                <img src="images/butt.png" alt="Button components">
            </div>

            <div class="core-components-slide">
                <img src="images/spcc.png" alt="Specification components">
            </div>

            <div class="core-components-slide">
                <img src="images/crdd.png" alt="Card components">
            </div>

            <div class="core-components-slide">
                <img src="images/navv.png" alt="Navigation components">
            </div>

            <div class="core-components-slide">
                <img src="images/srcc.png" alt="Search components">
            </div>

        </div>

        <div class="core-components-dots">
            <button class="core-components-dot active" data-slide="0" type="button"></button>
            <button class="core-components-dot" data-slide="1" type="button"></button>
            <button class="core-components-dot" data-slide="2" type="button"></button>
            <button class="core-components-dot" data-slide="3" type="button"></button>
            <button class="core-components-dot" data-slide="4" type="button"></button>
        </div>

    </div>

</div>

    </div>

</section>



         


           <!-- =========================================
     HIGH-FI
========================================== -->

<section id="case-highfi" class="lootrush-section lootrush-highfi">

    <h2 class="lootrush-section-title">
        High-Fi
    </h2>


    <div class="lootrush-highfi-hero">
        <img src="images/hih1.png" alt="LootRush high-fi hero image">
    </div>


    <!-- BUDGET FILTERING -->

    <div class="lootrush-highfi-feature lootrush-highfi-budget">

        <div class="lootrush-highfi-image">
            <img src="images/bf.png" alt="LootRush budget filtering">
        </div>

        <p>
            Budget-based filtering helps users narrow their
            options around both their needs and price range,
            reducing the effort required to find relevant products.
        </p>

    </div>


    <!-- SIDE-BY-SIDE COMPARISON -->

    <div class="lootrush-highfi-feature lootrush-highfi-comparison">

        <p>
            Side-by-side comparison brings key product
            information into one place, making differences
            easier to evaluate before making a decision.
        </p>

        <div class="lootrush-highfi-image">
            <img src="images/cm.png" alt="LootRush side-by-side comparison">
        </div>

    </div>


    <!-- SPEC EXPLANATIONS -->

    <div class="lootrush-highfi-feature lootrush-highfi-specs">

        <div class="lootrush-highfi-image">
            <img src="images/se.png" alt="LootRush specification explanations">
        </div>

        <p>
            Contextual explanations make technical specifications
            easier to understand without requiring users to leave
            the shopping experience for additional research.
        </p>

    </div>

</section>



<!-- =========================================
     FINAL IMAGES
========================================== -->

<section class="lootrush-final-visual">

    <div class="lootrush-final-image">
        <img src="images/fvmm.png" alt="LootRush final visual">
        
    </div>

</section>



<!-- =========================================
     REFLECTION — ALWAYS LAST
========================================== -->

<section id="case-reflection" class="lootrush-section lootrush-reflection">

    <h2 class="lootrush-section-title">
        Reflection
    </h2>


    <div class="lootrush-reflection-text">

        <p>
            This project reinforced the importance of grounding design
            decisions in research and validating them through usability
            testing. Working within recruitment limitations also pushed
            me to adapt my research approach, using secondary research
            to understand recurring user behaviors and challenges before
            validating the experience with usability testing.
        </p>

        <p>
            One notable finding was that users often search across
            multiple retailers to find better prices. Since LootRush
            was designed as a standalone retailer with its own inventory,
            pricing and market competitiveness extend beyond the scope
            of UX and into broader business and operational strategy.
            However, this behavior presents opportunities for future
            research and iterations as the product and business model evolve.
        </p>

        <p>
            Most importantly, the project taught me that not every
            problem discovered through research needs to become a feature.
            Understanding which problems belong within the product
            experience and which depend on wider business decisions is
            equally important when defining a focused solution.
        </p>

    </div>

</section>
    `;

    console.log("LootRush HTML finished");

    initializeCaseNavigation();

    console.log("Navigation initialized");

    animateViewerContent();
}
function showHabitu() {

    viewerContent.innerHTML = `

        <div class="habitu-project">


            <!-- =========================================
                 HERO
            ========================================== -->

            <section id="habitu-top" class="lootrush-hero habitu-hero">

                <div class="lootrush-hero-text">

                    <p class="lootrush-subtitle">
                        Habit tracking app designed to help users build
                        consistent routines, monitor progress, and stay
                        motivated toward long-term goals.
                    </p>

                </div>


                <div class="lootrush-hero-image habitu-hero-image">

                    <img
                        src="images/hero2.png"
                        alt="Habitu habit tracking app"
                    >

                </div>

            </section>



            <!-- =========================================
                 VISUAL DESIGN
            ========================================== -->

            <section id="habitu-visual" class="lootrush-section lootrush-visual-design habitu-visual-design">

                <h2 class="lootrush-section-title">
                    Visual Design
                </h2>


                <!-- TYPOGRAPHY -->

                <div class="lootrush-visual-block">

                    <h3 class="lootrush-visual-heading">
                        Typography
                    </h3>

                    <p class="lootrush-visual-description">
                        Sofia Pro is used for headings and prominent text,
                        giving the interface a clean and approachable character,
                        while Proxima Nova is used throughout the supporting and
                        body content for clarity and readability. Together, they
                        create a modern and balanced visual style that reinforces
                        the app's sense of calmness, simplicity, and focus.
                    </p>

             <!-- DESKTOP TYPOGRAPHY -->
<div class="lootrush-visual-image case-desktop-only">

    <img
        src="images/tg2.png"
        alt="Habitu typography system"
    >

</div>


<!-- MOBILE TYPOGRAPHY -->
<div class="habitu-mobile-typography case-mobile-only">

    <div class="habitu-type-group">
        <span class="habitu-type-font-name">Sofia Pro</span>
        <span class="habitu-type-sofia-sample">Aa</span>
        <span class="habitu-type-weight">Light</span>
    </div>

    <div class="habitu-type-group">
        <span class="habitu-type-font-name">Proxima Nova</span>
        <span class="habitu-type-proxima-sample">Aa</span>
        <span class="habitu-type-weight">Regular</span>
    </div>

</div>

                </div>



                <!-- COLOR PALETTE -->

                <div class="lootrush-visual-block">

                    <h3 class="lootrush-visual-heading">
                        Color Palette
                    </h3>

                    <p class="lootrush-visual-description">
                        The color palette combines dark neutral tones with
                        vibrant turquoise and purple accents to create a modern
                        and engaging visual identity. The darker base keeps the
                        interface focused and structured, while the brighter
                        accent colors highlight progress, interactive elements,
                        and important states. White and gray tones support
                        readability and maintain clear visual hierarchy
                        throughout the interface.
                    </p>

         <!-- DESKTOP COLOR PALETTE -->
<div class="lootrush-visual-image case-desktop-only">

    <img
        src="images/cp2.png"
        alt="Habitu color palette"
    >

</div>


<!-- MOBILE COLOR PALETTE -->
<div class="lootrush-mobile-palette case-mobile-only">

<div class="mobile-palette-item">
    <span class="mobile-color-circle habitu-color-black"></span>
    <span class="mobile-color-code">#1A1A1A</span>
</div>

<div class="mobile-palette-item">
    <span class="mobile-color-circle habitu-color-red"></span>
    <span class="mobile-color-code">#6FFFE9</span>
</div>

<div class="mobile-palette-item">
    <span class="mobile-color-circle habitu-color-dark"></span>
    <span class="mobile-color-code">#9C50E1</span>
</div>

<div class="mobile-palette-item">
    <span class="mobile-color-circle habitu-color-white"></span>
    <span class="mobile-color-code">#FFFFFF</span>
</div>

<div class="mobile-palette-item mobile-palette-item-last">
    <span class="mobile-color-circle habitu-color-card"></span>
    <span class="mobile-color-code">#A1A1A1</span>
</div>

</div>

                </div>

            </section>



<!-- DESKTOP FINAL VISUAL -->
<div class="case-desktop-only">
    <img
        src="images/fm2.png"
        alt="Habitu final interface mockups"
    >
</div>


<!-- MOBILE FINAL VISUAL -->
<div class="habitu-final-mobile case-mobile-only">

    <img src="images/hfm1.png" alt="Habitu final mockup 1">

    <img src="images/hfm2.png" alt="Habitu final mockup 2">

    <img src="images/hfm3.png" alt="Habitu final mockup 3">

    <img src="images/hfm4.png" alt="Habitu final mockup 4">

</div>

            </section>


        </div>

    `;

    initializeHabituNavigation();
    animateViewerContent();

}
function showTropicalBites() {

    viewerContent.innerHTML = `

        <div class="tropical-project">


            <!-- =========================================
                 HERO
            ========================================== -->

            <section id="tropical-top" class="lootrush-hero tropical-hero">

                <div class="lootrush-hero-text">

                    <p class="lootrush-subtitle">
                        Restaurant ordering app designed to help users explore
                        the menu, discover featured dishes and events, and place
                        food orders through a simple and visually engaging
                        mobile experience.
                    </p>

                </div>


                <div class="lootrush-hero-image tropical-hero-image">

                    <img
                        src="images/hero3.png"
                        alt="Tropical Bites restaurant ordering app"
                    >

                </div>

            </section>



            <!-- =========================================
                 VISUAL DESIGN
            ========================================== -->

            <section
                id="tropical-visual"
                class="lootrush-section lootrush-visual-design tropical-visual-design"
            >

                <h2 class="lootrush-section-title">
                    Visual Design
                </h2>


                <!-- TYPOGRAPHY -->

                <div class="lootrush-visual-block">

                    <h3 class="lootrush-visual-heading">
                        Typography
                    </h3>

                    <p class="lootrush-visual-description">
                        Flood Std is used for headings and prominent interface
                        elements, giving the app a distinctive, playful character
                        that reflects the restaurant's relaxed and vibrant identity.
                        Nunito Sans is used throughout body text and supporting
                        information for clarity and readability. Together, the two
                        typefaces create a balance between personality and usability
                        while maintaining a clear visual hierarchy.
                    </p>

            <!-- DESKTOP TYPOGRAPHY -->
<div class="lootrush-visual-image case-desktop-only">

    <img
        src="images/tg3.png"
        alt="Tropical Bites typography system"
    >

</div>


<!-- MOBILE TYPOGRAPHY -->
<div class="tropical-typography-mobile case-mobile-only">

    <div class="tropical-type-specimen">

        <span class="tropical-type-name">
            Nunito Sans
        </span>

        <span class="tropical-nunito-sample">
            Aa
        </span>

        <span class="tropical-type-weight">
            Light
        </span>

    </div>


    <div class="tropical-type-specimen">

        <span class="tropical-type-name">
            Flood Std
        </span>

        <span class="tropical-flood-sample">
            AA
        </span>

        <span class="tropical-type-weight">
            Regular
        </span>

    </div>

</div>

                    </div>

                </div>



                <!-- COLOR PALETTE -->

                <div class="lootrush-visual-block">

                    <h3 class="lootrush-visual-heading">
                        Color Palette
                    </h3>

                    <p class="lootrush-visual-description">
                        The color palette combines warm cream tones with coral red,
                        deep navy, and soft turquoise to create a bright and inviting
                        restaurant experience. The lighter neutral colors provide a
                        warm foundation, while coral is used to emphasize important
                        actions and active states. Navy adds contrast and structure,
                        while turquoise introduces a fresh accent that supports
                        navigation and interactive elements.
                    </p>

                   <!-- DESKTOP COLOR PALETTE -->
<div class="lootrush-visual-image case-desktop-only">

    <img
        src="images/cp3.png"
        alt="Tropical Bites color palette"
    >

</div>


<!-- MOBILE COLOR PALETTE -->
<div class="lootrush-mobile-palette case-mobile-only">

    <div class="mobile-palette-item">
        <span class="mobile-color-circle tropical-color-cream"></span>
        <span class="mobile-color-code">#FFECD1</span>
    </div>

    <div class="mobile-palette-item">
        <span class="mobile-color-circle tropical-color-coral"></span>
        <span class="mobile-color-code">#FF6B6B</span>
    </div>

    <div class="mobile-palette-item">
        <span class="mobile-color-circle tropical-color-light"></span>
        <span class="mobile-color-code">#F9EFE1</span>
    </div>

    <div class="mobile-palette-item">
        <span class="mobile-color-circle tropical-color-navy"></span>
        <span class="mobile-color-code">#1D3557</span>
    </div>

    <div class="mobile-palette-item mobile-palette-item-last">
        <span class="mobile-color-circle tropical-color-turquoise"></span>
        <span class="mobile-color-code">#A8DADC</span>
    </div>

</div>

                    </div>

                </div>

            </section>



<!-- =========================================
     FINAL MOCKUPS
========================================== -->

<section id="tropical-final" class="tropical-final">

    <!-- DESKTOP -->
    <div class="case-desktop-only">
        <img
            src="images/fm3.png"
            alt="Tropical Bites final interface mockups"
        >
    </div>


    <!-- MOBILE -->
    <div class="tropical-final-mobile case-mobile-only">

        <img
            src="images/tbfm1.png"
            alt="Tropical Bites final mockup 1"
        >

        <img
            src="images/tbfm2.png"
            alt="Tropical Bites final mockup 2"
        >

        <img
            src="images/tbfm3.png"
            alt="Tropical Bites final mockup 3"
        >

        <img
            src="images/tbfm4.png"
            alt="Tropical Bites final mockup 4"
        >

    </div>

</section>


        </div>

    `;

    initializeTropicalNavigation();
    animateViewerContent();

}
function showForm() {

    viewerContent.innerHTML = `

        <div class="form-project">


            <!-- =========================================
                 HERO
            ========================================== -->

            <section id="form-top" class="lootrush-hero form-hero">

                <div class="lootrush-hero-text">

                    <p class="lootrush-subtitle">
                        Gym landing page designed to present FORM's training
                        experience, services, and brand identity through a bold,
                        performance-focused visual system that encourages users
                        to explore the gym and take action.
                    </p>

                </div>


                <div class="lootrush-hero-image form-hero-image">

                    <img
                        src="images/herow.png"
                        alt="FORM gym landing page"
                    >

                </div>

            </section>



<!-- =========================================
     VISUAL DESIGN
========================================== -->

<section
    id="form-visual"
    class="lootrush-section lootrush-visual-design form-visual-design"
>

    <h2 class="lootrush-section-title">
        Visual Design
    </h2>


    <!-- TYPOGRAPHY -->

    <div class="lootrush-visual-block">

        <h3 class="lootrush-visual-heading">
            Typography
        </h3>

        <p class="lootrush-visual-description">
            Sora is used for headings and prominent interface elements,
            giving FORM a bold, modern character that reflects the
            brand's focus on strength and performance. Inter is used
            for body text and supporting information, providing clarity
            and readability across different screen sizes. Together,
            the two typefaces create a strong visual hierarchy while
            balancing impact with functionality.
        </p>


        <!-- DESKTOP TYPOGRAPHY -->

        <div class="lootrush-visual-image case-desktop-only">

            <img
                src="images/tgf1.png"
                alt="FORM typography system"
            >

        </div>


        <!-- MOBILE TYPOGRAPHY -->

        <div class="form-mobile-typography case-mobile-only">

            <div class="form-type-group">

                <span class="form-type-font-name">
                    Inter
                </span>

                <span class="form-type-inter-sample">
                    Aa
                </span>

                <span class="form-type-weight">
                    Light
                </span>

            </div>


            <div class="form-type-group">

                <span class="form-type-font-name">
                    Sora
                </span>

                <span class="form-type-sora-sample">
                    Aa
                </span>

                <span class="form-type-weight">
                    Bold
                </span>

            </div>

        </div>

    </div>


                <!-- COLOR PALETTE -->

                <div class="lootrush-visual-block">

                    <h3 class="lootrush-visual-heading">
                        Color Palette
                    </h3>

                    <p class="lootrush-visual-description">
                        The color palette combines deep black and charcoal tones
                        with crisp white and a strong red accent to create a bold,
                        performance-driven identity. The dark neutrals provide a
                        focused foundation and add depth across backgrounds,
                        overlays, and cards, while white ensures strong contrast
                        and readability. Red is used selectively to emphasize key
                        actions, active states, and important visual elements,
                        reinforcing FORM's energetic and performance-focused
                        character.
                    </p>

               <!-- DESKTOP COLOR PALETTE -->
<div class="lootrush-visual-image case-desktop-only">

    <img
        src="images/YOUR-CURRENT-FORM-COLOR-PALETTE-IMAGE.png"
        alt="FORM color palette"
    >

</div>


<!-- MOBILE COLOR PALETTE -->
<div class="lootrush-mobile-palette case-mobile-only">

    <div class="mobile-palette-item">
        <span class="mobile-color-circle form-color-black"></span>
        <span class="mobile-color-code">#0D0D0D</span>
    </div>

    <div class="mobile-palette-item">
        <span class="mobile-color-circle form-color-red"></span>
        <span class="mobile-color-code">#DD1E1E</span>
    </div>

    <div class="mobile-palette-item">
        <span class="mobile-color-circle form-color-dark"></span>
        <span class="mobile-color-code">#121212</span>
    </div>

    <div class="mobile-palette-item">
        <span class="mobile-color-circle form-color-white"></span>
        <span class="mobile-color-code">#FFFFFF</span>
    </div>

    <div class="mobile-palette-item mobile-palette-item-last">
        <span class="mobile-color-circle form-color-card"></span>
        <span class="mobile-color-code">#2F2F2F</span>
    </div>

</div>

                </div>

            </section>



   <!-- =========================================
     FINAL DESIGN
========================================== -->

<section id="form-final" class="form-final">

    <!-- DESKTOP -->
    <div class="case-desktop-only">

        <img
            src="images/fmf1.png"
            alt="FORM final landing page design"
        >

    </div>


    <!-- MOBILE -->
    <div class="form-final-mobile case-mobile-only">

        <img
            src="images/fmf1.png"
            alt="FORM final landing page design"
        >

    </div>

</section>


        </div>

    `;

    initializeFormNavigation();
    animateViewerContent();

}
function initializeFormNavigation() {

    const oldNav = document.querySelector(".case-section-nav");

    if (oldNav) {
        oldNav.remove();
    }


    const caseNav = document.createElement("nav");

    caseNav.classList.add("case-section-nav");

    caseNav.innerHTML = `

        <button class="case-nav-item active" data-target="form-top">
            <span class="case-nav-label">Top</span>
            <span class="case-nav-line"></span>
        </button>

        <button class="case-nav-item" data-target="form-visual">
            <span class="case-nav-label">Visual Design</span>
            <span class="case-nav-line"></span>
        </button>

        <button class="case-nav-item" data-target="form-final">
            <span class="case-nav-label">Final Design</span>
            <span class="case-nav-line"></span>
        </button>

    `;

    projectViewer.appendChild(caseNav);


    const navItems = caseNav.querySelectorAll(".case-nav-item");


    navItems.forEach(function(item) {

        item.addEventListener("click", function() {

            const target =
                document.getElementById(item.dataset.target);

            if (!target) return;

            viewerContent.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });

        });

    });


    function updateActiveSection() {

        let currentSection = null;

        const isAtBottom =
            viewerContent.scrollTop + viewerContent.clientHeight
            >= viewerContent.scrollHeight - 5;


        if (isAtBottom) {

            currentSection =
                document.getElementById("form-final");

        } else {

            navItems.forEach(function(item) {

                const section =
                    document.getElementById(item.dataset.target);

                if (!section) return;

                if (
                    viewerContent.scrollTop >=
                    section.offsetTop - 200
                ) {
                    currentSection = section;
                }

            });

        }


        if (!currentSection) {
            currentSection =
                document.getElementById("form-top");
        }


        navItems.forEach(function(item) {

            item.classList.toggle(
                "active",
                currentSection &&
                item.dataset.target === currentSection.id
            );

        });

    }


    viewerContent.addEventListener(
        "scroll",
        updateActiveSection
    );

    updateActiveSection();

}
function initializeTropicalNavigation() {

    const oldNav = document.querySelector(".case-section-nav");

    if (oldNav) {
        oldNav.remove();
    }


    const caseNav = document.createElement("nav");

    caseNav.classList.add("case-section-nav");

    caseNav.innerHTML = `

        <button class="case-nav-item active" data-target="tropical-top">
            <span class="case-nav-label">Top</span>
            <span class="case-nav-line"></span>
        </button>

        <button class="case-nav-item" data-target="tropical-visual">
            <span class="case-nav-label">Visual Design</span>
            <span class="case-nav-line"></span>
        </button>

        <button class="case-nav-item" data-target="tropical-final">
            <span class="case-nav-label">Final Mockups</span>
            <span class="case-nav-line"></span>
        </button>

    `;

    projectViewer.appendChild(caseNav);


    const navItems = caseNav.querySelectorAll(".case-nav-item");


    navItems.forEach(function(item) {

        item.addEventListener("click", function() {

            const target =
                document.getElementById(item.dataset.target);

            if (!target) return;

            viewerContent.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });

        });

    });


    function updateActiveSection() {

        let currentSection = null;

        const isAtBottom =
            viewerContent.scrollTop + viewerContent.clientHeight
            >= viewerContent.scrollHeight - 5;


        if (isAtBottom) {

            currentSection =
                document.getElementById("tropical-final");

        } else {

            navItems.forEach(function(item) {

                const section =
                    document.getElementById(item.dataset.target);

                if (!section) return;

                if (
                    viewerContent.scrollTop >=
                    section.offsetTop - 200
                ) {
                    currentSection = section;
                }

            });

        }


        if (!currentSection) {
            currentSection =
                document.getElementById("tropical-top");
        }


        navItems.forEach(function(item) {

            item.classList.toggle(
                "active",
                currentSection &&
                item.dataset.target === currentSection.id
            );

        });

    }


    viewerContent.addEventListener(
        "scroll",
        updateActiveSection
    );

    updateActiveSection();

}

function initializeHabituNavigation() {

    const oldNav = document.querySelector(".case-section-nav");

    if (oldNav) {
        oldNav.remove();
    }


    const caseNav = document.createElement("nav");

    caseNav.classList.add("case-section-nav");

    caseNav.innerHTML = `

        <button class="case-nav-item active" data-target="habitu-top">
            <span class="case-nav-label">Top</span>
            <span class="case-nav-line"></span>
        </button>

        <button class="case-nav-item" data-target="habitu-visual">
            <span class="case-nav-label">Visual Design</span>
            <span class="case-nav-line"></span>
        </button>

        <button class="case-nav-item" data-target="habitu-final">
            <span class="case-nav-label">Final Mockups</span>
            <span class="case-nav-line"></span>
        </button>

    `;

    projectViewer.appendChild(caseNav);


    const navItems = caseNav.querySelectorAll(".case-nav-item");


    navItems.forEach(function(item) {

        item.addEventListener("click", function() {

            const target =
                document.getElementById(item.dataset.target);

            if (!target) return;

            viewerContent.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });

        });

    });


    function updateActiveSection() {

        let currentSection = null;

        const isAtBottom =
            viewerContent.scrollTop + viewerContent.clientHeight
            >= viewerContent.scrollHeight - 5;


        // Bottom = Final Mockups
        if (isAtBottom) {

            currentSection =
                document.getElementById("habitu-final");

        } else {

            navItems.forEach(function(item) {

                const section =
                    document.getElementById(item.dataset.target);

                if (!section) return;

                if (
                    viewerContent.scrollTop >=
                    section.offsetTop - 200
                ) {
                    currentSection = section;
                }

            });

        }


        if (!currentSection) {
            currentSection =
                document.getElementById("habitu-top");
        }


        navItems.forEach(function(item) {

            item.classList.toggle(
                "active",
                currentSection &&
                item.dataset.target === currentSection.id
            );

        });

    }


    viewerContent.addEventListener(
        "scroll",
        updateActiveSection
    );

    updateActiveSection();

}

function showProjects() {

    const oldCaseNav = document.querySelector(".case-section-nav");

    if (oldCaseNav) {
        oldCaseNav.remove();
    }


    viewerTitle.textContent = "Projects";

    drawerHandle.style.display = "none";

    projectDrawer.classList.remove("open");
    drawerHandle.classList.remove("open");


    viewerContent.innerHTML = `

        <div class="viewer-project-grid">


            <button class="viewer-project-card" data-project="LootRush">

                <img
                    class="viewer-card-image"
                    src="images/hero.png"
                    alt="LootRush"
                >

                <div class="viewer-card-info">
                    <h3>LootRush</h3>
                    <p>Gaming equipment platform</p>
                </div>

            </button>


            <button class="viewer-project-card" data-project="Habitu">

                <img
                    class="viewer-card-image"
                    src="images/hero2.png"
                    alt="Habitu"
                >

                <div class="viewer-card-info">
                    <h3>Habitu</h3>
                    <p>Habit tracking app</p>
                </div>

            </button>


            <button class="viewer-project-card" data-project="Tropical Bites">

                <img
                    class="viewer-card-image"
                    src="images/hero3.png"
                    alt="Tropical Bites"
                >

                <div class="viewer-card-info">
                    <h3>Tropical Bites</h3>
                    <p>Restaurant ordering app</p>
                </div>

            </button>


            <button class="viewer-project-card" data-project="FORM">

                <img
                    class="viewer-card-image"
                    src="images/herow.png"
                    alt="FORM"
                >

                <div class="viewer-card-info">
                    <h3>FORM</h3>
                    <p>Gym landing page</p>
                </div>

            </button>


        </div>

    `;


    animateViewerContent();


    const projectCards =
        document.querySelectorAll(".viewer-project-card");


    projectCards.forEach(function(card) {

        card.addEventListener("click", function() {

            openProject(card.dataset.project);

        });

    });

}


viewAllProjects.addEventListener("click", function(event) {

    event.preventDefault();

    projectViewer.classList.add("open");
    document.body.style.overflow = "hidden";

    showProjects();

});

function initializeCaseNavigation() {

    // Remove old navigator if one exists
    const oldNav = document.querySelector(".case-section-nav");

    if (oldNav) {
        oldNav.remove();
    }


    // Create navigator
    const caseNav = document.createElement("nav");

    caseNav.classList.add("case-section-nav");

    caseNav.innerHTML = `

    <button class="case-nav-item active" data-target="case-top">
    <span class="case-nav-label">Top</span>
    <span class="case-nav-line"></span>
</button>
        <button class="case-nav-item" data-target="case-overview">
            <span class="case-nav-label">Overview</span>
            <span class="case-nav-line"></span>
        </button>

        <button class="case-nav-item" data-target="case-research">
            <span class="case-nav-label">Research</span>
            <span class="case-nav-line"></span>
        </button>

        <button class="case-nav-item" data-target="case-persona">
            <span class="case-nav-label">Persona</span>
            <span class="case-nav-line"></span>
        </button>

        <button class="case-nav-item" data-target="case-journey">
    <span class="case-nav-label">Journey Map</span>
    <span class="case-nav-line"></span>
</button>

        <button class="case-nav-item" data-target="case-audit">
            <span class="case-nav-label">Competitive Audit</span>
            <span class="case-nav-line"></span>
        </button>

        <button class="case-nav-item" data-target="case-flows">
            <span class="case-nav-label">User Flows</span>
            <span class="case-nav-line"></span>
        </button>

        <button class="case-nav-item" data-target="case-wireframes">
            <span class="case-nav-label">Wireframes</span>
            <span class="case-nav-line"></span>
        </button>

        <button class="case-nav-item" data-target="case-testing">
            <span class="case-nav-label">Usability Testing</span>
            <span class="case-nav-line"></span>
        </button>

        <button class="case-nav-item" data-target="case-visual">
            <span class="case-nav-label">Visual Design</span>
            <span class="case-nav-line"></span>
        </button>

        <button class="case-nav-item" data-target="case-highfi">
            <span class="case-nav-label">High-Fi</span>
            <span class="case-nav-line"></span>
        </button>

        <button class="case-nav-item" data-target="case-reflection">
            <span class="case-nav-label">Reflection</span>
            <span class="case-nav-line"></span>
        </button>
    `;


    // IMPORTANT:
    // Put navigator in the viewer itself,
    // NOT inside viewerContent
    projectViewer.appendChild(caseNav);


    const navItems = caseNav.querySelectorAll(".case-nav-item");


    // Clicking a line
    navItems.forEach(function(item) {

        item.addEventListener("click", function() {

            const target = document.getElementById(item.dataset.target);

            if (!target) return;

            viewerContent.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });

        });

    });


    // Detect current section while scrolling
function updateActiveSection() {

    let currentSection = null;

    const isAtBottom =
        viewerContent.scrollTop + viewerContent.clientHeight
        >= viewerContent.scrollHeight - 5;


    // If we've reached the bottom,
    // always activate the final section
    if (isAtBottom) {

        currentSection = document.getElementById("case-reflection");

    } else {

        navItems.forEach(function(item) {

            const section = document.getElementById(item.dataset.target);

            if (!section) return;

            if (
                viewerContent.scrollTop >=
                section.offsetTop - 200
            ) {
                currentSection = section;
            }

        });

    }


    if (!currentSection) {
        currentSection = document.getElementById("case-top");
    }


    navItems.forEach(function(item) {

        item.classList.toggle(
            "active",
            currentSection &&
            item.dataset.target === currentSection.id
        );

    });

}


    viewerContent.addEventListener("scroll", updateActiveSection);

    updateActiveSection();
}

/* =====================================================
   CONTACT VIEWER
===================================================== */

document.addEventListener("click", function(event) {

    const getInTouchButton =
        event.target.closest(".get-in-touch");


    /* OPEN */

    if (getInTouchButton) {

        event.preventDefault();

        const contactViewer =
            document.querySelector("#contactViewer");

        if (!contactViewer) return;


        contactViewer.classList.remove(
            "closing",
            "sending"
        );

        contactViewer.classList.add("open");

        document.body.style.overflow = "hidden";

    }



    /* CLOSE */

    const contactCloseButton =
        event.target.closest(".contact-close-button");


    if (contactCloseButton) {

        const contactViewer =
            document.querySelector("#contactViewer");

        if (!contactViewer) return;


        closeContactViewer(contactViewer);

    }

});



/* =====================================================
   CONTACT CLOSE ANIMATION
===================================================== */

function closeContactViewer(contactViewer) {

    contactViewer.classList.add("closing");


    setTimeout(function() {

        contactViewer.classList.remove(
            "open",
            "closing",
            "sending"
        );

        document.body.style.overflow = "";

    }, 350);

}



/* =====================================================
   SEND MESSAGE WITH EMAILJS
===================================================== */

const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const contactViewer =
            document.querySelector("#contactViewer");

        const submitButton =
            contactForm.querySelector(".contact-submit-button");


        if (!contactViewer || !submitButton) return;


        /* PREVENT DOUBLE CLICKS */

        submitButton.disabled = true;


        /* SEND EMAIL */

        emailjs.sendForm(
            "service_ib2vc66",
            "template_r1id08n",
            contactForm
        )

.then(function() {

    /* EMAIL SENT — PLAY DISSOLVE ANIMATION */

    contactViewer.classList.add("sending");


    setTimeout(function() {

        contactViewer.classList.remove("open");

        document.body.style.overflow = "";

        contactForm.reset();


        setTimeout(function() {

            contactViewer.classList.remove("sending");
            submitButton.disabled = false;

        }, 50);


        /* SHOW SUCCESS POPUP */

        const successPopup =
            document.querySelector("#messageSuccessPopup");

        if (successPopup) {

            successPopup.classList.add("show");

            setTimeout(function() {

                successPopup.classList.remove("show");

            }, 3500);

        }

    }, 400);

})

        .catch(function(error) {

            /* EMAIL FAILED */

            console.error("EmailJS error:", error);

            submitButton.disabled = false;

            alert("Something went wrong. Please try again.");

        });

    });

}

/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const mobileMenuButton =
    document.querySelector(".mobile-menu-button");

const mobileNavButtons =
    document.querySelector(".nav-buttons");

if (mobileMenuButton && mobileNavButtons) {

    mobileMenuButton.addEventListener("click", function() {

        mobileNavButtons.classList.toggle("open");

        mobileMenuButton.classList.toggle("open");

    });


    mobileNavButtons.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {

            mobileNavButtons.classList.remove("open");

            mobileMenuButton.classList.remove("open");

        });

    });

}

// ...all your existing JS above


document.addEventListener("click", function(event) {

    const dot = event.target.closest(".secondary-slider-dot");

    if (!dot) return;

    const slider = dot.closest(".secondary-research-slider");

    const slides = slider.querySelectorAll(".secondary-slide");
    const dots = slider.querySelectorAll(".secondary-slider-dot");

    const slideIndex = Number(dot.dataset.slide);

    if (!slides[slideIndex]) return;

    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });

    slides[slideIndex].classList.add("active");
    dot.classList.add("active");

});

let secondaryStartX = 0;
let secondaryEndX = 0;
let secondaryDragging = false;


document.addEventListener("pointerdown", function(event) {

    const slider = event.target.closest(".secondary-research-slider");

    if (!slider) return;

    secondaryDragging = true;
    secondaryStartX = event.clientX;
    secondaryEndX = event.clientX;

});


document.addEventListener("pointermove", function(event) {

    if (!secondaryDragging) return;

    secondaryEndX = event.clientX;

});


document.addEventListener("pointerup", function(event) {

    if (!secondaryDragging) return;

    const slider = event.target.closest(".secondary-research-slider");

    secondaryDragging = false;

    if (!slider) return;

    const difference = secondaryStartX - secondaryEndX;

    // Ignore tiny movements / normal clicks
    if (Math.abs(difference) < 50) return;


    const slides = slider.querySelectorAll(".secondary-slide");
    const dots = slider.querySelectorAll(".secondary-slider-dot");

    let currentIndex = 0;

    slides.forEach(function(slide, index) {
        if (slide.classList.contains("active")) {
            currentIndex = index;
        }
    });


    // Drag left → next slide
    if (difference > 0) {
        currentIndex++;
    }

    // Drag right → previous slide
    else {
        currentIndex--;
    }


    // Don't go beyond available slides
    if (currentIndex < 0) {
        currentIndex = 0;
    }

    if (currentIndex > slides.length - 1) {
        currentIndex = slides.length - 1;
    }


    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");

});

document.addEventListener("click", function(event) {

    const dot = event.target.closest(".audit-slider-dot");

    if (!dot) return;

    const slider = dot.closest(".audit-slider");

    const slides = slider.querySelectorAll(".audit-slide");
    const dots = slider.querySelectorAll(".audit-slider-dot");

    const slideIndex = Number(dot.dataset.slide);

    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });

    slides[slideIndex].classList.add("active");
    dot.classList.add("active");

});

let auditStartX = 0;
let auditEndX = 0;
let auditDragging = false;
let activeAuditSlider = null;


document.addEventListener("pointerdown", function(event) {

    const slider = event.target.closest(".audit-slider");

    if (!slider) return;

    auditDragging = true;
    activeAuditSlider = slider;

    auditStartX = event.clientX;
    auditEndX = event.clientX;

});


document.addEventListener("pointermove", function(event) {

    if (!auditDragging) return;

    auditEndX = event.clientX;

});


document.addEventListener("pointerup", function() {

    if (!auditDragging || !activeAuditSlider) return;

    auditDragging = false;

    const difference = auditStartX - auditEndX;

    if (Math.abs(difference) < 50) {
        activeAuditSlider = null;
        return;
    }


    const slides = activeAuditSlider.querySelectorAll(".audit-slide");
    const dots = activeAuditSlider.querySelectorAll(".audit-slider-dot");

    let currentIndex = 0;

    slides.forEach(function(slide, index) {

        if (slide.classList.contains("active")) {
            currentIndex = index;
        }

    });


    if (difference > 0) {
        currentIndex++;
    }
    else {
        currentIndex--;
    }


    if (currentIndex < 0) {
        currentIndex = 0;
    }

    if (currentIndex > slides.length - 1) {
        currentIndex = slides.length - 1;
    }


    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");

    activeAuditSlider = null;

});

// =====================================================
// COMPETITIVE AUDIT — EXPERIENCE SLIDER
// =====================================================

document.addEventListener("click", function(event) {

    const dot = event.target.closest(".audit-experience-dot");

    if (!dot) return;

    const slider = dot.closest(".audit-experience-slider");

    const slides = slider.querySelectorAll(".audit-experience-slide");
    const dots = slider.querySelectorAll(".audit-experience-dot");

    const slideIndex = Number(dot.dataset.slide);


    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    slides[slideIndex].classList.add("active");
    dot.classList.add("active");

});

let experienceStartX = 0;
let experienceEndX = 0;
let experienceDragging = false;
let activeExperienceSlider = null;


document.addEventListener("pointerdown", function(event) {

    const slider = event.target.closest(".audit-experience-slider");

    if (!slider) return;

    experienceDragging = true;
    activeExperienceSlider = slider;

    experienceStartX = event.clientX;
    experienceEndX = event.clientX;

});


document.addEventListener("pointermove", function(event) {

    if (!experienceDragging) return;

    experienceEndX = event.clientX;

});


document.addEventListener("pointerup", function() {

    if (!experienceDragging || !activeExperienceSlider) return;

    experienceDragging = false;

    const difference = experienceStartX - experienceEndX;

    if (Math.abs(difference) < 50) {
        activeExperienceSlider = null;
        return;
    }


    const slides =
        activeExperienceSlider.querySelectorAll(".audit-experience-slide");

    const dots =
        activeExperienceSlider.querySelectorAll(".audit-experience-dot");


    let currentIndex = 0;


    slides.forEach(function(slide, index) {

        if (slide.classList.contains("active")) {
            currentIndex = index;
        }

    });


    if (difference > 0) {
        currentIndex++;
    }
    else {
        currentIndex--;
    }


    if (currentIndex < 0) {
        currentIndex = 0;
    }

    if (currentIndex > slides.length - 1) {
        currentIndex = slides.length - 1;
    }


    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");


    activeExperienceSlider = null;

});
// =====================================================
// USER JOURNEY MAP SLIDER
// =====================================================

document.addEventListener("click", function(event) {

    const dot = event.target.closest(".journey-slider-dot");

    if (!dot) return;

    const slider = dot.closest(".journey-slider");

    const slides = slider.querySelectorAll(".journey-slide");
    const dots = slider.querySelectorAll(".journey-slider-dot");

    const slideIndex = Number(dot.dataset.slide);


    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    slides[slideIndex].classList.add("active");
    dot.classList.add("active");

});

let journeyStartX = 0;
let journeyEndX = 0;
let journeyDragging = false;
let activeJourneySlider = null;


document.addEventListener("pointerdown", function(event) {

    const slider = event.target.closest(".journey-slider");

    if (!slider) return;

    journeyDragging = true;
    activeJourneySlider = slider;

    journeyStartX = event.clientX;
    journeyEndX = event.clientX;

});


document.addEventListener("pointermove", function(event) {

    if (!journeyDragging) return;

    journeyEndX = event.clientX;

});


document.addEventListener("pointerup", function() {

    if (!journeyDragging || !activeJourneySlider) return;

    journeyDragging = false;

    const difference = journeyStartX - journeyEndX;


    if (Math.abs(difference) < 50) {
        activeJourneySlider = null;
        return;
    }


    const slides =
        activeJourneySlider.querySelectorAll(".journey-slide");

    const dots =
        activeJourneySlider.querySelectorAll(".journey-slider-dot");


    let currentIndex = 0;


    slides.forEach(function(slide, index) {

        if (slide.classList.contains("active")) {
            currentIndex = index;
        }

    });


    if (difference > 0) {
        currentIndex++;
    }
    else {
        currentIndex--;
    }


    if (currentIndex < 0) {
        currentIndex = 0;
    }

    if (currentIndex > slides.length - 1) {
        currentIndex = slides.length - 1;
    }


    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");


    activeJourneySlider = null;

});
// =====================================================
// WIREFRAME SLIDER
// =====================================================

document.addEventListener("click", function(event) {

    const dot = event.target.closest(".wireframe-slider-dot");

    if (!dot) return;

    const slider = dot.closest(".wireframe-slider");

    const slides = slider.querySelectorAll(".wireframe-slide");
    const dots = slider.querySelectorAll(".wireframe-slider-dot");

    const slideIndex = Number(dot.dataset.slide);


    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    slides[slideIndex].classList.add("active");
    dot.classList.add("active");

});
let wireframeStartX = 0;
let wireframeEndX = 0;
let wireframeDragging = false;
let activeWireframeSlider = null;


document.addEventListener("pointerdown", function(event) {

    const slider = event.target.closest(".wireframe-slider");

    if (!slider) return;

    wireframeDragging = true;
    activeWireframeSlider = slider;

    wireframeStartX = event.clientX;
    wireframeEndX = event.clientX;

});


document.addEventListener("pointermove", function(event) {

    if (!wireframeDragging) return;

    wireframeEndX = event.clientX;

});


document.addEventListener("pointerup", function() {

    if (!wireframeDragging || !activeWireframeSlider) return;

    wireframeDragging = false;

    const difference = wireframeStartX - wireframeEndX;


    if (Math.abs(difference) < 50) {
        activeWireframeSlider = null;
        return;
    }


    const slides =
        activeWireframeSlider.querySelectorAll(".wireframe-slide");

    const dots =
        activeWireframeSlider.querySelectorAll(".wireframe-slider-dot");


    let currentIndex = 0;


    slides.forEach(function(slide, index) {

        if (slide.classList.contains("active")) {
            currentIndex = index;
        }

    });


    if (difference > 0) {
        currentIndex++;
    }
    else {
        currentIndex--;
    }


    if (currentIndex < 0) {
        currentIndex = 0;
    }

    if (currentIndex > slides.length - 1) {
        currentIndex = slides.length - 1;
    }


    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");


    activeWireframeSlider = null;

});

// =====================================================
// DESIGN ITERATION SLIDERS
// =====================================================

document.addEventListener("click", function(event) {

    const dot = event.target.closest(".iteration-slider-dot");

    if (!dot) return;

    const slider = dot.closest(".iteration-slider");

    const slides = slider.querySelectorAll(".iteration-slide");
    const dots = slider.querySelectorAll(".iteration-slider-dot");

    const slideIndex = Number(dot.dataset.slide);


    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    slides[slideIndex].classList.add("active");
    dot.classList.add("active");

});

let iterationStartX = 0;
let iterationEndX = 0;
let iterationDragging = false;
let activeIterationSlider = null;


document.addEventListener("pointerdown", function(event) {

    const slider = event.target.closest(".iteration-slider");

    if (!slider) return;

    iterationDragging = true;
    activeIterationSlider = slider;

    iterationStartX = event.clientX;
    iterationEndX = event.clientX;

});


document.addEventListener("pointermove", function(event) {

    if (!iterationDragging) return;

    iterationEndX = event.clientX;

});


document.addEventListener("pointerup", function() {

    if (!iterationDragging || !activeIterationSlider) return;

    iterationDragging = false;

    const difference = iterationStartX - iterationEndX;


    if (Math.abs(difference) < 50) {
        activeIterationSlider = null;
        return;
    }


    const slides =
        activeIterationSlider.querySelectorAll(".iteration-slide");

    const dots =
        activeIterationSlider.querySelectorAll(".iteration-slider-dot");


    let currentIndex = 0;


    slides.forEach(function(slide, index) {

        if (slide.classList.contains("active")) {
            currentIndex = index;
        }

    });


    if (difference > 0) {
        currentIndex++;
    }
    else {
        currentIndex--;
    }


    if (currentIndex < 0) {
        currentIndex = 0;
    }

    if (currentIndex > slides.length - 1) {
        currentIndex = slides.length - 1;
    }


    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");


    activeIterationSlider = null;

});
// =====================================================
// CORE COMPONENTS SLIDER
// =====================================================

document.addEventListener("click", function(event) {

    const dot = event.target.closest(".core-components-dot");

    if (!dot) return;

    const slider = dot.closest(".core-components-slider");

    if (!slider) return;

    const slides = slider.querySelectorAll(".core-components-slide");
    const dots = slider.querySelectorAll(".core-components-dot");

    const slideIndex = Number(dot.dataset.slide);


    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");

});

// =====================================================
// CORE COMPONENTS SWIPE
// =====================================================

let coreComponentsStartX = 0;
let coreComponentsEndX = 0;
let activeCoreComponentsSlider = null;


document.addEventListener("touchstart", function(event) {

    const slider = event.target.closest(".core-components-slider");

    if (!slider) return;

    activeCoreComponentsSlider = slider;

    coreComponentsStartX = event.touches[0].clientX;
    coreComponentsEndX = coreComponentsStartX;

}, { passive: true });


document.addEventListener("touchmove", function(event) {

    if (!activeCoreComponentsSlider) return;

    coreComponentsEndX = event.touches[0].clientX;

}, { passive: true });


document.addEventListener("touchend", function() {

    if (!activeCoreComponentsSlider) return;


    const difference =
        coreComponentsStartX - coreComponentsEndX;


    if (Math.abs(difference) < 50) {

        activeCoreComponentsSlider = null;
        return;

    }


    const slides =
        activeCoreComponentsSlider.querySelectorAll(".core-components-slide");

    const dots =
        activeCoreComponentsSlider.querySelectorAll(".core-components-dot");


    let currentIndex = 0;


    slides.forEach(function(slide, index) {

        if (slide.classList.contains("active")) {
            currentIndex = index;
        }

    });


    if (difference > 0) {
        currentIndex++;
    }
    else {
        currentIndex--;
    }


    if (currentIndex < 0) {
        currentIndex = 0;
    }

    if (currentIndex > slides.length - 1) {
        currentIndex = slides.length - 1;
    }


    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");


    activeCoreComponentsSlider = null;

});

// =====================================================
// USER FLOW SLIDER
// =====================================================

document.addEventListener("click", function(event) {

    const dot = event.target.closest(".user-flow-dot");

    if (!dot) return;

    const slider = dot.closest(".user-flow-slider");

    if (!slider) return;

    const slides = slider.querySelectorAll(".user-flow-slide");
    const dots = slider.querySelectorAll(".user-flow-dot");

    const slideIndex = Number(dot.dataset.slide);


    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");

});

let userFlowStartX = 0;
let userFlowEndX = 0;
let activeUserFlowSlider = null;


document.addEventListener("touchstart", function(event) {

    const slider = event.target.closest(".user-flow-slider");

    if (!slider) return;

    activeUserFlowSlider = slider;

    userFlowStartX = event.touches[0].clientX;
    userFlowEndX = userFlowStartX;

}, { passive: true });


document.addEventListener("touchmove", function(event) {

    if (!activeUserFlowSlider) return;

    userFlowEndX = event.touches[0].clientX;

}, { passive: true });


document.addEventListener("touchend", function() {

    if (!activeUserFlowSlider) return;

    const difference =
        userFlowStartX - userFlowEndX;


    if (Math.abs(difference) < 50) {

        activeUserFlowSlider = null;
        return;

    }


    const slides =
        activeUserFlowSlider.querySelectorAll(".user-flow-slide");

    const dots =
        activeUserFlowSlider.querySelectorAll(".user-flow-dot");


    let currentIndex = 0;


    slides.forEach(function(slide, index) {

        if (slide.classList.contains("active")) {
            currentIndex = index;
        }

    });


    if (difference > 0) {
        currentIndex++;
    }
    else {
        currentIndex--;
    }


    if (currentIndex < 0) {
        currentIndex = 0;
    }

    if (currentIndex > slides.length - 1) {
        currentIndex = slides.length - 1;
    }


    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });


    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");


    activeUserFlowSlider = null;

});