package miage.contactManagement.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "groupContact")
public class ContactGroup {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idGroup;
    private String groupName;

    @ManyToMany(mappedBy="listGroups")
    private Set<Contact> listContacts = new HashSet<Contact>();

    public int getIdGroup() {
        return idGroup;
    }

    public void setIdGroup(int idGroup) {
        this.idGroup = idGroup;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public Set<Contact> getListContacts() {
        return listContacts;
    }

    public void setListContacts(Set<Contact> listContacts) {
        this.listContacts = listContacts;
    }
}
