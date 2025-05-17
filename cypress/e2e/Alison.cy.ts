import { mainPage } from "../support/pageObjects/MainPage";
import { coursesPage } from "../support/pageObjects/CoursesPage";
import { courseDetailsPage } from "../support/pageObjects/CourseDetailsPage";
import { userPage } from "../support/pageObjects/UserPage";

describe("Alison spec", () => {
  const courseSearchValue = "Javascript";
  const courseName = "JavaScript Application Programming";
  const publisherName = "Channel 9";

  it("Course Search & Filtering", () => {
    cy.visit("/");
    mainPage.searchCourse(`${courseSearchValue}`);

    coursesPage.checkCoursesTitle(`${courseSearchValue}`);
    coursesPage.checkQuerySearch(`${courseSearchValue}`);

    coursesPage.checkCourseLevelFilter("Beginner");
    coursesPage.checkCourseLevelFilter("Intermediate");
    coursesPage.checkCourseLevelFilter("Advanced");

    coursesPage.checkCertificateFilter("Diploma");
    coursesPage.checkCertificateFilter("Certificate");
  });

  it("Course Details Page", () => {
    cy.visit("/");
    mainPage.searchCourse(`${courseSearchValue}`);

    coursesPage.openCourseMoreInfo(`${courseName}`);

    courseDetailsPage.checkTitle(`${courseName}`);
    courseDetailsPage.checkPublisher(`${publisherName}`);
    courseDetailsPage.checkRating();
  });

  it("Start & Unenroll Course", () => {
    userPage.logIn();
    mainPage.searchCourse(`${courseSearchValue}`);

    coursesPage.openCourseMoreInfo(`${courseName}`);

    courseDetailsPage.checkTitle(`${courseName}`);
    courseDetailsPage.checkPublisher(`${publisherName}`);

    courseDetailsPage.startLearning();

    userPage.checkCourseTitleLearning(`${courseName}`);
    userPage.checkCourseTitleDashboard(`${courseName}`);

    userPage.unenrollCourse();
  });

  it("Course Page Visual testing", () => {
    userPage.logIn();
    mainPage.searchCourse(`${courseSearchValue}`);

    coursesPage.openCourseMoreInfo(`${courseName}`);

    courseDetailsPage.checkTitle(`${courseName}`);
    courseDetailsPage.checkPublisher(`${publisherName}`);

    courseDetailsPage.startLearning();

    userPage.checkCourseTitleLearning(`${courseName}`);

    userPage.waitModulesLoad();
    cy.compareSnapshot("LearningPage");

    userPage.checkCourseTitleDashboard(`${courseName}`);

    userPage.unenrollCourse();
  });
});
