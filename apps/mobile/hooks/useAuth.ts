import { ReadUserMeOutputDto } from "@/api/requests";
import { createContext, useContext } from "react";

export const AuthContext = createContext<ReadUserMeOutputDto>({
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  active: false,
  address: "",
  addressLatitude: 0,
  addressLongitude: 0,
  createdAt: "",
  searchApiKey: "",
  searchApiUrl: "",
  outageInboundEmailAddress: "",
  features: [],
});

export const useAuth = () => useContext(AuthContext);
