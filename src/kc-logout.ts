Cypress.Commands.add("kcLogout", () => {
  Cypress.log({ name: "Logout" });
  const authBaseUrl = Cypress.env("auth_base_url");
  const realm = Cypress.env("auth_realm");

  cy.get<KcTokens>("@tokens").then((tokens) =>
    cy.request({
      url: `${authBaseUrl}/realms/${realm}/protocol/openid-connect/logout`,
      qs: {
        id_token_hint: tokens.id_token
      }
    })
  );
});
