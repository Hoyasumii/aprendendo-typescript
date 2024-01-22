import { Account } from "./types";

declare type BetterAccount = Omit<Account, "password" | "birthDate">;
declare type AccountName = Pick<Account, "name">;

const account: BetterAccount = {
  name: "John Doe",
  email: "account@email.com",
};

console.log(account);


const accountName: AccountName = {
  name: "John Doe",
};

console.log(accountName);

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

type Lang = "en" | "ja" | "pt";
 
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;

const locale: LocaleMessageIDs = 'pt_footer_title_id';