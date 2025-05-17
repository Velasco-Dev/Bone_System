document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('a[data-accordion-target]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetButtonId = this.getAttribute('data-accordion-target');
      const targetButton = document.getElementById(targetButtonId);
      
      if (targetButton) {
        // Cierra todos los acordeones primero
        const allButtons = document.querySelectorAll('.accordion-button:not(.collapsed)');
        allButtons.forEach(btn => {
          if (btn.id !== targetButtonId) {
            const collapseTarget = btn.getAttribute('data-bs-target');
            const collapseElement = document.querySelector(collapseTarget);
            if (collapseElement) {
              // Usa la API de Bootstrap para cerrar
              const collapseInstance = bootstrap.Collapse.getInstance(collapseElement) || 
                                      new bootstrap.Collapse(collapseElement, {toggle: false});
              collapseInstance.hide();
            }
          }
        });
        
        // Abre el acordeón objetivo
        const targetCollapseId = targetButton.getAttribute('data-bs-target');
        const targetCollapse = document.querySelector(targetCollapseId);
        if (targetCollapse) {
          const collapseInstance = bootstrap.Collapse.getInstance(targetCollapse) || 
                                  new bootstrap.Collapse(targetCollapse, {toggle: false});
          collapseInstance.show();
        }
        
        // Scroll suave
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});