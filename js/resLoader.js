const loadResource = async (file, elementId) => {
   try {
      const response = await fetch(file);
      if (!response.ok) {
         throw new Error(`Failed to load ${file}: ${response.status}`);
      }
      const html = await response.text();
      document.getElementById(elementId).innerHTML = html;
   } catch (error) {
      console.error(error);
   }
};

const loadResources = async () => {
   const elements = document.querySelectorAll('[data-file]');
   const resources = Array.from(elements).map(el => {
      return { file: el.getAttribute('data-file'), elementId: el.id };
   });

   await Promise.all(resources.map(({ file, elementId }) => loadResource(file, elementId)));
};

document.addEventListener("DOMContentLoaded", () => {
   loadResources();
});
