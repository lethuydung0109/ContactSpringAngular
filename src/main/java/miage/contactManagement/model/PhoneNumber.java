package miage.contactManagement.model;


import javax.persistence.*;

@Entity
@Table(name = "phoneNumber")
public class PhoneNumber {

    private static final long serialVersionUID = -8520103161509944193L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idPhone;

    private String phoneKind;

    private String phoneNumber;

//    @ManyToOne
//	@JoinColumn(name="idContact")
//	private Contact contact;

    public long getIdPhone() {
        return idPhone;
    }

    public void setIdPhone(long idPhone) {
        this.idPhone = idPhone;
    }

    public String getPhoneKind() {
        return phoneKind;
    }

    public void setPhoneKind(String phoneKind) {
        this.phoneKind = phoneKind;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
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
