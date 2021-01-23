package miage.contactManagement.dao;

import miage.contactManagement.model.ContactGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactGroupDAO extends JpaRepository<ContactGroup, Long> {
}
