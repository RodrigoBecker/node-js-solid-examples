import { FastifyInstance } from "fastify";
import { register } from "./controllers/register.constroller";

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
}
