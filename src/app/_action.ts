'use server';

import { forbidden, notFound, unauthorized } from "next/navigation";

export const handleNotFound = async () => {
  notFound();
}

export const handleUnautorized = async () => {
  unauthorized();
}

export const handleForbidden = async () => {
  forbidden();
}
