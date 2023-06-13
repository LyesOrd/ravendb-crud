const express = require('express');
const { DocumentStore } = require('ravendb');

const app = express();
app.use(express.json());

// Configuration de la connexion à RavenDB
const store = new DocumentStore('http://localhost:8080', 'contact'); 

store.initialize();

// Modèle de données
class Contact {
  constructor(title, name, address, realAddress, departement, country, tel, email) {
    this.title = title;
    this.name = name;
    this.address = address;
    this.realAddress = realAddress;
    this.departement = departement;
    this.country = country;
    this.tel = tel;
    this.email = email;
  }
}

// Récupérer tous les contacts
app.get('/contacts', async (req, res) => {
  const session = store.openSession();
  const contacts = await session.query({ collection: 'Contact' }).all();
  res.json(contacts);
});

// Récupérer un contact par son ID
app.get('/contacts/:id', async (req, res) => {
  const session = store.openSession();
  const contact = await session.load(req.params.id);
  res.json(contact);
});

// Créer un contact
app.post('/contacts', async (req, res) => {
  const { title, name, address, realAddress, departement, country, tel, email } = req.body;
  const contact = new Contact(title, name, address, realAddress, departement, country, tel, email);
  const session = store.openSession();
  await session.store(contact);
  await session.saveChanges();
  res.sendStatus(201);
});

// Mettre à jour un contact
app.put('/contacts/:id', async (req, res) => {
  const session = store.openSession();
  const contact = await session.load(req.params.id);
  const { title, name, address, realAddress, departement, country, tel, email } = req.body;
  contact.title = title;
  contact.name = name;
  contact.address = address;
  contact.realAddress = realAddress;
  contact.departement = departement;
  contact.country = country;
  contact.tel = tel;
  contact.email = email;
  await session.saveChanges();
  res.sendStatus(200);
});

// Supprimer un contact
app.delete('/contacts/:id', async (req, res) => {
  const session = store.openSession();
  await session.delete(req.params.id);
  await session.saveChanges();
  res.sendStatus(200);
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000.');
});
