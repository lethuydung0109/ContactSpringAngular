package miage.contactManagement.controller;


import miage.contactManagement.dao.ContactDAO;
import miage.contactManagement.exception.ResourceNotFoundException;
import miage.contactManagement.model.Address;
import miage.contactManagement.model.Contact;
import miage.contactManagement.model.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/contacts")
public class ContactController {
    @Autowired
    private ContactDAO contactDAO;

    @GetMapping("/")
    public List<Contact> getAllContacts(){
        return contactDAO.findAll();
    }


    @GetMapping("/{id}")
    public ResponseEntity<Contact> getContactByID(@PathVariable(value = "id") Long contactID)
            throws ResourceNotFoundException {
        Contact contact = contactDAO.findById(contactID)
                .orElseThrow(() -> new ResourceNotFoundException("Contact not found for this id :: " + contactID));
        return ResponseEntity.ok().body(contact);
    }


    @PostMapping("/")
    public Contact createContact(@RequestBody Contact contact) {
        return contactDAO.save(contact);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Contact> updateEmployee(@PathVariable(value = "id") Long contactId,
                                                    @RequestBody Contact contactDetails) throws ResourceNotFoundException {
        Contact contact = contactDAO.findById(contactId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + contactId));

        contact.setEmail(contactDetails.getEmail());
        contact.setLastname(contactDetails.getLastname());
        contact.setFirstname(contactDetails.getFirstname());
        contact.setAddress(contactDetails.getAddress());
        Set<PhoneNumber> phones = contactDetails.getPhones();
        for (PhoneNumber p: phones){
            System.out.println(p.getPhoneKind() + ": " + p.getPhoneNumber() + "\n");
        }
        contact.setPhones(phones);

        final Contact updatedContact = contactDAO.save(contact);
        return ResponseEntity.ok(updatedContact);
    }




    @GetMapping("/group/{id}")
    public List<Contact> getContactByGroupID(@PathVariable(value = "id") Long groupID) {
        List<Contact> contacts = contactDAO.findContactsByListGroupsIdGroup(groupID);
        return contacts;
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
