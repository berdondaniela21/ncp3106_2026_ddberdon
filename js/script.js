// Theme toggle (light / dark)
document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (toggle) toggle.textContent = theme === 'light' ? '☀️' : '🌙';
  }

  // Apply saved theme (defaults to your current dark look)
  setTheme(localStorage.getItem('theme') || 'dark');

  if (toggle) {
    toggle.addEventListener('click', () => {
      setTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  // Active link highlighter for Navbar
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(nav => {
        nav.classList.remove('active', 'fw-bold', 'border-bottom', 'border-danger');
        nav.classList.add('text-white-50');
      });
      this.classList.add('active', 'fw-bold', 'border-bottom', 'border-danger');
      this.classList.remove('text-white-50');
    });
  });
});

// Event modal (SCPES Activities & Events)
document.addEventListener('DOMContentLoaded', () => {
  const categoryNames = {
    workshops: 'Workshops & Bootcamps',
    hackathons: 'Hackathons & Quiz Bowls',
    assemblies: 'General Assemblies & Socials',
    outreach: 'Outreach Programs'
  };

  const eventData = {
    workshops: [
      {
        titleImg: 'assets/scpes/ActsAndEvents/1.1.jpg',
        name: '𝗙𝗥𝗢𝗠 𝗜𝗗𝗘𝗔𝗦 𝗧𝗢 𝗜𝗡𝗧𝗘𝗥𝗙𝗔𝗖𝗘𝗦: 𝗔 𝗙𝗜𝗚𝗠𝗔 𝗗𝗘𝗦𝗜𝗚𝗡 𝗪𝗢𝗥𝗞𝗦𝗛𝗢𝗣 💻✨',
        date: 'September 23, 2026',
        caption: `𝗙𝗥𝗢𝗠 𝗜𝗗𝗘𝗔𝗦 𝗧𝗢 𝗜𝗡𝗧𝗘𝗥𝗙𝗔𝗖𝗘𝗦: 𝗔 𝗙𝗜𝗚𝗠𝗔 𝗗𝗘𝗦𝗜𝗚𝗡 𝗪𝗢𝗥𝗞𝗦𝗛𝗢𝗣 💻✨ \n
                  Ready to turn your ideas into creative and engaging designs? Join us later for our Figma Design Workshop and explore how ideas can be transformed into interactive digital interfaces! 🎨💡\n
                  We are excited to have 𝐄𝐧𝐠𝐫. 𝐉𝐨𝐞𝐡𝐦𝐞𝐥 𝐉𝐡𝐨𝐧 𝐂𝐨𝐫𝐚𝐥, one of our faculty members, who will be sharing his knowledge and expertise in Figma and digital design!\n
                  📅 September 23, 2026\n
                  📍 LB 212\n
                  ⏰ 5:00 PM – 6:30 PM\n
                  Design it. Create it. Bring your ideas to life. 🚀\n
                  See you later, CpE Warriors! 👋\n
                  #UEat80 #AllOutCPE #UESCpES #EngineeredForExcellence #FoundationWeek`,
        images: [
          'assets/scpes/ActsAndEvents/1.1.jpg',
          'assets/scpes/ActsAndEvents/1.2.jpg',
        ]
      },
      {
        titleImg: 'assets/scpes/ActsAndEvents/1.3.jpg',
        name: 'Arduino Basics Bootcamp',
        date: 'March 14, 2026',
        caption: 'Add caption here.',
        images: [
          'assets/scpes/ActsAndEvents/1.4.jpg',
        ]
      },
    ],
    hackathons: [
      {
        titleImg: 'assets/scpes/HackAndQB/2.4.jpg',
        name: 'IoT Conference 2025: Packet Hacks 💻✨',
        date: 'September 14, 2025',
        caption: 'IoT Conference 2025 - Day 1 & 2',
        images: [
          'assets/scpes/HackAndQB/2.4.jpg',
          'assets/scpes/HackAndQB/2.5.jpg',
          'assets/scpes/HackAndQB/2.1.jpg',
          'assets/scpes/HackAndQB/2.2.jpg',
          'assets/scpes/HackAndQB/2.3.jpg'
        ]
      }

    ],
    assemblies: [
      {
        titleImg: 'assets/scpes/GA_S/FH.1.jpg',
        name: '𝗙𝗥𝗘𝗦𝗛𝗠𝗔𝗡 𝗛𝗨𝗗𝗗𝗟𝗘 𝗥𝗘𝗖𝗔𝗣 📸✨',
        date: 'September 17, 2026',
        caption: `𝗙𝗥𝗘𝗦𝗛𝗠𝗔𝗡 𝗛𝗨𝗗𝗗𝗟𝗘 𝗥𝗘𝗖𝗔𝗣 📸✨\n
                  A day filled with laughter, games, new friendships, and unforgettable moments! Our CPE Freshies came together to kick off their journey with fun, excitement, and good vibes all around.\n
                  Here’s a look back at some of the moments that made our Freshman Huddle one to remember! 🫶\n
                  Your freshman journey is just getting started, so let’s make it one to remember! 🚀\n
                  📆 September 17, Thursday\n
                  📍 LB 213 \n
                  📸: JCORNITA\n
                  #UEat80 #AllOutCPE #UESCpES #EngineeredForExcellence #FoundationWeek`,
        images: [
          'assets/scpes/GA_S/FH.1.jpg',
          'assets/scpes/GA_S/FH-2.jpg',
          'assets/scpes/GA_S/FH-3.jpg',
          'assets/scpes/GA_S/FH-4.jpg',
          'assets/scpes/GA_S/FH-5.jpg',
          'assets/scpes/GA_S/FH-6.jpg'
        ]
      },
      {
        titleImg: 'assets/scpes/GA_S/GA25.jpg',
        name: 'Into the CpE-Verse: General Assembly 2025 💻✨',
        date: 'September 09, 2025',
        caption: `✨ 𝑅𝑒𝑎𝑑𝑦 𝑡𝑜 𝑒𝑥𝑝𝑙𝑜𝑟𝑒 𝑡ℎ𝑒 𝐶𝑝𝐸-𝑉𝑒𝑟𝑠𝑒? 🚀 \n
                    Tomorrow’s the big day, CpE fam! Our General Assembly 2025 is finally here!
                    A space where we’ll connect, celebrate, and kick off another exciting year together.\n
                    📅 September 9, 2025 | 1:00 PM \n
                    📍 LB 4th Floor Center for Technology & Education \n
                    Dont miss out on the fun, surprises, and the start of this cosmic journey! 🌠 \n
                    #CPENonStop #CpEVerse #CpEGeneralAssembly2025 #EngineeredForExcellence`,
        images: [
          'assets/scpes/GA_S/GA25.jpg',
          'assets/scpes/GA_S/GA-25-1.jpg',
          'assets/scpes/GA_S/GA-25-2.jpg',
          'assets/scpes/GA_S/GA-25-3.jpg',
          'assets/scpes/GA_S/GA-25-4.jpg',
          'assets/scpes/GA_S/GA-25-5.jpg'
        ]
      }
    ],
    outreach: [
      {
        titleImg: 'assets/scpes/events/outreach-1-title.jpg',
        name: 'Outreach Program 2026',
        date: 'TBA',
        caption: 'Add caption here.',
        images: [
          'assets/scpes/events/outreach-1-1.jpg',
          'assets/scpes/events/outreach-1-2.jpg',
          'assets/scpes/events/outreach-1-3.jpg'
        ]
      }
    ]
  };

  const overlay = document.getElementById('eventModalOverlay');
  const closeBtn = document.getElementById('eventModalClose');
  const categoryTitleEl = document.getElementById('eventModalCategoryTitle');
  const scrollEl = document.getElementById('eventModalScroll');

  const lightboxOverlay = document.getElementById('imageLightboxOverlay');
  const lightboxImg = document.getElementById('imageLightboxImg');
  const lightboxClose = document.getElementById('imageLightboxClose');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightboxOverlay.classList.add('active');
  }
  window.openSiteLightbox = openLightbox;

  function closeLightbox() {
    lightboxOverlay.classList.remove('active');
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', (e) => {
      if (e.target === lightboxOverlay) closeLightbox();
    });
  }

  function openEventModal(key) {
    const list = eventData[key];
    if (!list || !overlay) return;

    categoryTitleEl.textContent = categoryNames[key] || key;
    scrollEl.innerHTML = '';

    if (!list.length) {
      scrollEl.innerHTML = '<p class="event-entry-caption">No events posted yet.</p>';
    } else {
      list.forEach(data => {
        const entry = document.createElement('div');
        entry.className = 'event-entry';

        const img = document.createElement('img');
        img.className = 'event-entry-title-img';
        img.src = data.titleImg;
        img.alt = data.name;
        entry.appendChild(img);

        const h3 = document.createElement('h3');
        h3.textContent = data.name;
        entry.appendChild(h3);

        const dateP = document.createElement('p');
        dateP.className = 'event-entry-date';
        dateP.textContent = data.date;
        entry.appendChild(dateP);

        const captionP = document.createElement('p');
        captionP.className = 'event-entry-caption';
        captionP.textContent = data.caption;
        entry.appendChild(captionP);

        const gallery = document.createElement('div');
        gallery.className = 'event-entry-gallery';
        data.images.forEach(src => {
          const galImg = document.createElement('img');
          galImg.src = src;
          galImg.alt = data.name;
          galImg.addEventListener('click', () => openLightbox(src, data.name));
          gallery.appendChild(galImg);
        });
        entry.appendChild(gallery);

        scrollEl.appendChild(entry);
      });
    }

    overlay.classList.add('active');
  }

  function closeEventModal() {
    overlay.classList.remove('active');
  }

  document.querySelectorAll('.pillar-card').forEach(card => {
    card.addEventListener('click', () => openEventModal(card.dataset.event));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openEventModal(card.dataset.event);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeEventModal);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeEventModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightboxOverlay && lightboxOverlay.classList.contains('active')) {
        closeLightbox();
      } else if (overlay) {
        closeEventModal();
      }
    }
  });
});

