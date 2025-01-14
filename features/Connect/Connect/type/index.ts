export type ConnectionField = {
  state: "PENDING" | "ACCEPTED" | "REJECTED" | "REMOVED" | "CANCELLED" | "IGNORED";
  isMyRequest: boolean;
};
