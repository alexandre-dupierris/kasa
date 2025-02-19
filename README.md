Projet Kasa, pour la formation de web dev chez openclassrooms.

https://docs.google.com/document/d/1b29roKMHV49saJUovKhMPbVrl9N7taUJQxJzm0GVoBM/


# Projet Kasa,

## pour la formation de web dev chez openclassrooms.

# \- Le point d'entrée principale est le fichier main.jsx

	\- on utilise createRoot pour attacher l'application à l'élément du DOM de l'index.html : \<div id="root"\>

	\- le BrowserRouter enveloppe l'élément \<App /\> pour permettre d'utiliser le système de routage de React Router  
	(permet de naviguer entre les différentes pages sans recharger la page)

	\- on importe le main.scss pour charger les styles définis dans ce fichier

	\- on charge le composant racine de l'application \<App /\>, qui contient la structure de l'application, les routes, et les composants globaux.

# \- dans le dossier assets

on trouve les images et photos utilisées pour le projet.

# \- dans le dossier json

on trouve le json des données des logements.

# \- dans le dossier styles

on a tous les fichiers scss permettant la mise en page du site.

	\- le main.scss appelle tous les autres fichiers grâce à @use.

	\- le base.scss définit les bases de l'affichage du site, avec notamment le box-sizing: border-box; et le font-family: "Montserrat" (et l'import du font nécessaire)

	\- le variables.scss prédéfinit les 3 variables correspondantes aux couleurs et au breakpoint pour le responsive.  
	\- on peut constater que grâce au scss, la structure du fichier de mise en forme est semblable aux fichiers de structure du site.

# \- dans le dossier layout

on a les composants construisant les éléments des pages :

## 	\- le fichier App.jsx

est le composant principal de l'application React.

	\- gestion de la navigation avec React Router :  
		il définit les différentes routes de l'application grâce au composant \<Routes\>  
		\- "/" charge le composant \<Home /\> avec les données json en props  
		\- "/about" affiche la page d'A Propos  
		\- "/accomodation/:id" affiche un logement précis avec  
\<Accomodation /\> en utilisant un id dynamique  
		\- "\*" gère les urls inconnues avec la page \<Error /\>

	\- on peut voir la structure générale de l'application :  
		\- header / main / footer  
		\- j'ai ajouté un élément \<ScrollToTop /\>  
pour faire défiler vers le haut au changement de route  
	  
\- enfin, il importe les ressources :  
		\- logement.json contenant les logements  
qu seront passés en props à \<Home /\> et \<Accomodation /\>  
		\- FontAwesome pour les icônes

## 	\- Header et Footer :

	\- rien de particulier pour le footer,  
	\- le header utilise le composant \<Nav /\>  
pour gérer l'affichage de la zone de navigation dans le site

## 	\- ScrollToTop :

	\- permet de remonter en haut de la page au changement de route  
	\-  le hook useEffect() est déclenché à chaque fois que le pathname change (url)  
	\- on a utilisé "instant" afin de charger la page directement en haut,  
pour ne pas avoir un effet de mouvement de page comme avec "smooth"

# \- dans le dossier pages

on a les différentes pages affichables

## 	\- la page \<Home /\> 

	\- appelle \<Banner /\> en lui donnant en props l'image à afficher  
	\- appelle \<Accomodations /\> avec en props la liste json des logements  
	\- le hook useState est utilisé pour stocker en mémoire le json récupéré en props

## 	\- la page \<About /\>

	\- utilise la \<Banner /\> avec en props une autre image  
	\- appelle \<Collapse /\> pour présenter les différents sujets abordés dans l'A Propos

## 	\- la page \<Accomodation /\>

	\- récupère l'id de la page via le hook params  
qui récupère les données dynamiques de l'url  
	\- regarde si un logement correspond à l'id récupérée  
	\- retourne la page Error si la variable accomodation n'est pas défini  
	\- sinon affiche la page correspondant au logement avec pas mal de données  
	\- appelle \<Rating /\> pour l'affichage des étoiles de notation,  
avec en props le json pour pouvoir récupérer la note  
	\- appelle \<Collapse /\> pour afficher les données supplémentaires,  
avec en props le titre, et le texte tiré du json  
	\- on peut relever le map des tags des logements,  
avec la key obligatoire pour éviter des erreurs de React

## 	\- la page \<Error /\>

	\- rien de particulier, un link pour retourner à l'accueil

# \- dans le dossier ui,

on trouve les différents éléments utilisés et utilisables éventuellement plusieurs fois :

## 	\- \<Accommodations /\>

fabrique un article par logement (avec la key obligatoire) dans la page home,  
	avec un Link pour se diriger vers la page du logement.  
	on utilise les données du props pour afficher l'image et le titre correspondant.

## 	\- \<Banner /\> 

affiche l'image en props, et si on est sur la page d'accueil affiche le titre.

## 	\- \<Carousel /\> 

\- utilise le hook useState pour stocker l'image courante.  
	\- définit 2 constantes previewImage et nextImage  
stockant l'image suivante selon où l'on clique.  
\- affiche si et seulement si il y a plus d'une image,  
les flèches et le numéro de l'image.

## 	\- \<Collapse /\> 

\- utilise useState pour définir l'état actif  
ainsi que pour savoir si l'utilisateur a déjà interagit avec les éléments.  
\- si l'utilisateur a interagit seulement, alors une classe est définie  
pour savoir si l'élément est ouvert ou fermé.  
	\- de plus, l'état true or false de active permet de définir une classe  
pour l'affichage de la flèche.

## 	\- \<Nav /\>

selon la page où l'on se trouve (grâce au hook useLocation),  
on définit une classe "active" aux éléments du nav, pour souligner ou pas.

## 	\- \<Rating /\>

\- crée un tableau vide manipulable de 5 éléments  
pour le nombre d'étoiles du logement.  
	\- ajoute une classe à chaque élément tant que l'index est inférieur à la note,  
pour afficher autant d'étoiles en couleur,  
	\- les autres ont une classe pour afficher l'étoile en gris.

