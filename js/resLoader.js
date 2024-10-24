const resources = [
   { file: 'faq/faq0.html', elementId: 'WhatLanguage' },
   { file: 'faq/faq1.html', elementId: 'WhatToMake' },
   { file: 'faq/faq2.html', elementId: 'StayMotivated' },
   { file: 'faq/faq3.html', elementId: 'WorkWithOthers' },
   { file: 'faq/faq4.html', elementId: 'IHaveThisCodePleaseHelp' },
   { file: 'faq/faq5.html', elementId: 'IWantToLearnXYZ' },
   { file: 'res/background.html', elementId: 'background-ascii' },
   { file: 'res/logo.html', elementId: 'logo' }
];

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
   await Promise.all(resources.map(({ file, elementId }) => {
      console.log(`Loading resource: ${file} into element ID: ${elementId}`);
      return loadResource(file, elementId);
   }));
};

document.addEventListener("DOMContentLoaded", () => {
   loadResources();
});
