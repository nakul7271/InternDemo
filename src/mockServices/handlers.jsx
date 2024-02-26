import { rest } from "msw";

export const handlers = [
  rest.get("https://my-first-project-react-h-a50f4-default-rtdb.firebaseio.com/mydb.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: "shirt" },
        { name: "trouser" },
        { name: "jeans" },
        { name: "blazer" },
      ])
    );
  }),
];
