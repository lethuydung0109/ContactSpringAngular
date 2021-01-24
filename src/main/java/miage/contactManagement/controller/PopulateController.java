package miage.contactManagement.controller;

import miage.contactManagement.dao.ContactDAO;
import miage.contactManagement.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/populate")
public class PopulateController {
//    @Autowired
//    ApplicationContext context ;

    ApplicationContext context  = new ClassPathXmlApplicationContext("beans.xml");

    @Autowired
    ContactDAO contactDAO;

    @GetMapping("/check")
    public Contact populateData(){
        String[] allBeanNames = context.getBeanDefinitionNames();
        for(String beanName : allBeanNames) {
            System.out.println(beanName + "******************");
        }
        Contact contact = (Contact) context.getBean("contact");
        contactDAO.save(contact);
        return contact;
    }
}
