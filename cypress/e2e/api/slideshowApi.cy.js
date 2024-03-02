describe("Slideshow Api", () => {
  beforeEach(() => {
    cy.log("Test starts");
  });

  it("Slides Item Control", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/json",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      cy.log("Response Body : " + JSON.stringify(response.body));
      cy.log("Response status : " + response.status);

      expect(response.status).to.equal(200);
      expect(response.body.slideshow).to.exist;
      expect(response.body.slideshow.slides).to.exist;
      expect(response.body.slideshow.slides[1].items).to.not.be.empty;
    });
  });
});
