package za.co.discovery.assignment.sabnaRazinNizarudeen;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.CrossOrigin;
import za.co.discovery.assignment.sabnaRazinNizarudeen.utility.DataLoader;

import java.io.IOException;
/**
 * Created by Sabna Razin Nizarudeen on 09-Aug-2021.
 */
@SpringBootApplication
@CrossOrigin
public class SabnaRazinNizarudeenApplication {
	@Autowired
	DataLoader dataLoader;

	public static void main(String[] args) {
		SpringApplication.run(SabnaRazinNizarudeenApplication.class, args);
	}

	@EventListener(ApplicationReadyEvent.class)
	public void loadDataFromExcel() throws IOException {
		System.out.println("Excel data loader");
		dataLoader.LoadDataFromExcel();
	}
}
