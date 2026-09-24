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
        titleImg: 'assets/scpes/events/hackathons-1-title.jpg',
        name: 'CpE Hackathon 2026',
        date: 'TBA',
        caption: 'Add caption here.',
        images: [
          'assets/scpes/events/hackathons-1-1.jpg',
          'assets/scpes/events/hackathons-1-2.jpg',
          'assets/scpes/events/hackathons-1-3.jpg'
        ]
      }
    ],
    assemblies: [
      {
        titleImg: 'assets/scpes/events/assemblies-1-title.jpg',
        name: 'General Assembly Sem 1',
        date: 'TBA',
        caption: 'Add caption here.',
        images: [
          'assets/scpes/events/assemblies-1-1.jpg',
          'assets/scpes/events/assemblies-1-2.jpg',
          'assets/scpes/events/assemblies-1-3.jpg'
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