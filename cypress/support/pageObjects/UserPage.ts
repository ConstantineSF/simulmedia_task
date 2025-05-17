class UserPage {
  logIn() {
    cy.visit("/login");
    cy.get('#login input[name="email"]').type(`${Cypress.env("login")}`);
    cy.get('#login input[name="password"]').type(`${Cypress.env("password")}`);
    cy.get('#login input[value="Log In"]').click();
  }

  logOut() {
    cy.visit("/logout");
  }

  checkCourseTitleLearning(courseTitle: string) {
    cy.contains("span", `${courseTitle}`).should("be.visible");
  }

  openDashboard() {
    cy.visit("/dashboard");
  }

  checkCourseTitleDashboard(courseTitle: string) {
    userPage.openDashboard();
    cy.get(".course-info .course-title").should("contain.text", courseTitle);
  }

  unenrollCourse() {
    cy.contains("Other Courses In Progress").click({ force: true });
    cy.contains("Unenroll").click({ force: true });
    cy.get(".mdc-dialog__container").contains("Yes").click({ force: true });
    cy.reload();
    cy.get(".course-info .course-title").should("not.exist");
  }

  waitModulesLoad() {
    cy.get(".module-content").should("be.visible");
    cy.get(".noti-island__xp").should("be.visible");
    cy.get(".noti-island__inner").invoke("hide"); //Hide growing amount of learning people
  }
}

export const userPage = new UserPage();
