import { addNewContact, getContact, getContacts, updateContact, deleteConact } from "../controllers/crmController.js";

const routes = (app) => {
    app.route('/contact')
    .get(getContacts)
    .post(addNewContact);

    app.route('/contact/:contactID')
        .put(updateContact)
        .get(getContact)
        .delete(deleteConact);
}

export default routes;