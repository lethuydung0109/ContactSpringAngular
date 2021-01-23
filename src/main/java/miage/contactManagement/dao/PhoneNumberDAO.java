package miage.contactManagement.dao;

import miage.contactManagement.model.PhoneNumber;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhoneNumberDAO extends JpaRepository<PhoneNumber, Long> {
}
