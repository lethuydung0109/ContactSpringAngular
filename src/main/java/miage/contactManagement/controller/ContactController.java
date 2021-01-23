package miage.contactManagement.controller;


import miage.contactManagement.dao.ContactDAO;
import miage.contactManagement.exception.ResourceNotFoundException;
import miage.contactManagement.model.Address;
import miage.contactManagement.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class ContactController {
    @Autowired
    private ContactDAO contactDAO;

    @GetMapping("/contacts")
    public List<Contact> getAllContacts(){
        return contactDAO.findAll();
    }


    @GetMapping("/contacts/{id}")
    public ResponseEntity<Contact> getContactByID(@PathVariable(value = "id") Long contactID)
            throws ResourceNotFoundException {
        Contact contact = contactDAO.findById(contactID)
                .orElseThrow(() -> new ResourceNotFoundException("Contact not found for this id :: " + contactID));
        return ResponseEntity.ok().body(contact);
    }


    @PostMapping("/contacts")
    public Contact createContact(@RequestBody Contact contact) {
        return contactDAO.save(contact);
    }





    @GetMapping("/contacts/createSample")
    public Contact createSampleContact(){
        Address address = new Address();
        address.setStreet("Maurice Berteaux");
        address.setCity("Houilles");
        address.setZip("78800");
        address.setCountry("Fr");

        Contact contact = new Contact();
        contact.setFirstname("Minh Beo");
        contact.setLastname("Heo Heo");
        contact.setAddress(address);

        return contactDAO.save(contact);

    }

}
