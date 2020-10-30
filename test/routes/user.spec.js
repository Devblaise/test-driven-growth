const { expect } = require("chai");
const supertest = require("supertest");
const logger = require("../../src/config/logger");

let TEST_URL = "https://gorest.co.in/public-api";
const request = supertest(TEST_URL);

describe("User test suite", () => {
  it("should POST /users", (done) => {
    const data = {
      email: `test-${Math.floor(Math.random() * 9999)}@mail.ca`,
      name: "Test name",
      gender: "Male",
      status: "Inactive",
    };

    request
      .post("users")
      .send(data)
      .end((err, res) => {
        expect(res.body.data).to.deep.include(data);
        done(err);
      });
  });

  it("should GET /users", (done) => {
    request.get("/users").end((err, res) => {
      expect(res.body.data).to.not.be.empty;
      done();
    });
  });

  it("should GET /users/:id", (done) => {
    request.get("/users/1").end((err, res) => {
      expect(res.body.data.id).to.be.eq(1);
      done(err);
    });
  });

  it("should GET /users with query params", (done) => {
    TEST_URL = "users&page=5&gender=Female&status=Active";

    request.get(TEST_URL).end((err, res) => {
      expect(res.body.data).to.not.be.empty;
      res.body.data.forEach((data) => {
        expect(data.gender).to.eq("Female");
        expect(data.status).to.eq("Active");
      });
      done(err);
    });
  });

  //updated get for TDD
  it("should GET /users with query params", (done) => {
    TEST_URL = "users&page=5&gender=Female&status=Active";
  });

  it("should GET /users with query params", (done) => {
    TEST_URL = "users&page=5&gender=Female&status=Active";
    request.get(TEST_URL).end((err, res) => {
      expect(res.body.data).to.not.be.empty;
      res.body.data.forEach((data) => {
        expect(data.gender).to.eq("Female");
        expect(data.status).to.eq("Active");
      });
      done(err);
    });
  });

  it("should PUT /users/:id", () => {
    // data to update
    const data = {
      status: "Active",
      name: `Luffy - ${Math.floor(Math.random() * 9999)}`,
    };

    return request
      .put("users/132")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send(data)
      .then((res) => {
        expect(res.body.data).to.deep.include(data);
      });
  });

  // code added  post to update data
  it("should POST/users/:id", () => {
    // data to update
    const data = {
      status: "Active",
      name: `Luffy - ${Math.floor(Math.floor() * 9999)}`,
    };

    return request
      .put("users/132")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send(data)
      .then((res) => {
        expect(res.body.data).to.deep.include(data);
      });
  });

  // code added  post to update data
  it("should PUT/users/:id", () => {
    // data to update
    const data = {
      status: "Active",
      name: `Luffy - ${Math.floor(Math.floor() * 9999)}`,
    };

    return request
      .put("users/132")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send(data)
      .then((res) => {
        expect(res.body.data).to.deep.include(data);
      });
  });

  // code added  post to update data
  it("should POST/users/:id", () => {
    // data to update
    const data = {
      status: "Active",
      name: `Luffy - ${Math.floor(Math.floor() * 9999)}`,
    };

    return request
      .put("users/132")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send(data)
      .then((res) => {
        expect(res.body.data).to.deep.include(data);
      });
  });

  it("should DELETE /users/:id", () =>
    request
      .delete("users/2")
      .set("Authorization", `Bearer ${TOKEN}`)
      .then((res) => {
        expect(res.body.data).to.be.eq(null);
      }));
});
