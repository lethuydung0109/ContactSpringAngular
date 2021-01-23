package miage.contactManagement.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "address")
public class Address {

    private static final long serialVersionUID = 7945864094546217828L;

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idAddress;
    private String street;
    private String city;
    private String zip;
    private String country;

//    @OneToOne(mappedBy="address")
//    @JsonIgnore
//    private Contact contact;

    public long getIdAddress() {
        return idAddress;
    }

    public void setIdAddress(long idAddress) {
        this.idAddress = idAddress;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
//
//    public Contact getContact() {
//        return contact;
//    }
//
//    public void setContact(Contact contact) {
//        this.contact = contact;
//    }
}
