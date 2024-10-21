// Écouter l'événement de création d'un nouvel onglet
chrome.tabs.onCreated.addListener(function(tab) {
    console.log("Un nouvel onglet a été créé :", tab);

    // Injecter le code dans la page pour ouvrir et fermer la barre latérale
    chrome.tabs.executeScript(tab.id, {
        code: `
            (function() {
                // Sélectionner l'élément de la barre latérale par son ID
                var navigatorToolbox = document.getElementById('navigator-toolbox');

                // Vérifier si l'élément a été trouvé
                if (navigatorToolbox) {
                    console.log('navigator-toolbox trouvé');

                    // Ouvrir la barre latérale en ajoutant l'attribut 'zen-has-hover'
                    navigatorToolbox.setAttribute('zen-has-hover', 'true');

                    // Attendre 500 ms avant de refermer la barre latérale
                    setTimeout(function() {
                        navigatorToolbox.removeAttribute('zen-has-hover');
                    }, 500);
                } else {
                    console.log('navigator-toolbox introuvable');
                }
            })();
        `
    });
});
