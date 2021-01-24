package miage.contactManagement.dao;

import miage.contactManagement.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactDAO extends JpaRepository<Contact, Long> {
    List<Contact> findContactsByListGroupsIdGroup(Long idGroup);
}
