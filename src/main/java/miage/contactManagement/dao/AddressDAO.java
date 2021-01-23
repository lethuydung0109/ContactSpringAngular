package miage.contactManagement.dao;

import miage.contactManagement.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressDAO extends JpaRepository<Address, Long> {
}
