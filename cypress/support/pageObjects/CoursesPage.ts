class CoursesPage {
  checkCoursesTitle(courseTitle: string) {
    cy.get(".card__top").should("contain.text", courseTitle);
  }

  checkQuerySearch(courseTitle: string) {
    cy.get(".heading .query-search").should("contain.text", courseTitle);
  }

  checkCertificateFilter(certificate: string) {
    cy.get(".course-type-filter").click();
    cy.get(`#${certificate.toLowerCase()}`).check({ force: true });
    cy.get(".selected-filters.desktop").should("contain.text", certificate);
    cy.get(".card__img").should("contain.text", certificate);
    cy.get(`#${certificate.toLowerCase()}`).uncheck({ force: true });
  }

  checkCourseLevelFilter(level: string) {
    let id = "";
    let dataId = "";
    let filterText = "";

    if (level === "Beginner") {
      id = "level-1";
      dataId = "Beginner Level";
      filterText = "beginner";
    } else if (level === "Intermediate") {
      id = "level-2";
      dataId = "Intermediate Level";
      filterText = "intermediate";
    } else if (level === "Advanced") {
      id = "level-3";
      dataId = "Advanced Level";
      filterText = "advanced";
    } else {
      throw new Error(`Unsupported level: ${level}`);
    }

    cy.get(".course-type-filter").click();
    cy.get(`#${id}`).check({ force: true });
    cy.get(".selected-filters.desktop").should("contain.text", filterText);
    cy.get(".course-level").should("have.attr", "data-id", dataId);
    cy.get(`#${id}`).uncheck({ force: true });
  }

  openCourseMoreInfo(courseName: string) {
    cy.get(`.card__top`).contains(`${courseName}`).click();
  }
}

export const coursesPage = new CoursesPage();
