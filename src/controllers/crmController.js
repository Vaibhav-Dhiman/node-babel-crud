import mongoose from 'mongoose';
import { contactSchema } from '../models/crmModels.js';

const Contact = mongoose.model('contact', contactSchema);

export async function addNewContact(req,res) {
    let newContact = new Contact(req.body);
    await newContact.save();
    res.json(newContact);
}

export async function getContacts(req,res) {
    let contacts = await Contact.find({});
    res.json(contacts);
}

export async function getContact(req, res) {
    let contact = await Contact.findById({_id: req.params.contactID});
    res.json(contact);
}

export async function updateContact(req, res) {
    // {new: true} means that it will return the new updated object and false will return old object
    // which is before saving it to the database
    let contact = await Contact.findOneAndUpdate({_id: req.params.contactID}, req.body, {new: true, useFindAndModify: false});
    res.json(contact);
}

export async function deleteConact(req, res) {
    let contac = await Contact.findByIdAndRemove({_id: req.params.contactID},{useFindAndModify: false} );
    res.json('Removed');
}
