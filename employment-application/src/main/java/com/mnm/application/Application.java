package com.mnm.application;

import javax.persistence.*;

@Entity
@Table(name = "application_details")
public class Application {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "application_id")
	private int id;
	
	@Column(name = "company_name")
	private String companyName;
	
	@Column(name = "position_applied")
	private String position;
	
	@Column(name = "position_type")
	private String positionType;
	
	@Column(name = "status_application")
	private String status;
	
	@Column(name = "furthest_process")
	private String farthestProcess;
	
	@Column(name = "date_applied")
	private String dateApplied;
	
	@Column(name = "date_response")
	private String dateResponse;
	
	@Column(name = "portal_user")
	private String portalUser;
	
	@Column(name = "portal_pass")
	private String portalPass;
	
	@Column(name = "job_board")
	private String sourceApplication;
	
//	public Application() {
//		
//	}
//	
//	public Application(int id) {
//		this.id = id;
//	}
//	
//	public Application(int id, String companyName, String position, String positionType, String status, String farthestProcess, String dateApplied, String dateResponse, String portalUser, String portalPass, String sourceApplication) {
//		this(companyName, position, positionType, status, sourceApplication, dateApplied, dateResponse, portalUser, portalPass, sourceApplication);
//		this.id = id;
//	}
//	
//	public Application(String companyName, String position, String positionType, String status, String farthestProcess, String dateApplied, String dateResponse, String portalUser, String portalPass, String sourceApplication) {
//		this.companyName = companyName;
//		this.position = position;
//		this.positionType = positionType;
//		this.status = status;
//		this.farthestProcess = farthestProcess;
//		this.dateApplied = dateApplied;
//		this.dateResponse = dateResponse;
//		this.portalUser = portalUser;
//		this.portalPass = portalPass;
//		this.sourceApplication = sourceApplication;
//	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getPositionType() {
		return positionType;
	}

	public void setPositionType(String positionType) {
		this.positionType = positionType;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getFarthestProcess() {
		return farthestProcess;
	}

	public void setFarthestProcess(String farthestProcess) {
		this.farthestProcess = farthestProcess;
	}

	public String getDateApplied() {
		return dateApplied;
	}

	public void setDateApplied(String dateApplied) {
		this.dateApplied = dateApplied;
	}

	public String getDateResponse() {
		return dateResponse;
	}

	public void setDateResponse(String dateResponse) {
		this.dateResponse = dateResponse;
	}

	public String getPortalUser() {
		return portalUser;
	}

	public void setPortalUser(String portalUser) {
		this.portalUser = portalUser;
	}

	public String getPortalPass() {
		return portalPass;
	}

	public void setPortalPass(String portalPass) {
		this.portalPass = portalPass;
	}

	public String getSourceApplication() {
		return sourceApplication;
	}

	public void setSourceApplication(String sourceApplication) {
		this.sourceApplication = sourceApplication;
	}
}
