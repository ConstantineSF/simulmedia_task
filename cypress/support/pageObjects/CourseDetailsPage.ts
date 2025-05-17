class CourseDetailsPage {
  checkTitle(courseTitle: string) {
    cy.get(".course-title")
      .should("contain.text", courseTitle)
      .should("have.length", 2);
  }

  checkPublisher(publisherName: string) {
    cy.get(".l-info__bottom .course-publisher").should(
      "contain.text",
      publisherName,
    );
    cy.get(".publisher").should("contain.text", publisherName);
    cy.get(".l-main-pub__read-more").click();
    cy.get("#l-main-pub").should("contain.text", publisherName);
  }

  checkRating() {
    cy.get(".l-card__info-padding .l-rating")
      .should("be.visible")
      .should("not.be.empty");
    cy.get(".l-reviews .l-rating").should("be.visible").should("not.be.empty");
    cy.get(".l-reviews .l-reviews__content")
      .should("be.visible")
      .should("not.be.empty");
  }

  startLearning() {
    cy.get(".l-info a.course_btn").should("be.visible").click();
  }
}

export const courseDetailsPage = new CourseDetailsPage();
