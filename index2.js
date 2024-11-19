

Début
    // Initialiser les variables
    longueur ← 0
    nbMots ← 1 // On commence à 1 car il y a au moins un mot
    nbVoyelles ← 0
    voyelles ← "aeiouAEIOU"

    // Lire la phrase caractère par caractère
    Afficher "Entrez une phrase qui se termine par un point :"
    phrase ← Lire la phrase

    Pour chaque caractère dans phrase FAIRE
        longueur ← longueur + 1 // Incrémenter la longueur

        // Vérifier si le caractère est une voyelle
        Si caractère ∈ voyelles ALORS
            nbVoyelles ← nbVoyelles + 1
        Fin Si

        // Vérifier si le caractère est un espace
        Si caractère = ' ' ALORS
            nbMots ← nbMots + 1
        Fin Si
    Fin Pour

    // Exclure le dernier caractère (le point)
    Si phrase[longueur - 1] = '.' ALORS
        longueur ← longueur - 1
    Fin Si

    // Afficher les résultats
    Afficher "Longueur de la phrase (sans le point) :", longueur
    Afficher "Nombre de mots dans la phrase :", nbMots
    Afficher "Nombre de voyelles dans la phrase :", nbVoyelles
Fin
