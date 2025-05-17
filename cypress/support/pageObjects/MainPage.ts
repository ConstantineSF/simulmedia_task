class MainPage {
  searchCourse(courseName: string) {
    cy.get("#autocomplete").type(`${courseName}`);
    cy.get("#search_icon").click();
    cy.get(".card").should("be.visible");
  }
}

export const mainPage = new MainPage();
