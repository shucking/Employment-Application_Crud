package com.mnm.application;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class ApplicationService {
	@Autowired
	private ApplicationRepository appRepo;
	
	/*
	 * Gets all the applications in the database
	 * @returns List of all the applications
	 */
	public List<Application> getAll(){
		List<Application> appList = new ArrayList<>();
		appRepo.findAll().forEach(appList :: add);
		return appList;
	}
	
	/*
	 * Gets a specific application using a user id
	 * @param int id of the application to retrieve
	 * @returns Application object that has the id
	 */
	public Application getApplication(int id) {
		Optional<Application> optApp = appRepo.findById(id);
		if(optApp.isPresent()) {
			return optApp.get();
		}
		return null;
	}
	
	/*
	 * Saves an application to the database
	 * @param Application application to save to the database
	 */
	public void save(Application application) {
		appRepo.save(application);
	}
	
	/*
	 * Updates a specific application
	 * @param Application application to update in the database
	 */
	public void update(Application application) {
		appRepo.save(application);
	}
	
	
	/*
	 * Deletes a specific application using its id
	 * @param int id of application to delete
	 */
	public void delete(int id) {
		appRepo.deleteById(id);
	}
}
