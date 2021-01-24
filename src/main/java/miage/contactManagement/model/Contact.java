package miage.contactManagement.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "contact")
public class Contact {
    private static final long serialVersionUID = -3284083353340562006L;
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idContact;

    private String firstname;
    private String lastname;
    private String email;

    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="idAddress")
    private Address address;

    @OneToMany(cascade=CascadeType.PERSIST)
    private Set<PhoneNumber> phones;

    @ManyToMany(cascade=CascadeType.PERSIST)
    @JoinTable(name="CTC_GRP", joinColumns=@JoinColumn(name="idContact"), inverseJoinColumns=@JoinColumn(name="idGroup"))
    private Set<ContactGroup> listGroups;


    public long getIdContact() {
        return idContact;
    }

    public void setIdContact(long idContact) {
        this.idContact = idContact;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Set<PhoneNumber> getPhones() {
        return phones;
    }

    public void setPhones(Set<PhoneNumber> phones) {
        this.phones = phones;
    }

    public Set<ContactGroup> getListGroups() {
        return listGroups;
    }

    public void setListGroups(Set<ContactGroup> listGroups) {
        this.listGroups = listGroups;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
