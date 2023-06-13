
![Logo](https://cloud.ravendb.net/img/menu-raven.2169de16.png)


## Tutoriel RavenDB + NodeJS

Cette documentation vous permettra d'installer RavenDB sur Linux/Ubuntu et de faire un CRUD en utilisant RavenDB + NodeJS

## Procédure d'installation de RavenDB Linux

#### Etape 1
Rendez-vous sur la page d'installation de RavenDB : https://ravendb.net/download

Séléctionner Linux et Télécharger le fichier en .tar.bz2

#### Etape 2
Ouvrez un terminal et rendez-vous à l'endroit où vous avez installez le fichier (Par défaut il se met dans le dossier `Téléchargements/` )

#### Etape 3

Tapez la commande suivante pour décompresser le fichier

``` sudo tar -xvjf nom_de_archive ```

Remplacer `nom_de_archive` par le nom de votre archive à vous

#### Etape Facultative
Vous pouvez déplacer le fichier décompresser à l'endroit ou vous souhaitez mettre RavenDB

#### Etape 4

Déplacez vous dans le dossier en tapant la commande suivante

``` cd nom_de_archive ```

#### Etape 5

Une fois dans le dossier lancé RavenDB 

``` sudo ./run.sh ```

Pour l'arrêter 

``` sudo ./rc.d stop ```

Attention le serveur va se lancé sur `http://127.0.0.1:8080` par défaut si vous avez déjà le port 80 utilisé, il faudra modifier celui-ci pour faire en sorte qu'il soit accesible ou changer le port du server pendant le setup de RavenDB (`Voir Section : Configuration de RavenDB`)

Si vous avez des souci de droits lors du lancement du serveur il faudra peut-être ajuster les droits avec `chmod` plus d'infos sur [Permissions linux](https://doc.ubuntu-fr.org/permissions)

## Configuration de RavenDB
Si tout s'est bien passé rendez-vous sur `http://127.0.0.1:8080` vous devriez pouvoir accéder au studio de RavenDB

![](https://cdn.thenewstack.io/media/2021/05/97c8f8a8-ravendb1.jpg)

- Cliquez sur `Accept`

- Sur la page suivante séléctionner `New Cluster`

- Choisissez ensuite `Unsecured`

![](https://ravendb.net/RavenFS/GetDocImage?v=5.4&lang=All&key=start/installation/setup-wizard&fileName=setup-wizard-1.png)

- Vous pourrez par la suite configurer le server comme il vous semble pour qu'il puisse marcher 

**/!\ Je vous conseille de laisser les valeurs par défaut sauf si vous savez ce que vous faites**

- Si tout c'est bien passé, je l'espère pour vous, vous devrez pouvoir relancer le serveur une fois toutes ces étapes terminé et vous devriez arriver sur le panel de modification RavenDB comme ci-dessous.

*Si ce n'est pas le cas je vous invite a voir les erreurs que vous avez et de chercher la provenance sur internet.*

![](https://cdn.thenewstack.io/media/2021/05/690910df-ravendb3.jpg)

## Création de la BDD + Import des données

Dans cette section on va créer notre base de donnée contact et l'a remplir avec les données du fichier *contact.csv*

#### Etape 1
Sur votre page d'accueil de RavenDB Studio, cliquez sur `create database`

Taper le nom de la database, moi j'ai mis `contact` mais vous pouvez l'appeler comme vous voulez

#### Etape 2 

Pour importer le fichier *contact.csv*, rendez-vous dans `Tasks -> Import Data` de votre studio RavenDB et selectionné l'onglet `From CSV File`. Laissé les valeurs par défaut ou changer les si vous souhaitez modifier le nom de la collection par exemple

Pour ma part je laisse par défaut et elle prendra le nom de mon fichier

Cliquez sur `Import Collection`

Votre collection devrait donc avoir été importée. Vous pouvez vérifier dans `Document puis cliquez sur la collection Contact (ou le nom que vous avez mis)`

**Bravo ! Vous avez fini d'installer RavenDB et vous avez créer votre première base de donnée !**
## CRUD en RavenDB + NodeJS

A présent on va mettre en place un CRUD a partir de la BDD mise en place dans la section d'avant

Installer NodeJs + npm si vous ne les avez pas sur votre machine

```bash
    sudo apt install nodejs
    sudo apt install npm
```

Vérifier que vous avez bien installé les deux
```bash
    node -v
    npm -v
```

Une fois les dépendances installées, initialisez votre projet 

```bash
    npm init -y
```

Installer par la suite ravendb via npm pour pouvoir l'utiliser dans votre projet
```bash
    npm install ravendb
```

Une fois que vous avez tout installé vous allez pouvoir cloner le repo que je vous met à disposition qui à un CRUD de base avec NodeJS + RavenDB

```bash
    git clone git@github.com:LyesOrd/ravendb-crud.git
    cd nom_du_dossier
```
Vous pourrez voir comment fonctionne RavenDB avec NodeJS

Une fois dans le dossier 
```
    npm install
    node crud.js
```

Le CRUD devrait se lancer sur le port 3000 par défaut, si se port est déjà pris vous pouvez le modifier dans le code du fichier `crud.js`
## Documentation RavenDB Nodejs

[RavenDB](https://ravendb.net/docs/article-page/5.4/nodejs)

