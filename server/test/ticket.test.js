const { StatusCodes } = require("http-status-codes");
const supertest = require("supertest");
const app = require("../app");

const request = supertest(app);

describe("/tickets - Get All tickets suite", () => {
  const prefixURL = "/api/v1/tickets";

  it("[HAPPY PATH] GET /tickets: Should return all tickets", async () => {
    expect.hasAssertions();

    const response = await request.get(prefixURL);

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.count).toBe(100);
    expect(response.body.tickets).toHaveLength(25);

    // Default to be page 1
    expect(response.body.tickets[0].id).toBe(2);
    expect(response.body.tickets[0].url).toBe(
      "https://lusanney.zendesk.com/api/v2/tickets/2.json"
    );
    expect(response.body.next_page).toBe(
      "https://lusanney.zendesk.com/api/v2/tickets.json?page=2&per_page=25"
    );
    expect(response.body.previous_page).toBeNull();
  });

  it("[HAPPY PATH] GET /tickets?page=2: Should return all tickets at page 2", async () => {
    expect.hasAssertions();

    const params = "?page=2";

    const response = await request.get(prefixURL + params);

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.count).toBe(100);
    expect(response.body.tickets).toHaveLength(25);

    // Next page is page 3
    expect(response.body.next_page).toBe(
      "https://lusanney.zendesk.com/api/v2/tickets.json?page=3&per_page=25"
    );

    // Previous page is page 1
    expect(response.body.previous_page).toBe(
      "https://lusanney.zendesk.com/api/v2/tickets.json?page=1&per_page=25"
    );
  });

  it("[HAPPY PATH] GET /tickets?page=4: Should return all tickets at page 4", async () => {
    expect.hasAssertions();

    const params = "?page=4";

    const response = await request.get(prefixURL + params);

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.count).toBe(100);
    expect(response.body.tickets).toHaveLength(25);
    expect(response.body.next_page).toBeNull();
    expect(response.body.previous_page).toBe(
      "https://lusanney.zendesk.com/api/v2/tickets.json?page=3&per_page=25"
    );
  });

  it("[Edge] GET /tickets?page=5: Should return empty", async () => {
    expect.hasAssertions();

    const params = "?page=5";

    const response = await request.get(prefixURL + params);

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.count).toBe(100);
    expect(response.body.tickets).toHaveLength(0);
    expect(response.body.next_page).toBeNull();
    expect(response.body.previous_page).toBe(
      "https://lusanney.zendesk.com/api/v2/tickets.json?page=4&per_page=25"
    );
  });

  it("[Edge] GET /tickets?page=8: Should return empty", async () => {
    expect.hasAssertions();

    const params = "?page=8";

    const response = await request.get(prefixURL + params);

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.count).toBe(100);
    expect(response.body.tickets).toHaveLength(0);
    expect(response.body.next_page).toBeNull();
    expect(response.body.previous_page).toBe(
      "https://lusanney.zendesk.com/api/v2/tickets.json?page=7&per_page=25"
    );
  });

  it("[Edge] GET /tickets?page=8: Should return empty", async () => {
    expect.hasAssertions();

    const params = "?page=8";

    const response = await request.get(prefixURL + params);

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.count).toBe(100);
    expect(response.body.tickets).toHaveLength(0);
    expect(response.body.next_page).toBeNull();
    expect(response.body.previous_page).toBe(
      "https://lusanney.zendesk.com/api/v2/tickets.json?page=7&per_page=25"
    );
  });

  it("[Error] GET /tickets?page=-4: Should return error", async () => {
    expect.hasAssertions();

    const params = "?page=-4";

    const response = await request.get(prefixURL + params);

    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.message).toBe("Fields must be integer from 1 onward");
  });

  it("[Error] GET /tickets?page=3.2: Should return error", async () => {
    expect.hasAssertions();

    const params = "?page=3.2";

    const response = await request.get(prefixURL + params);

    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.message).toBe("Fields must be integer from 1 onward");
  });

  it("[HAPPY PATH] GET /tickets?perPage=10&page=10: Should return all tickets at page 10 / per page 10", async () => {
    expect.hasAssertions();

    const params = "?perPage=10&page=10";

    const response = await request.get(prefixURL + params);

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.count).toBe(100);
    expect(response.body.tickets).toHaveLength(10);

    // Next page is null
    expect(response.body.next_page).toBeNull();

    // Previous page is page 9
    expect(response.body.previous_page).toBe(
      "https://lusanney.zendesk.com/api/v2/tickets.json?page=9&per_page=10"
    );
  });

  it("[Error] GET /tickets?perPage=0&page=10: Should return error", async () => {
    expect.hasAssertions();

    const params = "?perPage=0&page=10";
    const response = await request.get(prefixURL + params);

    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.message).toBe("Fields must be integer from 1 onward");
  });

  it("[Error] GET /tickets?perPage=3.5&page=10: Should return error", async () => {
    expect.hasAssertions();

    const params = "?perPage=3.5&page=10";
    const response = await request.get(prefixURL + params);

    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.message).toBe("Fields must be integer from 1 onward");
  });
});

describe("/tickets/:id - Get Ticket By ID suite", () => {
  const prefixURL = "/api/v1/tickets";

  it("[HAPPY PATH] GET /tickets/:id : Should return correct ticket", async () => {
    expect.hasAssertions();

    const ticketId = "/3";
    const response = await request.get(prefixURL + ticketId);

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.ticket).not.toBeNull();
    expect(response.body.ticket.id).toBe(3);
    expect(response.body.ticket.subject).toBe(
      "excepteur laborum ex occaecat Lorem"
    );
  });

  it("[HAPPY PATH] GET /tickets/:id : Should return correct ticket", async () => {
    expect.hasAssertions();

    const ticketId = "/44";
    const response = await request.get(prefixURL + ticketId);

    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.ticket).not.toBeNull();
    expect(response.body.ticket.id).toBe(44);
    expect(response.body.ticket.subject).toBe("velit in sit deserunt id");
  });

  it("[Error] GET /tickets/:id : Should return NOT FOUND", async () => {
    expect.hasAssertions();

    const ticketId = "/5000";
    const response = await request.get(prefixURL + ticketId);

    expect(response.status).toBe(StatusCodes.NOT_FOUND);
    expect(response.body.ticket).toBeUndefined();
    expect(response.body.message).toBe("Not found");
  });

  it("[Error] GET /tickets/:id : Should return error", async () => {
    expect.hasAssertions();

    const ticketId = "/0";
    const response = await request.get(prefixURL + ticketId);

    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.ticket).toBeUndefined();
    expect(response.body.message).toBe("Fields must be integer from 1 onward");
  });

  it("[Error] GET /tickets/:id : Should return error", async () => {
    expect.hasAssertions();

    const ticketId = "/-5";
    const response = await request.get(prefixURL + ticketId);

    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.ticket).toBeUndefined();
    expect(response.body.message).toBe("Fields must be integer from 1 onward");
  });
});
