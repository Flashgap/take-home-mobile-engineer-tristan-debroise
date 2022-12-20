/**
 * A representation of a User.
 */
export interface User {
  /** The id of the user */
  id: string;
  /** The name of the user */
  name: string;
  /** The age of the user */
  age: number;
  /** The distance in kilometers from the user */
  distance: number;
  /** A list of the user's pictures URLs */
  pictures: string[];
  /** A small biography about the user */
  bio: string;
}
