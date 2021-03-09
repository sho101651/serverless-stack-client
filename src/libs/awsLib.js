import { Storage } from "aws-amplify";
import { AWS } from "aws-sdk";
import config from "../config";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}

export async function s3Delete(filekey){

	const removed = await Storage.vault.remove(filekey);

	return removed.key;
}

