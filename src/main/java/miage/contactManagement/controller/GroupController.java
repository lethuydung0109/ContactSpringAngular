package miage.contactManagement.controller;

import miage.contactManagement.dao.ContactDAO;
import miage.contactManagement.dao.ContactGroupDAO;
import miage.contactManagement.exception.ResourceNotFoundException;
import miage.contactManagement.model.Contact;
import miage.contactManagement.model.ContactGroup;
import miage.contactManagement.model.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/groups")
public class GroupController {
    @Autowired
    private ContactGroupDAO groupDAO;

    @Autowired
    private ContactDAO contactDAO;

    @GetMapping("/")
    public List<ContactGroup> getAllGroups(){
        return groupDAO.findAll();
    }

    @PostMapping("/")
    public ContactGroup createGroup(@RequestBody ContactGroup group) {
        return groupDAO.save(group);
    }


    @GetMapping("/{id}")
    public ResponseEntity<ContactGroup> getGroupByID(@PathVariable(value = "id") Long groupID)
            throws ResourceNotFoundException {
        ContactGroup group = groupDAO.findById(groupID)
                .orElseThrow(() -> new ResourceNotFoundException("Contact not found for this id :: " + groupID));
        return ResponseEntity.ok().body(group);
    }



    @PutMapping("/{id}")
    public ResponseEntity<ContactGroup> updateGroup(@PathVariable(value = "id") Long groupID,
                                                  @RequestBody ContactGroup groupDetails) throws ResourceNotFoundException {
        ContactGroup group = groupDAO.findById(groupID)
                .orElseThrow(() -> new ResourceNotFoundException("Group not found for this id :: " + groupID));

        group.setGroupName(groupDetails.getGroupName());

        final ContactGroup updatedGroup = groupDAO.save(group);
        return ResponseEntity.ok(updatedGroup);
    }
    @DeleteMapping("/{id}")
    @Transactional
    public Map<String, Boolean> deleteGroup(@PathVariable(value = "id") Long groupID)
            throws ResourceNotFoundException {
        ContactGroup group = groupDAO.findById(groupID)
                .orElseThrow(() -> new ResourceNotFoundException("Group not found for this id :: " + groupID));

        Set<Contact> listContacts = group.getListContacts();
        for(Contact c : listContacts){
            c.getListGroups().remove(group);
            contactDAO.save(c);
        }

//        groupDAO.save(group);
        groupDAO.delete(group);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }



}
