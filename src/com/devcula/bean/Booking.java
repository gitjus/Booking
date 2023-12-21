package com.devcula.bean;


public class Booking {
	
	private String userEmailId;
	private Integer bookingId;
	private String bookingDate;
	private String transactionId;
	private String bookingType;
	private Integer noOfPassengers;
	private String journeyDate;
	private String source;
	private String destination;
	private Double fare;
	private String entityId;
	private String entityName;
	private String arrival;
	private String departure;
	private String travelClass;
	private String feedback;
	private Character rated;
	private Character canBeCancelled;
	private Character canBeRated;
	
	
	
	public Character getCanBeRated() {
		return canBeRated;
	}
	public void setCanBeRated(Character canBeRated) {
		this.canBeRated = canBeRated;
	}
	public Character getCanBeCancelled() {
		return canBeCancelled;
	}
	public void setCanBeCancelled(Character canBeCancelled) {
		this.canBeCancelled = canBeCancelled;
	}
	public Character getRated() {
		return rated;
	}
	public void setRated(Character rated) {
		this.rated = rated;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	public String getTravelClass() {
		return travelClass;
	}
	public void setTravelClass(String travelClass) {
		this.travelClass = travelClass;
	}
	public String getArrival() {
		return arrival;
	}
	public void setArrival(String arrival) {
		this.arrival = arrival;
	}
	public String getDeparture() {
		return departure;
	}
	public void setDeparture(String departure) {
		this.departure = departure;
	}
	public String getEntityId() {
		return entityId;
	}
	public void setEntityId(String entityId) {
		this.entityId = entityId;
	}
	public String getEntityName() {
		return entityName;
	}
	public void setEntityName(String entityName) {
		this.entityName = entityName;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public Double getFare() {
		return fare;
	}
	public void setFare(Double fare) {
		this.fare = fare;
	}
	public String getUserEmailId() {
		return userEmailId;
	}
	public void setUserEmailId(String userEmailId) {
		this.userEmailId = userEmailId;
	}
	public Integer getBookingId() {
		return bookingId;
	}
	public void setBookingId(Integer bookingId) {
		this.bookingId = bookingId;
	}
	public String getBookingDate() {
		return bookingDate;
	}
	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}
	public String getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}
	public String getBookingType() {
		return bookingType;
	}
	public void setBookingType(String bookingType) {
		this.bookingType = bookingType;
	}
	public Integer getNoOfPassengers() {
		return noOfPassengers;
	}
	public void setNoOfPassengers(Integer noOfPassengers) {
		this.noOfPassengers = noOfPassengers;
	}
	public String getJourneyDate() {
		return journeyDate;
	}
	public void setJourneyDate(String journeyDate) {
		this.journeyDate = journeyDate;
	}
}
