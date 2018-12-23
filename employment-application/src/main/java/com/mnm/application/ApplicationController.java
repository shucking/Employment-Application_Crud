package com.mnm.application;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "false", maxAge = 3600)
@RestController
//@RequestMapping({"/api"})
public class ApplicationController {
	@Autowired
	private ApplicationService applicationService;
	
	@RequestMapping(value = "/applications", method = RequestMethod.GET)
	public List<Application> getAll(){
		return applicationService.getAll();
	}
	
	@RequestMapping(value = "/applications/{id}", method = RequestMethod.GET)
	public Application getApplication(@PathVariable int id) {
		return applicationService.getApplication(id);
	}
	
	@RequestMapping(value = "/applications/save", method = RequestMethod.POST)
	public void save(@RequestBody Application application) {
		applicationService.save(application);
	}
	
	@RequestMapping(value = "/application/update", method = RequestMethod.PUT)
	public void update(@RequestBody Application application) {
		applicationService.update(application);
	}
	
	@RequestMapping(value = "/applications/delete/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable int id) {
		applicationService.delete(id);
	}
}
