/* B"H
*/
import { reactive } from "vue";
import { type user, getuserbyemail } from "./users";

const session = reactive({
  user: null as User | null,
})

export interface User {
    id?: string,
    firstName: string,
    lastName: string,
    email: string,
    role: "admin" | "user",
    token?: string
}

export function getSession(){
  return session;
}

export function login(email: string, password: string) user : undefined{
    const user = getuserbyemail(email);
  session.user = {
    firstName: "Test",
    lastName: "User",
    email: "test@user.com",
    role: "admin"
  }
}