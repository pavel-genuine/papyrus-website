import { type SchemaTypeDefinition } from "sanity";
import { serviceData, portfolioItem } from "./serviceData";
// ধরে নিচ্ছি schemaTypes ফোল্ডারের ভেতরেই আপনি 'serviceData.ts' ফাইলটি তৈরি করেছেন

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    serviceData, // আপনার মেইন ৩-লেয়ারের সার্ভিস ডাটা
    portfolioItem, // পোর্টফোলিও আইটেমের অবজেক্ট (ছবি/ভিডিওর জন্য)
  ],
};
