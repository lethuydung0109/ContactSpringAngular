package miage.contactManagement.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "groupContact")
public class ContactGroup {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idGroup;
    private String groupname;

    @ManyToMany(mappedBy="listGroups")
    @JsonIgnore
    private Set<Contact> listContacts = new HashSet<Contact>();

    public Long getIdGroup() {
        return idGroup;
    }

    public void setIdGroup(Long idGroup) {
        this.idGroup = idGroup;
    }

    public String getGroupName() {
        return groupname;
    }

    public void setGroupName(String groupName) {
        this.groupname = groupName;
    }

    public Set<Contact> getListContacts() {
        return listContacts;
    }

    public void setListContacts(Set<Contact> listContacts) {
        this.listContacts = listContacts;
    }
}
