describe('Portfolio Website E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  describe('Home Page', () => {
    it('should load the home page successfully', () => {
      cy.contains('Joseph Wachira');
      cy.contains('Full Stack Developer');
    });

    it('should display the hero section with 3D elements', () => {
      cy.get('[data-testid="hero-section"]').should('be.visible');
      cy.get('[data-testid="3d-canvas"]').should('be.visible');
    });

    it('should have working navigation links', () => {
      cy.get('nav').within(() => {
        cy.contains('About').should('be.visible');
        cy.contains('Projects').should('be.visible');
        cy.contains('Skills').should('be.visible');
        cy.contains('Contact').should('be.visible');
      });
    });
  });

  describe('Navigation', () => {
    it('should navigate to About section', () => {
      cy.contains('About').click();
      cy.url().should('include', '/about');
      cy.contains('About Me').should('be.visible');
    });

    it('should navigate to Projects section', () => {
      cy.contains('Projects').click();
      cy.url().should('include', '/projects');
      cy.contains('My Projects').should('be.visible');
    });

    it('should navigate to Skills section', () => {
      cy.contains('Skills').click();
      cy.url().should('include', '/skills');
      cy.contains('Technical Skills').should('be.visible');
    });

    it('should navigate to Contact section', () => {
      cy.contains('Contact').click();
      cy.url().should('include', '/contact');
      cy.contains('Get In Touch').should('be.visible');
    });
  });

  describe('About Section', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/about');
    });

    it('should display personal information', () => {
      cy.contains('About Me').should('be.visible');
      cy.get('[data-testid="profile-image"]').should('be.visible');
    });

    it('should have 3D Earth component', () => {
      cy.get('[data-testid="earth-canvas"]').should('be.visible');
    });
  });

  describe('Projects Section', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/projects');
    });

    it('should display project cards', () => {
      cy.get('[data-testid="project-card"]').should('have.length.greaterThan', 0);
    });

    it('should have project images', () => {
      cy.get('[data-testid="project-card"]').first().within(() => {
        cy.get('img').should('be.visible');
      });
    });

    it('should have project links', () => {
      cy.get('[data-testid="project-card"]').first().within(() => {
        cy.get('a').should('have.attr', 'href');
      });
    });
  });

  describe('Skills Section', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/skills');
    });

    it('should display skills cards', () => {
      cy.get('[data-testid="skills-card"]').should('have.length.greaterThan', 0);
    });

    it('should have 3D ball components for technologies', () => {
      cy.get('[data-testid="tech-ball"]').should('be.visible');
    });
  });

  describe('Contact Section', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/contact');
    });

    it('should display contact form', () => {
      cy.get('form').should('be.visible');
      cy.get('input[name="name"]').should('be.visible');
      cy.get('input[name="email"]').should('be.visible');
      cy.get('textarea[name="message"]').should('be.visible');
    });

    it('should have social media links', () => {
      cy.get('[data-testid="social-links"]').within(() => {
        cy.get('a').should('have.length.greaterThan', 0);
      });
    });
  });

  describe('Footer', () => {
    it('should display footer on all pages', () => {
      cy.visit('http://localhost:5173');
      cy.get('footer').should('be.visible');
      
      cy.visit('http://localhost:5173/about');
      cy.get('footer').should('be.visible');
      
      cy.visit('http://localhost:5173/projects');
      cy.get('footer').should('be.visible');
    });

    it('should have copyright information', () => {
      cy.get('footer').contains('©').should('be.visible');
    });
  });

  describe('Responsive Design', () => {
    it('should be responsive on mobile', () => {
      cy.viewport(375, 667);
      cy.get('nav').should('be.visible');
      cy.contains('Joseph Wachira').should('be.visible');
    });

    it('should be responsive on tablet', () => {
      cy.viewport(768, 1024);
      cy.get('nav').should('be.visible');
      cy.contains('Joseph Wachira').should('be.visible');
    });

    it('should be responsive on desktop', () => {
      cy.viewport(1920, 1080);
      cy.get('nav').should('be.visible');
      cy.contains('Joseph Wachira').should('be.visible');
    });
  });

  describe('Loading States', () => {
    it('should show loader initially', () => {
      cy.visit('http://localhost:5173');
      cy.get('[data-testid="loader"]').should('exist');
    });

    it('should hide loader after content loads', () => {
      cy.visit('http://localhost:5173');
      cy.get('[data-testid="loader"]').should('not.exist');
    });
  });

  describe('3D Canvas Elements', () => {
    it('should render 3D elements without errors', () => {
      cy.visit('http://localhost:5173');
      cy.window().then((win) => {
        expect(win.console.error).to.have.callCount(0);
      });
    });

    it('should have working 3D interactions', () => {
      cy.visit('http://localhost:5173');
      cy.get('[data-testid="3d-canvas"]').trigger('mousemove', { clientX: 100, clientY: 100 });
    });
  });
});
