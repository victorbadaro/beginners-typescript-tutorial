import { expect, it } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
const makeUser = (): User => {
  return {
    id: 1,
    firstName: 'Victor',
    lastName: 'Badaró',
    role: 'super-admin',
    posts: [
      { id: 1, title: 'Como iniciar uma aplicação Node.js' },
      { id: 2, title: 'O que é um Type Alias?' },
      { id: 3, title: 'Como melhorar aplicações React com o AbortController?' },
      { id: 4, title: 'Temas para VS Code - 2024' }
    ]
  };
};

it("Should return a valid user", () => {
  const user = makeUser();

  expect(user.id).toBeTypeOf("number");
  expect(user.firstName).toBeTypeOf("string");
  expect(user.lastName).toBeTypeOf("string");
  expect(user.role).to.be.oneOf(["super-admin", "admin", "user"]);

  expect(user.posts[0].id).toBeTypeOf("number");
  expect(user.posts[0].title).toBeTypeOf("string");
});
