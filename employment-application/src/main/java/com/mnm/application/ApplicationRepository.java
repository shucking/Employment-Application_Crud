package com.mnm.application;

import org.springframework.data.repository.CrudRepository;

public interface ApplicationRepository extends CrudRepository<Application, Integer>{
	// Get, Save, Update, Delete
}
