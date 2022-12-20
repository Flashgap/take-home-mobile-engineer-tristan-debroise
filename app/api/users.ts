import { User } from "../models";
import {
  randomBio,
  randomBoolean,
  randomId,
  randomInteger,
  randomName,
  randomPictures,
} from "../utils";

const MATCH_PROBABILITY = 0.2; // 20% probability of getting true

type BaseResult = {
  error?: string;
};

type LoadUsersResult = {
  users: User[];
} & BaseResult;

type DislikeUserResult = {
  userId: string;
} & BaseResult;

type LikeUserResult = {
  userId: string;
  matched: boolean;
} & BaseResult;

export async function loadUsers(): Promise<LoadUsersResult> {
  return {
    users: await mockLoadUsers(10),
  };
}

export async function dislikeUser(userId: string): Promise<DislikeUserResult> {
  return {
    userId,
  };
}

export async function likeUser(userId: string): Promise<LikeUserResult> {
  return {
    userId,
    matched: randomBoolean(MATCH_PROBABILITY),
  };
}

async function mockLoadUsers(quantity: number): Promise<User[]> {
  const users: User[] = [];

  for (let i = 0; i < quantity; i++) {
    users.push({
      id: randomId(),
      name: randomName(),
      age: randomInteger(20, 45),
      bio: await randomBio(),
      distance: randomInteger(1, 15),
      pictures: randomPictures(),
    });
  }

  return users;
}
