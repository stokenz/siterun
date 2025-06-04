import { createContext, useContext } from "react";
import { UserMeOutputDto } from "~/api/requests";

/**
 * Check if the user is authenticated by checking for the `auth=1` cookie.
 * This cookie is set by the server when the user logs in.
 */
export function isAuthenticated() {
  return document.cookie.includes("auth=1");
}

export const AuthContext = createContext<UserMeOutputDto>({
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  active: false,
  address: "",
  addressLat: 0,
  addressLng: 0,
  createdAt: "",
  outageInboundEmailAddress: "",
  features: [],
});

export const useAuth = () => useContext(AuthContext);