// Project modal (Student Projects page)
document.addEventListener('DOMContentLoaded', () => {
  const projectOverlay = document.getElementById('projectModalOverlay');
  if (!projectOverlay) return;

  const projectCategoryNames = {
    embedded: 'Embedded Systems',
    iot: 'IoT Applications',
    robotics: 'Robotics',
    software: 'Software Systems',
    ml: 'Machine Learning Projects',
    design: 'Design Projects',
    research: 'Research Projects'
  };

  const projectData = {
    embedded: [
      {
        titleImg: 'assets/projects/embedded-1-title.jpg',
        title: 'Smart Irrigation Controller',
        date: 'March 2026',
        caption: 'Add caption here.',
        images: [
          'assets/scpes/meet-the-exec.jpg',
        ]
      }
    ],
    iot: [],
    robotics: [],
    software: [],
    ml: [],
    design: [],
    research: []
  };

  const closeBtn = document.getElementById('projectModalClose');
  const categoryTitleEl = document.getElementById('projectModalCategoryTitle');
  const scrollEl = document.getElementById('projectModalScroll');

  function openProjectModal(key) {
    const list = projectData[key];
    if (!list) return;

    categoryTitleEl.textContent = projectCategoryNames[key] || key;
    scrollEl.innerHTML = '';

    if (!list.length) {
      scrollEl.innerHTML = '<p class="event-entry-caption">No projects posted yet.</p>';
    } else {
      list.forEach(data => {
        const entry = document.createElement('div');
        entry.className = 'event-entry';

        const img = document.createElement('img');
        img.className = 'event-entry-title-img';
        img.src = data.titleImg;
        img.alt = data.title;
        entry.appendChild(img);

        const h3 = document.createElement('h3');
        h3.textContent = data.title;
        entry.appendChild(h3);

        const dateP = document.createElement('p');
        dateP.className = 'event-entry-date';
        dateP.textContent = data.date;
        entry.appendChild(dateP);

        const captionP = document.createElement('p');
        captionP.className = 'event-entry-caption';
        captionP.textContent = data.caption;
        entry.appendChild(captionP);

        const gallery = document.createElement('div');
        gallery.className = 'event-entry-gallery';
        data.images.forEach(src => {
          const galImg = document.createElement('img');
          galImg.src = src;
          galImg.alt = data.title;
          galImg.addEventListener('click', () => {
            if (window.openSiteLightbox) window.openSiteLightbox(src, data.title);
          });
          gallery.appendChild(galImg);
        });
        entry.appendChild(gallery);

        scrollEl.appendChild(entry);
      });
    }

    projectOverlay.classList.add('active');
  }

  function closeProjectModal() {
    projectOverlay.classList.remove('active');
  }

  document.querySelectorAll('.explore-card[data-project]').forEach(card => {
    card.addEventListener('click', () => openProjectModal(card.dataset.project));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProjectModal(card.dataset.project);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  projectOverlay.addEventListener('click', (e) => {
    if (e.target === projectOverlay) closeProjectModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectOverlay.classList.contains('active')) {
      closeProjectModal();
    }
  });
});