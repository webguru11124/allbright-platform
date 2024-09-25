export enum LocalImageType {
  FILE_SET = "FILE_SET", // An image has been added locally and we should persist
  FILE_UNSET = "FILE_UNSET", // An image has specifically been unset, and we should remove the link in the DB
  FILE_NOT_SET = "FILE_NOT_SET", // Nothing has been set or unset therefore keep things as is
}
