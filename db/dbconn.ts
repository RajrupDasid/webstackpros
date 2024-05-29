import * as sdk from "https://deno.land/x/appwrite@10.0.0/mod.ts";
import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

const env = await load();

const appwrite_secret = env["APPWRITE_SECRET"];
const appwrite_project_id = env["APPWRITE_PROJECT_ID"];
const appwrite_io = env["APPWRITE_IO"];
export const appwrite_db_id = env["APPWRITE_DB_ID"];
export const user_collection = env["USER_COL_ID"];
export const post_collection = env["POSTS_COL_ID"];
export const contact_collection = env["665753b8002b71d29b83"];

const client = new sdk.Client();

export const database = new sdk.Databases(client);

client
  .setEndpoint(appwrite_io)
  .setProject(appwrite_project_id)
  .setKey(appwrite_secret);
