package miage.contactManagement.controller;

import miage.contactManagement.dao.ContactGroupDAO;
import miage.contactManagement.exception.ResourceNotFoundException;
import miage.contactManagement.model.Contact;
import miage.contactManagement.model.ContactGroup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/groups")
public class GroupController {
    @Autowired
    private ContactGroupDAO groupDAO;

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




}
